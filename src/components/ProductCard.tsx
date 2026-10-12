import { ExternalLink, Flower2, Home, PenLine } from "lucide-react";
import type { Product } from "@/data/products";

const icons = {
  "Beauty & Self-care": Flower2,
  "Home & Decor": Home,
  "Stationery & Desk": PenLine,
};

export function ProductTile({ product, className = "" }: { product: Product; className?: string }) {
  const Icon = icons[product.category];
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blush via-rose/60 to-lavender/40 p-6 text-center ${className}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/80 shadow-card">
        <Icon className="h-6 w-6 text-primary" />
      </span>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-plum">{product.brand}</p>
      <p className="text-xs text-muted-foreground">See real photos on Amazon</p>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative">
        <ProductTile product={product} className="aspect-[4/3]" />
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-muted-foreground">{product.brand}</p>
        <h3 className="mt-1 font-heading text-xl leading-snug text-foreground">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
        <p className="mt-3 flex-1 border-l-2 border-primary/40 pl-3 text-sm italic leading-relaxed text-foreground/80">
          {product.whyIPicked}
        </p>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
        >
          View this item on Amazon
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
