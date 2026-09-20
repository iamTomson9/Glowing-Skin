create table public.consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  consent_type text not null
    check (consent_type in ('privacy_notice', 'guidance_disclaimer', 'notifications')),
  accepted boolean not null,
  version text not null check (length(trim(version)) > 0),
  created_at timestamptz not null default now(),
  unique (user_id, consent_type, version)
);

create index consents_user_created_idx
on public.consents (user_id, created_at desc);

alter table public.consents enable row level security;

revoke all on table public.consents from anon;
revoke all on table public.consents from authenticated;
grant select, insert on table public.consents to authenticated;

create policy "Users can read their own consents"
on public.consents
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can record their own consents"
on public.consents
for insert
to authenticated
with check ((select auth.uid()) = user_id);
