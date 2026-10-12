import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type Category } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Curated Picks — Lavenderlinenandlife" },
      {
        name: "description",
        content:
          "Curated picks in one place — beauty, home decor, and stationery finds with links to shop them on Amazon.",
      },
      { property: "og:title", content: "Curated Picks — Lavenderlinenandlife" },
      {
        property: "og:description",
        content:
          "Curated picks in one place — beauty, home decor, and stationery finds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lavenderlinenandlife.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Curated Picks", item: "https://lavenderlinenandlife.lovable.app/shop" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Curated Picks",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            url: p.url,
          })),
        }),
      },
    ],
  }),
  staticData: { sitemap: true },
  component: Shop,
});

type Filter = "All" | Category;

function Shop() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The whole collection
          </p>
          <h1 className="mt-3 font-heading text-5xl tracking-tight text-foreground sm:text-6xl">
            Curated picks
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            These are curated picks I'd happily put on a wishlist or gift to my best
            friend. Links go to Amazon — I may earn a small commission, at no extra
            cost to you.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {(["All", ...categories] as Filter[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <h2 className="sr-only">
          {filter === "All" ? "All products" : filter}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
