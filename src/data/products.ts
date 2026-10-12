/** Paste your Amazon Associates Store ID here once approved (e.g. "sandywrites-20"). */
export const AMAZON_STORE_ID = "";

/** Builds a direct Amazon.com product-page link for one specific item (ASIN). */
export function amazonProductUrl(asin: string) {
  const tag = AMAZON_STORE_ID ? `?tag=${AMAZON_STORE_ID}` : "";
  return `https://www.amazon.com/dp/${asin}${tag}`;
}

export type Category = "Beauty & Self-care" | "Home & Decor" | "Stationery & Desk";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  asin: string;
  blurb: string;
  /** Why it made the list — honest, no claims of personal use. */
  whyIPicked: string;
  url: string;
  featured?: boolean;
}

const raw: Omit<Product, "url">[] = [
  {
    id: "fleece-throw",
    name: "Fleece Throw Blanket in Blush",
    brand: "Thesis",
    category: "Home & Decor",
    asin: "B0B64BTWTP",
    blurb: "A soft blush fleece throw, 50 × 60 inches — sofa-sized without swallowing the room.",
    whyIPicked:
      "That exact dusty-pink shade is the one I keep saving on Pinterest. It's the easiest way to warm up a plain grey couch.",
    featured: true,
  },
  {
    id: "sherpa-throw",
    name: "Cuddly Sherpa Plush Throw in Lavender",
    brand: "L'COZEE",
    category: "Home & Decor",
    asin: "B006FZVZJO",
    blurb: "A thick lavender sherpa throw with a plush, teddy-like feel.",
    whyIPicked: "If you want lavender without painting a single wall, a blanket is the low-commitment way in.",
  },
  {
    id: "blush-bouquet-candle",
    name: "Blush Bouquet Large Tumbler Candle",
    brand: "Yankee Candle",
    category: "Home & Decor",
    asin: "B07PD7Y6HH",
    blurb: "A 22 oz two-wick candle with a floral scent and a soft pink jar.",
    whyIPicked: "The pink glass looks lovely on a bookshelf, lit or not — and it's a safe gift for almost anyone.",
  },
  {
    id: "velvet-pillow-covers",
    name: "Blush Pink Velvet Pillow Covers, Set of 2",
    brand: "Nestinco",
    category: "Home & Decor",
    asin: "B0B1DFJRWP",
    blurb: "Two 22 × 22 inch velvet covers — swap them onto inserts you already own.",
    whyIPicked: "Changing pillow covers is my favorite cheap trick for making a room look new for the season.",
  },
  {
    id: "life-planner",
    name: "12-Month Soft Bound Life Planner, Blush",
    brand: "Erin Condren",
    category: "Stationery & Desk",
    asin: "B0CSDWG7K1",
    blurb: "An 8 × 10 inch soft-bound planner with monthly and weekly pages.",
    whyIPicked: "The blush cover is pretty, but I picked it for the roomy weekly layout. Check the start month before you buy.",
  },
  {
    id: "hydrangea-notebook",
    name: "Pink Hydrangea Spiral Notebook",
    brand: "Rifle Paper Co.",
    category: "Stationery & Desk",
    asin: "B0G2FDVBFR",
    blurb: "An illustrated floral notebook with gold-foil details and perforated pages.",
    whyIPicked: "It's the kind of notebook you actually want to leave out on the desk, which means you'll use it.",
  },
  {
    id: "souffle-pens",
    name: "Gelly Roll Souffle Pastel Pens, 10 Pack",
    brand: "Sakura",
    category: "Stationery & Desk",
    asin: "B016VJGZ5W",
    blurb: "Puffy, opaque pastel gel pens in ten colors — they show up even on dark paper.",
    whyIPicked: "Great for planner doodles and labels. Test one on the back page first; ink and paper don't always agree.",
  },
  {
    id: "nyx-blush",
    name: "Powder Blush",
    brand: "NYX Professional Makeup",
    category: "Beauty & Self-care",
    asin: "B002QI6KHQ",
    blurb: "A pressed powder blush from a well-known drugstore brand, in many shades.",
    whyIPicked: "A budget-friendly place to start if you're experimenting with blush. Pick the shade on Amazon before ordering.",
  },
  {
    id: "laura-mercier-blush",
    name: "Blush Colour Infusion",
    brand: "Laura Mercier",
    category: "Beauty & Self-care",
    asin: "B09GWDKKD4",
    blurb: "A pressed powder blush from Laura Mercier's Colour Infusion line.",
    whyIPicked: "This one's on my treat-yourself wishlist — the compact alone looks gift-ready.",
  },
  {
    id: "lavender-diffuser",
    name: "Essential Oil Diffuser with Lavender Oil",
    brand: "ASAKUKI",
    category: "Beauty & Self-care",
    asin: "B0B4WJXTBQ",
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
