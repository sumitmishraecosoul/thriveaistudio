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

// export default InfiniteServicesSlider;



import React from "react";
import { motion } from "framer-motion";
import "./ServicesSlider.css";
import DataIntegeration from "../../assets/images/DataIntegeration.svg";
import DataWarehousing from "../../assets/images/DataWarehousing.svg";
import Dashboarding from "../../assets/images/Dashboarding.svg";
import BusinessIntelligence from "../../assets/images/BusinessIntelligence.svg";
import AdvancedAnalytics from "../../assets/images/AdvancedAnalytics.svg";
import DataGovernance from "../../assets/images/DataGovernance.svg";
import CustomData from "../../assets/images/CustomData.svg";

const services = [
  {
    title: "Data Integration",
    subtitle: "& ETL Pipelines",
    icon: DataIntegeration,
  },
  {
    title: "Data Warehousing",
    subtitle: "& Cloud Migration",
    icon: DataWarehousing,
  },
  {
    title: "Dashboarding",
    subtitle: "& Data Visualization",
    icon: Dashboarding,
  },
  {
    title: "Business Intelligence",
    subtitle: "& Reporting",
    icon: BusinessIntelligence,
  },
  {
    title: "Advanced Analytics",
    subtitle: "& Predictive Modeling",
    icon: AdvancedAnalytics,
  },
  {
    title: "Data Governance",
    subtitle: "& Quality Management",
    icon: DataGovernance,
  },
  {
    title: "Custom Data",
    subtitle: "Applications (APIs, Tools)",
    icon: CustomData,
  },
];

const InfiniteServicesSlider = () => {
  return (
    <div className="slider-wrapper px-4 py-12 bg-black overflow-hidden">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EED4AD] mb-10">
        Our Full Stack Data Services – Built for Growth
      </h2>

      <motion.div
        className="slider-track flex gap-6 w-[2500px] sm:w-[3000px] md:w-[4000px] lg:w-[5000px]"
        animate={{ x: [0, -1500] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 40,
        }}
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="bg-[#0F2A3C] rounded-xl flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 h-44 sm:h-48 md:h-52 flex flex-col justify-center items-center text-white shadow-lg"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 md:w-20 md:h-20 mb-3"
            />
            <h3 className="text-sm sm:text-base font-semibold text-center">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-center">
              {service.subtitle}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteServicesSlider;
