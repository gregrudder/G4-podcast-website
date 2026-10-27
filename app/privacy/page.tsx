import type { Metadata } from "next";
import Link from "next/link";
import { ArticlePage } from "@/components/article-page";
import { MailLink, PhoneLink } from "@/components/mail-link";
import { business } from "@/config/business";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description:
    "How G4 Marketing Ltd uses enquiry details sent through g4podcast.net, and what analytics do if you accept them.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ArticlePage
      title="Privacy"
      lede="This page describes what the website actually does with personal information. It is not a substitute for legal advice, and a lawyer has not signed it off yet."
      path="/privacy"
      crumb="Privacy"
    >
      <h2>Who we are</h2>
      <p>
        The data controller is {business.legalName}, trading as {business.tradingName}.
        The website is {business.domain}. Contact <MailLink /> or call{" "}
        <PhoneLink />. The postal address is {business.address.streetAddress},{" "}
        {business.address.locality}, {business.address.region}{" "}
        {business.address.postcode}, {business.address.country}.
      </p>
      <h2>What we collect</h2>
      <p>If you use the enquiry form, we receive:</p>
      <ul>
        <li>your name</li>
        <li>the business or podcast name</li>
        <li>your email address</li>
        <li>your phone number, if you give one</li>
        <li>which services you tick</li>
        <li>your message</li>
      </ul>
      <p>
        We do not ask for payment card details on this site. We do not run a
        mailing list from the form.
      </p>
      <h2>How we use it</h2>
      <p>
        We use the enquiry to reply, to prepare a rate or a quote, and to keep
        a record of that conversation if a booking follows. The form is not used
        to send marketing.
      </p>
      <p>
        The legal bases we rely on are steps taken at your request before a
        contract (UK GDPR Article 6(1)(b)) and our legitimate interest in
        answering enquiries (Article 6(1)(f)).
      </p>
      <h2>Email delivery</h2>
      <p>
        When email sending is configured, the form is delivered with Resend to{" "}
        {business.email}. Resend processes the message in order to deliver it.
        The website does not keep its own database of form submissions.
      </p>
      <p>
        If email sending is not configured, or a send fails, the site tells you
        to email {business.email} yourself. In that case the form is not stored.
      </p>
      <h2>Hosting</h2>
      <p>
        The site is hosted on Vercel. Vercel processes technical data such as
        IP addresses in server logs as part of providing the hosting. Their
        privacy information is on vercel.com.
      </p>
      <h2>Analytics</h2>
      <p>
        Google Analytics 4 loads only if a measurement ID is configured and you
        choose Accept on the banner. If you decline, or if no measurement ID is
        set, the Google tag is not added. See the <Link href="/cookies">cookie page</Link>.
      </p>
      <p>
        Vercel Web Analytics can be switched on separately. It is intended as a
        cookieless page-view count. It is off unless the environment variable
        that enables it is set. Whether that product needs consent under UK
        rules should be confirmed before it is turned on in production.
      </p>
      <h2>How long we keep enquiries</h2>
      <p>
        Enquiry emails are kept for as long as we need them to reply and, if
        you book, to keep a record of what was agreed. We do not publish a
        fixed number of months here, because that period is not confirmed. You
        can ask us to delete an enquiry by emailing <MailLink />.
      </p>
      <h2>Who we share it with</h2>
      <p>
        We do not sell personal information. Processors are the email provider
        (Resend, when used), the host (Vercel), and Google if you accept
        analytics. Those companies may process data outside the UK. You can ask
        us which safeguards are in place for a given processor.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask for a copy of your information, a correction, deletion,
        restriction, or object to processing based on legitimate interests. You
        can complain to the Information Commissioner’s Office at ico.org.uk.
        We have not published an ICO registration number because it is not
        confirmed.
      </p>
      <h2>Children</h2>
      <p>
        The studios are for adult clients and businesses. We do not knowingly
        collect information from children.
      </p>
    </ArticlePage>
  );
}
