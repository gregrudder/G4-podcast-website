import type { Metadata } from "next";
import Link from "next/link";
import { ArticlePage } from "@/components/article-page";
import { MailLink } from "@/components/mail-link";
import { business } from "@/config/business";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Booking terms",
  description:
    "How a booking with G4 Podcast Studio & Marketing is agreed. Deposits, cancellation and file retention are confirmed in writing, not fixed on this page.",
  path: "/booking-terms",
});

export default function BookingTermsPage() {
  return (
    <ArticlePage
      title="Booking terms"
      lede="A booking is the email we both agree, not the act of sending the form. Deposit, cancellation and file-keeping rules are not fixed on this page yet."
      path="/booking-terms"
      crumb="Booking terms"
    >
      <h2>An enquiry is not a booking</h2>
      <p>
        The form on the <Link href="/contact">contact page</Link> asks us to
        reply. It does not reserve a studio, and it does not take payment. A
        booking exists when we confirm the date, the price and the work in
        writing, and you accept that email.
      </p>
      <h2>Studio time</h2>
      <p>
        Studio hire is charged by the hour, plus VAT, at the rates on the{" "}
        <Link href="/pricing">pricing page</Link>. What a named tier includes
        is stated in the confirmation for that booking. It is not safe to
        assume an edit, a producer, extra cameras or revisions are included
        just because a tier has a name.
      </p>
      <h2>Quoted work</h2>
      <p>
        Editing, video editing, short-form clips, content repurposing and
        on-location recording are quoted per job. Social media management has
        no fixed price; it starts with a consultation. Work starts after you
        accept the quote.
      </p>
      <h2>What is not fixed here</h2>
      <p>
        The following will be in the written confirmation when they apply.
        They are intentionally not invented on this page:
      </p>
      <ul>
        <li>any deposit, and when it is due</li>
        <li>the cancellation window, and what is refunded</li>
        <li>what happens if you arrive late or the session overruns</li>
        <li>how files are delivered, and how long we keep them</li>
        <li>who owns the recording and the edit</li>
        <li>payment methods</li>
      </ul>
      <p>
        Until you have that email, do not assume a term in your favour or in
        ours. If a point matters — step-free access, a remote guest, a
        deadline — put it in the enquiry so it can be answered before you
        commit.
      </p>
      <h2>VAT</h2>
      <p>
        Prices on the rate card exclude VAT. VAT is added on the bill. The VAT
        number is not published on this website yet.
      </p>
      <h2>On location</h2>
      <p>
        An on-location job has its own quote, including travel and the kit
        being brought. The studio rates do not automatically apply outside
        Wishaw.
      </p>
      <h2>Contact</h2>
      <p>
        {business.legalName}, trading as {business.tradingName}. Email{" "}
        <MailLink />.
      </p>
    </ArticlePage>
  );
}
