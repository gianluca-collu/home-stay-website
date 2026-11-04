# Setup Supabase

## 1. Create a project

Create one Supabase project for all properties. The current schema uses the property IDs already present in `properties.json`.

## 2. Apply the database schema

In the Supabase Dashboard, open **SQL Editor**, paste the contents of `supabase-schema.sql`, and run it. The script creates the tables and access policies, then adds the three property records with their current base prices and minimum stays.

It intentionally does not copy the existing seasonal prices or availability periods: their dates are out of date. Set current periods from the admin page after the project is connected.

## 3. Create the administrator

In **Authentication > Users**, create the administrator account. Disable public sign-ups in the Auth provider settings. Then run the following query in SQL Editor, replacing the email with the administrator account email:

```sql
insert into public.site_admins (user_id)
select id
from auth.users
where email = 'admin@example.com'
on conflict (user_id) do nothing;
```

Only users listed in `site_admins` can make administrative changes. The admin page checks this membership after login.

## 4. Configure the website

In `supabase-config.js`, set `url` to the project's **Project URL** and `publishableKey` to its **Publishable key**. If the Dashboard only shows the legacy API keys, use the `anon` key. Never put the `service_role` or `secret` key in this website.

The public key is expected to be visible in browser code. Database access is protected by the row-level security policies in `supabase-schema.sql`.

## 5. Enter dates and rates

Open `admin.html`, sign in, and configure each property's open periods and seasonal prices. The calendar is closed by default until an open period is entered. A blank maximum-stay setting means no upper limit.

## Current fallback behavior

When Supabase is available, the public site reads current prices and availability from it and stores the last successful response in that visitor's browser. If Supabase is temporarily unavailable, returning visitors see that cached copy with a warning; a first-time visitor falls back to the existing static files, also with a warning. EmailJS remains independent, so an information request can still reach the owner by email, but it will not be recorded in Supabase until the database is available.

The Free plan has no downloadable database backups. Export the database periodically before treating it as the sole record of confirmed bookings.