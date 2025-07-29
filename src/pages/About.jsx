import React from "react";
import Navbar from "../components/Navbar";
import AboutUsBanner from "../components/About/AboutUsBanner";
import AboutUsStats from "../components/About/AboutUsStats";
import OurVisionMission from "../components/About/OurVissionMission";
import AboutContentBoxes from "../components/About/AboutContentBoxes";
import OurProcess from "../components/About/OurProcess";
import CTAcard from "../components/Home/CTACard";
import Footer from "../components/Home/Footer";
export default function About() {
 return (
   <div className="bg-black text-white font-sans">
      
      {/* ✅ Background applied only to Navbar + Hero */}
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/src/assets/images/navbar_and_hero_bg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <AboutUsBanner />
      </div>
      <AboutUsStats />
      <OurVisionMission />
      <AboutContentBoxes />
      <OurProcess />
      <CTAcard />
      <Footer />
    </div>
  );
}