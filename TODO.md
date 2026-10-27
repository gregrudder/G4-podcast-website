# Needs confirmation from Greg

Confirmed and already in the site: legal entity G4 Marketing Ltd; trading name G4 Podcast Studio & Marketing; domain g4podcast.net; email info@g4-marketing.net; phone and WhatsApp 07925 707766 (+44 7925 707766); the G4 monogram and “podcast studio” lockup in `public/brand`; street address 9 Pickering Works, Netherton Road, Wishaw ML2 0EQ, North Lanarkshire, Scotland; two podcast studios; free parking; on-location recording; the kit list in `config/business.ts`; the services list; hourly studio rates in `data/packages.ts` (Bronze £40, Silver £70, Gold £90, Platinum £130, all + VAT) with the inclusions from Greg's rate card; social media management with no set price; permission to name A Pint and Two Shots (Grado, Stephen Purdon, Chris Toal), Leather’d (MMA, Paul Craig and Ross Cooper) and Roughing The Podcasters (NFL). No outcome statistics are published.

The old website and the Daily Record used some of the values below. They are **not** on the new site. Publish them only after Greg confirms they are still correct.

## Contact and place

- [x] Street address and postcode: 9 Pickering Works, Netherton Road, Wishaw ML2 0EQ. Opening hours, the VAT number and the company number are still not published.
- [ ] Opening hours, and whether evenings or weekends are bookable. Public place data has shown “Open 24 hours”, which should not be copied if it is wrong.
- [ ] Drive times and directions from Glasgow, Motherwell, Hamilton and East Kilbride. Nearest station and walking or taxi note. Do not publish a guessed mileage.
- [ ] Parking beyond “free on site”: where it is, how many spaces, any restriction.
- [ ] Studio capacity (how many people, seated).
- [ ] Accessibility: step-free access, toilets, hearing support. Do not claim step-free until it is confirmed.
- [ ] How Studio 1 and Studio 2 differ: size, layout, which set lives in which room.

## Company

- [ ] Company number for G4 Marketing Ltd.
- [ ] VAT number. The site says prices exclude VAT but does not show a number.
- [ ] ICO registration, if any.
- [ ] Legal review of `/privacy`, `/cookies` and `/booking-terms` before launch.
- [ ] Whether “in association with G4 Claims” should appear, and the exact wording. The old site had a claims page. It now redirects to `/about`, which does not mention Claims.
- [ ] Primary host: the build uses `https://www.g4podcast.net` and 301s the apex to www, as the discovery report recommended. Confirm before DNS cutover.
- [ ] Domain auto-renew. Registry expiry on the discovery snapshot was 9 January 2027.
- [ ] Which inbox receives form enquiries. The default is info@g4-marketing.net. The other public address (info@g4marketing.net, no hyphen) is not used.

## Pricing and service detail

- [ ] Inclusions for Bronze, Silver, Gold and Platinum: cameras, producer, edit, revisions, clips, thumbnail, turnaround. The old pricing images are not copied. They had typos and conflicted with an earlier brief.
- [ ] What “an hour” means if a session overruns, and whether there is a minimum booking.
- [ ] File delivery method, file format, and how long files are kept.
- [ ] Who owns the recording and the edit.
- [ ] Revision policy and any fee after the included rounds.
- [ ] Short-form: clip length, caption style, number of revisions, whether client-supplied footage is accepted, any retainer.
- [ ] Social media management: what is actually done (platforms, posting, reporting) once the consultation price is agreed.
- [ ] On-location: service area, travel fees, minimum booking, which kit travels.
- [ ] Whether non-podcast video (promos, events) is sold. There is no page for it.
- [ ] Remote guests, live streaming, and a distinct audio-only rate. Not claimed.
- [ ] Deposit, cancellation window, late arrival, payment methods.
- [ ] Whether a free studio visit is offered. The FAQ tells people to ask, and not to turn up unannounced.
- [ ] Self-serve booking with a deposit (calendar and card) is out of scope. Phase 1 is the enquiry form.

## People, proof, assets

- [ ] Current team, roles and photos. The old site listed Greg Rudder, Grant Rudder and Craig Pollock. Press has also named Nicole Rudder. None of these are published as the current team.
- [ ] Photographs of both studios, both sets, the TV with branding, kit, exterior, entrance, parking, and sessions with consent. Diagrams are placeholders. No stock photos of people.
- [x] Player 2 Pro pitch stills (Calvin Miller and Dylan Tait) and Meet Your Competition studio stills are published. Host names are not published for Meet Your Competition.
- [x] Scottish Podcast Awards '26 trophy photograph is on the A Pint and Two Shots page. Copy stays as tagged Best Entertainment and Pop Culture Podcast. The hosts in that photograph are not named.
- [x] Higher Level MMA mat stills from the Leather'd Patreon technique session with Ross Cooper, Sean Clancy Jnr and Paul Craig are on the Leather'd page and On location. A separate 2025 Higher Level portrait set is not that session and is not used.
- [ ] A short studio walkthrough video, and episode URLs that can be embedded.
- [ ] Host names for Roughing The Podcasters, if they should be published.
- [ ] Whether any further shows (for example Ewen and Cat Uncut, mentioned only in the discovery notes) may be named. They are not on the site.
- [ ] Google review quotes with permission, and the Google Business Profile URL. No star rating is marked up.
- [ ] Social profile URLs to publish. The old site linked more than one Facebook page and an Instagram account. Press has mentioned @g4_podcast. None are linked until the list is confirmed.

## Accounts

- [ ] Who owns the GA4 property. The old site used measurement ID `G-KBMR77DXPF`. It is not hardcoded. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` only after ownership is confirmed.
- [ ] Search Console on g4podcast.net, via a DNS TXT record that does not replace other records.
- [ ] Google Business Profile manager access: categories, hours, services, photos, and the UTM link from the discovery report.
- [ ] Resend: which from-address to verify. Prefer an address on g4-marketing.net. Do not send mail as @g4podcast.net.
- [ ] Vercel project owner and plan.
- [ ] Who will edit copy after launch, and whether a git-based editor should be added later. Content is MDX and TypeScript in the repo so that can be added without moving the files.

## Launch checks that are not content

- [ ] HTTP to HTTPS on the live domain (port 80 was not testable in the original audit environment).
- [ ] One 301 from the apex to www, with no chain through the old GoDaddy host.
- [ ] Confirm the 301s in `config/redirects.ts` against any URLs that still have external links.
