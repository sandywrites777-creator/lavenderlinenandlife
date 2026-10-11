import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import about from "@/assets/about.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PINTEREST_URL } from "@/data/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lavenderlinenandlife" },
      {
        name: "description",
        content:
          "Hi, I'm Sandy — I curate cozy, pretty finds on Pinterest and share the ones worth buying, with honest reviews and affiliate links.",
      },
      { property: "og:title", content: "About — Lavenderlinenandlife" },
      {
        property: "og:description",
        content:
          "Hi, I'm Sandy — I curate cozy, pretty finds on Pinterest and share the ones worth buying.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-lavender/40 via-blush to-rose" />
          <img
            src={about}
            alt="Hands holding a warm cup of tea over an open journal"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Nice to meet you
          </p>
          <h1 className="mt-3 font-heading text-5xl tracking-tight text-foreground sm:text-6xl">
            Hi, I'm Sandy
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a hopeless romantic for cozy corners, pretty stationery, and
              skincare that feels like a ritual. What started as pinning my dream
              life on Pinterest turned into something better — actually finding and
              testing the things worth bringing home.
            </p>
            <p>
              Here, I share the finds that made the cut. Every product on this site
              is something I've genuinely used and loved, linked through Amazon so
              you can grab it in a couple of clicks.
            </p>
            <p className="flex items-start gap-2 text-base">
              <Heart className="mt-1 h-4 w-4 shrink-0 fill-primary text-primary" />
              <span>
                Full transparency: as an Amazon Associate, I earn a small commission
                from qualifying purchases — it never costs you anything extra, and it
                helps me keep curating.
              </span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PINTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Follow me on Pinterest
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Browse my favorites
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
