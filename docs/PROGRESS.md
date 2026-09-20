# Progress Log

## 2026-09-20

- CTO role acknowledged for Glowing Skin.
- Selected Supabase over Firebase for relational integrity, PostgreSQL querying, authentication, RLS, and cost control.
- Selected Vercel for PWA hosting, preview deployments, CI/CD, and edge caching.
- Created CTO framework, architecture decision record, task matrix, Git workflow rules, and role responsibilities.
- Initialized `Glowing Skin` as its own Git repository because the folder was empty and the parent Git repository pointed to a different remote.
- Consolidated the original product discovery conversation into a canonical project context.
- Added confirmed and proposed requirements, phased feature scope, architecture boundaries, conceptual data model, safety and privacy requirements, delivery gates, and an open decision register.
- Added root `AGENTS.md` and `CLAUDE.md` so AI coding tools and developers begin from the same source of truth.
- The original documentation baseline ended before application code was scaffolded. The first foundation implementation now follows below.
- Began the application foundation on `feature/expo-foundation` using Expo React Native, Expo Router, TypeScript, and npm.
- Added Expo Go compatible navigation and functional Today, Shelfie, Shopping, and Profile starter screens.
- Added static Expo web export configuration for Vercel and an environment guarded Supabase client boundary.
- Verified TypeScript, Expo lint, all Expo Doctor checks, static web export, Android export, browser navigation, routine completion, and the shopping interaction.
- `npm audit --omit=dev` reports moderate advisories through Expo Router and Expo CLI dependencies. The suggested forced fixes downgrade core Expo packages and are not safe to apply. Track upstream patched releases before production.
- Added `docs/DEVELOPMENT_STEPS.md` as the ordered execution plan for real Supabase backed authentication, consent, onboarding, initial inventory, routine generation, and live screen data.
- Declared demo application arrays temporary and scheduled their removal before authentication work. Product screens must use database records or honest empty states, never mock user data.

Security note:

- A sensitive API key was provided in chat. It must not be committed to the repository. The key should be rotated if it has production access or broad repository permissions.
