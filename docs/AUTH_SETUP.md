# Authentication Setup

## Connected Development Project

The application is connected locally to the healthy Supabase project named `glowing-skin`. Its public URL and publishable key live only in ignored `.env.local` files. The `create_profiles` and `harden_legacy_functions` migrations are applied to the live project.

Do not commit `.env.local`. Deployed environments still need the same two public variables configured in Vercel and their Auth redirect URLs approved in Supabase.

## Local Supabase

1. Install Docker Desktop and start it.
2. Run `npm install`.
3. Run `npm run db:start`.
4. Copy the local API URL and publishable key into `.env` as `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
5. Run `npm run db:reset` to apply all migrations.
6. Run `npm start`, then test in Expo Go and Expo web.

Local email confirmation is disabled so Expo Go sign up can be tested without a hosted redirect. Recovery emails are captured by local Supabase Inbucket, normally at `http://localhost:54324`.

## Hosted Supabase

Set these Auth URL settings in each nonproduction and production project:

- Site URL: the deployed web application URL.
- Redirect URL: `glowingskin://**` for installed native applications.
- Redirect URL: each exact Vercel preview, staging, and production callback origin required by that environment.
- Expo Go development redirects are temporary `exp://` URLs. Add only the current development URL to a nonproduction project. Never add broad Expo redirects to production.

Email confirmation should remain enabled for preview, staging, and production. Use the project's publishable key in the Expo client. Never use a secret or service role key in any `EXPO_PUBLIC_` variable.

## Manual Authentication Check

1. Create account A and verify its `auth.users` row and matching `public.profiles` row.
2. Restart the app and confirm its session returns.
3. Sign out and sign in again.
4. Request recovery, open the link, change the password, and sign in with the new password.
5. Create account B.
6. While authenticated as A, attempt to select and update B's profile ID. Both operations must return no row.
7. Repeat the ownership check as B against A.
8. Confirm a signed out client cannot read `public.profiles`.

Record the date, platform, expected result, and actual result in the pull request. Do not include tokens, passwords, full user IDs, or recovery links.

## Verification Record, 2026-09-20

- Live profile bootstrap trigger: passed with two disposable identities.
- Owner read: one own row returned.
- Cross account read: zero rows returned.
- Owner update: one own row updated.
- Cross account update: zero rows updated.
- Anonymous read: denied before RLS because `anon` has no table grant.
- Cleanup: both disposable identities and profiles removed.
- Security advisors: no findings after hardening the pre-existing functions.
- Public sign up API: blocked by the project's temporary email send rate limit. Retry after the limit resets or configure approved SMTP before inviting real users.
