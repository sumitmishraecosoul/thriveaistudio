import React from "react";
import Navbar from "../components/Navbar";
import ServiceBanner from "../components/Service/ServiceBanner";
import ServicesTabs from "../components/Service/ServiceTabs";
import WhyUs from "../components/Service/WhyUs";
import KnowYourBusiness from "../components/Service/KnowYourBusiness";
import ThriveVideoSection from "../components/Service/ThriveVideoSection";
import CTAcard from "../components/Home/CTACard";
import Footer from "../components/Home/Footer";
export default function Services() {
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
        <ServiceBanner />
      </div>
      <ServicesTabs />
      <WhyUs />
      <KnowYourBusiness />
      <ThriveVideoSection />
      <CTAcard />
      <Footer /> 
    </div>

  );
}