import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Lavenderlinenandlife" },
      { name: "description", content: "How Lavenderlinenandlife handles visitor information, cookies, and Amazon affiliate links." },
      { property: "og:title", content: "Privacy Policy — Lavenderlinenandlife" },
      { property: "og:description", content: "How this site handles your information and affiliate links." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  staticData: { sitemap: true },
  component: Privacy,
});

const sections = [
  ["What this site collects", "This site has no accounts, comment forms, or newsletter, so I don't ask you for your name or email here. Like most websites, the hosting provider may keep basic technical logs (such as browser type and pages visited) to keep the site running and secure."],
  ["Amazon affiliate links", "Lavenderlinenandlife is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and visit Amazon, Amazon may set cookies to track the referral. That data is handled under Amazon's own privacy notice, not by me."],
  ["Third-party links", "Some links go to Pinterest, Amazon, and photo credit pages on Unsplash. Those sites have their own privacy policies, and I don't control what they collect."],
  ["Emails you send me", "If you email me, I'll only use your message and address to reply. I won't sell or share it."],
  ["Children", "This site isn't aimed at children under 13 and doesn't knowingly collect their information."],
  ["Changes", "If this policy changes (for example, if I add a newsletter), I'll update this page and the date below."],
];

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <h1 className="font-heading text-5xl tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: October 12, 2026</p>
        <div className="mt-10 space-y-8">
          {sections.map(([h, p]) => (
            <div key={h}>
              <h2 className="font-heading text-3xl text-foreground">{h}</h2>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
