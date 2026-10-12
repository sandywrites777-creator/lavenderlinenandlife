import { Link } from "@tanstack/react-router";
import { editorialPhotos, articleWordCount, type Article } from "@/data/editorial";

export function readingMinutes(article: Article) {
  return Math.max(1, Math.round(articleWordCount(article) / 220));
}

export function ArticleCard({ article }: { article: Article }) {
  const photo = editorialPhotos[article.photo];
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: article.slug }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden bg-blush">
        <img
          src={photo.image}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {article.category} · {readingMinutes(article)} min read
        </p>
        <h3 className="mt-2 font-heading text-2xl leading-snug text-foreground">{article.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
      </div>
    </Link>
  );
}
