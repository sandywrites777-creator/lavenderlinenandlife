import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PINTEREST_URL } from "@/data/products";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const linkClass = "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";
  return <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:px-6">
      <Link to="/" className="flex min-w-0 items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10"><Heart className="h-4 w-4 fill-primary text-primary" /></span>
        <span className="font-heading text-xl text-foreground sm:text-2xl">Lavenderlinenandlife</span>
      </Link>
      <nav aria-label="Main navigation" className="flex w-full flex-wrap items-center justify-center gap-1 lg:w-auto">
        <Link to="/" activeOptions={{ exact: true }} className={linkClass} activeProps={{ className: "bg-secondary text-foreground" }}>Home</Link>
        <Link to="/shop" className={linkClass} activeProps={{ className: "bg-secondary text-foreground" }}>Shop My Favorites</Link>
        <Link to="/blog" className={linkClass} activeProps={{ className: "bg-secondary text-foreground" }}>Blog</Link>
        <Link to="/about" className={linkClass} activeProps={{ className: "bg-secondary text-foreground" }}>About</Link>
        <Link to="/contact" className={linkClass} activeProps={{ className: "bg-secondary text-foreground" }}>Contact</Link>
        <Button asChild className="ml-1 hidden rounded-full lg:inline-flex"><a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">Follow on Pinterest</a></Button>
      </nav>
    </div>
  </header>;
}
