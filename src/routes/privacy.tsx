import { createFileRoute, Link } from "@tanstack/react-router";
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
  ["Basic visitor information", "The site’s hosting provider and any basic analytics tools may collect technical information such as your browser type, device, pages visited, referring website and IP address. This information helps understand visits and keep the site working securely. This site does not offer visitor accounts."],
  ["Cookies", "Cookies are small files stored by your browser. Hosting services or analytics tools may use cookies to support the site or measure visits. You can block or delete cookies in your browser settings; doing so may affect some website features."],
  ["Amazon, Pinterest and other links", "Links may take you to Amazon, Pinterest or photo credit pages on Unsplash. Those third-party services may use cookies, measure referrals and collect information under their own privacy policies. This site does not control those cookies or the information collected after you leave."],
  ["Messages you send", "The Contact form prepares a draft in your email app. It does not submit or store your message on this website. If you send the email, I receive your name, email address and message and use them to respond to your enquiry. Please do not send sensitive personal information."],
  ["No sale of personal data", "I do not sell your personal data. Information from an enquiry is used to respond and manage that conversation, not sold to advertisers."],
  ["Children", "This site is not intended for children under 13 and does not knowingly request their personal information."],
  ["Changes to this policy", "If the way this site handles information changes, this page and its last-updated date will be updated."],
];

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <h1 className="font-heading text-5xl tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: October 22, 2026</p>
        <div className="mt-10 space-y-8">
          {sections.map(([h, p]) => (
            <div key={h}>
              <h2 className="font-heading text-3xl text-foreground">{h}</h2>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-8 font-heading text-3xl text-foreground">Contact and privacy questions</h2>
        <p className="mt-2 text-lg leading-relaxed text-muted-foreground">For questions about this policy or your messages, email <a href="mailto:sandywrites777@gmail.com" className="break-all text-primary underline">sandywrites777@gmail.com</a> or visit the <Link to="/contact" className="text-primary underline">Contact page</Link>.</p>
      </section>
      <SiteFooter />
    </div>
  );
}
