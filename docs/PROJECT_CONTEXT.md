# Glowing Skin Project Context

## Purpose

This is the entry point for anyone planning, designing, building, testing, or reviewing Glowing Skin. Read this document, then follow the linked source for the area you are changing. Do not fill gaps from memory or assumption.

## Product In One Sentence

Glowing Skin is a budget aware skincare companion that creates and guides personalized face and body routines using the user's goals, lifestyle, location, schedule, owned products, and real usage.

## Product Outcome

The user should know what to do, when to do it, how to use what they already own, what is running low, and what to prioritize when their budget cannot cover every useful product.

The product supports consistency and informed self care. It does not diagnose skin conditions, promise visible results, replace a clinician, or guarantee that a product is safe for an individual.

## Confirmed Vision

- The first audience is the founder and friends, with a path to wider release and later monetization.
- Users may focus on face care, body care, or both.
- Onboarding captures skin goals and profile, age band, country and currency, daily environment, activity or sweat level, bathing pattern, schedule, budget, shopping dates, and products already owned.
- After onboarding, the app generates a ready to use guided routine instead of an empty dashboard.
- Users may change reminder and bathing times, record skipped steps, and correct inventory levels. Safety sensitive sequence and conflict rules remain guided.
- Daily routines include ordered product steps and relevant no purchase habits.
- Inventory supports categories, target area, multiple units, one active unit, backstock, actual use events, manual level correction, low stock, finished items, and history.
- Shopping recommendations prioritize routine essentials, respect weekly or monthly budgets, explain substitutions, and move purchased items into inventory.
- The experience should be encouraging and visual, using progress, streaks, feedback, and restrained animation.
- Recommendations should account for location and local currency. Local availability must be based on verified catalog data, not an AI model's unsupported claim.

## Primary Users

### Initial User

A person who wants clearer skincare guidance, owns some products, has a limited or explicit budget, and needs help turning products and habits into a consistent routine.

### Future User Segments

- Beginners who do not know product order or routine basics.
- Budget conscious users who want to use current products before buying more.
- Users managing face and body products, duplicates, and restock timing.
- Users whose work, climate, exercise, or bathing schedule changes routine timing.

Clinicians, retailers, brands, and administrators are not confirmed user roles for the first release.

## Core Journey

1. The user creates an account and completes onboarding.
2. The user adds or confirms owned products, target area, quantity, and expected uses or lifespan.
3. The system validates the profile and creates a draft routine from deterministic rules and approved recommendation logic.
4. The user sees today's morning, evening, bathing, and contextual steps.
5. Completing a product step records one use and updates the active unit forecast.
6. Manual level corrections recalibrate the forecast without deleting usage history.
7. Low stock with no backstock creates or updates a shopping bucket item.
8. The bucket ranks needs within budget and explains deferred or substituted items.
9. Marking an item bought creates or replenishes inventory without losing product history.
10. The app uses completion and check in data to show consistency, not to claim clinical improvement.

## Product Areas

| Area | Owns |
| --- | --- |
| Account and onboarding | Identity, consent, profile, goals, location, schedule, budget, initial inventory |
| Today | Generated routine, ordered steps, reminders, completion, feedback, streaks |
| Shelfie | Product catalog entries, user inventory units, levels, backstock, archive, usage forecast |
| Shopping bucket | Restocks, routine gaps, priority, budget allocation, alternatives, purchase confirmation |
| Progress | Consistency history and optional self reported check ins; photos are later scope |
| Settings | Profile changes, routine regeneration, notification preferences, privacy, export, deletion |
| Admin data | Approved categories, ingredients, conflict rules, habit content, and catalog provenance |

## Source Of Truth Map

| Question | Canonical source |
| --- | --- |
| What are we building and how must it behave? | [REQUIREMENTS.md](REQUIREMENTS.md) |
| What ships first and what comes later? | [scope/scope.md](scope/scope.md) |
| How is the system divided and how does data flow? | [ARCHITECTURE.md](ARCHITECTURE.md) |
| What entities and invariants exist? | [DATA_MODEL.md](DATA_MODEL.md) |
| What safety, privacy, and security limits apply? | [SAFETY_AND_PRIVACY.md](SAFETY_AND_PRIVACY.md) |
| Who owns each workstream and what are the gates? | [DELIVERY_PLAN.md](DELIVERY_PLAN.md) |
| Which choices are accepted? | [DECISIONS.md](DECISIONS.md) |
| Which choices remain unresolved? | [OPEN_DECISIONS.md](OPEN_DECISIONS.md) |
| What has happened so far? | [PROGRESS.md](PROGRESS.md) |
| What engineering process applies? | [CTO_FRAMEWORK.md](CTO_FRAMEWORK.md) and root [AGENTS.md](../AGENTS.md) |

## Requirement Status Language

- **Confirmed** means stated by the user or accepted in an architecture decision.
- **Proposed** means useful detail inferred from the vision and awaiting approval.
- **Deferred** means intentionally outside the first release.
- **Rejected** means it must not be built unless a later decision reverses it.
- **Unknown** means developers must consult `OPEN_DECISIONS.md` and must not invent an answer.

## Change Discipline

Every pull request that changes behavior must update the affected requirement IDs and acceptance criteria. New product ideas enter the scope before implementation. New architecture choices receive a decision record. Completed work updates the progress log with evidence. Secrets never enter these files.
