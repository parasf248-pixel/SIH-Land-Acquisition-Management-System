/**
 * Database verification script — NOT a full test framework, just a
 * self-contained script that exercises the schema's integrity rules and
 * prints PASS/FAIL for each check. Intended to be run against a disposable
 * dev database (never production).
 *
 * Run with: npm run verify
 *
 * What it checks (see database/docs/architecture.md §"Verified behaviors"
 * for the full rationale of each):
 *  1. User creation + unique email enforcement
 *  2. Role validation (invalid enum value rejected)
 *  3. Assessment -> User relationship + rejection of an invalid user_id
 *  4. Historical assessments are never overwritten (2 assessments, 1 user)
 *  5. Prediction -> Assessment relationship + model version is preserved
 *     across multiple predictions on the same assessment (history)
 *  6. Report -> Prediction relationship
 *  7. Alert -> User/Prediction relationship + severity validation
 *  8. Notification -> Alert/User relationship
 *  9. Audit log -> actor relationship, and survival after actor deletion
 * 10. Referential integrity: deleting a User that still has Assessments
 *     is rejected (Restrict), proving history can't be silently orphaned
 */

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

let passed = 0;
let failed = 0;

async function check(label: string, fn: () => Promise<boolean>) {
  try {
    const ok = await fn();
    if (ok) {
      passed++;
      console.log(`PASS - ${label}`);
    } else {
      failed++;
      console.log(`FAIL - ${label}`);
    }
  } catch (err) {
    failed++;
    console.log(`FAIL - ${label} (unexpected error: ${(err as Error).message})`);
  }
}

async function expectRejection(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    failed++;
    console.log(`FAIL - ${label} (expected rejection, but it succeeded)`);
  } catch {
    passed++;
    console.log(`PASS - ${label} (correctly rejected)`);
  }
}

async function main() {
  const stamp = Date.now();
  const email = `verify-user-${stamp}@sih-demo.local`;
  const dupEmail = `verify-dup-${stamp}@sih-demo.local`;

  // 1. User creation
  const user = await prisma.user.create({
    data: { name: 'Verify User', email, passwordHash: 'x' },
  });
  await check('User creation succeeds', async () => !!user.id);

  // Unique email
  await prisma.user.create({ data: { name: 'Dup Base', email: dupEmail, passwordHash: 'x' } });
  await expectRejection('Duplicate email is rejected', () =>
    prisma.user.create({ data: { name: 'Dup', email: dupEmail, passwordHash: 'x' } })
  );

  // 2. Invalid role (enum) — Prisma types prevent this at compile time,
  // so this checks the same thing via raw SQL to prove the DB itself
  // enforces it, not just the generated client types.
  await expectRejection('Invalid role value is rejected at the DB level', () =>
    prisma.$executeRaw(Prisma.sql`
      INSERT INTO users (name, email, password_hash, role, updated_at)
      VALUES ('Bad Role', ${`bad-role-${stamp}@sih-demo.local`}, 'x', 'SUPERUSER', now())
    `)
  );

  // 3 + 4. Assessment relationship + history (2 assessments, same user)
  const assessment1 = await prisma.assessment.create({
    data: { userId: user.id, inputData: { a: 1 }, status: 'SUBMITTED' },
  });
  const assessment2 = await prisma.assessment.create({
    data: { userId: user.id, inputData: { a: 2 }, status: 'SUBMITTED' },
  });
  await check('Assessment links to its user', async () => {
    const found = await prisma.assessment.findUnique({ where: { id: assessment1.id } });
    return found?.userId === user.id;
  });
  await check('Multiple assessments for one user are preserved (not overwritten)', async () => {
    const count = await prisma.assessment.count({ where: { userId: user.id } });
    return count === 2 && assessment1.id !== assessment2.id;
  });
  await expectRejection('Assessment with a non-existent user_id is rejected', () =>
    prisma.assessment.create({
      data: { userId: '00000000-0000-0000-0000-000000000000', inputData: {} },
    })
  );

  // 5. Predictions: relationship + model version history
  const predV1 = await prisma.prediction.create({
    data: {
      assessmentId: assessment1.id,
      prediction: 'RESULT_A',
      probability: 0.5,
      modelName: 'demo-model',
      modelVersion: 'v1.0',
    },
  });
  const predV2 = await prisma.prediction.create({
    data: {
      assessmentId: assessment1.id,
      prediction: 'RESULT_B',
      probability: 0.7,
      modelName: 'demo-model',
      modelVersion: 'v2.0',
    },
  });
  await check('Prediction links to its assessment', async () => {
    const found = await prisma.prediction.findUnique({ where: { id: predV1.id } });
    return found?.assessmentId === assessment1.id;
  });
  await check('Predictions from different model versions are both preserved', async () => {
    const count = await prisma.prediction.count({ where: { assessmentId: assessment1.id } });
    const versions = await prisma.prediction.findMany({
      where: { assessmentId: assessment1.id },
      select: { modelVersion: true },
    });
    return count === 2 && versions.some((v) => v.modelVersion === 'v1.0') && versions.some((v) => v.modelVersion === 'v2.0');
  });
  await expectRejection('Prediction probability outside [0,1] is rejected', () =>
    prisma.prediction.create({
      data: {
        assessmentId: assessment1.id,
        prediction: 'BAD',
        probability: 1.9,
        modelName: 'demo-model',
        modelVersion: 'v1.0',
      },
    })
  );

  // 6. Report -> Prediction
  const report = await prisma.report.create({
    data: { userId: user.id, predictionId: predV1.id, status: 'COMPLETED' },
  });
  await check('Report links to its prediction', async () => {
    const found = await prisma.report.findUnique({ where: { id: report.id } });
    return found?.predictionId === predV1.id;
  });
  await expectRejection('Report with a non-existent prediction_id is rejected', () =>
    prisma.report.create({
      data: { userId: user.id, predictionId: '00000000-0000-0000-0000-000000000000' },
    })
  );

  // 7. Alert -> User/Prediction + severity
  const alert = await prisma.alert.create({
    data: {
      userId: user.id,
      predictionId: predV2.id,
      type: 'DEMO_ALERT',
      severity: 'HIGH',
      title: 'Verify alert',
      message: 'Generated by verify-db.ts',
    },
  });
  await check('Alert links to its user and prediction', async () => {
    const found = await prisma.alert.findUnique({ where: { id: alert.id } });
    return found?.userId === user.id && found?.predictionId === predV2.id;
  });
  await expectRejection('Invalid alert severity value is rejected at the DB level', () =>
    prisma.$executeRaw(Prisma.sql`
      INSERT INTO alerts (user_id, type, severity, title, message)
      VALUES (${user.id}::uuid, 'DEMO', 'URGENT', 'x', 'x')
    `)
  );

  // 8. Notification -> Alert/User
  const notification = await prisma.notification.create({
    data: { userId: user.id, alertId: alert.id, channel: 'IN_APP', status: 'SENT' },
  });
  await check('Notification links to its alert and user', async () => {
    const found = await prisma.notification.findUnique({ where: { id: notification.id } });
    return found?.alertId === alert.id && found?.userId === user.id;
  });

  // 9. Audit log -> actor, survives actor deletion
  const actor = await prisma.user.create({
    data: { name: 'Audit Actor', email: `verify-actor-${stamp}@sih-demo.local`, passwordHash: 'x' },
  });
  const auditLog = await prisma.auditLog.create({
    data: { actorUserId: actor.id, action: 'USER_UPDATED', entityType: 'User', entityId: actor.id },
  });
  await check('Audit log links to its actor', async () => {
    const found = await prisma.auditLog.findUnique({ where: { id: auditLog.id } });
    return found?.actorUserId === actor.id;
  });
  await prisma.user.delete({ where: { id: actor.id } });
  await check('Audit log survives actor deletion (actor_user_id set to null)', async () => {
    const found = await prisma.auditLog.findUnique({ where: { id: auditLog.id } });
    return found !== null && found.actorUserId === null;
  });

  // 10. Referential integrity: can't delete a user with assessments
  await expectRejection('Deleting a user with existing assessments is rejected (history preserved)', () =>
    prisma.user.delete({ where: { id: user.id } })
  );

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
}

main()
  .catch((e) => {
    console.error('Verification script crashed:', e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
