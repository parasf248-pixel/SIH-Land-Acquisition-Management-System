# S.I.H. 2026 — Database Layer

PostgreSQL + Prisma database layer for the S.I.H. project. **This is the
database only** — no APIs, no auth logic, no ML inference, no frontend.
See `docs/architecture.md` for the full design rationale and
`docs/data-dictionary.md` for the complete field-by-field reference.

## 1. Requirements

- Node.js 18+
- PostgreSQL 14+ (16 was used to build and verify this layer)
- npm

## 2. PostgreSQL setup

Create a local (or dev-server) database:

```bash
psql -U postgres -c "CREATE DATABASE sih_db_dev;"
```

## 3. Environment configuration

```bash
cp .env.example .env
# then edit .env with your real DATABASE_URL
```

`.env` is git-ignored. Never commit real credentials — only
`.env.example` (placeholder values) is tracked.

## 4. Installation

```bash
npm install
```

## 5. Migration

The initial migration (`prisma/migrations/20260913202403_init/`) creates
every table, enum, constraint, and index. It was hand-verified against a
live PostgreSQL 16 instance while building this layer (see
`docs/architecture.md` → "Verified behaviors").

Apply it:

```bash
npx prisma migrate deploy
```

(For iterating on the schema going forward, use `npm run prisma:migrate`
i.e. `prisma migrate dev`, which will generate new migrations from
changes to `prisma/schema.prisma`.)

Generate the Prisma Client:

```bash
npm run prisma:generate
```

> **Note on this environment:** the schema and migration in this
> repository were validated directly against PostgreSQL with raw SQL
> (see `docs/architecture.md`) because the sandbox used to build this
> had no network access to Prisma's binary CDN. `npm install` /
> `prisma generate` need normal internet access to download Prisma's
> query-engine binary — that's expected to work in your dev environment.

## 6. Seed

```bash
npm run seed
```

Creates 1 admin + 3 demo users, several historical assessments and
predictions (including two model versions on the same assessment to
demonstrate history isn't overwritten), reports, alerts (one
model-triggered, one operational), notifications, and audit logs. All
data is fake — see `prisma/seed.ts`.

## 7. Prisma Studio

```bash
npm run prisma:studio
```

Opens a local GUI for browsing/editing the database.

## 8. Database structure

7 tables: `users`, `assessments`, `predictions`, `reports`, `alerts`,
`notifications`, `audit_logs`. Full field list in
`docs/data-dictionary.md`. Summary:

- **users** — accounts (auth data only; no auth logic here).
- **assessments** — a user's ML submissions. Historical: never
  overwritten.
- **predictions** — ML results per assessment. Historical: a new
  model run is a new row, so model versions can be compared over time.
- **reports** — generated report metadata, linked to a prediction.
- **alerts** — actionable conditions, optionally linked to a prediction.
- **notifications** — delivery tracking for an alert (currently
  `IN_APP` only; extensible).
- **audit_logs** — append-only record of admin/system actions. Survives
  deletion of the acting user.

## 9. ER diagram

See `docs/er-diagram.md` (Mermaid).

## 10. Future backend integration

When the backend team integrates this database, use the generated
Prisma Client (`@prisma/client`) directly — models and relations below
are already defined and type-safe.

**Models & relations to use:**

```
User
 ├─< Assessment  (assessment.userId)
 │      └─< Prediction  (prediction.assessmentId)
 │             ├─< Report   (report.predictionId)
 │             └─< Alert    (alert.predictionId — nullable)
 ├─< Report        (report.userId)
 ├─< Alert         (alert.userId)
 ├─< Notification  (notification.userId)
 │      alert.id -> notification.alertId
 └─< AuditLog      (auditLog.actorUserId — nullable)
```

**Expected data flow for the backend to implement (not built here):**

1. Backend receives assessment input → `prisma.assessment.create(...)`
   with `status: 'SUBMITTED'`.
2. Backend calls the ML service, gets a result →
   `prisma.prediction.create(...)` linked to that assessment; update the
   assessment's `status` to `COMPLETED` (or `FAILED`).
3. If the prediction crosses a threshold → `prisma.alert.create(...)`
   linked to that prediction, then `prisma.notification.create(...)`
   linked to that alert to track delivery.
4. Report generation → `prisma.report.create(...)` linked to the
   prediction it summarizes; update `status` as generation progresses.
5. Any admin/system action of note →
   `prisma.auditLog.create(...)`.

**Constraints the backend must respect (the database already enforces
these, but the backend should handle the resulting errors gracefully):**

- `probability` must be in `[0, 1]` or omitted.
- Deleting a `User` fails if they still have `Assessment`, `Report`,
  `Alert`, or `Notification` rows (`Restrict`) — the backend should
  either block that action in the UI or implement an explicit
  reassignment/archival flow first.
- `email` is unique.

## Testing

`tests/verify-db.ts` runs a self-contained set of checks against a real
database connection (via Prisma Client): user creation, unique-email
enforcement, enum validation, every foreign-key relationship, the
`probability` range check, historical/append-only behavior for
assessments and predictions, and all three non-default delete behaviors
(`SetNull` on `Alert.prediction`, `Cascade` on `Notification.alert`,
`SetNull` on `AuditLog.actor`), plus confirmation that deleting a user
with existing history is rejected.

```bash
npm run verify
```

Run this against a disposable dev database — it creates and deletes
rows.

## Git readiness

**Safe to commit:** `prisma/schema.prisma`, `prisma/migrations/`,
`prisma/seed.ts`, `tests/`, `docs/`, `package.json`, `tsconfig.json`,
`.env.example`, `.gitignore`, this README.

**Never commit:** `.env`, real `DATABASE_URL` values, any database
dump/backup file, `node_modules/`. All of these are covered by
`.gitignore`.
