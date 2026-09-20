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
- Started Account and Consent on `codex/auth-foundation` from current `staging`.
- Removed all starter user, routine, inventory, shopping, price, and progress records from application state.
- Added simplified Sign Up, Sign In, Forgot Password, Reset Password, callback, session restore, and Sign Out flows backed only by Supabase Auth.
- Added the first Supabase migration for profile bootstrap, explicit grants, owner scoped RLS, and restricted update access.
- Added honest empty states for Today, Shelfie, and Shopping until their real database features exist.
- Verified TypeScript, lint, static Expo web export, signed out routing, conversion page navigation, and missing configuration handling.
- The earlier local database blocker was resolved by connecting the authenticated Supabase integration to the hosted development project.
- Connected the app to the healthy live Supabase project named `glowing-skin` using an ignored local environment file and its active publishable key.
- Applied `create_profiles` to replace the earlier auth trigger that populated guessed onboarding values.
- Applied `harden_legacy_functions` to remove unnecessary `SECURITY DEFINER` execution and fix the mutable search path reported by Supabase advisors.
- Generated TypeScript database types from the live schema.
- Verified the live bootstrap and RLS boundary with two disposable identities: own reads and updates succeeded, cross account operations returned zero rows, anonymous access was denied, and cleanup removed all QA records.
- Supabase security advisors now report no findings. Public sign up remains temporarily blocked by the project's email send rate limit.
- Fixed Supabase session storage initialization so Expo web static rendering does not access browser `localStorage` on the server.
- Rebuilt the production PWA with the live public configuration and manually confirmed the Sign In screen reaches Supabase Auth and returns its expected invalid credentials response for a disposable nonexistent account.
- Defined a 20 screen MVP inventory and separated user facing screens from redirects, layouts, callbacks, dialogs, and sheets.
- Built screen 5, Consent and Guidance Limits, with separate required data use and guidance acknowledgements plus an optional notification choice.
- Applied the live `create_onboarding_consents` migration with append only records, version timestamps, explicit grants, owner scoped RLS, and an indexed owner query.
- Routed incomplete accounts to onboarding and blocked direct tab access until onboarding is complete.
- Regenerated live database types and passed type checking, lint, and the production Expo web export.
- Verified consent RLS in a rolled back two user database test: own reads and inserts succeeded while cross account reads and inserts were rejected.
- Supabase security advisors report no findings. Performance advisors identify three preexisting missing foreign key indexes in legacy routine and shopping tables for their owning feature work.

Security note:

- A sensitive API key was provided in chat. It must not be committed to the repository. The key should be rotated if it has production access or broad repository permissions.
