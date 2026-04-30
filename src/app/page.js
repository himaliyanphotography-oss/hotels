"use client"

import { useState } from "react";
import Review from "../components/review/review";
import Hero from "../components/hero/hero";
import Message from "../components/message/message";
import Amenities from "../components/amenities/Amenities";
import Socials from "../components/services/subcomponents/info"
import Ota from '../components/otas/otas'
import TouristMap from '../components/touristmap/map'
import  BusinessCenterAnnouncement from "../components/business/business-center-announcement";
import Weather from '../components/weather/weather'
export default function Home() {
   const [showAnnouncement, setShowAnnouncement] = useState(true)
  return (
    <>
     {showAnnouncement && <BusinessCenterAnnouncement onClose={() => setShowAnnouncement(false)} />}
      <Hero/>
       <TouristMap/>
        <Review/>
          <Socials />
            <Message/>
        {/* <Weather/> */}
      <Amenities />
    
    </>
  );
}
