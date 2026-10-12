import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/editorial";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "The Journal — Cozy Home & Planning Stories | Lavenderlinenandlife" },
      {
        name: "description",
        content:
          "Stories and practical guides on reading nooks, soft color at home, paper planning, and slow evenings from Sandy at Lavenderlinenandlife.",
      },
      { property: "og:title", content: "The Journal — Lavenderlinenandlife" },
      {
        property: "og:description",
        content: "Cozy home, planning, and self-care stories with a few curated picks along the way.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { sitemap: true },
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The journal</p>
        <h1 className="mt-3 font-heading text-5xl tracking-tight text-foreground sm:text-6xl">
          Little stories from a cozy life
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Notes on making small spaces softer, planning without the pressure, and the
          slow little rituals that make an ordinary week feel nicer.
        </p>
        <h2 className="sr-only">All stories</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
