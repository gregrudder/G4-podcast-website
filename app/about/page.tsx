import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { GuestWaitingPhoto } from "@/components/guest-waiting-photo";
import { MediaSlot } from "@/components/media-slot";
import { MailLink, PhoneLink, WhatsAppLink } from "@/components/mail-link";
import { business } from "@/config/business";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "About G4 Podcast Studio & Marketing",
  description:
    "G4 Marketing Ltd trades as G4 Podcast Studio & Marketing. Two podcast studios at 9 Pickering Works, Netherton Road, Wishaw ML2 0EQ, with free parking.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      </Container>
      <Container className="pb-16">
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
          G4 Marketing Ltd, trading as G4 Podcast Studio &amp; Marketing
        </h1>
        <div className="richtext mt-8 max-w-3xl">
          <p>
            The company runs two podcast studios in Wishaw, North Lanarkshire,
            and records on location. The rooms are set up for multi-camera video
            podcasts. Production, editing, short-form clips and social media
            management sit alongside studio hire.
          </p>
          <p>
            The website is {business.domain}. Enquiries go to <MailLink />, or
            call <PhoneLink />, or <WhatsAppLink />. Opening hours are not
            published on this page yet.
          </p>
          <h2>Where</h2>
          <p>
            {business.address.streetAddress}, {business.address.locality},{" "}
            {business.address.region} {business.address.postcode},{" "}
            {business.address.country}. Free parking on site. Clients come from
            Wishaw, the rest of Lanarkshire, and Glasgow. There is no second
            address in Glasgow, and this site does not pretend there is one.
          </p>
          <GuestWaitingPhoto className="mt-6" />
          <h2 id="team">Team</h2>
          <p>
            Names, roles and photographs of the people who run the studios are
            not published yet. When they are confirmed, they will go here.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MediaSlot id="G4-TEAM-01" />
            <MediaSlot id="G4-TEAM-02" />
            <MediaSlot id="G4-TEAM-03" />
          </div>
          <h2 id="reviews">Reviews</h2>
          <p>
            Client reviews are not quoted on this website yet. We will add them
            when we have permission to use the words, and a confirmed link to
            the Google profile. Until then, this section stays empty of
            testimonials on purpose.
          </p>
          <h2>Press</h2>
          <p>
            The Daily Record has reported on the Wishaw studio. Two pieces are
            linked below. They are the newspaper’s account, not copy written
            for this site.
          </p>
          <ul>
            <li>
              <a href="https://www.dailyrecord.co.uk/in-your-area/lanarkshire/scottish-tv-stars-exclusively-use-27650370">
                Scottish TV stars to exclusively use Wishaw studio for their new podcast
              </a>
            </li>
            <li>
              <a href="https://www.dailyrecord.co.uk/in-your-area/lanarkshire/new-podcast-studio-attracts-big-24472947">
                New podcast studio attracts big names and offers something new for Lanarkshire
              </a>
            </li>
          </ul>
          <p>
            The shows named on this site are on the{" "}
            <Link href="/our-work">work page</Link>.
          </p>
        </div>
      </Container>
    </>
  );
}
