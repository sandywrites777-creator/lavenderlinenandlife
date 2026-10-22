import { Link } from "@tanstack/react-router";
import { AFFILIATE_DISCLOSURE } from "@/components/AffiliateNote";
import { Heart } from "lucide-react";
import { PINTEREST_URL } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-4 w-4 fill-primary text-primary" />
              </span>
              <span className="font-heading text-xl text-foreground sm:text-2xl">Lavenderlinenandlife</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cozy finds, pretty things, and honest favorites — curated with love and
              shared on Pinterest.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="transition-colors hover:text-primary">
                  Shop My Favorites
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">
                  About Me
                </Link>
              </li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/affiliate-disclosure" className="hover:text-primary">Affiliate Disclosure</Link></li>
              <li>
                <a
                  href={PINTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              A little honesty
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {AFFILIATE_DISCLOSURE}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Lavenderlinenandlife. Made with love and lavender.</p>
          <a
            href={PINTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            pinterest.com/sandywrites777
          </a>
        </div>
      </div>
    </footer>
  );
}
