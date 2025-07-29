// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Bg from "../src/assets/images/navbar_and_hero_bg.svg";

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white font-sans">
//        <div
//       className="min-h-screen text-white"
//       style={{
//         backgroundImage: "url('../src/assets/images/navbar_and_hero_bg.svg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <Navbar />
//       <HeroSection />
//       </div>
//     </div>
//   );
// }

// export default App;




// import Navbar from './components/Navbar'; 
// import HeroSection from './components/Home/HeroSection';
// import StatsGrid from './components/Home/StatsGrid';
// import BrandSlider from './components/Home/BrandsSlider';
// import RealProblemsSection from './components/Home/RealProblemsSection';
// import ProblemsWithAI from './components/Home/RealProblemsSection';
// import WhyThriveSection from './components/Home/WhyThriveSection';
// import HowThriveWorks from './components/Home/HowThriveWorks';
// import ComparisonTable from './components/Home/ComparisonTable';
// import CTAcard from './components/Home/CTACard';
// import Footer from './components/Home/Footer';
// import AboutUsBanner from './components/About/AboutUsBanner';
// import AboutUsStats from './components/About/AboutUsStats';
// import OurVisionMission from './components/About/OurVissionMission';
// import AboutContentBoxes from './components/About/AboutContentBoxes';
// import OurProcess from './components/About/OurProcess';
// import ServiceBanner from './components/Service/ServiceBanner';
// import ServicesTabs from './components/Service/ServiceTabs';
// import WhyUs from './components/Service/WhyUs';
// import KnowYourBusiness from './components/Service/KnowYourBusiness';
// import ThriveVideoSection from './components/Service/ThriveVideoSection';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import ContactUs from './pages/ContactUs';
// import Blog from './pages/Blog';
// import { BrowserRouter, Route, Routes, Router, Navigate } from 'react-router-dom';
// import ServiceItem from './pages/ServiceItem';

// function App() {
//   return (
//     // <div className="bg-black text-white font-sans">
      
//     //   {/* ✅ Background applied only to Navbar + Hero */}
//     //   <div
//     //     className="text-white"
//     //     style={{
//     //       backgroundImage: "url('/src/assets/images/navbar_and_hero_bg.svg')",
//     //       backgroundSize: "cover",
//     //       backgroundRepeat: "no-repeat",
//     //       backgroundPosition: "center",
//     //     }}
//     //   >
//     //     <Navbar />
//     //     <HeroSection />
//     //   </div>
     

//     //   {/* <StatsGrid /> */}
    
//     //   <div className="bg-black min-h-screen font-sans">
//     //   {/* other sections */}
//     //   <StatsGrid />
//     //   {/* other sections */}
//     //   <BrandSlider />

//     //   {/* <RealProblemsSection /> */}
//     //   <ProblemsWithAI />

//     //   <WhyThriveSection />

//     //   <HowThriveWorks />

//     //   <ComparisonTable />

//     //   <CTAcard />

//     //   <Footer />
//     // </div>
      
//     // </div>



//   // About
//     // <div className="bg-black text-white font-sans">
      
//     //   {/* ✅ Background applied only to Navbar + Hero */}
//     //   <div
//     //     className="text-white"
//     //     style={{
//     //       backgroundImage: "url('/src/assets/images/navbar_and_hero_bg.svg')",
//     //       backgroundSize: "cover",
//     //       backgroundRepeat: "no-repeat",
//     //       backgroundPosition: "center",
//     //     }}
//     //   >
//     //     <Navbar />
//     //     <AboutUsBanner />
//     //   </div>
//     //   <AboutUsStats />
//     //   <OurVisionMission />
//     //   <AboutContentBoxes />
//     //   <OurProcess />
//     //   <CTAcard />
//     //   <Footer />
//     // </div>

    
//     // Service 
//     <div className="bg-black text-white font-sans">
      
//       {/* ✅ Background applied only to Navbar + Hero */}
//       <div
//         className="text-white"
//         style={{
//           backgroundImage: "url('/src/assets/images/navbar_and_hero_bg.svg')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         <Navbar />
//         <ServiceBanner />
//       </div>
//       <ServicesTabs />
//       <WhyUs />
//       <KnowYourBusiness />
//       <ThriveVideoSection />
//       <CTAcard />
//       <Footer /> 
//     </div>


//   );
// }

// export default App;





// function App() {
//   return (
//     <BrowserRouter>
      
//           <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services/>} />
//             <Route path="/portfolio" element={<Portfolio/>} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/blog" element={<Blog/>} />
          
//         </Routes>
      
//     </BrowserRouter>
//   );
// }

// export default App;


// App.jsx

// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import ContactUs from './pages/ContactUs';
// import Blog from './pages/Blog';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import ServiceItem from './pages/ServiceItem';

// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* Navbar stays on all pages */}
      

//       {/* App Routes */}
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<ContactUs />} />

//         {/* Route for individual service item (optional use if you navigate to this separately) */}
//         <Route path="/items/:itemId" element={<ServiceItem />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;



import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import ServiceItem from "./pages/ServiceItem";

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/:serviceId" element={<ServiceItem />} />
      </Routes>
    </>
  );
};

export default App;




// import { Outlet } from "react-router-dom";

// function App() {
//   return (
//     <div className="bg-black text-white font-sans">
//       {/* Background applied only to Navbar + Hero */}
//       <div
//         className="text-white"
//         style={{
//           backgroundImage: "url('/src/assets/images/navbar_and_hero_bg.svg')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         <Navbar />
//         <Outlet /> {/* This will render the current route's component */}
//       </div>
//     </div>
//   );
// }

// export default App;