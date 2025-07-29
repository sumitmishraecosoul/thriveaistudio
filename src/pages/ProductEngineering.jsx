
import Navbar from "../components/Navbar";
import AgileEngineering from "../components/ProductEngineering/AgileEngineering";
import BuiltWithTechnologies from "../components/ProductEngineering/BuiltWithTechnologies";
import ConceptToScalableDigitalProduct from "../components/ProductEngineering/ConceptToScalableDigitalProduct";
import ProductEngineeringBanner from "../components/ProductEngineering/ProductEngineeringBanner";
import ProductEngineeringSlider from "../components/ProductEngineering/ProductEngineeringSlider";
import WhyTeamLoveBuilding from "../components/ProductEngineering/WhyTeamLoveBuilding";

export default function ProductEngineering() {
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
        <ProductEngineeringBanner />
        <ConceptToScalableDigitalProduct />
        <ProductEngineeringSlider />
        <AgileEngineering />
        <BuiltWithTechnologies />
        <WhyTeamLoveBuilding />
        {/* <OurStepsSection />
        <ToolsSlider /> */}
      </div>
      </div>
    );
}