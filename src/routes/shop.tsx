import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type Category } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop My Favorites — Lavenderlinenandlife" },
      {
        name: "description",
        content:
          "Every product I genuinely love, in one place — beauty, home decor, and stationery finds with links to shop them on Amazon.",
      },
      { property: "og:title", content: "Shop My Favorites — Lavenderlinenandlife" },
      {
        property: "og:description",
        content:
          "Every product I genuinely love, in one place — beauty, home decor, and stationery finds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
            Shop my favorites
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything here is something I've tried, loved, and would gift to my best
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
