# Delivery Plan And Ownership

## Delivery Order

1. Resolve foundation decisions and scaffold the PWA.
2. Establish CI, environments, migrations, RLS test patterns, and preview deployment.
3. Deliver account plus one resumable onboarding path.
4. Deliver Shelfie with multi unit inventory and event history.
5. Deliver one safe end to end routine path for a small reviewed rule set.
6. Add Today completion and inventory forecast updates.
7. Add shopping needs, budget planning, and purchase to inventory flow.
8. Add reminders, offline behavior, progress, privacy controls, and pilot hardening.

## Task Matrix

| Workstream | Accountable | Responsible | Required output | Exit gate |
| --- | --- | --- | --- | --- |
| Product scope | CTO | Product Manager | Requirements, priority, acceptance criteria, open decisions | CTO approval |
| UX and accessibility | CTO | Frontend plus UX | Flows, states, responsive behavior, accessibility notes | Product and QA review |
| PWA implementation | CTO | Frontend Developer | Typed components, routing, state, service worker | Build, accessibility, performance checks |
| Database and Auth | CTO | Backend Engineer | Migrations, seed data, RLS, typed contracts | Migration and policy tests |
| Recommendation safety | CTO | Backend plus domain reviewer | Versioned rules, evaluations, explanations, escalation | Domain and security approval |
| CI and deployment | CTO | DevOps Engineer | Required checks, previews, environments, rollback notes | Protected branch test |
| Quality | CTO | QA Engineer | Test plan, automated suites, exploratory evidence | No unresolved release blockers |
| Security and privacy | CTO | Security Engineer | Threat model, privacy data map, abuse tests | Security sign off |
| Documentation | CTO | Technical Writer plus feature owner | Context, specs, setup, progress, release notes | Docs check in each PR |

## Pull Request Contract

Every feature starts from current `staging` on `feature/<short-name>`. The pull request targets `staging` and includes linked requirement IDs, scope item, screenshots where visual, migration notes, security and privacy impact, tests run, preview URL, cost impact, rollback note, and documentation changes.

Required checks are formatting, lint, type check, unit tests, integration tests, production build, migration validation, RLS tests when data access changes, dependency and secret scan, and preview smoke verification.

Promotion from `staging` to `main` uses a release pull request with change summary, known issues, rollback plan, environment diff, and CTO approval.

## Definition Of Ready

A feature is ready to build when its scope item is linked, acceptance criteria are approved, unresolved decisions that affect implementation are closed, data and security impact are understood, designs cover loading, empty, error, offline, and permission states, and test strategy is named.

## Definition Of Done

A feature is done when implementation matches requirements, automated checks pass, the preview is verified on mobile and desktop, accessibility is checked, RLS and failure paths are tested, documentation and progress are current, cost impact is acceptable, and the CTO approves the pull request.

## Progress Reporting

Each active feature reports: status, completed evidence, current blocker, risk, next action, owner, and target checkpoint. `docs/PROGRESS.md` holds durable milestones, while pull requests hold implementation detail.

## Cost Controls

- Record expected database reads and writes for high frequency actions.
- Cache static and versioned reference data.
- Rate limit and quota model calls per user and environment.
- Keep preview and test resources isolated and disposable.
- Review Supabase, Vercel, and any approved provider usage weekly.
- A paid dependency or service needs an accepted decision record before integration.
