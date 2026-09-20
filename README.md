# Glowing Skin

Glowing Skin is governed by a CTO-led delivery process focused on a low-cost PWA architecture using Supabase and Vercel.

## Architecture

- Frontend: Progressive Web App.
- Backend: Supabase with PostgreSQL, Auth, and Row Level Security.
- Hosting: Vercel with preview deployments and edge caching.
- Workflow: `main`, `staging`, and feature branches with pull request reviews.

## Project Governance

- [CTO Framework](docs/CTO_FRAMEWORK.md)
- [Architecture Decisions](docs/DECISIONS.md)
- [Progress Log](docs/PROGRESS.md)
- [Security Rules](docs/SECURITY.md)

## Secret Handling

Do not commit API keys or credentials. Use `.env.local` for local development and Vercel/Supabase dashboards for deployed environments.
