import type { Metadata } from "next";
import Link from "next/link";
import { ArticlePage } from "@/components/article-page";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Cookies",
  description:
    "How g4podcast.net uses cookies. Google Analytics loads only after you accept. The consent choice is stored in local storage.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <ArticlePage
      title="Cookies"
      lede="The site does not need a cookie to show pages or to send the enquiry form. Analytics cookies are optional."
      path="/cookies"
      crumb="Cookies"
    >
      <h2>Essential</h2>
      <p>
        There is no account and no shopping basket. The enquiry form posts to
        the server without setting a tracking cookie.
      </p>
      <p>
        If Google Analytics is configured, your Accept or Decline choice is
        stored in the browser’s local storage under the key g4-cookie-consent.
        That is local storage, not a cookie. It stays on your device so the
        banner does not ask again.
      </p>
      <h2>Google Analytics 4</h2>
      <p>
        If a measurement ID is set in the site configuration, a banner offers
        Accept analytics and Decline with the same visual weight. The Google
        tag is added only after Accept. Decline means the tag is not loaded.
      </p>
      <p>
        After acceptance, Google Analytics sets its own cookies (commonly named
        _ga and related) and receives page views and the events this site
        sends: form submissions that were emailed, clicks on email links, clicks
        on the phone link, clicks on WhatsApp links, and clicks on booking
        buttons. Google’s own description of those cookies is at
        policies.google.com.
      </p>
      <p>
        If no measurement ID is configured, the banner is not shown and Google
        Analytics does not run.
      </p>
      <h2>Vercel Web Analytics</h2>
      <p>
        This can be enabled with an environment variable. Vercel describes it
        as cookieless. It is not controlled by the Accept / Decline banner.
        Leave it off until that has been checked against the{" "}
        <Link href="/privacy">privacy page</Link> and, if needed, legal advice.
      </p>
      <h2>Changing your mind</h2>
      <p>
        Clear local storage for this site, or remove the g4-cookie-consent
        entry, and reload. The banner will show again if analytics is
        configured. You can also block googletagmanager.com in the browser.
      </p>
    </ArticlePage>
  );
}
