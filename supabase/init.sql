create extension if not exists postgis;
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null check (char_length(username) between 2 and 32),
  avatar_url text,
  places_saved_count integer not null default 0 check (places_saved_count >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.places (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 160),
  category text not null default 'Restaurant' check (category in ('Restaurant', 'Bar', 'Tiers-lieu', 'Cafe')),
  address text,
  instagram_handle text not null check (instagram_handle ~ '^[A-Za-z0-9._]+$'),
  instagram_followers text,
  geom geometry(Point, 4326) not null,
  is_verified boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.criteria (
  id uuid primary key default gen_random_uuid(),
  place_id uuid not null unique references public.places(id) on delete cascade,
  has_terrace boolean not null default false,
  allows_cb_no_minimum boolean not null default false,
  broadcasts_om boolean not null default false,
  has_wifi boolean not null default false,
  late_opening boolean not null default false,
  good_for_groups boolean not null default false,
  quiet_spot boolean not null default false,
  laptop_friendly boolean not null default false,
  vegetarian_options boolean not null default false,
  wheelchair_accessible boolean not null default false,
  takes_reservations boolean not null default false,
  kid_friendly boolean not null default false,
  covered_outdoor boolean not null default false,
  live_music_or_dj boolean not null default false,
  sea_view boolean not null default false,
  dog_friendly boolean not null default false,
  created_at timestamptz not null default now(),
  constraint minimum_five_criteria check (
    (
      has_terrace::int + allows_cb_no_minimum::int + broadcasts_om::int + has_wifi::int +
      late_opening::int + good_for_groups::int + quiet_spot::int + laptop_friendly::int +
      vegetarian_options::int + wheelchair_accessible::int + takes_reservations::int +
      kid_friendly::int + covered_outdoor::int + live_music_or_dj::int + sea_view::int +
      dog_friendly::int
    ) >= 5
  )
);

create table if not exists public.user_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  place_id uuid not null references public.places(id) on delete cascade,
  note_text text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, place_id)
);

create table if not exists public.neighborhoods (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  polygon_data geometry(Polygon, 4326) not null,
  created_at timestamptz not null default now()
);

create index if not exists places_geom_idx on public.places using gist (geom);
create index if not exists neighborhoods_polygon_data_idx on public.neighborhoods using gist (polygon_data);
create index if not exists places_verified_name_idx on public.places (is_verified, lower(name));

create or replace view public.places_public as
select
  p.id,
  p.name,
  p.category,
  p.address,
  p.instagram_handle,
  p.instagram_followers,
  p.is_verified,
  st_y(p.geom::geometry) as latitude,
  st_x(p.geom::geometry) as longitude,
  c.has_terrace,
  c.allows_cb_no_minimum,
  c.broadcasts_om,
  c.has_wifi,
  c.late_opening,
  c.good_for_groups,
  c.quiet_spot,
  c.laptop_friendly,
  c.vegetarian_options,
  c.wheelchair_accessible,
  c.takes_reservations,
  c.kid_friendly,
  c.covered_outdoor,
  c.live_music_or_dj,
  c.sea_view,
  c.dog_friendly
from public.places p
left join public.criteria c on c.place_id = p.id
where p.is_verified = true;

alter table public.profiles enable row level security;
alter table public.places enable row level security;
alter table public.criteria enable row level security;
alter table public.user_notes enable row level security;
alter table public.neighborhoods enable row level security;

create policy "profiles are public readable"
  on public.profiles for select
  using (true);

create policy "users update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "verified places are public readable"
  on public.places for select
  using (is_verified = true);

create policy "authenticated users submit places"
  on public.places for insert
  to authenticated
  with check (auth.uid() = created_by and is_verified = false);

create policy "criteria readable for verified places"
  on public.criteria for select
  using (
    exists (
      select 1 from public.places
      where places.id = criteria.place_id and places.is_verified = true
    )
  );

create policy "authenticated users add criteria to own pending place"
  on public.criteria for insert
  to authenticated
  with check (
    exists (
      select 1 from public.places
      where places.id = criteria.place_id
      and places.created_by = auth.uid()
      and places.is_verified = false
    )
  );

create policy "users read own notes"
  on public.user_notes for select
  using (auth.uid() = user_id);

create policy "users upsert own notes"
  on public.user_notes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "neighborhoods are public readable"
  on public.neighborhoods for select
  using (true);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1), 'marseillais'),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
