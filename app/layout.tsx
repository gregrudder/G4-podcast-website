import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Outfit } from "next/font/google";
import { SiteAnalytics } from "@/components/analytics";
import { CookieNotice } from "@/components/cookie-notice";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { business } from "@/config/business";
import { fromHourlyLabel } from "@/data/packages";
import { allowIndexing } from "@/lib/indexing";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.tradingName}`,
    template: `%s | ${business.tradingName}`,
  },
  description: `Podcasts, content and social from two studios in Wishaw, North Lanarkshire. ${fromHourlyLabel()}. Social media management is quoted case by case.`,
  applicationName: business.tradingName,
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  formatDetection: { telephone: false, email: false },
  robots: allowIndexing()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.tradingName,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <div className="grain" aria-hidden="true" />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <CookieNotice />
        <SiteAnalytics />
      </body>
    </html>
  );
}
