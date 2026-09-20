# Architecture Context

## Current Decisions

- PWA deployed through Vercel.
- Supabase provides PostgreSQL, Auth, Storage where needed, and RLS.
- The system should remain inside free tier limits during prototype and MVP.
- Expo React Native, Expo Router, TypeScript, and npm are approved for the universal client.
- The project must remain compatible with Expo Go unless a later decision approves a development build.
- The AI provider is not yet approved.

## System Boundaries

### PWA Client

Owns presentation, accessible interactions, local reminder scheduling where supported, non sensitive caching, optimistic user feedback, and a local queue only for operations with defined idempotency.

The client never owns canonical safety policy, privileged database access, provider secrets, or final authorization decisions.

### Supabase

PostgreSQL is the source of truth for profiles, routines, inventory, usage events, shopping plans, consent, rules, and audit metadata. Auth identifies users. RLS enforces ownership and role boundaries. Private Storage may later hold progress photos after a separate decision.

### Trusted Server Boundary

Vercel Functions or Supabase Edge Functions may perform operations that require provider secrets, validated AI calls, recommendation assembly, rate limits, or privileged transactional logic. Select one function platform during the foundation design to avoid duplicating backend patterns.

### Recommendation Engine

Use a hybrid design:

1. Deterministic code validates input and enforces hard safety, inventory, sequence, and budget rules.
2. Curated, versioned content provides categories, known interactions, habits, explanations, and evidence metadata.
3. An optional approved model may help classify product text or draft a structured proposal.
4. Deterministic validation rejects malformed, unsupported, unsafe, or unaffordable output before storage.
5. The user reviews material routine changes before activation.

An AI response is never the sole authority for ingredient safety, diagnosis, local availability, price, or medical advice.

## Primary Data Flow

1. Auth creates an identity and owner scoped profile.
2. Onboarding writes validated profile, schedule, budget, and inventory records.
3. A trusted routine generation request loads only required fields and current rule versions.
4. The recommendation engine returns a structured draft with explanation and provenance.
5. Validation stores a routine version and its ordered steps.
6. Completion inserts an idempotent usage event and updates derived forecasts transactionally.
7. Low stock or a routine gap upserts one shopping need.
8. Purchase confirmation inserts units and resolves the relevant need in one transaction.

## Offline And Cache Rules

- Cache the app shell, static reference content, and the authenticated user's latest routine after explicit login.
- Do not cache secrets, auth responses, or another user's data in shared caches.
- Routine completion may queue offline with a client generated idempotency key.
- Inventory correction and purchase flows need explicit conflict handling before offline writes are enabled.
- Generated recommendations must display freshness and must not regenerate offline.
- Sign out clears private local data.

## API And Query Rules

- Prefer typed, narrow queries selecting only required columns.
- Paginate histories and catalogs.
- Avoid polling. Use realtime only for a demonstrated concurrent update need.
- Put multi record invariants in database functions or transactions, not a chain of client writes.
- Index foreign keys and measured filter or ordering paths.
- Version recommendation input and output contracts.

## Environments

- Local: local Supabase stack or isolated development project with seed data.
- Preview: isolated nonproduction data and Vercel preview deployment.
- Staging: release candidate environment sourced from `staging`.
- Production: protected environment sourced from `main`.

Production secrets and user data must never be copied into preview or local environments.

## Architecture Work Still Required

Before backend implementation, approve the backend function platform, test stack, notification strategy, analytics strategy, and AI boundary. These are tracked in `OPEN_DECISIONS.md`.
