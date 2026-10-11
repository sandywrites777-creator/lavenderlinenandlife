import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, PINTEREST_URL } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lavenderlinenandlife — Cozy Finds & Honest Favorites" },
      {
        name: "description",
        content:
          "A curated corner of the internet for pretty, cozy things — beauty, home decor, and stationery favorites hand-picked by Sandy and shared on Pinterest.",
      },
      {
        property: "og:title",
        content: "Lavenderlinenandlife — Cozy Finds & Honest Favorites",
      },
      {
        property: "og:description",
        content:
          "Beauty, home decor, and stationery favorites, curated with love. Shop the finds you see on my Pinterest boards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.find((p) => p.featured)!;
  const editorsPicks = products.filter((p) => p.id !== featured.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Curated with love
            </span>
            <h1 className="mt-6 font-heading text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Pretty things,
              <br />
              <em className="text-primary">honestly</em> loved.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Welcome to my little corner of the internet — where I share the cozy,
              beautiful finds from my Pinterest boards that are actually worth it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Shop my favorites
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={PINTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-card transition-transform hover:-translate-y-0.5"
              >
                Follow my Pinterest
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-rose via-blush to-lavender/40" />
            <img
              src={hero}
              alt="A cozy flat-lay of a journal, candle, and coffee on blush pink linen"
              width={1600}
              height={1024}
              className="w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Featured pick — magazine style */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:py-20">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              This week's featured find
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-foreground sm:text-5xl">
              {featured.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {featured.blurb}
            </p>
            <blockquote className="mt-6 border-l-2 border-primary/50 pl-4 font-heading text-xl italic leading-relaxed text-foreground/80">
              "{featured.whyILoveIt}"
            </blockquote>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              View on Amazon · {featured.price}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="lg:col-span-3">
            <img
              src={featured.image}
              alt={featured.name}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Editor's picks */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Fresh from my boards
            </p>
            <h2 className="mt-3 font-heading text-4xl text-foreground sm:text-5xl">
              Editor's picks
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-plum sm:inline-flex"
          >
            See everything
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {editorsPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/shop" className="text-sm font-medium text-primary">
            See everything →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border/60 bg-blush/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-4xl text-foreground sm:text-5xl">
            What I love to share
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {categories.map((category, i) => (
              <Link
                key={category}
                to="/shop"
                className="group rounded-3xl border border-border/60 bg-card p-8 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="font-heading text-5xl text-primary/40">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-2xl text-foreground">
                  {category}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category === "Beauty & Self-care" &&
                    "Skincare, makeup, and little rituals that feel like self-love."}
                  {category === "Home & Decor" &&
                    "Cozy corners, soft textures, and pieces that make a house a home."}
                  {category === "Stationery & Tech" &&
                    "Planners, pens, and desk pretties for romanticizing your to-do list."}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pinterest CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-plum to-lavender px-6 py-14 text-center shadow-soft sm:px-12">
          <h2 className="font-heading text-4xl text-primary-foreground sm:text-5xl">
            The inspiration lives on Pinterest
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            I pin new finds, cozy aesthetics, and gift ideas almost every day. Come
            along — it's the prettiest corner of my internet.
          </p>
          <a
            href={PINTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Follow @sandywrites777
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
