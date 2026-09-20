# Security Rules

## Secrets

- Never commit API keys, tokens, passwords, service-role keys, or private credentials.
- Store local secrets in `.env.local`.
- Store production secrets in Vercel environment variables or Supabase dashboard settings.
- Rotate any credential that has been pasted into chat, logs, screenshots, or issue trackers.

## Supabase

- Enable Row Level Security on every application table.
- Do not expose Supabase service-role keys to frontend code.
- Use the public anon key only with strict RLS policies.
- Add indexes for role checks, ownership lookups, and common filters.

## Pull Requests

- Every pull request must pass lint, type checks, tests, and Vercel preview build.
- Security-sensitive changes require CTO review before merge.
