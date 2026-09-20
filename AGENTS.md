# Glowing Skin

## Product

Glowing Skin is a budget aware face and body skincare companion. It creates guided routines from a user's skin profile, lifestyle, location, owned products, schedule, and spending limits. Start with [docs/PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md).

## Stack

- **Frontend**: Expo React Native with Expo Router and TypeScript, compatible with Expo Go and Expo web
- **Backend**: Supabase PostgreSQL, Auth, Storage, and Row Level Security
- **Hosting**: Vercel previews and production deployment
- **AI provider**: Not yet approved; never call a paid or secret bearing AI API directly from a public client
- **Package manager**: npm with a committed lockfile

## Build approach

**Tracer Bullet**: build thin, complete user journeys through UI, data, security, and tests before expanding breadth.

## Commands

```bash
npm install
npm start
npm run web
npm run lint
npm run typecheck
npm run build:web
```

## Rules

- Treat `docs/PROJECT_CONTEXT.md` as the product context index and `docs/REQUIREMENTS.md` as the behavioral contract.
- Never invent requirements. Record unresolved choices in `docs/OPEN_DECISIONS.md`.
- Skincare guidance is educational, not diagnosis or treatment. Follow `docs/SAFETY_AND_PRIVACY.md`.
- Every application table must use RLS. Never expose a Supabase service role key or AI provider secret in client code.
- Schema changes require migrations. Common queries require indexes and measured query plans.
- Branch from current `staging` using `feature/*`; merge by pull request only. Direct pushes to `main` and `staging` are prohibited.
- Use Conventional Commits. Update progress, decisions, and affected requirements in the same pull request as code.
- Keep dependencies and infrastructure within approved free tiers unless the CTO records an exception.
- A feature is complete only when its acceptance criteria, tests, accessibility, security, and preview checks pass.

## Specs

- Product scope: `docs/scope/scope.md`
- Architecture and domain model: `docs/ARCHITECTURE.md`
- Delivery plan: `docs/DELIVERY_PLAN.md`
- Numbered design specs belong in `docs/specs/` as features enter development.

## Context files

- [docs/PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md): canonical map of product knowledge
- [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md): functional and nonfunctional requirements
- [docs/OPEN_DECISIONS.md](docs/OPEN_DECISIONS.md): unresolved questions and decision owners

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
