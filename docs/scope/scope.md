# Glowing Skin Scope

**Workflow:** Beta

**Build approach:** Tracer Bullet, deliver thin complete journeys through interface, data, security, and tests before expanding breadth.

## At A Glance

| # | Feature | Phase | Status |
| --- | --- | --- | --- |
| 1 | Foundation and delivery controls | Foundation | in-progress |
| 2 | Account and consent | MVP | in-progress |
| 3 | Guided onboarding | MVP | planned |
| 4 | Product catalog and Shelfie | MVP | planned |
| 5 | Safe routine generation | MVP | planned |
| 6 | Today checklist and usage tracking | MVP | planned |
| 7 | Shopping bucket and budget | MVP | planned |
| 8 | Reminders and offline shell | MVP | planned |
| 9 | Progress and settings | MVP | planned |
| 10 | Admin content and rule management | Pilot | planned |
| 11 | Monetization | Growth | planned |
| 12 | Progress photos and advanced personalization | Growth | planned |

## Foundation

### 1. Foundation And Delivery Controls · in-progress

Create the approved PWA scaffold, environments, database migration workflow, CI checks, preview deployments, and branch protections.

Done when: a feature branch can pass all required checks and deploy a safe preview using documented local and hosted environments.

- [ ] Design it: `/architect foundation and stack`
- [ ] Build it: scaffold, environments, CI, preview, and protections
- [ ] Verify it: `/check verify foundation and delivery controls`
- [ ] Test it: `/test foundation and delivery controls`

## MVP

### 2. Account And Consent · in-progress · assumed decision ([spec 0001](../specs/0001-account-auth-foundation.md))

Give each person a secure private account with explicit consent, recovery, export, and deletion paths.

Done when: a user can complete the account lifecycle and can access only their own records under tested RLS policies.

- [ ] Design it: `/architect account and consent`
- [ ] Build it: auth, profile bootstrap, consent, recovery, deletion
  - [x] Email and password sign up, sign in, recovery, reset, session restore, and sign out
  - [x] Profile bootstrap migration and owner scoped RLS
  - [x] Consent records and screens
  - [ ] Account export and deletion
- [ ] Verify it: `/check verify account and consent`
- [ ] Test it: `/test account and consent`

Delivery sequence: [Development Steps, Steps 0 through 3](../DEVELOPMENT_STEPS.md)

Code: `src/app/(auth)`, `src/providers/auth-provider.tsx`, `supabase/migrations`

### 3. Guided Onboarding · planned

Collect the minimum context needed to create a useful first routine and allow draft progress to resume.

Done when: a user can enter the confirmed profile, lifestyle, budget, schedule, and initial products and receive a reviewable first routine.

- [ ] Design it: `/architect guided onboarding`
- [ ] Build it: profile, context, budget, schedule, initial inventory
- [ ] Verify it: `/check verify guided onboarding`
- [ ] Test it: `/test guided onboarding`

Delivery sequence: [Development Steps, Steps 4 through 6](../DEVELOPMENT_STEPS.md)

### 4. Product Catalog And Shelfie · planned

Track categorized face and body products, active units, backstock, level corrections, and finished history.

Done when: the user can manage multiple units without losing history and all inventory transitions follow the documented invariants.

- [ ] Design it: `/architect product catalog and Shelfie`
- [ ] Build it: catalog, inventory units, levels, backstock, archive
- [ ] Verify it: `/check verify product catalog and Shelfie`
- [ ] Test it: `/test product catalog and Shelfie`

### 5. Safe Routine Generation · planned · GA

Generate explainable, ordered face and body routines from validated context, inventory, and curated safety rules.

Done when: approved scenarios produce versioned routines with explanations, conflict handling, uncertainty labels, and escalation guidance.

- [ ] Design it: `/architect safe routine generation`
- [ ] Build it: rules, recommendation contract, generation, review, versioning
- [ ] Verify it: `/check verify safe routine generation`
- [ ] Test it: `/test safe routine generation`
- [ ] Review it: `/check review safe routine generation`
- [ ] Document it: `/document safe routine generation`

### 6. Today Checklist And Usage Tracking · planned

Guide the active routine, record completion once, and turn actual product uses into transparent remaining level forecasts.

Done when: complete, undo, skip, manual correction, and backstock rollover work without duplicate events online or after reconnect.

- [ ] Design it: `/architect Today and usage tracking`
- [ ] Build it: dashboard, ordered steps, progress, events, forecast math
- [ ] Verify it: `/check verify Today and usage tracking`
- [ ] Test it: `/test Today and usage tracking`

### 7. Shopping Bucket And Budget · planned

Combine low stock and routine gaps into a prioritized, budget aware plan with explained alternatives and purchase confirmation.

Done when: restocks and needs are deduplicated, ranked, budgeted, sourced, and converted to inventory without silent substitutions.

- [ ] Design it: `/architect shopping bucket and budget`
- [ ] Build it: triggers, ranking, budget plan, alternatives, purchase flow
- [ ] Verify it: `/check verify shopping bucket and budget`
- [ ] Test it: `/test shopping bucket and budget`

### 8. Reminders And Offline Shell · planned

Provide user controlled reminders and useful offline access without unsafe stale recommendations or duplicated writes.

Done when: reminders respect preferences and time zones, the shell and appropriate cached data load offline, and reconnection is tested.

- [ ] Design it: `/architect reminders and offline shell`
- [ ] Build it: permissions, schedules, service worker, cache rules, sync
- [ ] Verify it: `/check verify reminders and offline shell`
- [ ] Test it: `/test reminders and offline shell`

### 9. Progress And Settings · planned

Show consistency history and let users manage profile, routine regeneration, notifications, privacy, export, and deletion.

Done when: history is accurate, changes have clear effects, and privacy controls complete end to end.

- [ ] Design it: `/architect progress and settings`
- [ ] Build it: history, profile changes, regeneration, privacy controls
- [ ] Verify it: `/check verify progress and settings`
- [ ] Test it: `/test progress and settings`

## Pilot

### 10. Admin Content And Rule Management · planned · GA

Allow authorized maintainers to version categories, ingredient rules, habits, evidence, and catalog provenance safely.

Done when: changes are role restricted, reviewed, audited, versioned, and cannot silently rewrite an active user routine.

- [ ] Design it: `/architect admin content and rules`
- [ ] Build it: roles, content workflow, rule versions, audit log
- [ ] Verify it: `/check verify admin content and rules`
- [ ] Test it: `/test admin content and rules`
- [ ] Review it: `/check review admin content and rules`
- [ ] Document it: `/document admin content and rules`

## Growth

### 11. Monetization · planned

Introduce approved paid value and disclosed affiliate links without weakening safety, privacy, or user ownership of data.

Done when: pricing and entitlements are approved, billing is tested, sponsorship is labelled, and free safety access is preserved.

- [ ] Design it: `/architect monetization`
- [ ] Build it: entitlements, billing, disclosure, restore and cancellation
- [ ] Verify it: `/check verify monetization`
- [ ] Test it: `/test monetization`

### 12. Progress Photos And Advanced Personalization · planned · GA

Add optional private photos and more adaptive recommendations only after separate privacy, evidence, and storage approval.

Done when: consent, retention, deletion, secure media access, comparison limits, and safety review all pass.

- [ ] Design it: `/architect progress photos and advanced personalization`
- [ ] Build it: secure capture, storage, retention, comparison, advanced rules
- [ ] Verify it: `/check verify progress photos and advanced personalization`
- [ ] Test it: `/test progress photos and advanced personalization`
- [ ] Review it: `/check review progress photos and advanced personalization`
- [ ] Document it: `/document progress photos and advanced personalization`
