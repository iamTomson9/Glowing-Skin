# Development Steps

This is the working delivery order for Glowing Skin. Build one complete slice at a time through Expo, Supabase, RLS, and manual verification. Do not add placeholder users, products, routines, prices, progress, or shopping records to application code.

## Delivery Rules

- Supabase is the source of truth for every user record.
- The application must show honest loading, empty, error, and offline states when data does not exist.
- Seed data is allowed only for reviewed shared reference records in a migration or seed file. It must be labelled as seed data and must not impersonate user activity.
- Every application table must have RLS enabled before the client can use it.
- Every write must be followed by a database read during manual verification.
- Test with at least two accounts to prove that one user cannot access another user's records.
- Keep Expo Go, Android, iOS, and Expo web working throughout development.
- Do not move to the next step while the current step has failed acceptance criteria or unresolved security findings.

## Step 0: Remove Demo State And Prepare Environments

**Owner:** CTO, Frontend, Backend, DevOps

1. Remove hard coded routine, inventory, and shopping arrays from `src/state/app-context.tsx`.
2. Replace demo content with explicit signed out, loading, empty, error, and unavailable states.
3. Create local, preview, staging, and production Supabase environment guidance.
4. Configure only `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in public clients.
5. Add the Supabase CLI, migration directory, generated database types, and repeatable validation commands.
6. Add CI checks for lint, type checking, tests, web export, migration validation, and secret scanning.

**Manual gate:** Launch in Expo Go and web without Supabase values, then with development values. The app must never display invented product data and must explain configuration or connection failures safely.

## Step 1: Authentication Foundation

**Owner:** Backend, Frontend, Security

1. Configure Supabase Auth for email and password.
2. Decide and configure email confirmation and redirect URLs for Expo Go, installed apps, preview web, staging, and production.
3. Create an auth provider that restores sessions, refreshes tokens, responds to auth state changes, and clears private state on sign out.
4. Add route groups for public auth screens and protected application screens.
5. Build Sign Up, Sign In, Forgot Password, Reset Password, and Sign Out flows.
6. Add accessible validation, pending states, actionable errors, and duplicate submission protection.

**Manual gate:** Create a real account, confirm it when required, sign in, restart Expo Go, verify session restoration, sign out, request a password reset, reset it, and sign in with the new password. Repeat the core flow on web.

## Step 2: Profile Bootstrap And RLS

**Owner:** Backend and Database, Security, QA

1. Create the first migration for `profiles` with `id` referencing `auth.users`, onboarding status, timestamps, and required lifecycle fields.
2. Create a safe new user bootstrap trigger or an idempotent server operation.
3. Enable RLS and add owner scoped `SELECT`, `INSERT`, and `UPDATE` policies. Updates must use both `USING` and `WITH CHECK`.
4. Add indexes for actual owner and onboarding queries.
5. Generate TypeScript database types and use narrow typed queries in the client.
6. Route authenticated users by persisted onboarding status, never by local flags.

**Manual gate:** Inspect the created profile in Supabase after sign up. Use two real test accounts and verify each can read and update only its own profile. Confirm anonymous access and cross account access fail.

## Step 3: Consent And Account Safety

**Owner:** Backend, Security, Frontend

1. Resolve the minimum age policy and required consent text before collecting sensitive profile details.
2. Create append only `consents` records for privacy, disclaimer, and notifications with version and timestamp.
3. Keep notification permission separate and optional.
4. Build consent screens and store each decision in Supabase.
5. Add audit events for security sensitive account lifecycle actions without storing secrets or sensitive free text.
6. Specify account deletion and export behavior before implementing their final actions.

**Manual gate:** Accept required consent, decline notifications, restart the app, and verify the exact persisted consent versions. Confirm altered owner IDs and cross account reads are rejected.

## Step 4: Resumable Guided Onboarding

**Owner:** Product, Frontend, Backend, QA

1. Close `OD-004`, `OD-005`, and the onboarding portion of `OD-014` before finalizing selectable values.
2. Create migrations and RLS for `skin_profiles`, `lifestyle_profiles`, `budgets`, and `schedules`.
3. Define database constraints for focus area, skin type, age band, country, currency, environment, activity level, bathing frequency, budget cycle, timezone, and schedule types.
4. Build one small onboarding screen per decision group with progress, back navigation, and accessible controls.
5. Save each completed step to Supabase so onboarding resumes on another device or after restart.
6. Validate values in both the client and database. Do not rely on client validation for integrity.
7. Use a transaction or trusted database function for final completion so partial writes cannot mark onboarding complete.

**Manual gate:** Complete part of onboarding, close the app, resume at the correct step, edit earlier answers, finish, and verify all rows in Supabase. Repeat with invalid and interrupted submissions and with a second account.

## Step 5: Initial Product Entry

**Owner:** Backend, Frontend, Product

1. Design the reviewed product category seed set before adding catalog records.
2. Create migrations and RLS for catalog references, `inventory_items`, and `inventory_units`.
3. Let users add real owned products or explicitly skip this step.
4. Store custom product names as user owned records. Do not fabricate catalog matches, ingredients, prices, or availability.
5. Enforce one active unit per inventory item and preserve backstock history.

**Manual gate:** Add, edit, and remove a real product; add a backstock unit; skip the step with another account; verify ownership isolation and database constraints directly.

## Step 6: First Routine Generation

**Owner:** CTO, Backend, Product, Domain Reviewer, QA

1. Close the routine rule and evidence decisions required by `OD-010`, `OD-012`, `OD-014`, and `OD-015`.
2. Implement deterministic, versioned rules first. Do not use generated or invented skincare advice.
3. Create `routine_versions`, `routine_steps`, provenance records, and owner scoped RLS.
4. Generate a draft from persisted onboarding and inventory data inside a trusted server boundary.
5. Validate every output against curated safety rules before storing it.
6. Require the user to review and activate the draft before entering Today.
7. Store the input version, rule version, explanation, and generation result for audit.

**Manual gate:** Generate routines for approved test scenarios, inspect every stored input and output, prove unsafe or incomplete input is rejected, activate one routine, and confirm another account cannot read it.

## Step 7: Replace Starter Screens With Live Data

**Owner:** Frontend, Backend, QA

1. Query the active routine for Today using only required columns.
2. Query the authenticated user's inventory for Shelfie.
3. Keep Shopping empty until its real database feature is implemented.
4. Show truthful empty states when no active routine, inventory, or shopping plan exists.
5. Add retry behavior and safe offline display only for previously fetched non sensitive data.

**Manual gate:** Verify fresh, loading, empty, populated, error, expired session, and offline states on Expo Go and web. Confirm sign out removes private cached data.

## Required Evidence For Every Step

- Migration and RLS policy files in Git.
- Generated TypeScript types after schema changes.
- Automated checks passing locally and in the pull request.
- A manual test checklist with account IDs redacted, date, platform, expected result, and actual result.
- Database evidence that the write occurred and ownership isolation held.
- Updated `docs/PROGRESS.md`, requirements, decisions, and scope status.
- A feature branch and reviewed pull request into `staging`.

## Immediate Work Queue

1. Design Account and Consent in a numbered spec.
2. Remove demo state and establish honest empty states.
3. Configure a nonproduction Supabase project and local migration workflow.
4. Implement Sign Up and Sign In as the first complete database connected slice.
5. Verify authentication manually on Expo Go and web before adding onboarding fields.

