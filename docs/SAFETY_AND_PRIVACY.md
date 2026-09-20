# Safety, Privacy, And Security

## Product Boundary

Glowing Skin offers educational skincare organization and habit guidance. It is not a medical device, dermatologist, diagnostic service, emergency service, or guarantee of results.

The app must not diagnose conditions, prescribe treatment, tell users to ignore professional advice, infer disease from photos, or present generated text as verified clinical fact.

## Safety Rules

- Hard safety rules come from reviewed, versioned content and deterministic code, not an AI model alone.
- Ingredient, allergy, pregnancy, medication, chronic condition, severe symptom, and age related guidance needs qualified review before release.
- Unsupported product ingredients or uncertain conflicts are labelled unknown. The app asks the user to check packaging or seek professional guidance.
- Red flag symptoms and worsening reactions direct the user to stop the relevant product and seek appropriate professional care. Exact escalation text requires clinical and legal review.
- The user can report irritation or adverse response and pause a product or routine step immediately.
- Recommendations explain their basis and limits. They do not promise a better appearance by a deadline.
- No purchase habits must also be evidence reviewed. Attractive sounding advice is not enough.
- Safety warnings and access to account data are never premium features.

## Children And Age

The minimum supported age and guardian consent policy are unresolved. Until approved, the product must not launch to children and must not create special routines from age alone.

## Privacy Classification

Treat skin goals, sensitivities, routines, photos, lifestyle, location, and self reported observations as sensitive personal data even where local law uses a narrower definition.

Collect country by explicit selection for MVP. Do not collect precise location unless a later feature has a clear purpose and consent design.

## Privacy Requirements

- Explain why each onboarding field is needed.
- Record consent separately from acceptance of service terms.
- Support export and permanent account deletion.
- Define retention for accounts, audit events, recommendation logs, and future photos.
- Keep private data out of URLs, analytics payloads, logs, and support screenshots.
- Do not send names, email addresses, precise location, photos, or unrelated profile data to an AI provider.
- Document every external processor before production.
- Provide a way to opt out of nonessential analytics and marketing.

## Security Requirements

- Enable and test RLS for every application table.
- Keep service role and AI provider keys server side.
- Validate structured inputs at client and trusted server boundaries.
- Rate limit authentication, recommendation generation, catalog search, and sensitive mutations.
- Use owner scoped private buckets and short lived signed access for future photos.
- Log administrative content and rule changes without logging secrets or sensitive payloads.
- Scan dependencies and secrets in CI. Rotate any credential exposed in chat or logs.

## Required Reviews Before Public Launch

- Qualified dermatology or skincare domain review of rules and user facing safety content.
- Privacy and terms review for target launch countries, beginning with the confirmed initial market once selected.
- Threat model and RLS test review.
- Accessibility review.
- AI evaluation set covering unsafe advice, unsupported certainty, prompt injection, malformed products, and ambiguous ingredients.
