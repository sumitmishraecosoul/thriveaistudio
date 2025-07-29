import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SolutionStep1 from "../../assets/images/SolutionStep1.svg";
import SolutionStep2 from "../../assets/images/SolutionStep2.svg";
import SolutionStep3 from "../../assets/images/SolutionStep3.svg";
import SolutionStep4 from "../../assets/images/SolutionStep4.svg";
import SolutionStep5 from "../../assets/images/SolutionStep5.svg";
import RocketMobileImg from '../../assets/images/RocketMobileImg.svg';

const stepImages = [SolutionStep1, SolutionStep2, SolutionStep3, SolutionStep4, SolutionStep5];

const AIDifference = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
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
    <div ref={ref} className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#EED4AD] text-center mb-12">
        Where AI Can Make A Difference?
      </h2>

      {/* Main Content: Left Image and Steps on Right */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-7xl">
        {/* Left: Agile Mobile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={RocketMobileImg}
            alt="Agile Mobile"
            className="w-[90%] max-w-[400px]"
          />
        </div>

        {/* Right: Steps */}
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
      </div>
    </div>
  );
};

export default AIDifference;
