import desk from '@/assets/editorial-desk.jpg.asset.json';
import home from '@/assets/editorial-home.jpg.asset.json';
import decor from '@/assets/editorial-decor.jpg.asset.json';
import planning from '@/assets/editorial-planning.jpg.asset.json';

export const editorialPhotos = {
  desk: { image: desk.url, alt: 'Laptop, notebook and coffee on a wooden desk', credit: 'Andrew Neel / Unsplash', source: 'https://unsplash.com/photos/cckf4TsHAuw' },
  home: { image: home.url, alt: 'Bright home interior with a comfortable seating area', credit: 'Beazy / Unsplash', source: 'https://unsplash.com/photos/2aJ5jNf9-6A' },
  decor: { image: decor.url, alt: 'Framed prints arranged above a home workspace', credit: 'Christopher Jolly / Unsplash', source: 'https://unsplash.com/photos/GqbU78bdJFM' },
  planning: { image: planning.url, alt: 'An open paper planner with handwritten notes', credit: 'Estee Janssens / Unsplash', source: 'https://unsplash.com/photos/zni0zgb3bkQ' },
};
export type PhotoKey = keyof typeof editorialPhotos;
export interface ArticleSection { heading: string; paragraphs: string[]; }
export interface Article { slug: string; title: string; category: string; excerpt: string; photo: PhotoKey; introduction: string; sections: ArticleSection[]; productIds: string[]; }

export const articles: Article[] = [
  {
    slug: 'cozy-desk-setup',
    title: '5 Ways I’m Making My Desk Nook Feel So Cozy',
    category: 'Stationery & Desk',
    photo: 'desk',
    excerpt: 'Simple ways to make your workspace feel more like a place you actually want to spend time.',
    productIds: ['hydrangea-notebook', 'souffle-pens', 'blush-bouquet-candle'],
    introduction: "A desk that feels cold is a desk you avoid. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. These five changes are cheap, and most don’t need you to buy anything.",
    sections: [
      { heading: "Clear the surface first", paragraphs: ["Take everything off the desk and put back only what you use daily: laptop, one notebook, one pen holder. A clear surface makes every pretty item look intentional.", "If clearing all of it feels like too much, start with a square about the size of your laptop."] },
      { heading: "Use warm light, not overhead light", paragraphs: ["A small lamp with a warm bulb is kinder in the evening than a bright ceiling light. Look for bulbs labeled “warm white” or around 2700K.", "If you light a candle at your desk, like the DARJEN Rose Scented Candle, keep it away from paper, never leave it unattended, and blow it out when you leave."] },
      { heading: "Pick two or three colors", paragraphs: ["Soft pink, lavender and cream look calm together. Too many colors look busy, so choose a palette first and buy to match it.", "The LIANGW Coquette Hardcover Notebook and the Four Candies pastel mechanical pencils suit a blush and lavender desk. Check the paper type and lead size on Amazon before buying, because pastel pens don’t always write as nicely as they look."] },
      { heading: "Give small things a home", paragraphs: ["A tray or small pot for pencils, and a clip for charging cables, stops clutter coming back. Anything without a place ends up on the desk."] },
      { heading: "Keep one thing you love in sight", paragraphs: ["A postcard, a small plant or a photo is enough. One personal item makes a desk feel like yours, and it costs almost nothing."] },
      { heading: "Quick checklist before you buy", paragraphs: ["Notebook: check the page type (ruled, dotted or blank) and the paper weight, because thin paper shows pen through.", "Pencils: check the lead size in the listing and the number of pieces in the set.", "Candle: use a heat-safe holder or tray, and keep it away from papers and cables."] }
    ]
  },

  {
    slug: 'style-a-reading-nook',
    title: 'My Little Reading Corner Refresh',
    category: 'Home & Decor',
    photo: 'home',
    excerpt: 'Turning a quiet corner into the ultimate reading retreat.',
    productIds: ['sherpa-throw', 'velvet-pillow-covers', 'lavender-diffuser'],
    introduction: "A reading nook needs three things: a comfortable seat, soft light and something to rest your arm or lap on. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. This is how I’d plan one around a corner you already have.",
    sections: [
      { heading: "Choose the corner", paragraphs: ["Look for a quiet spot with a window or room for a lamp. You don’t need a whole room, and a chair with a small table fits in a corner about 3 feet wide.", "Sit in the spot for five minutes before you plan anything. If it’s noisy, drafty or too dark to read, choose a different corner."] },
      { heading: "Plan the light", paragraphs: ["Natural light by day, and a lamp with a warm bulb in the evening. Warm white bulbs are around 2700K. Position the lamp beside or behind you, so the light falls on the page and not in your eyes."] },
      { heading: "Add one soft layer: the throw", paragraphs: ["A throw makes a corner invite you to sit. The L’COZEE Lavender Sherpa Plush Throw is thick and teddy-soft, which suits colder evenings. Check the listed size, because some throws are smaller than they look in photos.", "Drape it over the chair arm so it’s ready to use. If your chair is neutral, a lavender throw adds color without painting anything."] },
      { heading: "Refresh your cushions, not your furniture", paragraphs: ["Velvet pillow covers change the look of a corner cheaply. Measure your inserts first, since a cover that matches the insert size looks fullest.", "Two cushions are enough. More leave you no room to sit."] },
      { heading: "Think about scent carefully", paragraphs: ["The ASAKUKI Essential Oil Diffuser comes with lavender oil and holds 100 ml. If you have pets, read the safety notes first, as some essential oils aren’t suitable around animals. Turn it off if a scent gives you a headache."] },
      { heading: "Quick checklist before you buy", paragraphs: ["Measure the corner, then the chair and table, before ordering.", "Check the throw’s size and the cover size for your inserts.", "Use a warm bulb, and place the lamp beside you.", "Add one item at a time and see what the corner still needs."] }
    ]
  },

  {
    slug: 'gentle-evening-routine',
    title: 'My Gentle Evening Rituals',
    category: 'Beauty & Self-care',
    photo: 'home',
    excerpt: 'How I wind down after a long day without any stress.',
    productIds: ['chunky-knit-throw', 'laura-mercier-blush', 'blush-bouquet-candle'],
    introduction: "An evening routine doesn’t have to be a long skincare ritual. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. This is a simple five-step wind-down, and you can do any of it in any order.",
    sections: [
      { heading: "Step 1: Put the phone away (2 minutes)", paragraphs: ["Choose a time, even 20 or 30 minutes before bed, and leave the phone in another room. It’s the step that makes the others easier to enjoy."] },
      { heading: "Step 2: Dim the lights (1 minute)", paragraphs: ["Soft light tells you the day is ending. Switch off the overhead light and use a lamp or a candle."] },
      { heading: "Step 3: Wash your face and moisturize (5 minutes)", paragraphs: ["Use gentle products that suit your skin. Try any new product on a small patch on your jaw or inner arm first, and add new products one at a time, so you can tell which one suits you.", "If you like a blush for a special evening, a product like the Laura Mercier Blush Colour Infusion is a treat. Check the shade in customer photos before you order, as pink and peach tones look different on different skin."] },
      { heading: "Step 4: Get cozy (5 minutes)", paragraphs: ["A throw over your knees makes sitting still feel nicer. The Lotus Karen Bubble Fleece Throw measures 40 × 40 inches, so it suits a lap or a chair arm but won’t cover a whole bed."] },
      { heading: "Step 5: Write three lines (3 minutes)", paragraphs: ["What went well, one thing you’re grateful for, and one thing for tomorrow. It takes two minutes and gets thoughts out of your head and onto the page.", "If you light the DARJEN Rose Scented Candle for this step, place it on a heat-safe surface, and blow it out before you go to bed."] },
      { heading: "What to skip", paragraphs: ["Skip any step that feels like a chore. A routine you do most nights beats a long one you do once. If you can’t manage five steps, do two."] },
      { heading: "Quick checklist before you buy", paragraphs: ["Skincare: patch-test and add one product at a time.", "Blush: check the shade in customer photos.", "Candle: check the wax type and burn time, and never leave it unattended.", "Throw: check the dimensions before ordering."] }
    ]
  },

  {
    slug: 'paper-planning-that-works',
    title: 'How I Actually Get Organized (And Stay That Way!)',
    category: 'Stationery & Desk',
    photo: 'planning',
    excerpt: 'One planner, a few simple habits, and a system that actually fits my messy, wonderful life.',
    productIds: ['life-planner', 'souffle-pens', 'hydrangea-notebook'],
    introduction: "The best planner is the one you actually open. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. Here’s how I’d choose one and keep using it.",
    sections: [
      { heading: "Pick a layout for how you plan", paragraphs: ["If you like to see the whole month, you need a good monthly spread. If you plan day by day, you need roomy weekly pages. The Forvencer 2027 Hardcover Planner has both monthly and weekly pages. Check the start month before you buy, because some planners begin in the middle of the year."] },
      { heading: "Choose one notebook for ideas", paragraphs: ["Keep your plans in the planner and your thoughts in a separate notebook. The LIANGW Coquette Hardcover Notebook works well for lists and journaling, and it’s pretty enough to leave on your desk."] },
      { heading: "Use pencils for plans that change", paragraphs: ["Plans change, so pencil is kinder than pen. The Four Candies pastel mechanical pencils are made for planners. Test one on the back page first, as some papers show smudges."] },
      { heading: "Keep the habit tiny", paragraphs: ["Open the planner once a day, at the same time, and write only three things. A system you can finish in two minutes is a system you’ll keep."] },
      { heading: "Review once a week", paragraphs: ["Pick one evening a week to look back and move unfinished tasks forward. This takes about 10 minutes, and it keeps small tasks from piling up."] },
      { heading: "Questions to ask before choosing a planner", paragraphs: ["Does it start in the month you need, and does it have the layout you use (monthly, weekly or daily)?", "Is it a size that fits your bag or desk?", "Do you plan to use pen or pencil? Check the paper before you decide."] }
    ]
  },

  {
    slug: 'blush-lavender-home',
    title: 'Adding a Little Blush and Lavender to My Home',
    category: 'Home & Decor',
    photo: 'decor',
    excerpt: 'How I’m gently introducing my favorite colors into my home.',
    productIds: ['sherpa-throw', 'blush-bouquet-candle', 'lavender-diffuser'],
    introduction: "You can add blush and lavender to a home without repainting or replacing furniture. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. Here is how I’d introduce the colors gently.",
    sections: [
      { heading: "Start with one soft item: the throw", paragraphs: ["A throw is the easiest first step. Sizes vary by seller, but a common throw is about 50 × 60 inches, and smaller lap throws are around 40 × 50. Check the dimensions in the listing, because photos make blankets look bigger than they are.", "The L’COZEE Lavender Sherpa Plush Throw is thick with a teddy-like texture. Sherpa is usually warmer and heavier than plain fleece. It can shed a little in the first wash, so wash it separately before using it on a sofa.", "Colors look different in different light. Look at customer photos in the reviews as well as the product photos, and judge the lavender shade by those."] },
      { heading: "Add pink through a candle", paragraphs: ["The DARJEN Rose Scented Candle comes in pink glass, so it adds color on a shelf even when it isn’t lit. Before you order, check the wax type, the burn time and the jar size in the listing. Rose scents range from fresh to very sweet, so read the reviews for how strong it is.", "If you light it, let the first burn melt the wax all the way to the edge of the jar, which helps prevent a hole forming down the middle. Trim the wick to about a quarter inch before each use, and don’t burn it for more than a few hours at a time.", "Place it on a heat-safe surface, away from curtains, paper and drafts, and never leave it burning in an empty room."] },
      { heading: "Use scent carefully", paragraphs: ["The ASAKUKI Essential Oil Diffuser holds 100 ml and comes with lavender oil. Use it in a room with some airflow. If you have pets or small children, read the safety notes first, as some essential oils are not suitable around animals. Stop using any scent that gives you a headache."] },
      { heading: "Keep the palette calm", paragraphs: ["A simple designer rule is 60-30-10: about 60 percent of a room in a neutral color, 30 percent in a second color, and 10 percent in an accent. Here that could be cream walls and furniture, wood tones, then lavender and blush as the small accent.", "If every item is lavender, the room starts to feel like a theme. One throw, one candle and one cushion cover is plenty."] },
      { heading: "Quick checklist before you buy", paragraphs: ["Check the throw’s size and how people describe the color in customer photos.", "Check the candle’s wax type, burn time and scent strength.", "Check the diffuser’s safety notes if you have pets or children.", "Buy one item first and wait a few days to see how it looks in your light."] }
    ]
  },

  {
    slug: 'cozy-bedtime-touches',
    title: 'My Favorite Little Touches for a Cozy Bedtime',
    category: 'Home & Decor',
    photo: 'home',
    excerpt: 'Simple, cozy additions to help make your bedroom feel like a little retreat.',
    productIds: ['chunky-knit-throw', 'velvet-pillow-covers', 'lavender-diffuser'],
    introduction: "A cozy bedroom is mostly layers: something soft, something warm and something that smells nice. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. These three additions are inexpensive and easy to undo.",
    sections: [
      { heading: "A throw at the foot of the bed", paragraphs: ["The Lotus Karen Bubble Fleece Throw measures 40 × 40 inches. That suits a chair arm or the edge of a bed as a decorative layer. It won’t cover a bed, so if you want to sleep under it, choose a larger blanket.", "Fold it in thirds lengthwise and lay it across the foot of the bed. A neat fold looks planned, while a crumpled throw looks untidy.", "Fleece is light and washes easily. Check the care label from the seller, and use a gentle cycle and low heat to keep the texture soft."] },
      { heading: "Velvet pillow covers for pillows you already own", paragraphs: ["Covers are a cheap way to change how a bed looks. For a full, plump pillow, choose a cover the same size as your insert, or one that is slightly smaller. A cover that is too big looks flat.", "Measure your inserts across the middle, not just from the label. Common sizes are 16, 18 and 20 inches, but check before ordering.", "Velvet often needs gentler washing. Check the seller’s care instructions, and if it allows machine washing, turn the covers inside out and use a cool cycle."] },
      { heading: "A gentle scent", paragraphs: ["A diffuser such as the ASAKUKI Essential Oil Diffuser with lavender oil is one option. Keep it on a stable, flat surface away from the edge of the bed. Read the safety notes before you use essential oils around pets or children, and don’t run it in a closed room all night.", "Candles and bedding don’t mix. If you use a candle in the bedroom, light it while you’re in the room and put it out before you get into bed."] },
      { heading: "Keep the light low", paragraphs: ["A lamp with a warm bulb in the evening feels calmer than the ceiling light. Look for bulbs labeled warm white, around 2700K."] },
      { heading: "Quick checklist before you buy", paragraphs: ["Throw: check the dimensions and whether you want it as decoration or as a blanket.", "Covers: measure your pillow inserts first.", "Scent: check pet safety, and never leave candles burning near bedding.", "Wash new fabric before you put it on the bed."] }
    ]
  },

  {
    slug: 'small-space-reset',
    title: 'My Simple Reset for a Smaller Home',
    category: 'Home & Decor',
    photo: 'home',
    excerpt: 'How I keep my small home feeling calm and organized.',
    productIds: ['sherpa-throw', 'blush-bouquet-candle', 'velvet-pillow-covers'],
    introduction: "In a small home, every item has to earn its place. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. This is a simple reset that focuses on calm, not on buying more.",
    sections: [
      { heading: "Remove before you add", paragraphs: ["Take out anything you don’t use or love. A clear corner makes the room feel bigger than any new product will."] },
      { heading: "Choose soft items that do two jobs", paragraphs: ["A throw like the L’COZEE Lavender Sherpa Plush Throw can sit on a sofa for color and come off for warmth. Fold it over a chair arm so it doesn’t look messy."] },
      { heading: "Use covers instead of new cushions", paragraphs: ["Velvet pillow covers change the room without taking up more space. Measure your inserts before ordering."] },
      { heading: "Add one scented item, not three", paragraphs: ["A single candle, like the DARJEN Rose Scented Candle, is enough. Place it on a stable, heat-safe surface and keep it away from anything that can burn."] },
      { heading: "Reset weekly", paragraphs: ["Spend 10 minutes once a week putting things back and folding the throw. Small regular resets keep a small space from filling up again."] },
      { heading: "A 10-minute weekly reset", paragraphs: ["Put away anything that doesn’t have a home, starting with the floor and the nearest surface.", "Fold the throw and straighten the cushions.", "Choose one thing to remove each week and don’t replace it."] }
    ]
  },

  {
    slug: 'pinterest-to-real-room',
    title: 'From Pinterest Board to My Real-Life Home',
    category: 'Home & Decor',
    photo: 'desk',
    excerpt: 'How I’m turning those beautiful pins into a space that actually works for me.',
    productIds: ['hydrangea-notebook', 'life-planner', 'chunky-knit-throw'],
    introduction: "A pin shows a finished room, but it doesn’t show the budget or the space. I haven’t tested these products myself, so this is what I looked at and what I’d check before buying. Here’s how I’d turn a board into something you can actually do.",
    sections: [
      { heading: "Find the pattern in your pins", paragraphs: ["Look at your board and note the repeating colors, textures and objects. Maybe it’s soft pink, linen and candles. That pattern is your style, and you can ignore the rest."] },
      { heading: "Pick three things to copy", paragraphs: ["You don’t need to copy a whole room. Choose a color, a texture and one object, such as a throw like the Lotus Karen Bubble Fleece Throw."] },
      { heading: "Write it down", paragraphs: ["Keep a short list in a notebook, like the LIANGW Coquette Hardcover Notebook, with what you want, the size of the space and a budget. A list stops you buying things only because they look pretty online."] },
      { heading: "Plan the month", paragraphs: ["A planner like the Forvencer 2027 Hardcover Planner helps you spread purchases over time. Check the start month before you buy."] },
      { heading: "Buy slowly", paragraphs: ["Wait a week before ordering anything. If you still want it, check the dimensions and reviews on Amazon first."] },
      { heading: "Turn a board into a plan", paragraphs: ["Choose one board and write down the three colors or objects that repeat most.", "List what you already own that fits that pattern before buying anything.", "Set a small budget for the month and buy only one item at a time."] }
    ]
  }
];

export function articleWordCount(article: Article): number {
  const text = [article.introduction, ...article.sections.flatMap((s) => s.paragraphs)].join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}
