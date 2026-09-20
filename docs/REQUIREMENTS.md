# Product Requirements

## Product Principles

- Use what the user owns before recommending another purchase.
- Make the next action obvious and explain why it belongs in the routine.
- Respect the budget and show tradeoffs honestly.
- Prefer deterministic safety rules and curated evidence over model improvisation.
- Let users control their schedule and records while guarding unsafe sequence changes.
- Collect only data needed for a visible user benefit.

## Functional Requirements

### Account And Onboarding

- **FR-001 Confirmed**: A user can create an account, sign in, sign out, reset access, and delete the account.
- **FR-002 Confirmed**: Onboarding captures focus area: face, body, or both.
- **FR-003 Confirmed**: Onboarding captures skin type, selected goals, age band, country, currency, primary daily environment, activity or sweat level, and usual bathing frequency.
- **FR-004 Confirmed**: The user can set weekly or monthly skincare budget, next or recurring shopping dates, and routine or bathing reminder times.
- **FR-005 Confirmed**: The user can add current products during onboarding or skip and add them later.
- **FR-006 Confirmed**: Completing onboarding produces a proposed routine before the Today screen is first shown.
- **FR-007 Proposed**: Consent, disclaimer acknowledgement, and notification permission are separate, timestamped choices. Notification denial must not block core use.

### Product And Inventory

- **FR-100 Confirmed**: A product records name, optional brand, category, target area (face, body, both), and known ingredients or actives.
- **FR-101 Confirmed**: Inventory supports more than one unit of the same product, with one active unit and zero or more backstock units.
- **FR-102 Confirmed**: When a product is added, the user can provide expected total uses or typical lifespan and expected uses per day.
- **FR-103 Confirmed**: Completing a routine product step creates a usage event and updates the projected remaining level.
- **FR-104 Confirmed**: A user can correct an active unit to full, mostly full, half, low, or empty. A correction is recorded and recalibrates the forecast.
- **FR-105 Confirmed**: Finishing an active unit offers to open the next backstock unit. If none exists, the product is eligible for restock.
- **FR-106 Confirmed**: Finished units remain in history so lifespan estimates and past routines remain auditable.
- **FR-107 Proposed**: Duplicate catalog products are referenced by one canonical product record while user owned units remain separate.

### Routine Generation And Today

- **FR-200 Confirmed**: A routine can contain product steps, bathing or shower steps, and no purchase habits.
- **FR-201 Confirmed**: Steps are grouped by relevant period such as morning, evening, bathing, post activity, or scheduled time.
- **FR-202 Confirmed**: Every step presents an action, concise instruction, reason, target area, and product reference when applicable.
- **FR-203 Confirmed**: The system considers focus area, profile, goals, daily environment, sweat level, bathing pattern, schedule, inventory, budget, and location when proposing a routine.
- **FR-204 Confirmed**: Users can change times and reminders, skip a step, and adjust lifestyle scheduling without silently changing safety rules.
- **FR-205 Confirmed**: Product sequence and known ingredient conflict constraints are guided. Attempts to make a conflicting change show the reason and safe alternatives.
- **FR-206 Confirmed**: Users can complete and undo today's steps. Inventory changes must be idempotent so one completion never decrements twice.
- **FR-207 Confirmed**: Today shows completion progress, current streak, and clear feedback using accessible motion.
- **FR-208 Proposed**: Material profile or inventory changes mark the routine as stale and ask the user to review a regenerated draft before it replaces the active routine.
- **FR-209 Proposed**: Recommendation output stores its rule set, source version, generation time, and explanation for later audit.

### Shopping Bucket And Budget

- **FR-300 Confirmed**: An active unit at or below the configured low threshold, with no backstock, creates or updates one restock need.
- **FR-301 Confirmed**: The bucket also represents missing routine categories and useful goal related enhancements.
- **FR-302 Confirmed**: Items have an explainable priority. Essential routine needs rank above optional enhancements.
- **FR-303 Confirmed**: The planned total is compared with the active weekly or monthly budget and local currency.
- **FR-304 Confirmed**: When the preferred choice exceeds budget, the app can show a lower cost alternative and explain the tradeoff. It must not imply equivalence without evidence.
- **FR-305 Confirmed**: The app may show useful products above budget as deferred, rather than hiding them or silently overspending.
- **FR-306 Confirmed**: Marking an item bought records quantity and price, then adds stock or creates inventory after user confirmation.
- **FR-307 Proposed**: Prices and local availability show source and last checked time; stale or unverified data is labelled clearly.

### Reminders, Progress, And Settings

- **FR-400 Confirmed**: The app supports reminders for routines, bathing, contextual habits, shopping dates, and low stock.
- **FR-401 Confirmed**: Users can change times, pause categories, and disable reminders.
- **FR-402 Confirmed**: The app records routine consistency and can show daily and weekly history.
- **FR-403 Proposed**: Progress language reports adherence and self reported observations, not objective clinical outcomes.
- **FR-404 Proposed**: Users can export their data and permanently delete account data.
- **FR-405 Deferred**: Private progress photos and comparison views are post MVP and require a separate privacy and storage design.

### Monetization

- **FR-500 Confirmed direction**: The product may use a free tier, subscription features, and disclosed affiliate links after the core experience is validated.
- **FR-501 Proposed**: Core safety warnings, account controls, and access to the user's own data can never be paywalled.
- **FR-502 Proposed**: Free and paid limits, prices, trial terms, affiliate partners, and billing platform remain unresolved and cannot be coded as final values.
- **FR-503 Proposed**: Sponsored ranking must be visibly labelled and cannot override safety or relevance ordering.

## Nonfunctional Requirements

- **NFR-001 Security**: RLS protects every application table. Private storage uses owner scoped policies. Privileged keys remain server only.
- **NFR-002 Privacy**: Use data minimization, purpose labels, consent records, export, deletion, and documented retention.
- **NFR-003 Accessibility**: Target WCAG 2.2 AA. All actions work by keyboard and screen reader. Motion respects reduced motion preferences.
- **NFR-004 PWA**: The installable app shell and previously fetched non sensitive content work offline. Writes queue only where conflict behavior is defined.
- **NFR-005 Performance**: Set measurable budgets during scaffold selection. Common database queries target under 50 ms at the database layer and require query plan evidence.
- **NFR-006 Reliability**: Usage events and purchases are idempotent. Sync retries cannot duplicate stock, logs, or routine completion.
- **NFR-007 Observability**: Capture privacy safe errors, build status, deployment health, and aggregate usage. Never log secrets or sensitive free text.
- **NFR-008 Cost**: Stay within approved free tiers during prototype and MVP. Add quotas, caching, and model call limits before enabling generated recommendations.
- **NFR-009 Quality**: Required checks include formatting, lint, type checking, unit tests, integration tests, build, migration validation, RLS tests, and preview smoke checks.
- **NFR-010 Maintainability**: Recommendation logic, domain calculations, and UI are separated and versioned. No business rule lives only inside an AI prompt.

## Release Acceptance

MVP is complete when all MVP scope items are marked done, every confirmed requirement in those items has test evidence, critical safety rules are reviewed by a qualified domain expert, privacy and account deletion work end to end, branch protections and deployment checks are active, and cost monitoring has a named owner.
