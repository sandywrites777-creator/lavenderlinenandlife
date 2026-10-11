import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PINTEREST_URL } from "@/data/products";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-4 w-4 fill-primary text-primary" />
          </span>
          <span className="font-heading text-2xl tracking-tight text-foreground">
            Sandy Writes
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-secondary text-foreground" }}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-secondary text-foreground" }}
          >
            Shop My Favorites
          </Link>
          <Link
            to="/about"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-secondary text-foreground" }}
          >
            About
          </Link>
          <a
            href={PINTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Follow on Pinterest
          </a>
        </nav>
      </div>
    </header>
  );
}
