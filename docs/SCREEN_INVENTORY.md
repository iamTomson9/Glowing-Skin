# Screen Inventory

The Glowing Skin MVP has 20 user facing screens. Redirects, layouts, authentication callbacks, dialogs, and confirmation sheets are not counted as screens.

## Account

| # | Screen | Status | Route |
| --- | --- | --- | --- |
| 1 | Create Account | Built | `/sign-up` |
| 2 | Sign In | Built | `/sign-in` |
| 3 | Forgot Password | Built | `/forgot-password` |
| 4 | Reset Password | Built | `/reset-password` |

## Onboarding

| # | Screen | Status | Route |
| --- | --- | --- | --- |
| 5 | Consent And Guidance Limits | Built | `/onboarding/consent` |
| 6 | Focus Area | Planned | `/onboarding/focus-area` |
| 7 | Skin Profile And Goals | Planned | `/onboarding/skin-profile` |
| 8 | Lifestyle And Bathing | Planned | `/onboarding/lifestyle` |
| 9 | Budget And Shopping Schedule | Planned | `/onboarding/budget` |
| 10 | Routine And Reminder Schedule | Planned | `/onboarding/schedule` |
| 11 | Current Products | Planned | `/onboarding/products` |
| 12 | Onboarding Review | Planned | `/onboarding/review` |
| 13 | First Routine Review | Planned | `/onboarding/routine-review` |

## Daily Use

| # | Screen | Status | Route |
| --- | --- | --- | --- |
| 14 | Today | Shell | `/(tabs)` |
| 15 | Shelfie | Shell | `/(tabs)/shelfie` |
| 16 | Product Editor | Planned | `/products/edit` |
| 17 | Shopping Bucket | Shell | `/(tabs)/shopping` |
| 18 | Progress | Planned | `/(tabs)/progress` |
| 19 | Profile And Settings | Shell | `/(tabs)/profile` |
| 20 | Privacy And Account Controls | Planned | `/settings/privacy` |

Product details and stock controls live in Shelfie. Step instructions live in Today. Purchase confirmation lives in Shopping. These stay focused subviews instead of adding extra top level screens.

## Build Order

Build and manually verify each screen in numeric order. A screen is built only when it uses live Supabase data where data is required, handles loading, empty, success, and error states, works in Expo Go and web, and passes type checking and export checks.
