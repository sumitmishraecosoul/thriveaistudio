// import React from "react";
// import { motion } from "framer-motion";
// import "./ServicesSlider.css";
// import DataIntegeration from "../../assets/images/DataIntegeration.svg";
// import DataWarehousing from "../../assets/images/DataWarehousing.svg";
// import Dashboarding from "../../assets/images/Dashboarding.svg";
// import BusinessIntelligence from "../../assets/images/BusinessIntelligence.svg";
// import AdvancedAnalytics from "../../assets/images/AdvancedAnalytics.svg";
// import DataGovernance from "../../assets/images/DataGovernance.svg";
// import CustomData from "../../assets/images/CustomData.svg";

// const services = [
//   {
//     title: "Data Integration",
//     subtitle: "& ETL Pipelines",
//     icon: DataIntegeration,
//   },
//   {
//     title: "Data Warehousing",
//     subtitle: "& Cloud Migration",
//     icon: DataWarehousing,
//   },
//   {
//     title: "Dashboarding",
//     subtitle: "& Data Visualization",
//     icon: Dashboarding,
//   },
//   {
//     title: "Business Intelligence",
//     subtitle: "& Reporting",
//     icon: BusinessIntelligence,
//   },
//   {
//     title: "Advanced Analytics",
//     subtitle: "& Predictive Modeling",
//     icon: AdvancedAnalytics,
//   },
//   {
//     title: "Data Governance",
//     subtitle: "& Quality Management",
//     icon: DataGovernance,
//   },
//   {
//     title: "Custom Data",
//     subtitle: "Applications (APIs, Tools)",
//     icon: CustomData,
//   },
// ];

// const InfiniteServicesSlider = () => {
//   return (
//     <div className="slider-wrapper">
//       <motion.div
//         className="slider-track"
//         animate={{ x: [0, -1000] }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "loop",
//           ease: "linear",
//           duration: 20,
//         }}
//       >
//         {[...services, ...services].map((service, index) => (
//           <div className="service-card" key={index}>
//             <img src={service.icon} alt={service.title} className="service-icon w-72" />
//             <h3 className="text-base font-semibold text-white text-center">
//               {service.title}
//             </h3>
//             <p className="text-sm text-white text-center">{service.subtitle}</p>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default InfiniteServicesSlider;









// import React from "react";
// import { motion } from "framer-motion";
// import "./ProductEngineeringSlider.css";
// import ProductDevelopment from "../../assets/images/ProductDevelopment.svg";
// import WebAndMobile from "../../assets/images/WebAndMobile.svg";
// import CustomPortal from "../../assets/images/CustomPortal.svg";
// import BackendArchitecture from "../../assets/images/BackendArchitecture.svg";
// import Automation from "../../assets/images/Automation.svg";
// import OngoingSupport from "../../assets/images/OngoingSupport.svg";
// import CustomDataApplication from "../../assets/images/CustomDataApplication.svg";

// const services = [
//   {
//     title: "Product",
//     subtitle: "Development",
//     icon: ProductDevelopment,
//   },
//   {
//     title: "Web & Mobile App",
//     subtitle: "Development",
//     icon: WebAndMobile,
//   },
//   {
//     title: "Custom Portal &",
//     subtitle: "Dashboards",
//     icon: CustomPortal,
//   },
//   {
//     title: "Backend Architecture",
//     subtitle: "& APIs",
//     icon: BackendArchitecture,
//   },
//   {
//     title: "Automation &",
//     subtitle: "AI Integration",
//     icon: Automation,
//   },
//   {
//     title: "Ongoing Support &",
//     subtitle: "Product Optimization",
//     icon: OngoingSupport,
//   },
//   {
//     title: "Custom Data",
//     subtitle: "Applications",
//     icon: CustomDataApplication,
//   },
// ];

// const ProductEngineeringSlider = () => {
//   return (
//     // <div className="slider-wrapper">
//     //   <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
//     //     Our Full Stack Data Services - <span className="text-[#A28750]">Built for Growth</span>
//     //   </h2>
//     //   <motion.div
//     //     className="slider-track"
//     //     animate={{ x: [0, -1000] }}
//     //     transition={{
//     //       repeat: Infinity,
//     //       repeatType: "loop",
//     //       ease: "linear",
//     //       duration: 20,
//     //     }}
//     //   >
//     //     {[...services, ...services].map((service, index) => (
//     //       <div className="service-card" key={index}>
//     //         <img src={service.icon} alt={service.title} className="service-icon" />
//     //         <h3 className="text-base font-semibold text-white text-center">
//     //           {service.title}
//     //         </h3>
//     //         <p className="text-sm text-white text-center">{service.subtitle}</p>
//     //       </div>
//     //     ))}
//     //   </motion.div>
//     // </div>

//     <div className="slider-wrapper px-4 py-12 bg-black">
//   <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EACDA3] mb-10">
//     Our Full Stack Data Services – Built for Growth
//   </h2>

//   <motion.div
//     className="slider-track flex gap-6"
//     animate={{ x: [0, -1000] }}
//     transition={{
//       repeat: Infinity,
//       repeatType: "loop",
//       ease: "linear",
//       duration: 20,
//     }}
//   >
//     {[...services, ...services].map((service, index) => (
//       <div
//         key={index}
//         className="service-card bg-[#0F2A3C] rounded-xl w-[180px] h-[180px] flex flex-col justify-center items-center text-white shadow-lg"
//       >
//         <img
//           src={service.icon}
//           alt={service.title}
//           className="w-20 h-20 mb-3"
//         />
//         <h3 className="text-sm font-semibold text-center">{service.title}</h3>
//         <p className="text-xs text-center">{service.subtitle}</p>
//       </div>
//     ))}
//   </motion.div>
// </div>

//   );
// };

// export default ProductEngineeringSlider;





import React from "react";
import { motion } from "framer-motion";
import "./ProductEngineeringSlider.css";
import ProductDevelopment from "../../assets/images/ProductDevelopment.svg";
import WebAndMobile from "../../assets/images/WebAndMobile.svg";
import CustomPortal from "../../assets/images/CustomPortal.svg";
import BackendArchitecture from "../../assets/images/BackendArchitecture.svg";
import Automation from "../../assets/images/Automation.svg";
import OngoingSupport from "../../assets/images/OngoingSupport.svg";
import CustomDataApplication from "../../assets/images/CustomDataApplication.svg";

const services = [
  {
    title: "Product",
    subtitle: "Development",
    icon: ProductDevelopment,
  },
  {
    title: "Web & Mobile App",
    subtitle: "Development",
    icon: WebAndMobile,
  },
  {
    title: "Custom Portal &",
    subtitle: "Dashboards",
    icon: CustomPortal,
  },
  {
    title: "Backend Architecture",
    subtitle: "& APIs",
    icon: BackendArchitecture,
  },
  {
    title: "Automation &",
    subtitle: "AI Integration",
    icon: Automation,
  },
  {
    title: "Ongoing Support &",
    subtitle: "Product Optimization",
    icon: OngoingSupport,
  },
  {
    title: "Custom Data",
    subtitle: "Applications",
    icon: CustomDataApplication,
  },
];

const ProductEngineeringSlider = () => {
  return (
    <div className="slider-wrapper px-4 py-12 bg-black">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EACDA3] mb-10">
        Our Full Stack Data Services – Built for Growth
      </h2>

      <motion.div
        className="slider-track flex gap-6"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        }}
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="service-card bg-[#0F2A3C] rounded-xl 
              w-[120px] h-[120px] 
              sm:w-[140px] sm:h-[140px] 
              md:w-[160px] md:h-[160px] 
              lg:w-[180px] lg:h-[180px] 
              flex flex-col justify-center items-center 
              text-white shadow-lg"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 mb-2 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
            />
            <h3 className="text-xs sm:text-sm font-semibold text-center">
              {service.title}
            </h3>
            <p className="text-[10px] sm:text-xs text-center">{service.subtitle}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductEngineeringSlider;
