
import React from "react";
import { motion } from "framer-motion";
import "./CXAccelerationSlider.css";
import AIPowered from "../../assets/images/AIPowered.svg";
import PredictiveCXModelling from "../../assets/images/PredictiveCXModelling.svg";
import PersonalizationEngines from "../../assets/images/PersonalizationEngines.svg";
import ConversationalAI from "../../assets/images/ConversationalAI.svg";
import Omnichannel from "../../assets/images/Omnichannel.svg";
import FeedbackLoops from "../../assets/images/FeedbackLoops.svg";

const services = [
  {
    title: "AI-Powered",
    subtitle: "Journey Mapping",
    icon: AIPowered,
  },
  {
    title: "Predictive CX",
    subtitle: "Modelling",
    icon: PredictiveCXModelling,
  },
  {
    title: "Personalization",
    subtitle: "Engines",
    icon: PersonalizationEngines,
  },
  {
    title: "Conversational AI",
    subtitle: "& Voice Bots",
    icon: ConversationalAI,
  },
  {
    title: "Omnichannel",
    subtitle: "Engagement Automation",
    icon: Omnichannel,
  },
  {
    title: "Feedback Loops &",
    subtitle: "Sentiment Analysis",
    icon: FeedbackLoops,
  },
];

const CXAccelerationSlider = () => {
  return (
    // <div className="slider-wrapper">
    //   <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
    //     Our Full Stack Data Services - <span className="text-[#A28750]">Built for Growth</span>
    //   </h2>
    //   <motion.div
    //     className="slider-track"
    //     animate={{ x: [0, -1000] }}
    //     transition={{
    //       repeat: Infinity,
    //       repeatType: "loop",
    //       ease: "linear",
    //       duration: 20,
    //     }}
    //   >
    //     {[...services, ...services].map((service, index) => (
    //       <div className="service-card" key={index}>
    //         <img src={service.icon} alt={service.title} className="service-icon" />
    //         <h3 className="text-base font-semibold text-white text-center">
    //           {service.title}
    //         </h3>
    //         <p className="text-sm text-white text-center">{service.subtitle}</p>
    //       </div>
    //     ))}
    //   </motion.div>
    // </div>

    <div className="slider-wrapper px-4 py-12 bg-black">
  <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EACDA3] mb-10">
    CX Acceleration: What We Offer?
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
        className="service-card bg-[#0F2A3C] rounded-xl w-[180px] h-[180px] flex flex-col justify-center items-center text-white shadow-lg"
      >
        <img
          src={service.icon}
          alt={service.title}
          className="w-20 h-20 mb-3"
        />
        <h3 className="text-sm font-semibold text-center">{service.title}</h3>
        <p className="text-xs text-center">{service.subtitle}</p>
      </div>
    ))}
  </motion.div>
</div>

  );
};

export default CXAccelerationSlider;
