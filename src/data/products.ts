import serum from "@/assets/product-serum.jpg";
import candle from "@/assets/product-candle.jpg";
import planner from "@/assets/product-planner.jpg";
import blanket from "@/assets/product-blanket.jpg";
import makeup from "@/assets/product-makeup.jpg";
import desk from "@/assets/product-desk.jpg";

export type Category = "Beauty & Self-care" | "Home & Decor" | "Stationery & Tech";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: string;
  blurb: string;
  whyILoveIt: string;
  image: string;
  /**
   * Replace each url with your real Amazon Associates affiliate link
   * (the ones you generate in Amazon SiteStripe). They look like:
   * https://www.amazon.com/dp/PRODUCT_ID?tag=yourtag-20
   */
  url: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "glow-serum-duo",
    name: "Glow Serum & Cream Duo",
    category: "Beauty & Self-care",
    price: "$24",
    blurb: "A dewy serum and cloud-soft moisturizer for that lit-from-within glow.",
    whyILoveIt:
      "My skin drinks this up every morning — it layers beautifully under makeup and smells like a spa day.",
    image: serum,
    url: "https://www.amazon.com/",
    featured: true,
  },
  {
    id: "lavender-ribbed-candle",
    name: "Lavender Ribbed Glass Candle",
    category: "Home & Decor",
    price: "$18",
    blurb: "A calming lavender candle in the prettiest ribbed glass jar.",
    whyILoveIt:
      "It makes my whole room smell like a quiet Sunday morning, and the jar is gorgeous reused as a vase.",
    image: candle,
    url: "https://www.amazon.com/",
  },
  {
    id: "blush-gold-planner",
    name: "Blush & Gold Spiral Planner",
    category: "Stationery & Tech",
    price: "$16",
    blurb: "A gold-coil planner that makes planning feel like a treat, not a chore.",
    whyILoveIt:
      "The layout keeps my content calendar and to-dos in one place — and it photographs beautifully for my pins.",
    image: planner,
    url: "https://www.amazon.com/",
  },
  {
    id: "chunky-knit-throw",
    name: "Chunky Knit Throw Blanket",
    category: "Home & Decor",
    price: "$39",
    blurb: "The softest blush chunky knit for reading nooks and movie nights.",
    whyILoveIt:
      "It's the blanket everyone asks about on my Pinterest boards — heavy, cozy, and impossibly pretty.",
    image: blanket,
    url: "https://www.amazon.com/",
  },
  {
    id: "rose-lip-blush-set",
    name: "Rose Lip Oil & Blush Palette",
    category: "Beauty & Self-care",
    price: "$21",
    blurb: "A glossy lip oil and four flattering blush shades in one rosy set.",
    whyILoveIt:
      "These are my five-minute-face heroes — the blush shades work on every skin tone I've tried.",
    image: makeup,
    url: "https://www.amazon.com/",
  },
  {
    id: "mushroom-desk-lamp",
    name: "Ceramic Mushroom Desk Lamp",
    category: "Stationery & Tech",
    price: "$32",
    blurb: "A warm-glow lamp that turns any desk into a cozy creative corner.",
    whyILoveIt:
      "The warm light is so flattering for late-night journaling — my desk finally feels like *mine*.",
    image: desk,
    url: "https://www.amazon.com/",
  },
];

export const categories: Category[] = [
  "Beauty & Self-care",
  "Home & Decor",
  "Stationery & Tech",
];

export const PINTEREST_URL = "https://www.pinterest.com/sandywrites777/";
