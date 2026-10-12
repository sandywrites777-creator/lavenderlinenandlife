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
    introduction: 'Oh, hi! It’s Sandy from Lavenderlinenandlife. I’ve been spending way too much time at my little desk lately, and I realized it was starting to feel a bit too much like a cold office. I want my workspace to be a little corner where I can actually feel creative and relaxed, even when I have a to-do list a mile long. You know that feeling when you just want a space that feels like a big, warm hug? That’s what I’m going for. I’ve been eyeing some lovely things like the Rifle Paper Co. Pink Hydrangea Spiral Notebook, some Sakura Gelly Roll Souffle Pastel Pens (10 pack), and even a Yankee Candle Blush Bouquet Large Tumbler Candle to keep things sweet while I work. I haven’t tried these yet, they are just on my wishlist, but I think they’d be so lovely to have around. Let me share what I’m planning, and remember, this is all about what feels good to you, not just making it look right for a photo.',
    sections: [
      {
        heading: 'Clear the Clutter (Seriously, Just Try It)',
        paragraphs: [
          'I know, I know, everyone says this, but it’s true. I started by taking everything—and I mean everything—off my desk. It’s wild how much stuff just ends up in a pile, isn’t it? I only put back what I truly use every single day. The rest? Gone into a little drawer where it won’t distract me. When I have that clear surface, it’s like my mind clears up, too. I think we often try to organize our clutter rather than just getting rid of it.',
          'And once it was clear, I felt so much better. I think I’ve been trying to keep too much "just in case" stuff on my desk, but honestly, how many staplers do I really need within arm’s reach? Now, it’s just the basics. A spot for my laptop, a little space for my new Rifle Paper Co. Pink Hydrangea Spiral Notebook, and a pen holder. That’s it. It’s so much more peaceful, and I don’t find myself constantly pushing papers around just to find a spot to put my coffee.',
          'If you’re feeling a bit overwhelmed, just try clearing one corner. You don’t need to do the whole thing at once. Just start small. Maybe just a little square of your desk. See how that feels, and then go from there. It’s all about finding that balance between having what you need and not letting it take over your life.'
        ]
      },
      {
        heading: 'Bring in the Light',
        paragraphs: [
          'Lighting changes everything, right? I hate that harsh, bright overhead light that makes me feel like I’m in a doctor’s office. I’ve been looking for a nice, adjustable lamp that gives me a warm, soft glow. When it’s dark outside, having just that little pool of light on my work area makes such a difference. It makes it feel like it’s just me and my work, and not like I’m sitting in the middle of a busy, bright room.',
          'And then, when I’m feeling a bit fancy, I’ll light my Yankee Candle Blush Bouquet Large Tumbler Candle. It doesn’t just smell amazing—like, really sweet and fresh—but the glow from the candle is just so calming. It’s like a little ritual for me. I’ll light it, get my tea, and settle into my work. It makes the whole afternoon feel special, even if I’m just answering emails.',
          'Just remember to be careful with where you put your candle. I keep mine well away from any papers or anything that could catch fire. It’s not worth the risk, no matter how much I love the scent! I think the key is just finding that little bit of light that works for you.'
        ]
      },
      {
        heading: 'Add Little Touches of Color (Because Why Not?)',
        paragraphs: [
          'I’m a huge fan of soft colors. I’m thinking of getting some Sakura Gelly Roll Souffle Pastel Pens (10 pack). The colors are just so pretty, and they have that fun, creamy look. Using a nice pen makes a difference, even if it’s just for jotting down a grocery list or a quick note. It’s a little treat for myself. Plus, they look so lovely resting next to my hydrangea notebook.',
          'I used to think that "organized" meant "boring," but I’m realizing that’s not true at all. You can have a functional workspace that’s also colorful and fun. It’s all about finding what makes you smile. Maybe for you, it’s a bright mug or a funny little desk accessory. It doesn’t have to be expensive, and it doesn’t have to be brand new.',
          'I think we spend too much time worrying about whether our workspace looks professional. Who cares? If it works for you and makes you happy, that’s all that matters. My desk isn’t perfect, and there are often papers scattered around by the end of the day, but that’s okay. It means I’ve been busy!'
        ]
      },
      {
        heading: 'Stay True to You',
        paragraphs: [
          'I think the most important thing I’ve learned is that I can’t just copy what someone else is doing. I’ve seen so many photos of perfect desks online, and I used to try to make mine look just like them. But it never really felt like mine, you know? Now, I’m trying to focus on what I actually need and what I actually love. It’s okay if my desk doesn’t look like a Pinterest board.',
          'I’m still figuring it out, and that’s perfectly fine. I’m constantly moving my lamp, swapping out my pens, and trying to find the best spot for my notebook. It’s a journey, not a destination. And honestly, I think that’s the fun part of it. My workspace is always changing, just like I am.',
          'Don’t be afraid to try new things and see what sticks. If something isn’t working, change it! It’s your space. Take a little bit of time today to just sit at your desk and think about what you actually want. You might be surprised by what you come up with.'
        ]
      }
    ]
  },
  {
    slug: 'style-a-reading-nook',
    title: 'My Little Reading Corner Refresh',
    category: 'Home & Decor',
    photo: 'home',
    excerpt: 'Turning a quiet corner into the ultimate reading retreat.',
    productIds: ['sherpa-throw', 'velvet-pillow-covers', 'lavender-diffuser'],
    introduction: 'Hi friends! Sandy here. If you know me, you know that my absolute favorite way to spend an afternoon is curled up with a good book. I’ve been thinking a lot about my reading corner lately. It’s always been okay, but I really wanted to turn it into something a bit more... well, magical. Not "Pinterest-perfect" magic, but "I want to nap here for three hours" magic. I’ve been dreaming about getting a really soft L’COZEE Lavender Sherpa Plush Throw, maybe some pretty Nestinco Blush Pink Velvet Pillow Covers (set of 2), and oh, definitely an ASAKUKI Essential Oil Diffuser with Lavender Oil to make the whole area smell like a dream. None of these are things I own yet, they’re just on my very long wishlist. But honestly, even just imagining it makes me want to start a new book right now! Let’s talk about how to make your own little reading nook, with whatever space you have.',
    sections: [
      {
        heading: 'Find Your Perfect Spot',
        paragraphs: [
          'You don’t need an entire spare room for a reading nook. My nook is just a corner of my living room, but honestly, it’s the best spot in the house. I found a chair that I just love, and I added a little stool for my feet. That’s all you really need! The important thing is that it’s comfortable. If you’re not comfortable, you’re not going to read for very long. I like to keep my nook away from the main traffic of the house so I can actually concentrate on my story. It’s my little getaway, even when I’m still at home.',
          'I think it’s easy to feel like we need a huge, dedicated space to create a special spot. But honestly, even a corner of the bedroom or a quiet spot by a window can be perfect. I’ve even seen people create little nooks in a walk-in closet! Just find a place where you can be undisturbed for a little while, and that’s a win.',
          'I love to think about what makes me feel relaxed. Is it sunlight? Is it quiet? Once you find that, you’ll know where your perfect spot is. And don’t be afraid to experiment! Move your chair around a bit until you find the spot that just feels right.'
        ]
      },
      {
        heading: 'Softness Is the Key',
        paragraphs: [
          'I cannot emphasize enough how much I love a good, soft throw blanket. I’ve been looking at the L’COZEE Lavender Sherpa Plush Throw, and it just looks so warm. I love the idea of draping it over the back of my chair. And the Nestinco Blush Pink Velvet Pillow Covers? Those would look so good on my chair. They add such a lovely touch of texture, you know? It’s not just about the color, it’s about how it feels when you’re relaxing.',
          'You don’t need to replace your whole sofa, just adding one or two soft touches can really change the feel of the whole corner. I love how adding a velvet pillow or a soft blanket can make a space feel so much more inviting. It’s like it’s inviting you to stay for just a little while longer.',
          'Plus, it’s a great way to add some color without painting the walls. I love my blush and lavender, but you can choose whatever colors make you happy! The goal is just to create a space that feels like a big, cozy hug.'
        ]
      },
      {
        heading: 'Scent and Atmosphere',
        paragraphs: [
          'I’ve really been getting into aromatherapy lately. I haven’t tried the ASAKUKI Essential Oil Diffuser yet, but I’ve heard such great things about having a little bit of lavender scent in the air. I think it would be so relaxing while I’m reading. Just a little hint of lavender, maybe a cup of herbal tea... it’s like a spa day right in my living room.',
          'I do want to make sure I’m using it safely, though, so I’ll be careful about where I put it. It’s always better to start with just a little bit and see how you like it. You don’t need a strong scent to have an impact. Sometimes just a very subtle hint is enough.',
          'And don’t forget that you can also add other things to the atmosphere. Maybe a little bit of soft music in the background? Or keeping the blinds closed if you want a cozy, quiet vibe? It’s all about creating the environment that works for you.'
        ]
      },
      {
        heading: 'Making It Your Own',
        paragraphs: [
          'The best thing about a reading nook is that it’s yours. If you want to pile up five different pillows, go for it! If you prefer a more minimalist look, that’s totally fine too. It’s not about following a set of rules; it’s about creating a space where you feel happy. I’ve spent way too much time worrying about what my home "should" look like, and I’m trying to move away from that. I just want my home to feel like a reflection of the things I love.',
          'And right now, I love cozy throws and soft lavender scents. It makes me feel at home in my own space. Don’t be afraid to put your own spin on things! Maybe you want to add some fairy lights, or some favorite photos. It’s your nook, so make it a place that makes you feel like you.',
          'And if you find yourself changing things around a lot, that’s okay too. My nook is always evolving, and I think that’s part of the fun of it. It’s a living, breathing space that changes with me.'
        ]
      }
    ]
  },
  {
    slug: 'gentle-evening-routine',
    title: 'My Gentle Evening Rituals',
    category: 'Beauty & Self-care',
    photo: 'home',
    excerpt: 'How I wind down after a long day without any stress.',
    productIds: ['chunky-knit-throw', 'laura-mercier-blush', 'blush-bouquet-candle'],
    introduction: 'Hi there! Sandy again. You know, I used to think that an "evening routine" meant I had to have a complex skincare ritual or a super structured plan. But lately, I’ve realized that for me, it’s just about being kind to myself before bed. It’s the simple things: a warm throw, maybe a little bit of pampering if I feel like it, and a nice, relaxing candle. I’ve been looking at the SALIMAH Chunky Knit Throw Blanket in Pink, because it looks so incredibly soft. And I’ve been really wanting to try the Laura Mercier Blush Colour Infusion for those days when I want to feel a little bit fancy, even if I’m just staying home. And of course, a Yankee Candle Blush Bouquet Large Tumbler Candle is always on my mind to keep things feeling cozy. Let’s talk about how to make your evening a bit more gentle.',
    sections: [
      {
        heading: 'Keeping It Low-Pressure',
        paragraphs: [
          'I used to get so stressed about my evening routine. Like, if I didn’t follow every single step, I felt like I was failing. Does anyone else feel like that? Now, I try to keep things super low-pressure. If I just want to sit on the sofa with my SALIMAH Chunky Knit Throw Blanket in Pink, that’s my routine! I’m trying to let go of the idea that I have to be "productive" even in my downtime.',
          'Sometimes, the best routine is just giving yourself permission to do nothing. And honestly, isn’t that the dream? I’ve found that when I take the pressure off, I actually enjoy my evenings so much more. It’s not about checking off a to-do list; it’s about taking care of myself in a way that feels good.',
          'And if I don’t get to everything I wanted to do? That’s okay! There’s always tomorrow. I’m learning to be a bit more patient with myself, and I think that’s been the biggest change of all.'
        ]
      },
      {
        heading: 'A Little Bit of Pampering',
        paragraphs: [
          'Sometimes, I do like to do a little something for myself. I’ve been thinking about the Laura Mercier Blush Colour Infusion. Even if I’m just washing my face, sometimes putting on a little bit of blush in the morning or just refreshing my look for dinner makes me feel a bit more... I don’t know, pulled together? I’m definitely not an expert at all, I just enjoy the process. It’s like a little moment of taking care of myself.',
          'I think we all need those little moments, don’t you? It doesn’t have to be a big, expensive beauty routine. It can just be something that makes you feel a little bit better, a little bit more like yourself. And I think that’s all that really matters.',
          'I’m definitely not saying you have to wear makeup all the time! Sometimes, the best routine is a fresh face and no makeup at all. It’s just about what makes YOU feel good. And for me, right now, that includes a little blush when I’m in the mood.'
        ]
      },
      {
        heading: 'Setting the Mood',
        paragraphs: [
          'I love how a candle can change the feel of a room. Like I said, I’m a huge fan of the Yankee Candle Blush Bouquet Large Tumbler Candle. It’s just so sweet and welcoming. I usually light it for just a little while before I head to bed. It helps me signal to my brain that it’s time to relax. And of course, I’m always super careful. I never leave it burning if I’m not in the room.',
          'Safety is key when you’re trying to be cozy! I love the scent, but I always make sure I’m keeping an eye on it. It’s a small price to pay for such a lovely atmosphere. And even if I don’t light a candle, I try to make sure my space feels inviting, whether it’s with some soft light or just by keeping things tidy.',
          'I’ve noticed that when my space feels calm, I feel calm. And that’s a big part of how I wind down after a long day. It’s like I’m creating a sanctuary that helps me let go of the day’s stress.'
        ]
      },
      {
        heading: 'Being Okay with Imperfection',
        paragraphs: [
          'My evenings are definitely not perfect. Sometimes I’m too tired to do anything, and that’s okay. Sometimes I’m on my phone way too long, and that’s okay, too. I think we need to be a bit more gentle with ourselves. We don’t have to follow a set of rules. I’m just trying to make my evenings feel a little more like a treat, and a little less like a list of chores. If I can do that, I’m happy.',
          'I’m constantly trying to find new ways to make my evenings a little bit more relaxing. I’ve tried reading, listening to podcasts, and even just sitting in silence. Some things work, some things don’t. And that’s perfectly fine! It’s all about finding what works for you.',
          'I hope you can find your own little way to relax, too. Whether it’s with a soft blanket, a favorite book, or just a quiet cup of tea, you deserve those little moments of peace. Let’s all try to be a bit kinder to ourselves, shall we?'
        ]
      }
    ]
  },
  {
    slug: 'paper-planning-that-works',
    title: 'How I Actually Get Organized (And Stay That Way!)',
    category: 'Stationery & Desk',
    photo: 'planning',
    excerpt: 'One planner, a few simple habits, and a system that actually fits my messy, wonderful life.',
    productIds: ['life-planner', 'souffle-pens', 'hydrangea-notebook'],
    introduction: 'Oh, friends, planning has always been a bit of a struggle for me! I’d buy these beautiful, expensive planners, use them for about three weeks, and then—oops—they’d end up in the drawer. But I think I’ve finally found a way that actually works for me, and I wanted to share it. It’s not about fancy, complicated systems. It’s just about having a place to keep track of the things that matter, and maybe a few pretty things to make the process a little more fun. I’ve been eyeing the Erin Condren 12-Month Soft Bound Life Planner, Blush, some Sakura Gelly Roll Souffle Pastel Pens (10 pack), and a Rifle Paper Co. Pink Hydrangea Spiral Notebook. I haven’t tried them yet, but they seem like they’d make planning a little bit more enjoyable. Let’s talk about my simple approach to staying organized without the stress!',
    sections: [
      {
        heading: 'Find a Planner You Actually Like',
        paragraphs: [
          'This might sound obvious, but it took me a long time to realize it! If you don’t like the look and feel of your planner, you won’t use it. For a long time, I bought these really serious, "professional" planners that just felt like a chore to open. Now, I’m focusing on finding something that makes me happy. I think the Erin Condren 12-Month Soft Bound Life Planner, Blush, looks so lovely—it’s simple, elegant, and I love the color!',
          'I think it’s important to have a planner that fits your needs. Do you need lots of space for appointments? Or are you more into task lists? I’ve realized that for me, a simple layout works best. I like having a place to see my whole week at a glance, and enough room to jot down a few things for each day. It’s all about finding what works for YOU.',
          'And don’t feel like you have to stick with one type of planner forever. If your needs change, your planner can change, too. It’s your tool, and it should work for you.'
        ]
      },
      {
        heading: 'Make It Fun with Nice Supplies',
        paragraphs: [
          'I’ve realized that I’m much more likely to use my planner if I actually like the supplies I’m using with it. I have a thing for nice pens, and I’ve been really wanting to try the Sakura Gelly Roll Souffle Pastel Pens (10 pack). The colors are so soft and pretty, and they make planning feel less like a chore and more like a creative outlet. It’s such a small thing, but it really makes a difference.',
          'I also love having a little notebook, like the Rifle Paper Co. Pink Hydrangea Spiral Notebook, for when I have random ideas or need to make a quick list. It’s so nice to have a dedicated place for that, so it doesn’t clutter up my main planner. It’s all about finding what works for you and having a little fun with it.',
          'Just don’t go overboard! I’ve definitely had those moments where I bought way too many stationery supplies and then didn’t know what to do with them. It’s better to have a few things you love and actually use than a drawer full of unused stuff.'
        ]
      },
      {
        heading: 'Keep It Simple',
        paragraphs: [
          'I think the biggest mistake I made when I was starting out was trying to make my planner look like a work of art. I’d spend hours decorating pages, and then I wouldn’t actually have any time to plan! Now, I’m trying to keep things simple. It’s all about function, not perfection. If I have a busy week, my planner might just have a few scribbles in it, and that’s perfectly fine.',
          'I try to do a little bit of planning at the beginning of each week, and then I just check in with it every day. It doesn’t have to take long. In fact, if it takes more than a few minutes, I’m probably doing it wrong. The goal is to make my life easier, not more complicated.',
          'And if I miss a day? Or even a whole week? It’s okay! I just start again. It’s a tool, not a judge. I’m trying to be a bit more gentle with myself and accept that life is messy and unpredictable, and that’s okay.'
        ]
      },
      {
        heading: 'A Little Bit of Reflection',
        paragraphs: [
          'One of the things that’s helped me the most is taking a little bit of time at the end of each week to look back. I’ll see what I got done, what didn’t get done, and what I want to focus on for next week. It’s so helpful to see how much I’ve accomplished, even on those weeks when I feel like I didn’t get much done.',
          'I’ve also started writing down a few things that I’m grateful for each week, even if it’s just something small. It’s such a simple way to keep things in perspective and remind myself of all the good things in my life. It’s not about being perfect; it’s about acknowledging the good.',
          'I hope you find some of these tips helpful. And remember, the most important thing is that your planning system works for YOU. It doesn’t have to be perfect, it just has to be useful. So don’t stress, have a little fun, and find what works for you!'
        ]
      }
    ]
  },
  {
    slug: 'blush-lavender-home',
    title: 'Adding a Little Blush and Lavender to My Home',
    category: 'Home & Decor',
    photo: 'decor',
    excerpt: 'How I’m gently introducing my favorite colors into my home.',
    productIds: ['sherpa-throw', 'blush-bouquet-candle', 'lavender-diffuser'],
    introduction: 'Oh, hi again! Sandy here. You know how much I love blush and lavender? I think they’re just the most calming, sweet colors. I’ve been wanting to bring a bit more of that energy into my home, but without it feeling like I’m living in a dollhouse. I’ve been trying to find ways to add these colors in a subtle, intentional way. I’ve been eyeing some lovely things like the L’COZEE Lavender Sherpa Plush Throw, the Yankee Candle Blush Bouquet Large Tumbler Candle, and the ASAKUKI Essential Oil Diffuser with Lavender Oil. I haven’t tried these yet, they are just on my wishlist, but I think they would be such a lovely, cozy addition. Let me share how I’m approaching this—and remember, this is all about what feels good in YOUR space.',
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
          'I’ve been learning that scent can really change the feel of a room, too. Like I said, I’m really excited about the ASAKUKI Essential Oil Diffuser with Lavender Oil. Lavender is just so calming, and I think it would be such a lovely addition to my living room. And of course, the Yankee Candle Blush Bouquet Large Tumbler Candle is another great way to add a bit of scent and atmosphere.',
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
    introduction: 'Oh, hi friends! Sandy here. Is there anything better than heading to bed in a room that feels like a little sanctuary? I’ve been trying to make my bedroom feel a bit more cozy, especially since it’s where I spend all my time relaxing at the end of the day. I’ve been looking at some lovely things—the SALIMAH Chunky Knit Throw Blanket in Pink, some Nestinco Blush Pink Velvet Pillow Covers (set of 2), and the ASAKUKI Essential Oil Diffuser with Lavender Oil. I haven’t tried these yet, they are just on my wishlist, but I think they would be such a lovely addition. Let me share how I’m approaching this, and remember, this is all about creating a space that feels like a big, warm hug for YOU.',
    sections: [
      {
        heading: 'Soft, Cozy Layers Are Everything',
        paragraphs: [
          'I’ve realized that the secret to a cozy bedroom is all about the layers. I love having a few different throws and pillows to mix and match. I’ve been really wanting to get the SALIMAH Chunky Knit Throw Blanket in Pink, because it just looks so soft and warm. And the Nestinco Blush Pink Velvet Pillow Covers (set of 2) would be a perfect addition to my bed! They add such a lovely, soft touch to the whole room.',
          'I think it’s so important to have a space that feels inviting. When I walk into my room, I want to feel like I can just curl up and relax. And I’ve found that having those soft, cozy layers makes such a difference. It’s like it’s inviting you to take a break and just breathe.',
          'And don’t be afraid to experiment with different textures! You might be surprised by how much of a difference it makes to have a soft fleece throw next to some velvet pillows. It’s all about creating that inviting, cozy feel.'
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
    introduction: 'Oh, hi friends! Sandy here. You know, I live in a smaller home, and it can definitely get a bit crowded sometimes! I’ve been really thinking about how to keep things feeling calm and organized, even when space is tight. It’s all about being a little bit more intentional with what I have and how I use it. I’ve been eyeing some lovely things to help with this—the L’COZEE Lavender Sherpa Plush Throw, the Yankee Candle Blush Bouquet Large Tumbler Candle, and the Nestinco Blush Pink Velvet Pillow Covers (set of 2). I haven’t tried them yet, they are just on my wishlist, but I think they would be such a lovely, cozy addition. Let me share how I’m approaching this, and remember, this is all about what feels good in YOUR space.',
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
          'Even in a small space, you can create a lovely atmosphere with a few simple things. I’m a big fan of using a candle, like the Yankee Candle Blush Bouquet Large Tumbler Candle, to add some scent and warmth. It’s such an easy way to make a space feel more inviting and comfortable.',
          'I think it’s also important to think about the light in your home. I try to make the most of the natural light, and when it gets dark, I love having some soft, warm light to make things feel cozy. It’s all about creating the atmosphere that makes you feel at home.',
          'And again, just remember to be safe with your candles! I love the scent and the atmosphere, but I always make sure I’m being careful.'
        ]
      },
      {
        heading: 'Add Texture and Color Without the Clutter',
        paragraphs: [
          'I’ve found that you can add so much personality to a small space with just a few well-chosen pieces. I’m really excited about the Nestinco Blush Pink Velvet Pillow Covers (set of 2) because they add such a lovely touch of texture without taking up too much room! It’s all about finding those little things that make your space feel more "you" without filling it with stuff.',
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
    introduction: 'Oh, friends, Pinterest is just dangerous, isn’t it? I’ve lost so many hours just pinning beautiful rooms and dreaming of how my home could look. But the problem is, it’s so hard to actually take those ideas and make them work in my own space. I’ve been trying to find ways to take my favorite pins and turn them into something I can actually use. I’ve been eyeing some lovely things—the Rifle Paper Co. Pink Hydrangea Spiral Notebook, the Erin Condren 12-Month Soft Bound Life Planner, Blush, and the SALIMAH Chunky Knit Throw Blanket in Pink. I haven’t tried them yet, they are just on my wishlist, but I think they’d be such a lovely addition. Let me share how I’m approaching this, and remember, this is all about making your space work for YOU.',
    sections: [
      {
        heading: 'Identify What You Truly Love',
        paragraphs: [
          'When I’m looking at all those pins, I try to see if there’s a pattern. What is it that I’m constantly pinning? Is it the colors? The textures? Or is it the overall vibe? I’ve realized that for me, I’m always drawn to soft colors, cozy textures, and a feeling of warmth. Once I figured that out, it became so much easier to think about how I could add those elements to my own home.',
          'I love having a place to keep track of these ideas, and I’ve been wanting to get the Rifle Paper Co. Pink Hydrangea Spiral Notebook. I think it would be such a lovely place to jot down my ideas and keep track of everything I want to do. It’s such a simple way to stay organized and keep my thoughts together.',
          'And don’t feel like you need to have a huge plan. It’s all about taking one little idea at a time and seeing what works. It’s a process, and it’s okay to take your time!'
        ]
      },
      {
        heading: 'Make It Work for Your Real Life',
        paragraphs: [
          'The most important thing I’ve learned is that my home needs to work for my real life. A beautiful room is nice, but it needs to be practical, too. I’m always looking for ways to make things work for me, like having a place to keep my planner and other essentials. I’ve been really wanting to get the Erin Condren 12-Month Soft Bound Life Planner, Blush, because it seems like such a lovely way to keep everything organized and make planning feel a little more enjoyable.',
          'I think it’s so easy to focus on how a room looks and forget about how it works. I’ve been trying to be more mindful about that, and it’s really helped me to create a space that’s not just pretty, but also functional.',
          'And it’s okay to have a little mess! My real life is messy, and my home should reflect that. It’s all about finding that balance between a pretty home and a home that you actually live in.'
        ]
      },
      {
        heading: 'Start Small and Be Gentle with Yourself',
        paragraphs: [
          'I’m trying to focus on starting small. I don’t need to change everything at once. I’ve been thinking about getting a soft throw, like the SALIMAH Chunky Knit Throw Blanket in Pink, to add a little touch of coziness and color. It’s such a simple, small way to make a change, and I think that’s really the way to go.',
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
