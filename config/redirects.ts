import { business } from "./business";

type LegacyRedirect = {
  source: string;
  destination: string;
  statusCode: 301;
  has?: { type: "host"; value: string }[];
};

const site = business.siteUrl;

function to(source: string, path: string): LegacyRedirect {
  return {
    source,
    destination: `${site}${path}`,
    statusCode: 301,
  };
}

/**
 * Old GoDaddy Website Builder URLs, from the discovery report redirect map.
 * Destinations are absolute so apex and www both land on the primary host
 * in one hop. statusCode 301 is set explicitly (Next.js `permanent: true`
 * would emit 308).
 */
const blogPosts: readonly (readonly [string, string])[] = [
  ["the-podcast-boom-a-modern-media-marvel", "/guides"],
  ["who-should-you-choose-g4-podcast-studios", "/podcast-studio"],
  [
    "how-to-make-your-podcast-stand-out-in-a-crowded-market",
    "/guides/audio-or-video-podcast",
  ],
  ["turning-your-podcast-into-a-revenue-stream", "/business-podcasts"],
  [
    "how-to-choose-the-perfect-podcast-topic",
    "/guides/before-you-book-a-podcast-studio",
  ],
  ["why-every-business-should-start-a-podcast", "/business-podcasts"],
  ["spotify-have-launched-comments", "/guides"],
  ["go-radio-launches-new-podcast-with-glasgow-doctor", "/guides"],
  ["spotify-now-has-250000-videos", "/guides/audio-or-video-podcast"],
  ["a-pint-and-two-shots-live-show", "/work/a-pint-and-two-shots"],
  ["podcast-live-shows-coming-to-scotland", "/guides"],
  ["the-uks-top-5-podcasts-right-now", "/guides"],
  ["the-power-of-podcasts-bbc-sounds-record-breaking-success", "/guides"],
  [
    "unveiling-the-thrilling-world-of-true-crime-at-crimecon-glasgow",
    "/guides",
  ],
  [
    "the-power-of-podcasts-why-your-business-should-tune-in",
    "/business-podcasts",
  ],
  [
    "podcast-hosting-5-essential-tips-for-success",
    "/guides/how-to-brief-a-podcast-editor",
  ],
  ["youtube-test-new-podcast-feature", "/guides"],
];

export const legacyRedirects: LegacyRedirect[] = [
  to("/podcast-pricing", "/pricing"),
  to("/social-media-pricing", "/short-form-content"),
  to("/about-us", "/about"),
  to("/meet-the-team", "/about#team"),
  to("/leatherd", "/work/leatherd"),
  to("/a-pint-and-two-shots", "/work/a-pint-and-two-shots"),
  to("/reviews", "/about#reviews"),
  to("/g4-claims-1", "/about"),
  to("/blog", "/guides"),
  ...blogPosts.map(([slug, path]) => to(`/blog/f/${slug}`, path)),
  to("/blog/:path*", "/guides"),
  {
    source: "/",
    has: [{ type: "host", value: "g4podcast.net" }],
    destination: `${site}/`,
    statusCode: 301,
  },
  {
    source: "/:path+",
    has: [{ type: "host", value: "g4podcast.net" }],
    destination: `${site}/:path+`,
    statusCode: 301,
  },
];
