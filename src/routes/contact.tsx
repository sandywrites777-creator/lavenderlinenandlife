import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PINTEREST_URL } from "@/data/products";

/** Replace with your real email address. */
export const CONTACT_EMAIL = "";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sandy — Lavenderlinenandlife" },
      { name: "description", content: "Say hello to Sandy at Lavenderlinenandlife for questions, collaborations, or a link that stopped working." },
      { property: "og:title", content: "Contact — Lavenderlinenandlife" },
      { property: "og:description", content: "Questions, collaborations, or a broken link? Here's how to reach Sandy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  staticData: { sitemap: true },
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Say hello</p>
        <h1 className="mt-3 font-heading text-5xl tracking-tight text-foreground sm:text-6xl">Contact</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Spotted a link that doesn't work anymore? Have a question about a post, or an idea for
          a collaboration? I read every message, though it might take me a few days to reply.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-heading text-2xl text-foreground">Email</h2>
            {CONTACT_EMAIL ? (
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-primary underline">{CONTACT_EMAIL}</a>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">Email address coming soon — message me on Pinterest for now.</p>
            )}
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
            <h2 className="font-heading text-2xl text-foreground">Pinterest</h2>
            <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer" className="mt-1 block text-primary underline">
              @sandywrites777
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
