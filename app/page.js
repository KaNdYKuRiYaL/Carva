import React from "react";
import Hero from "@/components/Hero";
import HomeCars from "@/components/HomeCars";
import FeaturedCars from "@/components/FeaturedCars";
import InfoBoxes from "@/components/InfoBoxes";


const HomePage = () => {
  return(
    <div>
      <Hero/>   
      <InfoBoxes/>
      <FeaturedCars/>
      <HomeCars/>  
    </div>
  );
}