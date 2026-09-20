# Glowing Skin

Glowing Skin is governed by a CTO-led delivery process focused on a low-cost PWA architecture using Supabase and Vercel.

The client is an Expo React Native application that runs in Expo Go on Android and iOS and exports an Expo web build for Vercel.

## Local Development

```bash
npm install
npm start
```

Scan the QR code with Expo Go, or press `w` for the browser. Use `npm run typecheck`, `npm run lint`, and `npm run build:web` before opening a pull request.

Copy `.env.example` to `.env` only when connecting a Supabase project. Never put a service role key or AI provider secret in an `EXPO_PUBLIC_*` variable.

Follow [Authentication Setup](docs/AUTH_SETUP.md) for Supabase migrations, redirect URLs, and the required two account RLS check.

## Architecture

- Frontend: Progressive Web App.
- Backend: Supabase with PostgreSQL, Auth, and Row Level Security.
- Hosting: Vercel with preview deployments and edge caching.
- Workflow: `main`, `staging`, and feature branches with pull request reviews.

## Project Governance

- [Project Context](docs/PROJECT_CONTEXT.md)
- [Product Requirements](docs/REQUIREMENTS.md)
- [Feature Scope](docs/scope/scope.md)
- [Architecture Context](docs/ARCHITECTURE.md)
- [Domain Data Model](docs/DATA_MODEL.md)
- [Safety and Privacy](docs/SAFETY_AND_PRIVACY.md)
- [Delivery Plan](docs/DELIVERY_PLAN.md)
- [Open Decisions](docs/OPEN_DECISIONS.md)
- [CTO Framework](docs/CTO_FRAMEWORK.md)
- [Architecture Decisions](docs/DECISIONS.md)
- [Progress Log](docs/PROGRESS.md)
- [Security Rules](docs/SECURITY.md)

## Secret Handling

Do not commit API keys or credentials. Use `.env.local` for local development and Vercel/Supabase dashboards for deployed environments.
