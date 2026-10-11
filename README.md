# G4 Podcast Studio & Marketing

Website for G4 Marketing Ltd, trading as G4 Podcast Studio & Marketing. Next.js (App Router) and TypeScript, built to import into Vercel with no extra framework config.

The canonical host is `https://www.g4podcast.net`. Pages are static. The enquiry form is a server action. Search engines are blocked unless `VERCEL_ENV=production`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

`typecheck` runs `next typegen` and then `tsc --noEmit`.

## Edit prices

Hourly studio rates live only in `data/packages.ts`.

- Bronze, Silver, Gold and Platinum: change `hourlyRateExVat`.
- Do not add inclusions until Greg confirms them. The `inclusions` field stays `null` on purpose.
- Editing and short-form stay quote-based. Social media management stays “no fixed price” with the consultation call to action.

The pricing page, homepage, FAQs and studio `Offer` schema all read this file.

## Edit business facts

`config/business.ts` is the single source for the legal name, trading name, domain, email and location facts that are confirmed.

Anything still open is `null` or tagged `NEEDS CONFIRMATION FROM GREG`. Do not render those fields as if they were real. The public pages omit them. `TODO.md` lists every open item, including values that appeared on the old site but are not cleared for this one.

Other sources of truth:

| What | Where |
| --- | --- |
| Services | `data/services.ts` |
| Studios and sets | `data/studios.ts` |
| Enquiry checkboxes | `data/enquiry-options.ts` |
| FAQs | `data/faqs.ts` |
| Case study facts | `data/case-studies.ts` |
| Case study narrative | `content/work/<slug>.mdx` |
| Guides | `content/guides/*.mdx` (frontmatter is validated at build) |
| Navigation | `data/navigation.ts` |
| Old GoDaddy URLs | `config/redirects.ts` |

A case study MDX file must match a slug in `data/case-studies.ts`. The build fails if one side is missing.

Guides are MDX with `title`, `description`, `published` (`YYYY-MM-DD`) and `order`.

## Import into Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New Project** and import the repo. Framework preset: Next.js. Leave the build command as `npm run build` and the output as the Next.js default. Do not set `output: export`.
3. Add the environment variables below for Production, and again for Preview if you want the form to send email from preview deployments.
4. Add the domains `g4podcast.net` and `www.g4podcast.net`. Set **www** as the primary domain so the apex redirects to `https://www.g4podcast.net`. The app also sends a 301 from the apex host to www, and the canonical tags use www.
5. Production deployments are the only ones allowed in `robots.txt` and the robots meta tag. Preview deployments send `X-Robots-Tag: noindex, nofollow` and a disallow-all robots file. `VERCEL_ENV` is set by Vercel. Do not copy it into the dashboard as a fake `production` value on preview.

Use a **Pro** (or other commercial) Vercel plan. The Hobby plan is for personal, non-commercial use.

### Environment variables

Copy `.env.example` to `.env.local` for local work. Never commit real keys.

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key. If this or the from-address is empty, the form does not pretend to send. The visitor is told to email info@g4-marketing.net, with a mailto link that includes what they typed. |
| `RESEND_FROM_EMAIL` | Verified sender in Resend, for example an address on `g4-marketing.net`. Do not send as `@g4podcast.net`. That domain has no mail records. |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries. Defaults to `info@g4-marketing.net` if unset. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4. Leave blank to disable. The tag loads only after the visitor presses **Accept analytics**. The ID on the old site still needs an owner confirmed. See `TODO.md`. |
| `NEXT_PUBLIC_VERCEL_ANALYTICS` | Set to `true` to load `@vercel/analytics`. Anything else leaves it off. |

Conversion events, when the relevant tool is enabled:

- `form_submit` — Resend accepted the enquiry. The email fallback and the honeypot do not count.
- `mailto_click` — a `mailto:` link.
- `tel_click` — the phone link `tel:+447925707766`. The visible number is 07925 707766.
- `whatsapp_click` — a WhatsApp link (`https://wa.me/447925707766`), including the mobile “WhatsApp us” button.
- `booking_cta` — “Book a session”, “Book a consultation”, and the other enquiry buttons. The `intent` parameter is the checkbox id.

### DNS, when Greg is ready to cut over

Do not change the GoDaddy nameservers. At cutover, replace only the apex A records and the `www` CNAME with the values Vercel shows for this project. Leave `_domainconnect` alone. Lower the TTL the day before. Keep the GoDaddy site subscription for a short period as a rollback. Email for `g4-marketing.net` and `g4marketing.net` is unrelated to this domain and must not be edited as part of the website move.

Details and the open questions are in `TODO.md`.

## Redirects

`config/redirects.ts` 301s the old GoDaddy paths (pricing, about, team, the two show URLs, reviews, G4 Claims, and the blog posts) onto the new pages. Blog posts that were generic news go to `/guides` or the closest service page.

## Design and content rules

UK English. No invented prices, inclusions, phone numbers, street address, opening hours, review quotes or outcome statistics. Unknowns stay in config and in `TODO.md`.

The visual system is a dark, high-contrast production layout: solid colours, the G4 red (`#A80000`), serif headlines. Logo files are in `public/brand` (red monogram, light lockup, and a white-and-red lockup for the dark page). No gradients, glow or glass effects.
