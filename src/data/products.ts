// ============= Full file contents =============

/** Paste your Amazon Associates Store ID here once approved (e.g. "sandywrites-20"). */
export const AMAZON_STORE_ID = "";

/** Builds a direct Amazon.com product-page link for one specific item (ASIN). */
export function amazonProductUrl(asin: string) {
  const tag = AMAZON_STORE_ID ? `?tag=${AMAZON_STORE_ID}` : "";
  return `https://www.amazon.com/dp/${asin}${tag}`;
}

import blanketImg from "@/assets/product-blanket.jpg";
import sherpaImg from "@/assets/product-sherpa.jpg";
import candleImg from "@/assets/product-candle.jpg";
import pillowImg from "@/assets/product-pillow.jpg";
import plannerImg from "@/assets/product-planner.jpg";
import notebookImg from "@/assets/product-notebook.jpg";
import pensImg from "@/assets/product-pens.jpg";
import makeupImg from "@/assets/product-makeup.jpg";
import blushImg from "@/assets/product-blush.jpg";
import diffuserImg from "@/assets/product-diffuser.jpg";

export type Category = "Beauty & Self-care" | "Home & Decor" | "Stationery & Desk";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  asin: string;
  /** Hand-illustrated scene in the site's palette — not a photo of the actual item. */
  image: string;
  blurb: string;
  /** Why it made the list — honest, no claims of personal use. */
  whyIPicked: string;
  url: string;
  featured?: boolean;
}

const raw: Omit<Product, "url">[] = [
  {
    id: "chunky-knit-throw",
    name: "Bubble Fleece Throw Blanket",
    brand: "Lotus Karen",
    category: "Home & Decor",
    asin: "B0GYCWLY7M",
    image: blanketImg,
    blurb:
      "A soft bubble-texture fleece throw with a cozy, chunky look.",
    whyIPicked:
      "This is the chunky-knit look I keep pinning, in exactly the dusty pink I'm after. At 40 × 40 it drapes over a chair arm or the foot of a bed instead of swallowing a whole sofa.",
    featured: true,
  },
  {
    id: "sherpa-throw",
    name: "Cuddly Sherpa Plush Throw in Lavender",
    brand: "L'COZEE",
    category: "Home & Decor",
    asin: "B006FZVZJO",
    image: sherpaImg,
    blurb: "A thick lavender sherpa throw with a plush, teddy-like feel.",
    whyIPicked: "If you want lavender without painting a single wall, a blanket is the low-commitment way in.",
  },
  {
    id: "blush-bouquet-candle",
    name: "Rose Scented Candle",
    brand: "DARJEN",
    category: "Home & Decor",
    asin: "B0G3B8B5T8",
    image: candleImg,
    blurb: "A rose-scented candle in a pretty jar — a sweet gift idea.",
    whyIPicked: "The pink glass looks lovely on a bookshelf, lit or not — and it's a safe gift for almost anyone.",
  },
  {
    id: "velvet-pillow-covers",
    name: "Velvet Pillow Covers",
    brand: "Velvet cover set",
    category: "Home & Decor",
    asin: "B0F59WJ4PY",
    image: pillowImg,
    blurb: "Soft velvet covers to swap onto inserts you already own.",
    whyIPicked: "Swapping covers is a low-cost way to refresh a room. Measure your existing inserts before ordering.",
  },
  {
    id: "life-planner",
    name: "2027 Hardcover Planner",
    brand: "Forvencer",
    category: "Stationery & Desk",
    asin: "B0H4YRHYV2",
    image: plannerImg,
    blurb: "A hardcover dated planner with monthly and weekly pages.",
    whyIPicked: "The blush cover is pretty, but I picked it for the roomy weekly layout. Check the start month before you buy.",
  },
  {
    id: "hydrangea-notebook",
    name: "Coquette Hardcover Notebook",
    brand: "LIANGW",
    category: "Stationery & Desk",
    asin: "B0DQ41TVD6",
    image: notebookImg,
    blurb: "A girly coquette-style notebook for notes, lists and journaling.",
    whyIPicked: "It's the kind of notebook you actually want to leave out on the desk, which means you'll use it.",
  },
  {
    id: "souffle-pens",
    name: "Aesthetic Pastel Mechanical Pencils",
    brand: "Four Candies",
    category: "Stationery & Desk",
    asin: "B0CKXF6JDT",
    image: pensImg,
    blurb: "A set of pastel mechanical pencils for planners and notes.",
    whyIPicked: "Great for planner doodles and labels. Test one on the back page first; ink and paper don't always agree.",
  },
  {
    id: "nyx-blush",
    name: "Super Blendable Powder Blush",
    brand: "L'Oréal Paris",
    category: "Beauty & Self-care",
    asin: "B001KYVP4K",
    image: makeupImg,
    blurb: "A drugstore pressed powder blush, available in many shades.",
    whyIPicked: "A budget-friendly place to start if you're experimenting with blush. Pick the shade on Amazon before ordering.",
  },
  {
    id: "laura-mercier-blush",
    name: "Blush Colour Infusion",
    brand: "Laura Mercier",
    category: "Beauty & Self-care",
    asin: "B0G1CK9XPQ",
    image: blushImg,
    blurb: "A pressed powder blush from Laura Mercier's Colour Infusion line.",
    whyIPicked: "This one's on my treat-yourself wishlist — the compact alone looks gift-ready.",
  },
  {
    id: "lavender-diffuser",
    name: "Essential Oil Diffuser with Lavender Oil",
    brand: "ASAKUKI",
    category: "Beauty & Self-care",
    asin: "B0B4WJXTBQ",
    image: diffuserImg,
    blurb: "A 100 ml mist diffuser that comes bundled with a lavender essential oil.",
    whyIPicked: "A nice bedside piece for a slow-evening corner. Read the safety notes if you have pets.",
  },
];

export const products: Product[] = raw.map((p) => ({ ...p, url: amazonProductUrl(p.asin) }));

export const categories: Category[] = ["Beauty & Self-care", "Home & Decor", "Stationery & Desk"];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export const PINTEREST_URL = "https://www.pinterest.com/sandywrites777/";
