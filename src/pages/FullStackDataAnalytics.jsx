import AboutSection from "../components/FullStackDataAnalytics/AboutSection";
import FullStackDataAnalyticsBanner from "../components/FullStackDataAnalytics/FullStackDataAnalyticsBanner";
import InfiniteServicesSlider from "../components/FullStackDataAnalytics/InfiniteServicesSlider";
import OurStepsSection from "../components/FullStackDataAnalytics/OurStepsSection";
import ToolsSlider from "../components/FullStackDataAnalytics/ToolsSlider";
import WhyBrandsTrustSection from "../components/FullStackDataAnalytics/WhyTrustSection";
import WhyTrustSection from "../components/FullStackDataAnalytics/WhyTrustSection";
import Navbar from "../components/Navbar";
export default function FullStackDataAnalytics() {
    return (
        <div className="bg-black text-white font-sans">
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
        <FullStackDataAnalyticsBanner />
        <InfiniteServicesSlider />
        {/* <WhyTrustSection /> */}
        <WhyBrandsTrustSection />
        <AboutSection />
        <OurStepsSection />
        <ToolsSlider />
      </div>
      </div>
    );
}