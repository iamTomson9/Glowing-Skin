# Open Decisions

Developers must not choose answers silently. Close a decision by recording it in `DECISIONS.md`, updating affected requirements, and linking the implementation spec.

## Blocking Foundation

| ID | Decision | Why it matters | Owner | Needed by |
| --- | --- | --- | --- | --- |
| OD-001 | Frontend framework, language, and package manager | Determines scaffold, routing, PWA support, typing, and test tools | CTO | Before code scaffold |
| OD-002 | Trusted function platform: Vercel Functions or Supabase Edge Functions | Prevents two backend patterns and locates provider secrets | CTO plus Backend | Before recommendation API |
| OD-003 | Notification capability for an installable web app and supported browsers | Web push and local schedules differ by platform and permission | Frontend plus Product | Before reminder design |
| OD-004 | Initial launch country or countries | Determines currency, catalog, privacy review, and language | Product | Before pilot data |
| OD-005 | Minimum supported age and guardian policy | Affects onboarding, consent, safety, and public availability | Product plus legal review | Before pilot |

## Recommendation And Content

| ID | Decision | Why it matters | Owner | Needed by |
| --- | --- | --- | --- | --- |
| OD-010 | Whether MVP needs generative AI at all | Deterministic rules may be safer and cheaper for the first validated slice | CTO plus Product | Before routine engine spec |
| OD-011 | If approved, AI provider, model, data terms, quotas, and fallback | Earlier discussion named Gemini, but no provider decision is accepted | CTO plus Security | Before provider integration |
| OD-012 | Qualified reviewer and evidence standard for skincare rules | Required to publish credible safety guidance | CTO | Before pilot content freeze |
| OD-013 | Product catalog and local price data source | Availability and pricing cannot be invented by a model | Product plus Backend | Before shopping recommendations |
| OD-014 | Supported skin goals, types, sensitivities, and ingredient rule set for MVP | Bounds evaluation, UI choices, and safety claims | Product plus domain reviewer | Before onboarding build |
| OD-015 | Exact user escalation and adverse reaction flow | Needed for safe handling of irritation and concerning symptoms | Product plus domain reviewer | Before pilot |

## Product And Commercial

| ID | Decision | Why it matters | Owner | Needed by |
| --- | --- | --- | --- | --- |
| OD-020 | Precise MVP boundary for founder and friend test | Controls timeline and prevents the whole vision shipping at once | CTO plus Product | Before first sprint |
| OD-021 | Budget interaction when weekly and monthly limits both exist | Affects shopping plan calculations | Product | Before bucket spec |
| OD-022 | Inventory lifespan input and depletion formula | Days, total uses, volume, target area, and manual corrections need one contract | Product plus Backend | Before Shelfie spec |
| OD-023 | Free tier limits and paid entitlements | Earlier values were suggestions, not approved requirements | Product plus Finance | After pilot validation |
| OD-024 | Subscription prices, trial, affiliate partners, and supported billing channel | Depends on market and PWA billing constraints | Product plus Finance | Before monetization |
| OD-025 | Brand identity, visual direction, voice, and accessibility motion rules | Needed before polished interface work | Product plus UX | Before design system |
| OD-026 | Progress measurement and claims | Must distinguish adherence and self report from clinical results | Product plus domain reviewer | Before Progress feature |

## Operations

| ID | Decision | Why it matters | Owner | Needed by |
| --- | --- | --- | --- | --- |
| OD-030 | Analytics and error monitoring tools and consent mode | Impacts privacy, observability, and cost | CTO plus Security | Before pilot |
| OD-031 | Data retention, export format, and deletion timetable | Required for privacy controls and schema design | Security plus Backend | Before account deletion |
| OD-032 | Recovery, support, incident response, and content rollback process | Needed before real users rely on guidance | CTO plus DevOps | Before pilot |

## Explicitly Not Decided

- Gemini, any model version, and any previously pasted API key are not approved architecture.
- Suggested subscription prices and a five product free limit are not approved.
- Cold water rinses, pillowcase frequency, hydration reminders, and similar examples are content candidates, not validated rules.
- Weather APIs, barcode scanning, photo analysis, retailer partnerships, and brand sponsorship are later ideas, not MVP commitments.
