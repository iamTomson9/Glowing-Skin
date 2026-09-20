# 0001 · Account Auth Foundation

**Status**: Assumed
**Date**: 2026-09-20
**Authorized by**: Project owner, during development

## Owed decision

The final production email confirmation policy, recovery redirect domains, and account deletion timetable still require environment and privacy approval.

## Assumption built on

Use Supabase email and password authentication. Persist sessions in the Expo local storage adapter. Route signed out users to public auth screens and signed in users to protected application screens. Create one owner scoped profile for every Auth user using a database trigger. Development may disable email confirmation for Expo Go testing, while preview and production keep confirmation enabled and use approved redirect URLs.

## Code area

`src/app`, `src/components/auth`, `src/lib`, `src/providers`, `src/types`, and `supabase`

## Requirements

- A user can sign up, sign in, sign out, request password recovery, and set a new password.
- Sessions restore after application restart.
- Each Auth user receives one profile and can read or update only that profile.
- Signed out users cannot enter protected routes.
- Product screens show no mock user data.

## Ratify

This decision was recorded during development, not fully deliberated. Run `/architect account and consent` to settle production confirmation, redirects, deletion, and consent details. Until then it stays flagged as an owed decision.

