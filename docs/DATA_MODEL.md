# Domain Data Model

This is the conceptual model. Exact SQL types, constraints, and indexes belong in numbered architecture specs and migrations.

## Identity And Context

| Entity | Purpose | Key relationships |
| --- | --- | --- |
| `profiles` | User visible account fields, country, currency, age band, focus area | One per Auth user |
| `skin_profiles` | Skin type, goals, sensitivities, user reported context | Belongs to profile, versioned changes |
| `lifestyle_profiles` | Environment, sweat or activity level, bathing pattern | Belongs to profile |
| `schedules` | Routine, bathing, shopping, and reminder times with timezone | Many per profile |
| `budgets` | Amount, weekly or monthly cycle, currency, active dates | Many versions, one active per cycle type |
| `consents` | Disclaimer, privacy, notification, and future photo consent records | Immutable event history |

## Catalog And Inventory

| Entity | Purpose | Key relationships |
| --- | --- | --- |
| `product_categories` | Versioned categories and routine roles | Referenced by catalog products |
| `catalog_products` | Canonical product identity and provenance | Has ingredients, prices, availability records |
| `ingredients` | Canonical ingredient or active names | Many to many with catalog products |
| `ingredient_rules` | Versioned interaction, timing, target area, and warning rules | References ingredients and evidence |
| `inventory_items` | User ownership of a catalog or custom product | Belongs to user, groups units |
| `inventory_units` | Each physical unit, active or backstock, opened and finished dates | Belongs to inventory item |
| `inventory_adjustments` | Manual level corrections and reason | Belongs to unit, append only |
| `usage_events` | One recorded use from a completed step | Belongs to user, routine step, and unit |

## Routines And Progress

| Entity | Purpose | Key relationships |
| --- | --- | --- |
| `routine_versions` | Draft or active generated routine plus input and rule versions | Belongs to user |
| `routine_steps` | Ordered action, timing, target area, instruction, reason | Belongs to routine version, optionally inventory item |
| `routine_completions` | Complete, skipped, or undone occurrence with idempotency key | Belongs to step and schedule date |
| `habit_definitions` | Curated no purchase habits and applicability | Referenced by routine step |
| `check_ins` | User reported observations and consistency notes | Belongs to user, no diagnosis fields |

## Shopping

| Entity | Purpose | Key relationships |
| --- | --- | --- |
| `shopping_plans` | Budget snapshot and shopping date | Belongs to user and budget version |
| `shopping_needs` | Restock, missing category, or enhancement need | Belongs to plan and source reason |
| `shopping_options` | Preferred and alternative products with source and price | Belongs to need |
| `purchase_events` | User confirmed product, quantity, actual price, and date | Resolves need and creates units |
| `product_prices` | Currency, retailer or source, observed price, checked time | Belongs to catalog product |
| `product_availability` | Country or retailer availability and provenance | Belongs to catalog product |

## Governance

| Entity | Purpose |
| --- | --- |
| `recommendation_runs` | Input schema version, rule version, optional model metadata, outcome, and failure reason |
| `content_sources` | Evidence or provenance for rules, habits, products, prices, and availability |
| `audit_events` | Security sensitive administrative changes and selected user lifecycle actions |
| `feature_entitlements` | Future free or paid capability access without embedding pricing in domain logic |

## Required Invariants

- Every user owned row has an owner and an RLS policy.
- An inventory item has at most one active unit.
- Remaining level is bounded from zero through one hundred.
- Usage and correction events are append only. Current estimates are derived or safely materialized.
- A completion idempotency key is unique per user and intended step occurrence.
- One unresolved restock need exists per inventory item and shopping plan.
- Currency is stored with every monetary amount. Never combine amounts across currencies without an explicit rate source.
- Routine steps reference a specific routine version. Activating a new routine does not mutate history.
- Generated content records provenance and cannot overwrite curated safety rules.
- Deleting a user follows a documented cascade and retention policy, including private storage.

## Calculation Rules To Specify Before Build

- Whether lifespan input is days, uses, volume, or a supported combination.
- How one completion maps to use quantity for products used on face and body.
- How a manual level correction recalibrates future estimated uses.
- The low stock default and whether it varies by lead time or shopping date.
- Streak boundaries, timezone changes, grace periods, and undo behavior.
- Budget rollover, overlapping weekly and monthly budgets, and partial purchases.
