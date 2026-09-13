/**
 * Seed script — safe, fake demo/dev data only. Never real personal data.
 *
 * Run with: npm run seed
 *
 * Idempotency: seeding is guarded with upsert on unique fields (user email)
 * so re-running it does not create duplicate users. Assessments/predictions/
 * etc. are historical by nature, so re-running does add a fresh batch of
 * them on top of any that already exist — that mirrors real usage (a user
 * submitting more assessments over time) rather than being destructive.
 */

import { PrismaClient, RiskLevel, AlertSeverity } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding S.I.H. database...');

  // ---------------------------------------------------------------------
  // Users
  // ---------------------------------------------------------------------
  const admin = await prisma.user.upsert({
    where: { email: 'admin@sih-demo.local' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@sih-demo.local',
      // NOTE: this is a fake placeholder hash for seed purposes only.
      // Real password hashing happens in the backend, never here.
      passwordHash: 'seed$fakehash$admin',
      role: 'ADMIN',
    },
  });

  const userA = await prisma.user.upsert({
    where: { email: 'officer.sharma@sih-demo.local' },
    update: {},
    create: {
      name: 'Officer Sharma',
      email: 'officer.sharma@sih-demo.local',
      passwordHash: 'seed$fakehash$usera',
      role: 'USER',
    },
  });

  const userB = await prisma.user.upsert({
    where: { email: 'officer.rao@sih-demo.local' },
    update: {},
    create: {
      name: 'Officer Rao',
      email: 'officer.rao@sih-demo.local',
      passwordHash: 'seed$fakehash$userb',
      role: 'USER',
    },
  });

  const userC = await prisma.user.upsert({
    where: { email: 'officer.iyer@sih-demo.local' },
    update: {},
    create: {
      name: 'Officer Iyer',
      email: 'officer.iyer@sih-demo.local',
      passwordHash: 'seed$fakehash$userc',
      role: 'USER',
    },
  });

  // ---------------------------------------------------------------------
  // Assessments + Predictions (historical chain — several per user)
  // ---------------------------------------------------------------------
  const assessment1 = await prisma.assessment.create({
    data: {
      userId: userA.id,
      status: 'COMPLETED',
      inputData: {
        projectCode: 'NH-44-EXT-07',
        pendingLandPercent: 22,
        legalCasesOpen: 1,
        compensationDelayDays: 40,
      },
    },
  });

  await prisma.prediction.create({
    data: {
      assessmentId: assessment1.id,
      prediction: 'DELAY_LIKELY',
      probability: 0.81,
      riskLevel: RiskLevel.HIGH,
      modelName: 'delay-risk-rf',
      modelVersion: 'v1.0',
      metadata: { majorRisk: 'Land acquisition delay' },
    },
  });

  const assessment1v2 = await prisma.assessment.create({
    data: {
      userId: userA.id,
      status: 'COMPLETED',
      inputData: {
        projectCode: 'NH-44-EXT-07',
        pendingLandPercent: 10,
        legalCasesOpen: 0,
        compensationDelayDays: 12,
      },
    },
  });

  const prediction1v11 = await prisma.prediction.create({
    data: {
      assessmentId: assessment1v2.id,
      prediction: 'DELAY_UNLIKELY',
      probability: 0.32,
      riskLevel: RiskLevel.LOW,
      modelName: 'delay-risk-rf',
      modelVersion: 'v1.1',
      metadata: { majorRisk: null },
    },
  });

  const assessment2 = await prisma.assessment.create({
    data: {
      userId: userB.id,
      status: 'COMPLETED',
      inputData: {
        projectCode: 'RLY-CORR-19',
        pendingLandPercent: 55,
        legalCasesOpen: 3,
        compensationDelayDays: 90,
      },
    },
  });

  const prediction2 = await prisma.prediction.create({
    data: {
      assessmentId: assessment2.id,
      prediction: 'DELAY_LIKELY',
      probability: 0.93,
      riskLevel: RiskLevel.CRITICAL,
      modelName: 'delay-risk-rf',
      modelVersion: 'v1.1',
      metadata: { majorRisk: 'Multiple unresolved legal cases' },
    },
  });

  const assessment3 = await prisma.assessment.create({
    data: {
      userId: userC.id,
      status: 'PROCESSING',
      inputData: {
        projectCode: 'IND-CORR-03',
        pendingLandPercent: 35,
        legalCasesOpen: 0,
        compensationDelayDays: 20,
      },
    },
  });

  // ---------------------------------------------------------------------
  // Reports
  // ---------------------------------------------------------------------
  await prisma.report.create({
    data: {
      userId: userA.id,
      predictionId: prediction1v11.id,
      status: 'COMPLETED',
      reportData: { summary: 'Low delay risk, project on track.' },
      fileReference: 's3://sih-reports-demo/nh-44-ext-07-v1.1.pdf',
    },
  });

  await prisma.report.create({
    data: {
      userId: userB.id,
      predictionId: prediction2.id,
      status: 'GENERATING',
    },
  });

  // ---------------------------------------------------------------------
  // Alerts + Notifications
  // ---------------------------------------------------------------------
  const alertCritical = await prisma.alert.create({
    data: {
      userId: userB.id,
      predictionId: prediction2.id,
      type: 'PROJECT_DELAY_RISK',
      severity: AlertSeverity.CRITICAL,
      title: 'Critical delay risk: RLY-CORR-19',
      message: 'Model flags a 93% delay probability driven by open legal cases.',
    },
  });

  await prisma.notification.create({
    data: {
      userId: userB.id,
      alertId: alertCritical.id,
      channel: 'IN_APP',
      status: 'SENT',
      sentAt: new Date(),
    },
  });

  const alertOperational = await prisma.alert.create({
    data: {
      userId: userC.id,
      // No predictionId — this is an operational alert, not model-driven.
      type: 'VERIFICATION_PENDING',
      severity: AlertSeverity.MEDIUM,
      title: 'Documents pending verification: IND-CORR-03',
      message: '4 land records are awaiting officer verification.',
    },
  });

  await prisma.notification.create({
    data: {
      userId: userC.id,
      alertId: alertOperational.id,
      channel: 'IN_APP',
      status: 'PENDING',
    },
  });

  // ---------------------------------------------------------------------
  // Audit logs
  // ---------------------------------------------------------------------
  await prisma.auditLog.create({
    data: {
      actorUserId: admin.id,
      action: 'USER_CREATED',
      entityType: 'User',
      entityId: userA.id,
      metadata: { note: 'Seed data — demo account' },
    },
  });

  await prisma.auditLog.create({
    data: {
      actorUserId: admin.id,
      action: 'MODEL_UPDATED',
      entityType: 'MLModel',
      metadata: { modelName: 'delay-risk-rf', fromVersion: 'v1.0', toVersion: 'v1.1' },
    },
  });

  console.log('Seed complete.');
  console.log({
    users: [admin.email, userA.email, userB.email, userC.email],
    assessments: [assessment1.id, assessment1v2.id, assessment2.id, assessment3.id],
  });
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
