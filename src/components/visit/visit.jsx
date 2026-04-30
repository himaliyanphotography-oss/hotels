import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import Heading from "../ui/heading";
import LJ from "../../components/visit/assets/Lakshman_Jhula.jpg";
import RJ from "../../components/visit/assets/Ram_Jhula.jpg";
import NW from "../../components/visit/assets/neergarh_waterfalls.jpg";
import GA from "../../components/visit/assets/ganga_aarti.jpg";
import PNA from "../../components/visit/assets/parmarth.jpeg";
import BA from "../../components/visit/assets/beatles.jpg";
import BT from "../../components/visit/assets/bhootnath.jpg";
import SA from "../../components/visit/assets/swarg.jpg";
import SHA from "../../components/visit/assets/shivanand.jpg";
import GB from "../../components/visit/assets/gita.jpg";
import YA from "../../components/visit/assets/yogi.jpg";
import HotelSurroundings from "../visit/subcomponents/nearbyplaces"

const PlaceCard = ({ img, heading, description, isReversed = false }) => (
  <div
    className={`flex flex-col lg:flex-row gap-6 my-8 items-center w-full ${isReversed ? "lg:flex-row-reverse" : ""
      }`}
  >
    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <div className="relative min-h-[250px] lg:h-96 w-full rounded-xl overflow-hidden shadow-lg">
        <Image
          src={img}
          alt={heading}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

    <Card className="w-full lg:w-1/2 min-h-[250px] lg:h-96 bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl rounded-xl">
      <CardContent className="p-6 lg:p-8">
        <h3 className="text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 font-bold mb-3 lg:mb-4">
          {heading}
        </h3>
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed tracking-wide">
          {description}
        </p>
      </CardContent>
    </Card>
  </div>
);


export default function Visit() {
const places = [
  {
    img:"/hero5.jpg" ,
    heading: "Kausani View Point",
    description:
      "The best spot to enjoy panoramic views of the Himalayan peaks like Nanda Devi, Trishul, and Panchachuli. Famous for breathtaking sunrise and sunset views over snow-covered mountains.",
  },
  {
    img:"/hero6.png" ,
    heading: "Anasakti Ashram",
    description:
      "A peaceful ashram where Mahatma Gandhi stayed in 1929. It offers a serene environment, beautiful gardens, and stunning views of the Himalayas, making it ideal for meditation and relaxation.",
  },
  {
    img: "/hero7.jpg",
    heading: "Kausani Tea Estate",
    description:
      "A scenic tea garden spread over lush green hills. Visitors can walk through the plantations, learn about tea processing, and enjoy fresh organic tea with mountain views.",
  },
  {
    img: "/hero8.png",
    heading: "Sumitranandan Pant Museum",
    description:
      "Dedicated to the famous Hindi poet Sumitranandan Pant, this museum showcases his manuscripts, photographs, and personal belongings, offering insight into his literary life.",
  },
  {
    img: "/hero9.png",
    heading: "Lakshmi Ashram",
    description:
      "A quiet spiritual retreat focused on women's education and empowerment. Surrounded by pine forests, it provides a calm environment ideal for meditation and peaceful stays.",
  },
  {
    img: "/hero10.png",
    heading: "Rudradhari Falls and Caves",
    description:
      "A hidden natural gem located amidst dense forests. The waterfall and ancient caves require a short trek, rewarding visitors with scenic beauty and tranquility.",
  },
  {
    img: "/hero11.png",
    heading: "Baijnath Temple",
    description:
      "An ancient temple complex dedicated to Lord Shiva, located on the banks of the Gomti River. Known for its stone architecture and spiritual significance.",
  },
  {
    img: "/hero12.png",
    heading: "Someshwar Valley",
    description:
      "A picturesque valley with lush green fields, rivers, and traditional villages. Perfect for nature lovers and photography enthusiasts.",
  },
  {
    img: "/hero3.jpg",
    heading: "Pinnath Trek",
    description:
      "A popular trekking route offering adventure and stunning views of the Himalayas. Ideal for trekking enthusiasts seeking a moderate hike.",
  },
  {
    img: "/hero13.png",
    heading: "Bageshwar",
    description:
      "A nearby town located at the confluence of rivers Saryu and Gomti. Known for temples, local markets, and cultural significance.",
  },
];

  return (
    <div className="bg-black">
      <div className="pt-20 pb-8 mt-10">
        <Heading text="Discover Kausani's Sacred Sites" />
        <p className="text-center text-gray-300 px-6">
          Explore the spiritual heart of India through these iconic landmarks
        </p>
      </div>

      {/* Two Images Side by Side Section
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <div className="relative h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Jonk Road.png"
                alt="Kausani Overview 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/tp.png"
                alt="Kausani Overview 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 lg:px-8">
        {places.map((place, index) => (
          <PlaceCard key={place.heading} {...place} isReversed={index % 2 !== 0} />
        ))}
      </div>
      <div>
        <HotelSurroundings />
      </div>
    </div>

  );
}