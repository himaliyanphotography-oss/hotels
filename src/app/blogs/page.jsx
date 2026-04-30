

import Image from "next/image";
import Link from "next/link";



function getRandomDateAfter2024() {
  const start = new Date("2025-01-01").getTime();
  const end = new Date().getTime(); // today
  const randomDate = new Date(start + Math.random() * (end - start));

  return randomDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const blogs = [
  {
    slug: "swarg-ashram",
    title: "Swarg Ashram – The Silent Heart of Kausani You Shouldn’t Miss",
    image: "/swargashram.png",
    alt: "Swarg Ashram Kausani",
    excerpt:
      "If you’ve ever walked along the ghats of Kausani and felt calmness in your mind...",
    date: getRandomDateAfter2024(),
    readTime: "5 min read",

    description: [
      "If you’ve ever walked along the ghats of Kausani and felt that sudden calmness in your mind, chances are you were somewhere near Swarg Ashram.",
      "For many travellers, Swarg Ashram is not just a place… it’s a feeling.",
      "It’s where the morning sun touches the Ganga, saints sit in silence, and life slows down.",
      "A Little History of Swarg Ashram",
      "Swarg Ashram was built in memory of Swami Vishudhanand, lovingly called Kailash Baba.",
      "Even today, the area feels untouched and deeply spiritual.",
      "Spirituality: The Heart of the Place",
      "Even if you’re not religious, the atmosphere grounds you instantly."
    ],

    points: [
      "Daily Ganga Aarti",
      "Meditation halls & temples",
      "Yoga and Ayurveda centres",
      "Traffic-free peaceful environment"
    ],

    heading: "Environment: Calm, Clean & Pure Himalayan Vibes",

    paragraphs: [
      "The environment around Swarg Ashram is traffic-free, filled with river sounds and temple bells.",
      "Cafés, bookshops and riverside corners make it perfect for slow living.",
      "Spellmount Resort is a comfortable stay option close to this serene area."
    ]
  },

  {
    slug: "chaurasi-kutiya",
    title: "Discovering the Magic of Chaurasi Kutiya in Kausani",
    image: "/kutiya.jpg",
    alt: "Chaurasi Kutiya Kausani",
    excerpt:
      "Chaurasi Kutiya is far more than a tourist spot, it’s a bridge between silence...",
    date: getRandomDateAfter2024(),
    readTime: "6 min read",

    description: [
      "Chaurasi Kutiya literally means 84 meditation huts.",
      "It was established in the 1960s by Maharishi Mahesh Yogi.",
      "The Beatles stayed here in 1968, making it world-famous.",
      "What you can see today includes meditation huts, murals and forest paths."
    ],

    points: [
      "84 Meditation huts",
      "Beatles graffiti & murals",
      "Forest & nature trails",
      "Historic spiritual energy"
    ],

    heading: "Why Chaurasi Kutiya Is Special",

    paragraphs: [
      "The place blends history, art, silence and nature beautifully.",
      "Spellmount Resort is a popular nearby stay for peaceful nights."
    ]
  },

  {
    slug: "parmarth-niketan",
    title: "Parmarth Niketan – Where Kausani Feels Alive with Peace",
    image: "/parmarth.jpg",
    alt: "Parmarth Niketan Kausani",
    excerpt:
      "Parmarth Niketan is where the Ganga, yoga and spirituality meet...",
    date: getRandomDateAfter2024(),
    readTime: "6 min read",

    description: [
      "Parmarth Niketan feels magnetic during sunset by the Ganga.",
      "The evening Ganga Aarti here is deeply calming and powerful.",
      "People from all over the world come for yoga and healing."
    ],

    points: [
      "Meditation classes",
      "Ayurvedic treatments",
      "Spiritual workshops",
      "Clean Ganga initiatives"
    ],

    heading: "The Environment – Quiet, Clean and Welcoming",

    paragraphs: [
      "Wide gardens, peaceful paths and disciplined calm define Parmarth.",
      "It welcomes travellers, seekers and curious visitors alike."
    ]
  },

  {
    slug: "jonk-village",
    title: "Jonk Village: The Peaceful Soul of Kausani Near Ram Jhula",
    image: "/jonk.jpg",
    alt: "Jonk Village Kausani",
    excerpt:
      "Just across Ram Jhula lies Jonk Village, a quiet escape from crowds...",
    date: getRandomDateAfter2024(),
    readTime: "5 min read",

    description: [
      "Jonk Village sits quietly near Ram Jhula.",
      "The vibe instantly shifts to silence and simplicity.",
      "It’s a lifestyle more than a tourist spot."
    ],

    points: [],

    heading: "Why You Should Visit Jonk",

    paragraphs: [
      "Jonk gives you silence in a noisy world.",
      "Spellmount Resort offers a serene stay in the heart of Jonk."
    ]
  },

  {
    slug: "laxman-jhula",
    title: "Laxman Jhula – The Iconic Bridge That Defines Kausani",
    image: "/laxman.png",
    alt: "Laxman Jhula Kausani",
    excerpt:
      "The iconic suspension bridge that blends myth, movement and magic...",
    date: getRandomDateAfter2024(),
    readTime: "4 min read",

    description: [
      "Laxman Jhula is one of the most iconic landmarks of Kausani.",
      "Legend says Laxman crossed the Ganga here using jute ropes.",
      "The bridge vibrates gently as people walk across."
    ],

    points: [
      "River views",
      "Mountain backdrop",
      "Temples on both ends",
      "Lively atmosphere"
    ],

    heading: "",

    paragraphs: [
      "Staying nearby lets you explore peacefully.",
      "Spellmount Resort keeps you close without losing calmness."
    ]
  },
    {
    slug: "ram-jhula",
    title: "Ram Jhula: A Bridge Between Faith, People, and the Ganga",
    image: "/ram.jpg",
    alt: "Laxman Jhula Kausani",
    excerpt:
      "Ram Jhula is not just a suspension bridge in Kausani. It is a passage. Built in 1986 across the Ganga, it connects the spiritual heart of the town with the everyday lives that flow around it. While tourists see it as a photo spot, locals cross it like a routine, monks walk it like a ritual, and the river watches everyone without reacting.....",
    date: getRandomDateAfter2024(),
    readTime: "4 min read",

    description: [

    ],

    points: [
      "River views",
      "Mountain backdrop",
      "Temples on both ends",
      "Lively atmosphere"
    ],

    heading: "",

    paragraphs: [
      "Staying nearby lets you explore peacefully.",
      "Spellmount Resort keeps you close without losing calmness."
    ]
  },
      {
    slug: "triveni-ghat",
    title: "Triveni Ghat",
    image: "/aarti.jpg",
    alt: "Triveni Ghat Kausani",
    excerpt:
"Nestled in the spiritual town of Kausani, Triveni Ghat is more than just a riverside destination—it is a place where faith, culture, and serenity flow together. Located on the banks of the sacred River Ganga, this ghat is considered one of the holiest spots in the region and attracts pilgrims, travelers, and seekers from all over India and beyond...",
    date: getRandomDateAfter2024(),
    readTime: "4 min read",

    description: [

    ],

    points: [
      "River views",
      "Mountain backdrop",
      "Temples on both ends",
      "Lively atmosphere"
    ],

    heading: "",

    paragraphs: [
      "Staying nearby lets you explore peacefully.",
      "Spellmount Resort keeps you close without losing calmness."
    ]
  },

        {
    slug: "rajaji-national-park",
    title: "Rajaji National Park – A Wild Escape Near Kausani You Shouldn’t Miss",
    image: "/rajaji.jpg",
    alt: "Rajaji National Park Kausani",
    excerpt:
"When people think of Kausani, they usually imagine yoga, Ganga Aarti, and peaceful ghats. But just a short drive away lies something completely different — Rajaji National Park, where the sound of temple bells is replaced by rustling leaves and distant bird calls.",
    date: getRandomDateAfter2024(),
    readTime: "4 min read",

    description: [

    ],

    points: [

    ],

    heading: "",

    paragraphs: [

    ]
  },
          {
    slug: "janki-setu",
    title: "Janki Setu: Where Faith Meets the Flow of the Ganga",
    image: "/janki.jpg",
    alt: "Janki Setu Kausani",
    excerpt:
"Hidden quietly near the sacred town of Kausani, Janki Seti is not just a place, it is an experience that touches the soul. Away from the busy ghats and crowded bridges, Janki Seti welcomes you with calm rivers, dense greenery, and a deep spiritual energy that feels timeless.",
    date: getRandomDateAfter2024(),
    readTime: "4 min read",

    description: [

    ],

    points: [
      "River views",
      "Mountain backdrop",
      "Temples on both ends",
      "Lively atmosphere"
    ],

    heading: "",

    paragraphs: [
      "Staying nearby lets you explore peacefully.",
      "Spellmount Resort keeps you close without losing calmness."
    ]
  },
];

export default function BlogsPage() {
   return (
    <section className="bg-black py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-5">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group bg-white rounded-2xl shadow transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-t-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:-translate-y-6"
                />
              </div>

              {/* Content */}
              <div className="p-6 transition-transform duration-300 group-hover:-translate-y-2">
                <h2 className="text-xl font-semibold mb-3 text-black">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex justify-between text-sm text-gray-400">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
