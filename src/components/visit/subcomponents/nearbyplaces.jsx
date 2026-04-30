"use client"
import React, { useState } from "react";
import { MapPin, Utensils, Train, Mountain, Plane } from "lucide-react";
import { Card,CardContent } from "../../ui/card";
import Heading from "../../ui/heading";

const HotelSurroundings = ({ hotelData }) => {
  const [activeTab, setActiveTab] = useState("nearby");

  // Sample data structure based on the image
  const sampleData = {
    title: "Hotel surroundings",
    locationQuality: "Good location",
    categories: {
nearby: [
  { name: "Kausani View Point", distance: "300 m" },
  { name: "Anasakti Ashram", distance: "500 m" },
  { name: "Kausani Tea Estate", distance: "1 km" },
  { name: "Sumitranandan Pant Museum", distance: "1.2 km" },
  { name: "Lakshmi Ashram", distance: "1.5 km" },
  { name: "Pinnath Trek Base", distance: "5 km" },
  { name: "Someshwar Valley", distance: "10 km" },
  { name: "Rudradhari Falls and Caves", distance: "12 km" },
  { name: "Baijnath Temple", distance: "16 km" },
  { name: "Bageshwar", distance: "20 km" }
],
 restaurants: [
  { name: "Garden Restaurant", type: "Restaurant", distance: "300 m" },
  { name: "Kausani Tea Estate Cafe", type: "Cafe", distance: "1 km" },
  { name: "Hotel Pine Havens Restaurant", type: "Restaurant", distance: "500 m" },
  { name: "Suman Royal Resort Restaurant", type: "Restaurant", distance: "700 m" },
  { name: "Chevron Mountain Villa Restaurant", type: "Restaurant", distance: "800 m" },
  { name: "Yogi Restaurant", type: "Restaurant", distance: "400 m" },
  { name: "Jeetu Restaurant", type: "Restaurant", distance: "600 m" },
  { name: "Shiva Restaurant", type: "Restaurant", distance: "900 m" }
],
      transport: [
        { name: "ISBT Bus Stand", type: "Bus", distance: "12 km" },
        { name: "kathgodam Railway Station", type: "Train", distance: "140 km" },

      ],
      naturalBeauty: [
        { name: "Mountain View",type: "View Point", distance: "850 m" },
        { name: "Rudradari Waterfall", type: "Waterfall", distance: "13.7 km" },
      ],
      airports: [{ name: "Dehradun Airport", distance: "19.9 km" }],
    },
  };

  const data = hotelData || sampleData;

  const renderTabContent = () => {
    switch (activeTab) {
      case "nearby":
        return (
          <div className="space-y-2">
            {data.categories.nearby.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-800 hover:bg-gray-800/40 px-3 rounded-md transition-all duration-300"
              >
                <span className="text-gray-300">{item.name}</span>
                <span className="text-yellow-400">{item.distance}</span>
              </div>
            ))}
          </div>
        );
      case "restaurants":
        return (
          <div className="space-y-2">
            {data.categories.restaurants.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-800 hover:bg-gray-800/40 px-3 rounded-md transition-all duration-300"
              >
                <div>
                  <span className="text-orange-400">{item.type} · </span>
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-yellow-400">{item.distance}</span>
              </div>
            ))}
          </div>
        );
      case "transport":
        return (
          <div className="space-y-2">
            {data.categories.transport.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-800 hover:bg-gray-800/40 px-3 rounded-md transition-all duration-300"
              >
                <div>
                  <span className="text-orange-400">{item.type} · </span>
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-yellow-400">{item.distance}</span>
              </div>
            ))}
          </div>
        );
      case "naturalBeauty":
        return (
          <div className="space-y-2">
            {data.categories.naturalBeauty.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-800 hover:bg-gray-800/40 px-3 rounded-md transition-all duration-300"
              >
                <div>
                  <span className="text-orange-400">{item.type} · </span>
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-yellow-400">{item.distance}</span>
              </div>
            ))}
          </div>
        );
      case "airports":
        return (
          <div className="space-y-2">
            {data.categories.airports.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-800 hover:bg-gray-800/40 px-3 rounded-md transition-all duration-300"
              >
                <span className="text-gray-300">{item.name}</span>
                <span className="text-yellow-400">{item.distance}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="pb-8">
        <Heading text="Places Near Our Hotel" />
        <p className="text-center text-gray-300 px-6">
          Discover the convenient locations and attractions around our property
        </p>
      </div>

      <Card className="w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl rounded-xl border border-gray-800">
        <CardContent className="p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 font-bold">
              {data.title}
            </h3>
            <div className="flex items-center text-yellow-400">
              {/* <span>{data.locationQuality}</span> */}
              <a href="https://www.google.com/maps/place/Hotel+Moksha/@30.1196106,78.3147335,17z/data=!4m9!3m8!1s0x3909166a9f9d5129:0x95996850bfb3cce6!5m2!4m1!1i2!8m2!3d30.119606!4d78.3173084!16s%2Fg%2F1tdz7std?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D">
                <button className="ml-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 text-sm hover:underline">
                  show on  map
                </button>
              </a>
            </div>
          </div>

          <div className="flex overflow-x-auto pb-2 mb-6 gap-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <button
              onClick={() => setActiveTab("nearby")}
              className={`flex items-center px-4 py-2 whitespace-nowrap rounded-md transition-all duration-300 ${
                activeTab === "nearby"
                  ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              <MapPin size={18} className="mr-2" />
              What&apos;s nearby
            </button>
            <button
              onClick={() => setActiveTab("restaurants")}
              className={`flex items-center px-4 py-2 whitespace-nowrap rounded-md transition-all duration-300 ${
                activeTab === "restaurants"
                  ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              <Utensils size={18} className="mr-2" />
              Restaurants & cafes
            </button>
            <button
              onClick={() => setActiveTab("transport")}
              className={`flex items-center px-4 py-2 whitespace-nowrap rounded-md transition-all duration-300 ${
                activeTab === "transport"
                  ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              <Train size={18} className="mr-2" />
              Public transport
            </button>
            <button
              onClick={() => setActiveTab("naturalBeauty")}
              className={`flex items-center px-4 py-2 whitespace-nowrap rounded-md transition-all duration-300 ${
                activeTab === "naturalBeauty"
                  ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              <Mountain size={18} className="mr-2" />
              Natural beauty
            </button>
            <button
              onClick={() => setActiveTab("airports")}
              className={`flex items-center px-4 py-2 whitespace-nowrap rounded-md transition-all duration-300 ${
                activeTab === "airports"
                  ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              <Plane size={18} className="mr-2" />
              Closest airports
            </button>
          </div>

          <div className="mt-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm shadow-inner">
            {renderTabContent()}
          </div>

          <div className="mt-8 text-xs text-gray-500">
            Shortest estimated walking or driving distances displayed; actual
            distances may vary.
          </div>

          {/* <div className="mt-4 text-right text-sm text-gray-500">
            Missing some information?
            <button className="ml-1 text-orange-400 hover:text-orange-300 transition-colors duration-300 hover:underline">
              Yes
            </button>{" "}
            /
            <button className="ml-1 text-orange-400 hover:text-orange-300 transition-colors duration-300 hover:underline">
              No
            </button>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default HotelSurroundings;
