"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-16 lg:py-24 px-6 lg:px-20 space-y-24">

      {/* ABOUT US */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <p className="text-teal-400 tracking-widest uppercase mb-3">
            Spellmount Resort
          </p>

          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            About Us
          </h2>

          <p className="text-gray-300 leading-relaxed space-y-4">
            Perched above the quiet charm of Kausani, Spellmount Resort is a refined sanctuary where timeless landscapes meet modern luxury. Designed for the discerning traveller, our boutique hideaway offers a seamless blend of elegant architecture, panoramic Himalayan views, and an atmosphere of understated indulgence.
            <br /><br />
            At Spellmount, luxury is not loud—it’s in the details: the soft morning light spilling into your suite, the stillness of the infinity pool mirroring snow-capped peaks, and the thoughtful service that feels personal, not performative.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="rounded-[50px] overflow-hidden">
            <Image
              src="/about.jpg"
              alt="Resort View"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>


      {/* RESTAURANT */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/restaurant.jpg"
            alt="Restaurant"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* TEXT */}
        <div>
          <p className="text-teal-400 tracking-widest uppercase mb-3">
            Restaurant
          </p>

          <h2 className="text-4xl font-semibold mb-6">
            Elevated Dining, Inspired By The Mountains
          </h2>

          <p className="text-gray-300 leading-relaxed">
            At Spellmount Resort, dining is more than a meal — it’s a sensory journey through the flavours of the Himalayas and beyond. Our in-house restaurant offers a serene and elegant setting with sweeping views of the majestic ranges.
            <br /><br />
            Each dish is thoughtfully prepared using fresh, seasonal ingredients, many sourced locally. Whether it’s a sunrise breakfast or a candlelit dinner, every moment is crafted to be unforgettable.
          </p>
        </div>
      </div>


      {/* EVENTS */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <p className="text-teal-400 tracking-widest uppercase mb-3">
            Weddings & Events
          </p>

          <h2 className="text-4xl font-semibold mb-6">
            Celebrate Where The Mountains Meet The Sky
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Spellmount Resort offers an idyllic destination for intimate weddings and private events. With panoramic Himalayan views and lush surroundings, we create unforgettable celebrations.
          </p>

          <ul className="text-gray-400 space-y-2 list-disc pl-5">
            <li>Cliffside mandaps and open-air settings</li>
            <li>Customised event planning and décor</li>
            <li>Curated menus by in-house chefs</li>
            <li>Ideal for 50–100 guests</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/wedding.jpg"
            alt="Events"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

    </section>
  );
}