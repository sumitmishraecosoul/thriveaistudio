
// import React from "react";
// import { motion } from "framer-motion";
// import "./OurCoreAISolutionSlider.css";
// import ProductDevelopment from "../../assets/images/ProductDevelopment.svg";
// import WebAndMobile from "../../assets/images/WebAndMobile.svg";
// import CustomPortal from "../../assets/images/CustomPortal.svg";
// import BackendArchitecture from "../../assets/images/BackendArchitecture.svg";
// import Automation from "../../assets/images/Automation.svg";
// import OngoingSupport from "../../assets/images/OngoingSupport.svg";
// import CustomDataApplication from "../../assets/images/CustomDataApplication.svg";

// const services = [
//   {
//     title: "AI-Powered",
//     subtitle: "Co-Pilot & Embeds",
//     icon: ProductDevelopment,
//   },
//   {
//     title: "Predictive Analytics &",
//     subtitle: "Forecasting",
//     icon: WebAndMobile,
//   },
//   {
//     title: "Natural Language",
//     subtitle: "Processing(NLP)",
//     icon: CustomPortal,
//   },
//   {
//     title: "Recommendation",
//     subtitle: "Systems",
//     icon: BackendArchitecture,
//   },
//   {
//     title: "AI-Enhanced",
//     subtitle: "Marketing Tools",
//     icon: Automation,
//   },
//   {
//     title: "Custom LLM &",
//     subtitle: "GenAI Solutions",
//     icon: OngoingSupport,
//   },
// ];

// const OurCoreAISolutionSlider = () => {
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
//     Our Core AI Solutions
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

// export default OurCoreAISolutionSlider;



import React from "react";
import { motion } from "framer-motion";
import "./OurCoreAISolutionSlider.css";
import ProductDevelopment from "../../assets/images/ProductDevelopment.svg";
import WebAndMobile from "../../assets/images/WebAndMobile.svg";
import CustomPortal from "../../assets/images/CustomPortal.svg";
import BackendArchitecture from "../../assets/images/BackendArchitecture.svg";
import Automation from "../../assets/images/Automation.svg";
import OngoingSupport from "../../assets/images/OngoingSupport.svg";

const services = [
  {
    title: "AI-Powered",
    subtitle: "Co-Pilot & Embeds",
    icon: ProductDevelopment,
  },
  {
    title: "Predictive Analytics &",
    subtitle: "Forecasting",
    icon: WebAndMobile,
  },
  {
    title: "Natural Language",
    subtitle: "Processing(NLP)",
    icon: CustomPortal,
  },
  {
    title: "Recommendation",
    subtitle: "Systems",
    icon: BackendArchitecture,
  },
  {
    title: "AI-Enhanced",
    subtitle: "Marketing Tools",
    icon: Automation,
  },
  {
    title: "Custom LLM &",
    subtitle: "GenAI Solutions",
    icon: OngoingSupport,
  },
];

const OurCoreAISolutionSlider = () => {
  return (
    <div className="slider-wrapper px-2 sm:px-4 py-8 sm:py-12 bg-black">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#EACDA3] mb-6 sm:mb-10">
        Our Core AI Solutions
      </h2>

      <motion.div
        className="slider-track flex gap-2 sm:gap-4"
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
            className="service-card text-white shadow-lg 
              w-[100px] h-[100px] xs:w-[110px] xs:h-[110px] sm:w-[140px] sm:h-[140px] 
              md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-8 h-8 sm:w-12 sm:h-12 mb-2"
            />
            <h3 className="text-[10px] sm:text-xs font-semibold text-center leading-tight">
              {service.title}
            </h3>
            <p className="text-[8px] sm:text-[10px] text-center leading-tight">
              {service.subtitle}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurCoreAISolutionSlider;
