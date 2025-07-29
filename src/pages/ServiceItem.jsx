// import React from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import CTAcard from "../components/Home/CTACard";
// import Footer from "../components/Home/Footer";

// export default function ServiceItem() {
//   const { serviceId } = useParams();
//     console.log("serviceId ===>", serviceId);

//   // Dummy data map based on serviceId
//   const serviceContent = {
//     branding: {
//       title: "Branding",
//       description: "Build a brand that stands out in a crowded market.",
//       videoUrl: "/assets/videos/branding.mp4",
//     },
//     "performance-marketing": {
//       title: "Performance Marketing",
//       description: "Drive measurable growth and ROI for your business.",
//       videoUrl: "/assets/videos/performance.mp4",
//     },
//     "ai-integration": {
//       title: "AI Integration",
//       description: "Integrate cutting-edge AI into your workflow.",
//       videoUrl: "/assets/videos/ai.mp4",
//     },
//     // Add more services here
//   };

//   const service = serviceContent[serviceId];
//   console.log("service ===>", service);

//   if (!service) {
//     return (
//       <div className="bg-black text-white h-screen flex items-center justify-center">
//         <h1 className="text-3xl">Service not found.</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-black text-white font-sans">
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
//         <div className="text-center py-20 px-6">
//           <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
//           <p className="text-lg max-w-2xl mx-auto text-gray-300">
//             {service.description}
//           </p>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto py-16 px-6">
//         <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
//         <p className="text-gray-400 mb-8">
//           {/* Sample content, update per service */}
//           Our {service.title} service is tailored to meet the unique needs of your business.
//           We help you scale, differentiate, and grow through tailored solutions that deliver results.
//         </p>

//         <div className="aspect-w-16 aspect-h-9 mb-10">
//           <video
//             src={service.videoUrl}
//             autoPlay
//             loop
//             muted
//             className="w-full rounded-xl shadow-lg"
//           />
//         </div>
//       </div>

//       <CTAcard />
//       <Footer />
//     </div>
//   );
// }



import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CTAcard from "../components/Home/CTACard";
import Footer from "../components/Home/Footer";

// Importing all service item components
import FullStackDataAnalytics from "./FullStackDataAnalytics";
import ProductEngineering from "./ProductEngineering";
import AISolutions from "./AISolutions";
import CXAccelerator from "./CXAccelerator";
import BrandGrowthSolutions from "./BrandGrowthSolutions";

export default function ServiceItem() {
  const { serviceId } = useParams();
  console.log("serviceId ===>", serviceId);

  // Mapping serviceId to respective components
//   const componentMap = {
//     "full-stack-data-&-analytics": <FullStackDataAnalytics />,
//     "product-engineering": <ProductEngineering />, 
//     "ai-solutions": <AISolutions />,
//     "brand-growth-solutions": <BrandGrowthSolutions />,
//     "cx-accelerator": <CXAccelerator />,
//   };
  const componentMap = {
    "full-stack-data-&-analytics": <FullStackDataAnalytics />,
    "product-engineering": <ProductEngineering />, 
    "ai-solutions": <AISolutions />,
    // "brand-growth-solutions": <FullStackDataAnalytics />,
    "cx-accelerator": <CXAccelerator />,
  };

  const ComponentToRender = componentMap[serviceId];

  if (!ComponentToRender) {
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl">Service not found.</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans">
      
      {ComponentToRender}
      <CTAcard />
      <Footer />
    </div>
  );
}
