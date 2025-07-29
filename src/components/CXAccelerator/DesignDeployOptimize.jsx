
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import CXStep1 from "../../assets/images/CXStep1.svg";
import CXStep2 from "../../assets/images/CXStep2.svg";
import CXStep3 from "../../assets/images/CXStep3.svg";
import CXStep4 from "../../assets/images/CXStep4.svg";
import DesignImage from '../../assets/images/DesignImage.svg';

const stepImages = [CXStep1, CXStep2, CXStep3, CXStep4];

const DesignDeployOptimize = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 so animation re-triggers
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.3,
          duration: 0.6,
          ease: 'easeOut',
        },
      }));
    } else {
      controls.start(() => ({
        opacity: 0,
        y: 50,
      }));
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className=" bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#EED4AD] text-center mb-12">
        Design. Deploy. Optimize. Scale.
      </h2>

      {/* Main Content: Steps and Right Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-7xl">
        {/* Left: Steps */}
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          {stepImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Step ${index + 1}`}
              className="w-full max-w-md mx-auto"
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            />
          ))}
        </div>

        {/* Right: Agile Mobile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={DesignImage}
            alt="Agile Mobile"
            className="w-[90%] max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignDeployOptimize;
