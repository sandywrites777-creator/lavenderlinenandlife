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
      { heading: "Keep one thing you love in sight", paragraphs: ["A postcard, a small plant or a photo is enough. One personal item makes a desk feel like yours, and it costs almost nothing."] }
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
      { heading: "Choose the corner", paragraphs: ["Look for a quiet spot with a window or a lamp nearby. You don’t need a big room, and a chair with a small side table is enough."] },
      { heading: "Add one soft layer", paragraphs: ["A throw makes the corner invite you to sit. The L’COZEE Lavender Sherpa Plush Throw is thick and teddy-soft, which suits colder evenings. Check the listed size, because some throws are smaller than they look in photos.", "If your sofa or chair is a neutral color, a lavender throw brings in color without painting anything."] },
      { heading: "Refresh your cushions, not your furniture", paragraphs: ["Velvet pillow covers are a cheap way to change a corner’s look. Measure your existing inserts first, since covers need to match the insert size."] },
      { heading: "Think about scent carefully", paragraphs: ["The ASAKUKI Essential Oil Diffuser comes bundled with lavender oil and holds 100 ml. If you have pets, read the safety notes first, as some essential oils are not suitable around animals. If a scent gives you a headache, switch it off."] },
      { heading: "Keep it simple", paragraphs: ["Two cushions, one throw and a lamp is a complete nook. Add more only if the corner still feels bare after a week."] }
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
      { heading: "Step 1: Put the phone away", paragraphs: ["Choose a time, even 20 or 30 minutes before bed, and leave the phone in another room. It’s the step that makes the others easier to enjoy."] },
      { heading: "Step 2: Dim the lights", paragraphs: ["Soft light tells you the day is ending. Switch off the overhead light and use a lamp or a candle."] },
      { heading: "Step 3: Wash your face and moisturize", paragraphs: ["Use whatever gentle products suit your skin. If you wear makeup for a special evening, a blush like the Laura Mercier Blush Colour Infusion is a treat, but check the shade before you order."] },
      { heading: "Step 4: Get cozy", paragraphs: ["A throw over your knees makes sitting still feel nicer. The Lotus Karen Bubble Fleece Throw measures 40 × 40 inches, so it suits a lap or a chair arm but won’t cover a whole bed."] },
      { heading: "Step 5: Write three lines", paragraphs: ["What went well, one thing you’re grateful for, and one thing for tomorrow. It takes two minutes and clears your head.", "If you light the DARJEN Rose Scented Candle for this step, blow it out before you go to bed."] }
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
      { heading: "Review once a week", paragraphs: ["Pick one evening a week to look back and move unfinished tasks forward. This takes about 10 minutes, and it keeps small tasks from piling up."] }
    ]
  },

  {
    slug: 'blush-lavender-home',
    title: 'Adding a Little Blush and Lavender to My Home',
    category: 'Home & Decor',
    photo: 'decor',
    excerpt: 'How I’m gently introducing my favorite colors into my home.',
    productIds: ['sherpa-throw', 'blush-bouquet-candle', 'lavender-diffuser'],
    introduction: 'Oh, hi again! Sandy here. You know how much I love blush and lavender? I think they’re just the most calming, sweet colors. I’ve been wanting to bring a bit more of that energy into my home, but without it feeling like I’m living in a dollhouse. I’ve been trying to find ways to add these colors in a subtle, intentional way. I’ve been eyeing some lovely things like the L’COZEE Lavender Sherpa Plush Throw, the DARJEN Rose Scented Candle, and the ASAKUKI Essential Oil Diffuser with Lavender Oil. I haven’t tried these yet, they are just on my wishlist, but I think they would be such a lovely, cozy addition. Let me share how I’m approaching this—and remember, this is all about what feels good in YOUR space.',
    sections: [
      {
        heading: 'Start with Small, Cozy Touches',
        paragraphs: [
          'I’ve realized that you don’t need to repaint your whole house to add color! In fact, I think it’s much better to start small. I’ve been looking for things like the L’COZEE Lavender Sherpa Plush Throw because it’s a great way to add a pop of lavender without a big commitment. Plus, it’s just so cozy! I love the idea of draping it over my sofa or my reading chair.',
          'And I think it’s so important to think about the colors that are already in your home. You don’t need to clash with what you have. I have a lot of neutral colors in my living room, so adding a little blush and lavender feels really natural. It’s like adding a little bit of warmth and life without being overwhelming.',
          'Just try adding one thing at a time. Maybe a throw, or a few pillows, and see how it feels in your space. You might be surprised by how much of a difference it makes!'
        ]
      },
      {
        heading: 'Scent Is Part of the Decor',
        paragraphs: [
          'I’ve been learning that scent can really change the feel of a room, too. Like I said, I’m really excited about the ASAKUKI Essential Oil Diffuser with Lavender Oil. Lavender is just so calming, and I think it would be such a lovely addition to my living room. And of course, the DARJEN Rose Scented Candle is another great way to add a bit of scent and atmosphere.',
          'I love how these little touches can make a space feel so much more like a sanctuary. It’s like you’re creating an experience, not just decorating a room. It’s a great way to make your home feel a little bit more like "you."',
          'And I’m always so careful about where I use scent. You don’t need much, and it’s important to make sure it’s something that everyone in your home enjoys. It’s all about creating an atmosphere that’s comfortable for everyone.'
        ]
      },
      {
        heading: 'Mix and Match (But Keep It Simple!)',
        paragraphs: [
          'I think the most important thing I’ve learned is that you don’t need everything to match perfectly. In fact, I think it’s much more interesting when things don’t match! I love mixing and matching different textures and shades of blush and lavender. It makes the space feel more personal and less staged.',
          'I’ve been trying to keep things simple and not go overboard. It’s easy to get excited and buy everything you see, but that just leads to a cluttered and overwhelming space. Now, I’m trying to be a bit more thoughtful about what I add to my home. If I love it, and it fits with what I already have, then it’s a yes!',
          'And don’t be afraid to try new things! If something isn’t working, you can always move it to a different room or try something else. That’s the beauty of it—nothing is permanent, and you can always change it if you need to.'
        ]
      },
      {
        heading: 'Always Stay True to YOU',
        paragraphs: [
          'I think the biggest lesson I’ve learned is that the most important thing is that my home feels like ME. It’s not about following the latest trends or what’s popular on Pinterest. It’s about creating a space where I feel comfortable, happy, and at peace.',
          'And if that means I love blush and lavender, then that’s what I’m going to do! I’ve learned to embrace the things I love, even if they’re not the "coolest" thing right now. It’s my home, and it’s all about what makes ME feel happy.',
          'I hope you’re able to do the same in your home. Don’t be afraid to add the colors, textures, and things that make you smile. After all, that’s what home is all about!'
        ]
      }
    ]
  },
  {
    slug: 'cozy-bedtime-touches',
    title: 'My Favorite Little Touches for a Cozy Bedtime',
    category: 'Home & Decor',
    photo: 'home',
    excerpt: 'Simple, cozy additions to help make your bedroom feel like a little retreat.',
    productIds: ['chunky-knit-throw', 'velvet-pillow-covers', 'lavender-diffuser'],
    introduction: 'Oh, hi friends! Sandy here. Is there anything better than heading to bed in a room that feels like a little sanctuary? I’ve been trying to make my bedroom feel a bit more cozy, especially since it’s where I spend all my time relaxing at the end of the day. I’ve been looking at some lovely things—the Lotus Karen Bubble Fleece Throw, some velvet pillow covers, and the ASAKUKI Essential Oil Diffuser with Lavender Oil. I haven’t tried these yet, they are just on my wishlist, but I think they would be such a lovely addition. Let me share how I’m approaching this, and remember, this is all about creating a space that feels like a big, warm hug for YOU.',
    sections: [
      {
        heading: 'Soft, Cozy Layers Are Everything',
        paragraphs: [
          'I’ve realized that the secret to a cozy bedroom is all about the layers. I love having a few different throws and pillows to mix and match. I’ve been really wanting to get the Lotus Karen Bubble Fleece Throw, because it just looks so soft and warm. And the velvet pillow covers would be a perfect addition to my bed! They add such a lovely, soft touch to the whole room.',
          'I think it’s so important to have a space that feels inviting. When I walk into my room, I want to feel like I can just curl up and relax. And I’ve found that having those soft, cozy layers makes such a difference. It’s like it’s inviting you to take a break and just breathe.',
          'And don’t be afraid to experiment with different textures! You might be surprised by how much of a difference it makes to have a soft knitted throw next to some velvet pillows. It’s all about creating that inviting, cozy feel.'
        ]
      },
      {
        heading: 'Creating a Calming Atmosphere with Scent',
        paragraphs: [
          'As I’ve said before, I’m a huge fan of using scent to help me relax. I’m really excited about the ASAKUKI Essential Oil Diffuser with Lavender Oil for my bedroom. I think having a little bit of lavender scent in the air will be so calming, especially after a busy day. It’s such a simple way to create a more relaxing, tranquil atmosphere.',
          'I’m always so careful about where I use scent, though. I like to keep it subtle and not too overwhelming. It’s all about creating a gentle, relaxing environment, not a strong scent that’s going to distract me.',
          'And I think the most important thing is that it feels right for you. If you don’t like lavender, that’s perfectly fine! There are so many other scents you can try. It’s all about finding what helps you feel most calm and relaxed.'
        ]
      },
      {
        heading: 'Keep It Simple and Uncluttered',
        paragraphs: [
          'I’ve also realized that a calm bedroom needs to be an uncluttered one. I try to keep my bedside table clear and only keep the essentials there. It’s so much easier to relax when your room isn’t full of clutter. I think we often forget how much of an impact a tidy space has on our mental health.',
          'I try to do a little bit of a "reset" every day, just putting things back in their place. It doesn’t take long, but it makes such a difference! I’ve found that it really helps me to feel a little more in control and a little less stressed.',
          'And don’t feel like you have to be perfect. If your room isn’t perfectly tidy, that’s okay! Just do what you can, and don’t stress about it. It’s all about creating a space that makes you feel happy and relaxed.'
        ]
      },
      {
        heading: 'A Final Thought on Self-Care',
        paragraphs: [
          'I think the most important thing is to remember that your bedroom should be a place where you can truly be yourself and take care of yourself. It’s not just a place to sleep; it’s a sanctuary. And I’m so happy to be finding new ways to make it feel more like that.',
          'I hope some of these ideas are helpful for you, too! And remember, there’s no right or wrong way to do this. It’s all about what makes you feel comfortable, happy, and at peace. So take your time, have a little fun with it, and create a space that’s all your own!',
          'I’d love to hear what your bedroom looks like! Let me know if you have any favorite cozy touches.'
        ]
      }
    ]
  },
  {
    slug: 'small-space-reset',
    title: 'My Simple Reset for a Smaller Home',
    category: 'Home & Decor',
    photo: 'home',
    excerpt: 'How I keep my small home feeling calm and organized.',
    productIds: ['sherpa-throw', 'blush-bouquet-candle', 'velvet-pillow-covers'],
    introduction: 'Oh, hi friends! Sandy here. You know, I live in a smaller home, and it can definitely get a bit crowded sometimes! I’ve been really thinking about how to keep things feeling calm and organized, even when space is tight. It’s all about being a little bit more intentional with what I have and how I use it. I’ve been eyeing some lovely things to help with this—the L’COZEE Lavender Sherpa Plush Throw, the DARJEN Rose Scented Candle, and the velvet pillow covers. I haven’t tried them yet, they are just on my wishlist, but I think they would be such a lovely, cozy addition. Let me share how I’m approaching this, and remember, this is all about what feels good in YOUR space.',
    sections: [
      {
        heading: 'Focus on What Truly Matters',
        paragraphs: [
          'When space is limited, I’ve found that it’s so important to be intentional about what I have. I’ve been trying to focus on keeping only the things that I truly love and that serve a purpose. It’s all about getting rid of the clutter and making room for what really matters.',
          'I love things that are both beautiful and practical, like the L’COZEE Lavender Sherpa Plush Throw. It’s a great way to add some coziness, and it’s also something that I use every day! I’m trying to be a bit more selective about what I add to my home, and I think that’s really helped.',
          'And don’t be afraid to donate or sell things that you’re not using. It’s such a great way to clear out your space and help someone else at the same time!'
        ]
      },
      {
        heading: 'Create Atmosphere with Scent and Light',
        paragraphs: [
          'Even in a small space, you can create a lovely atmosphere with a few simple things. I’m a big fan of using a candle, like the DARJEN Rose Scented Candle, to add some scent and warmth. It’s such an easy way to make a space feel more inviting and comfortable.',
          'I think it’s also important to think about the light in your home. I try to make the most of the natural light, and when it gets dark, I love having some soft, warm light to make things feel cozy. It’s all about creating the atmosphere that makes you feel at home.',
          'And again, just remember to be safe with your candles! I love the scent and the atmosphere, but I always make sure I’m being careful.'
        ]
      },
      {
        heading: 'Add Texture and Color Without the Clutter',
        paragraphs: [
          'I’ve found that you can add so much personality to a small space with just a few well-chosen pieces. I’m really excited about the velvet pillow covers because they add such a lovely touch of texture without taking up too much room! It’s all about finding those little things that make your space feel more "you" without filling it with stuff.',
          'I’m trying to be a bit more thoughtful about the colors and textures I choose, and it’s really made a difference in how my space feels. It’s all about balance and finding what works for your unique space.',
          'And don’t be afraid to experiment! It’s all part of the fun, and you never know what you might come up with.'
        ]
      },
      {
        heading: 'A Final Thought on Making Your Home Your Own',
        paragraphs: [
          'I think the most important thing is that your home, no matter how big or small, feels like a place where you can be yourself and truly relax. It’s all about creating a space that feels right for you, and I’m so happy to be finding new ways to do that in my own home.',
          'I hope some of these ideas are helpful for you, too! And remember, there’s no right or wrong way to do this. It’s all about what makes you feel comfortable, happy, and at peace. So take your time, have a little fun with it, and create a space that’s all your own!',
          'I’d love to hear how you keep your own home feeling calm and organized! Let me know if you have any favorite tips.'
        ]
      }
    ]
  },
  {
    slug: 'pinterest-to-real-room',
    title: 'From Pinterest Board to My Real-Life Home',
    category: 'Home & Decor',
    photo: 'desk',
    excerpt: 'How I’m turning those beautiful pins into a space that actually works for me.',
    productIds: ['hydrangea-notebook', 'life-planner', 'chunky-knit-throw'],
    introduction: 'Oh, friends, Pinterest is just dangerous, isn’t it? I’ve lost so many hours just pinning beautiful rooms and dreaming of how my home could look. But the problem is, it’s so hard to actually take those ideas and make them work in my own space. I’ve been trying to find ways to take my favorite pins and turn them into something I can actually use. I’ve been eyeing some lovely things—the LIANGW Coquette Hardcover Notebook, the Forvencer 2027 Hardcover Planner, and the Lotus Karen Bubble Fleece Throw. I haven’t tried them yet, they are just on my wishlist, but I think they’d be such a lovely addition. Let me share how I’m approaching this, and remember, this is all about making your space work for YOU.',
    sections: [
      {
        heading: 'Identify What You Truly Love',
        paragraphs: [
          'When I’m looking at all those pins, I try to see if there’s a pattern. What is it that I’m constantly pinning? Is it the colors? The textures? Or is it the overall vibe? I’ve realized that for me, I’m always drawn to soft colors, cozy textures, and a feeling of warmth. Once I figured that out, it became so much easier to think about how I could add those elements to my own home.',
          'I love having a place to keep track of these ideas, and I’ve been wanting to get the LIANGW Coquette Hardcover Notebook. I think it would be such a lovely place to jot down my ideas and keep track of everything I want to do. It’s such a simple way to stay organized and keep my thoughts together.',
          'And don’t feel like you need to have a huge plan. It’s all about taking one little idea at a time and seeing what works. It’s a process, and it’s okay to take your time!'
        ]
      },
      {
        heading: 'Make It Work for Your Real Life',
        paragraphs: [
          'The most important thing I’ve learned is that my home needs to work for my real life. A beautiful room is nice, but it needs to be practical, too. I’m always looking for ways to make things work for me, like having a place to keep my planner and other essentials. I’ve been really wanting to get the Forvencer 2027 Hardcover Planner, because it seems like such a lovely way to keep everything organized and make planning feel a little more enjoyable.',
          'I think it’s so easy to focus on how a room looks and forget about how it works. I’ve been trying to be more mindful about that, and it’s really helped me to create a space that’s not just pretty, but also functional.',
          'And it’s okay to have a little mess! My real life is messy, and my home should reflect that. It’s all about finding that balance between a pretty home and a home that you actually live in.'
        ]
      },
      {
        heading: 'Start Small and Be Gentle with Yourself',
        paragraphs: [
          'I’m trying to focus on starting small. I don’t need to change everything at once. I’ve been thinking about getting a soft throw, like the Lotus Karen Bubble Fleece Throw, to add a little touch of coziness and color. It’s such a simple, small way to make a change, and I think that’s really the way to go.',
          'And don’t be afraid to take your time! I’ve learned that it’s better to take my time and choose things I really love, rather than trying to finish everything as quickly as possible. It’s all about enjoying the process and being gentle with myself.',
          'I think the most important thing is that my home feels like a place where I can relax and be myself. And if that means it doesn’t look like a Pinterest board, then that’s totally fine!'
        ]
      },
      {
        heading: 'Final Thought: Make It Yours',
        paragraphs: [
          'At the end of the day, your home is YOURS. It should be a place where you feel happy, comfortable, and at peace. And if that means it doesn’t always look perfect, that’s totally fine. The most important thing is that it’s a place where you can relax and be yourself.',
          'I hope some of these ideas are helpful for you! And remember, there’s no right or wrong way to do this. It’s all about what makes you feel comfortable, happy, and at peace. So take your time, have a little fun with it, and create a space that’s all your own!',
          'I’d love to hear how you turn your own Pinterest ideas into real-life home changes! Let me know if you have any favorite tips.'
        ]
      }
    ]
  }
];

export function articleWordCount(article: Article): number {
  const text = [article.introduction, ...article.sections.flatMap((s) => s.paragraphs)].join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}
