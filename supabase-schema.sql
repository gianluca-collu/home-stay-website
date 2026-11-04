create extension if not exists btree_gist;

create table if not exists public.booking_properties (
    id text primary key,
    title text not null,
    base_nightly_price integer not null default 0 check (base_nightly_price >= 0),
    minimum_stay integer not null default 1 check (minimum_stay > 0),
    maximum_stay integer check (maximum_stay is null or maximum_stay >= minimum_stay)
);

insert into public.booking_properties (id, title, base_nightly_price, minimum_stay)
values
    ('Villa Karla', 'Villa Karla', 2500, 3),
    ('casa_amalfitana', 'Oltre Mare', 1800, 4),
    ('casale_umbro', 'Casale Umbro', 1200, 2)
on conflict (id) do update
set title = excluded.title;

create table if not exists public.site_admins (
    user_id uuid primary key references auth.users (id) on delete cascade
);

create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
    select exists (
        select 1
        from public.site_admins
        where user_id = auth.uid()
    );
$$;

create table if not exists public.nightly_prices (
    property_id text not null references public.booking_properties (id) on delete cascade,
    night_date date not null,
    nightly_price integer not null check (nightly_price >= 0),
    updated_at timestamptz not null default now(),
    primary key (property_id, night_date)
);

create table if not exists public.calendar_blocks (
    property_id text not null references public.booking_properties (id) on delete cascade,
    blocked_date date not null,
    note text not null default '' check (length(note) <= 160),
    created_at timestamptz not null default now(),
    primary key (property_id, blocked_date)
);

create table if not exists public.bookings (
    id uuid primary key default gen_random_uuid(),
    property_id text not null references public.booking_properties (id),
    guest_name text not null check (length(trim(guest_name)) between 1 and 120),
    guest_email text not null default '' check (length(guest_email) <= 254),
    guest_phone text not null default '' check (length(guest_phone) <= 40),
    guest_count integer not null check (guest_count > 0),
    check_in date not null,
    check_out date not null,
    agreed_total integer not null check (agreed_total >= 0),
    status text not null default 'confirmed' check (status in ('confirmed', 'cancelled')),
    created_at timestamptz not null default now(),
    check (check_in < check_out),
    exclude using gist (
        property_id with =,
        daterange(check_in, check_out, '[)') with &&
    ) where (status = 'confirmed')
);

create index if not exists bookings_property_check_in_idx
on public.bookings (property_id, check_in);

create or replace function public.prevent_blocked_booking_overlap()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    perform pg_advisory_xact_lock(hashtext(new.property_id));

    if exists (
        select 1
                from public.bookings as booking
                where booking.property_id = new.property_id
                    and booking.status = 'confirmed'
                    and new.blocked_date >= booking.check_in
                    and new.blocked_date < booking.check_out
    ) then
        raise exception 'Il periodo include date già prenotate';
    end if;

    return new;
end;
$$;

drop trigger if exists calendar_blocks_check_bookings on public.calendar_blocks;
create trigger calendar_blocks_check_bookings
before insert or update on public.calendar_blocks
for each row execute function public.prevent_blocked_booking_overlap();

create or replace function public.validate_booking()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    minimum_stay integer;
    maximum_stay integer;
begin
    perform pg_advisory_xact_lock(hashtext(new.property_id));

    select property.minimum_stay, property.maximum_stay
    into minimum_stay, maximum_stay
    from public.booking_properties as property
    where property.id = new.property_id;

    if not found then
        raise exception 'Proprieta non trovata';
    end if;

    if new.status = 'confirmed' then
        if new.check_out - new.check_in < minimum_stay
           or (maximum_stay is not null and new.check_out - new.check_in > maximum_stay) then
            raise exception 'La durata del soggiorno non rispetta i limiti impostati';
        end if;

        if exists (
            select 1
            from public.calendar_blocks as block
            where block.property_id = new.property_id
              and block.blocked_date >= new.check_in
              and block.blocked_date < new.check_out
        ) then
            raise exception 'Il soggiorno include date bloccate';
        end if;
    end if;

    return new;
end;
$$;

drop trigger if exists bookings_validate on public.bookings;
create trigger bookings_validate
before insert or update on public.bookings
for each row execute function public.validate_booking();

revoke all on function public.is_site_admin() from public, anon;
grant execute on function public.is_site_admin() to authenticated;

create or replace view public.public_unavailable_periods
with (security_invoker = false)
as
    select property_id, blocked_date as start_date, blocked_date + 1 as end_date
    from public.calendar_blocks
    union all
    select property_id, check_in as start_date, check_out as end_date
    from public.bookings
    where status = 'confirmed';

alter table public.booking_properties enable row level security;
alter table public.site_admins enable row level security;
alter table public.nightly_prices enable row level security;
alter table public.calendar_blocks enable row level security;
alter table public.bookings enable row level security;

drop policy if exists booking_properties_public_read on public.booking_properties;
create policy booking_properties_public_read
on public.booking_properties for select to anon, authenticated
using (true);

drop policy if exists booking_properties_admin_write on public.booking_properties;
create policy booking_properties_admin_write
on public.booking_properties for all to authenticated
using (public.is_site_admin())
with check (public.is_site_admin());

drop policy if exists nightly_prices_public_read on public.nightly_prices;
create policy nightly_prices_public_read
on public.nightly_prices for select to anon, authenticated
using (true);

drop policy if exists nightly_prices_admin_write on public.nightly_prices;
create policy nightly_prices_admin_write
on public.nightly_prices for all to authenticated
using (public.is_site_admin())
with check (public.is_site_admin());

drop policy if exists calendar_blocks_admin_all on public.calendar_blocks;
create policy calendar_blocks_admin_all
on public.calendar_blocks for all to authenticated
using (public.is_site_admin())
with check (public.is_site_admin());

drop policy if exists bookings_admin_all on public.bookings;
create policy bookings_admin_all
on public.bookings for all to authenticated
using (public.is_site_admin())
with check (public.is_site_admin());

grant select on public.booking_properties, public.nightly_prices to anon, authenticated;
grant insert, update, delete on public.booking_properties, public.nightly_prices to authenticated;
grant select, insert, update, delete on public.calendar_blocks, public.bookings to authenticated;
grant select on public.public_unavailable_periods to anon, authenticated;