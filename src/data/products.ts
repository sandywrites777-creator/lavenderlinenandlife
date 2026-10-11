import serum from "@/assets/product-serum.jpg";
import candle from "@/assets/product-candle.jpg";
import planner from "@/assets/product-planner.jpg";
import blanket from "@/assets/product-blanket.jpg";
import makeup from "@/assets/product-makeup.jpg";
import desk from "@/assets/product-desk.jpg";
import silk from "@/assets/product-silk.jpg";
import diffuser from "@/assets/product-diffuser.jpg";
import pens from "@/assets/product-pens.jpg";
import roller from "@/assets/product-roller.jpg";

/** Paste your Amazon Associates Store ID here once approved (e.g. "sandywrites-20"). */
export const AMAZON_STORE_ID = "";

function amazon(search: string) {
  const q = encodeURIComponent(search);
  const tag = AMAZON_STORE_ID ? `&tag=${AMAZON_STORE_ID}` : "";
  return `https://www.amazon.com/s?k=${q}${tag}`;
}

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
    url: amazon("vitamin c glow serum and moisturizer set"),
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
    url: amazon("lavender candle ribbed glass jar"),
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
    url: amazon("pink spiral planner gold coil"),
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
    url: amazon("blush pink chunky knit throw blanket"),
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
    url: amazon("lip oil blush palette set"),
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
    url: amazon("mushroom table lamp ceramic"),
  },
  {
    id: "silk-pillowcase-scrunchies",
    name: "Pink Satin Pillowcase & Scrunchie Set",
    category: "Beauty & Self-care",
    price: "$15",
    blurb: "Silky-soft satin that's kinder to your hair and skin while you sleep.",
    whyILoveIt:
      "I wake up with fewer tangles and no creases on my face — and it makes my bed look like a hotel.",
    image: silk,
    url: amazon("pink satin pillowcase scrunchie set"),
  },
  {
    id: "lavender-diffuser",
    name: "Frosted Lavender Aroma Diffuser",
    category: "Home & Decor",
    price: "$27",
    blurb: "A soft-glow mist diffuser that turns bedtime into a little ritual.",
    whyILoveIt:
      "A few drops of lavender oil and my room instantly feels calmer. The gentle light doubles as a night lamp.",
    image: diffuser,
    url: amazon("aesthetic essential oil diffuser purple"),
  },
  {
    id: "pastel-pens-set",
    name: "Pastel Gel Pens & Highlighters",
    category: "Stationery & Tech",
    price: "$12",
    blurb: "Smooth-writing pastel pens that make every to-do list prettier.",
    whyILoveIt:
      "They don't bleed through my planner pages, and the soft colors look dreamy in flat-lay photos.",
    image: pens,
    url: amazon("pastel gel pens highlighters aesthetic"),
  },
  {
    id: "rose-quartz-roller",
    name: "Rose Quartz Roller & Gua Sha",
    category: "Beauty & Self-care",
    price: "$14",
    blurb: "A cooling face roller and gua sha stone for a de-puffed morning glow.",
    whyILoveIt:
      "I keep it in the fridge — two minutes of rolling with my serum and my face looks so much more awake.",
    image: roller,
    url: amazon("rose quartz face roller gua sha set"),
  },
];

export const categories: Category[] = [
  "Beauty & Self-care",
  "Home & Decor",
  "Stationery & Tech",
];

export const PINTEREST_URL = "https://www.pinterest.com/sandywrites777/";
