import AIDifference from "../components/AiSolution/AIDifference";
import AISolutionBanner from "../components/AiSolution/AISolutionBanner";
import AIToolsSlider from "../components/AiSolution/AIToolsSlider";
import IntegerateAISolution from "../components/AiSolution/IntegerateAISolution";
import OurCoreAISolutionSlider from "../components/AiSolution/OurCoreAISolutionSlider";
import Navbar from "../components/Navbar";
import WhyTeamLoveBuilding from "../components/ProductEngineering/WhyTeamLoveBuilding";

export default function AISolutions() {
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
        <AISolutionBanner />
        <IntegerateAISolution />
        <OurCoreAISolutionSlider />
        <AIDifference />
        <AIToolsSlider />
        <WhyTeamLoveBuilding />
        {/* <AgileEngineering />
        <BuiltWithTechnologies />
        <WhyBrandsTrustSection /> */}
        {/* <OurStepsSection />
        <ToolsSlider /> */}
      </div>
      </div>
    );
}