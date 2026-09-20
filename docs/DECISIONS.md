# Architecture Decisions

This file contains accepted decisions only. Unresolved choices belong in `OPEN_DECISIONS.md`.

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

## ADR-003: Use A PWA As The Initial Client

Date: 2026-09-20

Status: Accepted

Decision:

Build the first Glowing Skin client as an installable Progressive Web App. The exact frontend framework is still open.

Context:

The project needs one low maintenance codebase, responsive mobile use, Vercel deployment, offline app shell support, and low infrastructure cost.

Consequences:

- PWA capability and browser limitations must be tested before promising notification behavior.
- Mobile native features such as app store billing or unrestricted background scheduling cannot be assumed.
- Native applications may be considered later from validated product demand.

## ADR-004: Use Hybrid, Auditable Recommendation Logic

Date: 2026-09-20

Status: Accepted

Decision:

Keep hard safety, inventory, sequence, and budget rules in deterministic, versioned code and curated data. A future approved AI model may assist with bounded structured tasks, but its output must be validated before use.

Context:

The product handles sensitive skincare guidance, cost constraints, and user owned inventory. A model alone cannot reliably establish ingredient safety, clinical truth, local price, or availability.

Consequences:

- No business or safety rule may exist only in a prompt.
- Recommendation runs store provenance and versions.
- Provider selection remains an open decision.
- Provider secrets are kept behind a trusted server boundary.
