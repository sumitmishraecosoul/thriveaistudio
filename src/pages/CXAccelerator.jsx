import CustomerExperience from "../components/CXAccelerator/CustomerExperience";
import CXAccelerationSlider from "../components/CXAccelerator/CXAccelerationSlider";
import CXAcceleratorBanner from "../components/CXAccelerator/CXAcceleratorBanner";
import CXStats from "../components/CXAccelerator/CXStats";
import DesignDeployOptimize from "../components/CXAccelerator/DesignDeployOptimize";
import Navbar from "../components/Navbar";
import WhyTeamLoveBuilding from "../components/ProductEngineering/WhyTeamLoveBuilding";

export default function CXAccelerator() {
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
        <CXAcceleratorBanner />
        <CustomerExperience />
        <CXAccelerationSlider />
        <DesignDeployOptimize />
        <CXStats />
        <WhyTeamLoveBuilding />
        {/* 
        <AgileEngineering />
        <BuiltWithTechnologies />
        <WhyTeamLoveBuilding /> */}
        {/* <OurStepsSection />
        <ToolsSlider /> */}
      </div>
      </div>
    );
}