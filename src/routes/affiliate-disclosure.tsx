import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { AFFILIATE_DISCLOSURE } from "@/components/AffiliateNote";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({ meta: [
    { title: "Affiliate Disclosure — Lavenderlinenandlife" },
    { name: "description", content: "How affiliate links and commissions work at Lavenderlinenandlife, and how curated picks are chosen." },
    { property: "og:title", content: "Affiliate Disclosure — Lavenderlinenandlife" },
    { property: "og:description", content: "Clear information about commissions, curated picks and independent opinions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  staticData: { sitemap: true },
  component: AffiliateDisclosure,
});

function AffiliateDisclosure() {
  return <div className="min-h-screen bg-background">
    <SiteNav />
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl">Affiliate Disclosure</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: October 22, 2026</p>
      <div className="mt-10 space-y-8 text-lg leading-relaxed text-muted-foreground">
        <section><h2 className="font-heading text-3xl text-foreground">Links and commissions</h2><p className="mt-2">{AFFILIATE_DISCLOSURE} Product links may take you to Amazon or another retailer. Not every link earns a commission.</p></section>
        <section><h2 className="font-heading text-3xl text-foreground">My opinions are my own</h2><p className="mt-2">I choose the products and topics shared here. My opinions are my own, and a link is not a guarantee that a product will suit you. The products are curated picks, not claims of personal testing. If I share personal experience with a product, I will say so clearly.</p></section>
        <section><h2 className="font-heading text-3xl text-foreground">Before you buy</h2><p className="mt-2">Check the retailer’s current product details, sizes, shades, availability and customer reviews before ordering. Purchases, delivery and returns are handled by the retailer, not this site.</p></section>
        <section><h2 className="font-heading text-3xl text-foreground">Questions?</h2><p className="mt-2">Please <Link to="/contact" className="text-primary underline">contact me</Link> if you have a question about a link or a recommendation.</p></section>
      </div>
    </main>
    <SiteFooter />
  </div>;
}