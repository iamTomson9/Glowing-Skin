# Glowing Skin CTO Framework

## CTO Acknowledgement

I am acting as Chief Technology Officer for Glowing Skin. My responsibility is to define the technical architecture, enforce development standards, coordinate role-specific delivery, control cost exposure, and keep the project lifecycle documented from planning through deployment.

## Architecture Decision

### Selected Database: Supabase

Supabase is the primary backend platform for Glowing Skin.

Technical justification:

- Relational data integrity: skincare products, users, routines, recommendations, orders, consultations, content, and audit events benefit from foreign keys, constraints, joins, and transactional writes.
- SQL flexibility: reporting, filtering, recommendation logic, admin dashboards, and usage analysis can be handled with optimized PostgreSQL queries instead of duplicating data across NoSQL collections.
- Built-in authentication: Supabase Auth supports secure user identity, role-aware access, and integration with Row Level Security.
- Row Level Security: every table can enforce access at the database layer, reducing risk from frontend mistakes or overly broad API access.
- Open-source posture: Supabase avoids vendor lock-in more effectively than Firebase and allows migration to self-hosted PostgreSQL if scale or cost demands it later.
- Cost control: PostgreSQL indexes, selective reads, server-side policies, and query planning make it easier to keep operations efficient inside free-tier limits.

Firebase is not selected for the initial architecture because its strengths are real-time document syncing and NoSQL flexibility. Those are useful for chat-heavy or rapidly synchronized document experiences, but Glowing Skin is expected to need structured relational records, auditable user data, and secure role-based access more than high-volume real-time sync.

### Frontend and Hosting

- Build as a Progressive Web App.
- Use Vercel for hosting, preview deployments, edge caching, and continuous deployment.
- Use serverless or edge functions only when a backend operation cannot safely be handled through Supabase client APIs and RLS.
- Avoid paid third-party API dependencies unless explicitly approved by the CTO and budget owner.

## Cost Policy

- Default to free-tier Supabase and Vercel resources.
- Minimize database reads through indexed queries, pagination, selective columns, and local/service-worker caching.
- Use static generation and edge caching where possible.
- Reject feature requests that require paid third-party APIs unless a written approval exception exists.
- Review Supabase and Vercel usage weekly.

## Development Roles

### CTO

Responsibilities:

- Own system architecture, data model, technical roadmap, production readiness, and code quality gates.
- Approve or reject pull requests before production merge.
- Monitor Vercel and Supabase usage logs weekly.
- Enforce role separation, secure defaults, and documentation discipline.

Rules:

- No direct pushes to `main` or `staging`.
- No paid dependency adoption without approval.
- Every completed change must include progress notes and verification status.

### Frontend Developer

Responsibilities:

- Build responsive, accessible PWA screens and components.
- Integrate safely with Supabase APIs.
- Optimize performance, offline support, and client-side caching.

Rules:

- Pull latest `staging` before creating a feature branch.
- Push only to feature branches.
- Implement service worker caching where it reduces repeat network calls safely.
- Open a pull request for review before merge.

### Backend and Database Engineer

Responsibilities:

- Design Supabase schema, migrations, authentication, storage, and RLS policies.
- Optimize database access patterns.
- Maintain backend contracts for frontend use.

Rules:

- RLS must be enabled on every application table.
- Queries must use indexes where needed and target execution under 50 ms for common paths.
- API payloads and migrations must be tested locally before staging.

### DevOps and QA Engineer

Responsibilities:

- Configure GitHub Actions, Vercel deployments, preview checks, and test gates.
- Verify build health, regression risk, and deployment safety.

Rules:

- Block any pull request with failing build, lint, type, or test checks.
- Confirm direct pushes to `main` and `staging` are blocked.
- Run preview environment checks before final sign-off.

## Git Workflow

Branches:

- `main`: production-ready code only.
- `staging`: pre-production integration branch.
- `feature/*`: active development branches.

Flow:

1. Pull latest `staging`.
2. Create a feature branch from `staging`.
3. Commit using the project commit standard.
4. Push the feature branch.
5. Open a pull request into `staging`.
6. Pass automated checks and preview verification.
7. Receive CTO/code-owner approval.
8. Merge to `staging`.
9. Promote `staging` to `main` only after release approval.

Direct pushes to `main` and `staging` are prohibited.

## Commit Standard

Use concise Conventional Commit messages:

- `feat: add routine builder`
- `fix: correct Supabase RLS policy`
- `docs: add CTO framework`
- `test: cover auth guard`
- `chore: configure Vercel project`
- `ci: add pull request checks`

## Task Matrix

| Module | Owner | Initial Deliverables | Acceptance Gate |
| --- | --- | --- | --- |
| Product scope | CTO + Product | Define MVP flows, roles, data entities, and release milestones | Approved scope document |
| PWA shell | Frontend Developer | App shell, routing, layout, install metadata, responsive navigation | Lighthouse PWA baseline passes |
| Auth | Backend Engineer + Frontend Developer | Supabase Auth, profile table, role-aware frontend guard | RLS-backed login/logout verified |
| Database schema | Backend Engineer | Migrations for users, profiles, products, routines, content, audit logs | RLS enabled and migrations tested |
| Offline caching | Frontend Developer | Service worker caching for static assets and safe read-only data | Offline app shell verified |
| CI/CD | DevOps and QA Engineer | GitHub Actions checks, Vercel preview deployments, branch protection plan | PR checks required before merge |
| QA baseline | DevOps and QA Engineer | Test plan, smoke tests, preview checklist | All MVP flows have verification notes |
| Documentation | CTO + All roles | Architecture decisions, progress log, setup guide, deployment notes | Docs updated before merge |

## Progress and Memory Tracking

- Keep durable decisions in `docs/`.
- Record major decisions in `docs/DECISIONS.md`.
- Record implementation progress in `docs/PROGRESS.md`.
- Never store secrets, API keys, tokens, or private credentials in documentation, commits, screenshots, or logs.
