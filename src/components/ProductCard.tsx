import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

export function ProductTile({ product, className = "" }: { product: Product; className?: string }) {
  return <div className={`flex flex-col justify-center bg-secondary/60 p-6 sm:p-8 ${className}`}>
    <p className="text-xs font-medium uppercase text-primary">{product.category}</p>
    <p className="mt-4 text-sm text-muted-foreground">{product.brand}</p>
    <p className="mt-2 font-heading text-3xl leading-tight text-foreground sm:text-4xl">{product.name}</p>
  </div>;
}

export function ProductCard({ product }: { product: Product }) {
  return <article className="flex flex-col rounded-3xl border border-border/60 bg-secondary/50 p-6 shadow-card">
    <p className="text-xs font-medium uppercase text-primary">{product.category}</p>
    <p className="mt-5 text-sm text-muted-foreground">{product.brand}</p>
    <h3 className="mt-1 font-heading text-2xl leading-snug text-foreground">{product.name}</h3>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
    <Button asChild className="mt-6 w-full rounded-full">
      <a href={product.url} target="_blank" rel="noopener noreferrer sponsored">View on Amazon<ExternalLink /></a>
    </Button>
  </article>;
}
