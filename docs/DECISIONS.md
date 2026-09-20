# Architecture Decisions

## ADR-001: Use Supabase as Primary Backend

Date: 2026-09-20

Status: Accepted

Decision:

Use Supabase as the primary backend for Glowing Skin.

Context:

The project requires secure user accounts, relational records, role-aware access, efficient queries, and low-cost operations. Supabase provides PostgreSQL, authentication, storage, and Row Level Security in one platform.

Rejected alternative:

Firebase was considered for real-time NoSQL syncing and integrated backend services. It is not the default choice because the expected data model benefits more from relational integrity, SQL querying, and database-level access policies.

Consequences:

- All application tables must enable Row Level Security.
- Schema changes must be handled through migrations.
- Query design must prioritize indexes, pagination, and minimal selected columns.
- Realtime features may still use Supabase Realtime if the product later requires them.

## ADR-002: Use Vercel for PWA Hosting and CI/CD

Date: 2026-09-20

Status: Accepted

Decision:

Use Vercel for deployment of the Glowing Skin PWA.

Context:

The project needs low-maintenance hosting, automated preview deployments, edge caching, and minimal infrastructure cost.

Consequences:

- Pull requests must produce Vercel preview deployments.
- Production deployments must come from approved merges.
- Serverless functions should be added only when required and monitored for usage.
