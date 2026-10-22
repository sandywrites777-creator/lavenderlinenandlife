import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AffiliateNote } from "@/components/AffiliateNote";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { ArticleCard, readingMinutes } from "@/components/ArticleCard";
import { articles, editorialPhotos } from "@/data/editorial";
import { getProduct, type Product } from "@/data/products";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { slug: article.slug };
  },
  head: ({ loaderData }) => {
    const article = loaderData && articles.find((a) => a.slug === loaderData.slug);
    if (!article) {
      return { meta: [{ title: "Story not found — Lavenderlinenandlife" }, { name: "robots", content: "noindex" }] };
    }
    const photo = editorialPhotos[article.photo];
    const title = `${article.title} — Lavenderlinenandlife`;
    return {
      meta: [
        { title },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: photo.image },
        { name: "twitter:image", content: photo.image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  staticData: { sitemap: false },
  notFoundComponent: StoryNotFound,
  component: BlogPost,
});

function StoryNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-heading text-4xl text-foreground">That story wandered off</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary">Back to the journal →</Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function BlogPost() {
  const { slug } = Route.useLoaderData();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <StoryNotFound />;
  const photo = editorialPhotos[article.photo];
  const picks = article.productIds.map(getProduct).filter(Boolean) as Product[];
  const more = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <AffiliateNote className="mb-5" />
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> The journal
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {article.category} · {readingMinutes(article)} min read · by Sandy
        </p>
        <h1 className="mt-3 font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
          {article.title}
        </h1>
        <figure className="mt-8">
          <img src={photo.image} alt={photo.alt} className="w-full rounded-[2rem] object-cover shadow-soft" />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Photo:{" "}
            <a href={photo.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              {photo.credit}
            </a>
          </figcaption>
        </figure>


        <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p className="first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-6xl first-letter:leading-none first-letter:text-primary">
            {article.introduction}
          </p>
          {article.sections.map((s) => (
            <section key={s.heading} className="space-y-4 pt-4">
              <h2 className="font-heading text-3xl text-foreground">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 font-heading text-2xl italic text-primary">— Sandy</p>
      </article>

      {picks.length > 0 && (
        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-heading text-4xl text-foreground">Picks mentioned in this story</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Curated examples to compare — check size, shade and details on Amazon before you order.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {picks.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-4xl text-foreground">Keep reading</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
