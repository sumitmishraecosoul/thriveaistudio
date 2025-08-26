import HeroSection from '../components/Home/HeroSection';
import StatsGrid from '../components/Home/StatsGrid';
import BrandSlider from '../components/Home/BrandsSlider';
import ProblemsWithAI from '../components/Home/RealProblemsSection';
import WhyThriveSection from '../components/Home/WhyThriveSection';
import HowThriveWorks from '../components/Home/HowThriveWorks';
import ComparisonTable from '../components/Home/ComparisonTable';
import CTAcard from '../components/Home/CTACard';
import Footer from '../components/Home/Footer';
import Navbar from '../components/Navbar';
import HomeBannerImg from "../assets/images/navbar_and_hero_bg.svg";
import WhyThriveSectionResponsive from '../components/Home/WhyThriveSection_Responsive';
import ServicesTabs from '../components/Service/ServiceTabs';

export default function Home() {
 return (
    <div className="bg-black text-white font-sans">
      
      {/* ✅ Background applied only to Navbar + Hero */}
      <div
        className="text-white"
        // style={{
        //   backgroundImage: `url(${HomeBannerImg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
        style={{
    backgroundImage: `url("/images/HomeBanner.svg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
      >
        <Navbar />
        <HeroSection />
      </div>

      {/* <StatsGrid /> */}
    
      <div className="bg-black min-h-screen font-sans">
      {/* other sections */}
      <StatsGrid />
      {/* other sections */}
      <BrandSlider />

      {/* <RealProblemsSection /> */}
      <ProblemsWithAI />

      <WhyThriveSectionResponsive />
      <ServicesTabs />

      <HowThriveWorks />

      <ComparisonTable />

      <CTAcard />

      <Footer />
    </div>
      
    </div>
  );
}