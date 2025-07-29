// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// import Step1 from '../../assets/images/step1.svg';
// import Step2 from '../../assets/images/step2.svg';
// import Step3 from '../../assets/images/step3.svg';
// import Step4 from '../../assets/images/step4.svg';
// import Step5 from '../../assets/images/step5.svg';
// import Illustration from '../../assets/images/illustration.svg';

// const steps = [
//   { id: 1, image: Step1, className: 'top-0 left-[45%] md:left-[50%]' },
//   { id: 2, image: Step2, className: 'top-[100px] left-[50%] md:left-[55%]' },
//   { id: 3, image: Step3, className: 'top-[200px] left-[55%] md:left-[60%]' },
//   { id: 4, image: Step4, className: 'top-[300px] left-[60%] md:left-[65%]' },
//   { id: 5, image: Step5, className: 'top-[400px] left-[65%] md:left-[70%]' }
// ];

// const OurStepsSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.4 });

//   const getInitialX = (id) => (id % 2 === 0 ? 100 : -100);

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-black text-white font-roboto py-16 px-4 md:px-20 overflow-hidden"
//     >
//       <h2 className="text-2xl md:text-4xl font-bold text-center text-[#E8CBAF] mb-12">
//         Our Proven 5-Step Data Transformation Framework
//       </h2>

//       <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
//         {/* Left Illustration */}
//         <motion.img
//           src={Illustration}
//           alt="Left Chart Illustration"
//           initial={{ opacity: 0, x: -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="w-[300px] md:w-[400px] lg:w-[500px] mb-12 lg:mb-0"
//         />

//         {/* Steps with Animation */}
//         <div className="relative w-full lg:w-[60%] h-[500px]">
//           {steps.map((step, index) => (
//             <motion.img
//               key={step.id}
//               src={step.image}
//               alt={`Step ${step.id}`}
//               initial={{ opacity: 0, x: getInitialX(step.id) }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 delay: 0.3 + index * 0.2,
//                 duration: 0.6,
//                 ease: 'easeOut'
//               }}
//               className={`absolute ${step.className} w-[180px] md:w-[240px]`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStepsSection;





// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// import Step1 from '../../assets/images/step1.svg';
// import Step2 from '../../assets/images/step2.svg';
// import Step3 from '../../assets/images/step3.svg';
// import Step4 from '../../assets/images/step4.svg';
// import Step5 from '../../assets/images/step5.svg';
// import Illustration from '../../assets/images/illustration.svg';

// const steps = [
//   { id: 1, image: Step1, className: 'top-0 left-[45%] md:left-[50%]' },
//   { id: 2, image: Step2, className: 'top-[100px] left-[50%] md:left-[55%]' },
//   { id: 3, image: Step3, className: 'top-[200px] left-[55%] md:left-[60%]' },
//   { id: 4, image: Step4, className: 'top-[300px] left-[60%] md:left-[65%]' },
//   { id: 5, image: Step5, className: 'top-[400px] left-[65%] md:left-[70%]' }
// ];

// const OurStepsSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-black text-white font-roboto py-16 px-4 md:px-20 overflow-hidden"
//     >
//       <h2 className="text-2xl md:text-4xl font-bold text-center text-[#E8CBAF] mb-12">
//         Our Proven 5-Step Data Transformation Framework
//       </h2>

//       <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
//         {/* Left Illustration */}
//         <motion.img
//           src={Illustration}
//           alt="Left Chart Illustration"
//           initial={{ opacity: 0, x: -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="w-[300px] md:w-[400px] lg:w-[500px] mb-12 lg:mb-0"
//         />

//         {/* Steps animation */}
//         <div className="relative w-full lg:w-[60%] h-[500px]">
//           {steps.map((step, index) => (
//             <motion.img
//               key={step.id}
//               src={step.image}
//               alt={`Step ${step.id}`}
//               initial={{ opacity: 0, x: 100 }} // All come from right
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 delay: 0.4 + index * 0.3,
//                 duration: 0.6,
//                 ease: 'easeOut'
//               }}
//               className={`absolute ${step.className} w-[180px] md:w-[240px]`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStepsSection;





// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';


// import Step1 from '../../assets/images/step1.svg';
// import Step2 from '../../assets/images/step2.svg';
// import Step3 from '../../assets/images/step3.svg';
// import Step4 from '../../assets/images/step4.svg';
// import Step5 from '../../assets/images/step5.svg';
// import Illustration from '../../assets/images/illustration.svg';

// const steps = [
//   { id: 1, image: Step1, className: 'top-0 left-[45%] md:left-[50%]' },
//   { id: 2, image: Step2, className: 'top-[100px] left-[50%] md:left-[55%]' },
//   { id: 3, image: Step3, className: 'top-[200px] left-[55%] md:left-[60%]' },
//   { id: 4, image: Step4, className: 'top-[300px] left-[60%] md:left-[65%]' },
//   { id: 5, image: Step5, className: 'top-[400px] left-[65%] md:left-[70%]' }
// ];

// const OurStepsSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-black text-white font-roboto py-16 px-4 md:px-20 overflow-hidden"
//     >
//       <h2 className="text-2xl md:text-4xl font-bold text-center text-[#E8CBAF] mb-12">
//         Our Proven 5-Step Data Transformation Framework
//       </h2>

//       <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
//         {/* Left Illustration */}
//         <motion.img
//           src={Illustration}
//           alt="Left Chart Illustration"
//           initial={{ opacity: 0, x: -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="w-[300px] md:w-[400px] lg:w-[500px] mb-12 lg:mb-0"
//         />

//         {/* Steps animation */}
//         <div className="relative w-full lg:w-[60%] h-[500px]">
//           {steps.map((step, index) => (
//             <motion.img
//               key={step.id}
//               src={step.image}
//               alt={`Step ${step.id}`}
//               initial={{ opacity: 0, x: 100 }} // All come from right
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 delay: 0.4 + index * 0.3,
//                 duration: 0.6,
//                 ease: 'easeOut'
//               }}
//               className={`absolute ${step.className} w-[180px] md:w-[240px]`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStepsSection;



// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// import Step1 from '../../assets/images/step1.svg';
// import Step2 from '../../assets/images/step2.svg';
// import Step3 from '../../assets/images/step3.svg';
// import Step4 from '../../assets/images/step4.svg';
// import Step5 from '../../assets/images/step5.svg';
// import Illustration from '../../assets/images/illustration.svg';

// const steps = [
//   { id: 1, image: Step1, top: 'top-[-50px]', left: 'left-[-45%] md:left-[-45%]' },
//   { id: 2, image: Step2, top: 'top-[110px]', left: 'left-[-30%] md:left-[-30%]' },
//   { id: 3, image: Step3, top: 'top-[270px]', left: 'left-[-15%] md:left-[-15%]' },
//   { id: 4, image: Step4, top: 'top-[430px]', left: 'left-[0%] md:left-[0%]' },
//   { id: 5, image: Step5, top: 'top-[590px]', left: 'left-[15%] md:left-[15%]' }
// ];

// const OurStepsSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-black text-white font-roboto pt-16 px-4 md:px-20 overflow-hidden"
//     >
//       <h2 className="text-[32px] md:text-[40px] font-bold text-center text-[#E8CBAF] mb-20">
//         Our Proven 5-Step Data Transformation Framework
//       </h2>

//       <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row  justify-between">
//         <motion.img
//           src={Illustration}
//           alt="Left Chart Illustration"
//           initial={{ opacity: 0, x: -80 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="w-[400px] md:w-[600px] lg:w-[650px] mb-16 lg:mb-0"
//         />

       
//         <div className="relative w-full md:w-[90%] lg:w-[90%] h-[350px]">
//           {steps.map((step, index) => (
//             <motion.img
//               key={step.id}
//               src={step.image}
//               alt={`Step ${step.id}`}
//               initial={{ opacity: 0, x: 300 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 delay: 0.5 + index * 0.4,
//                 duration: 0.6,
//                 ease: 'easeOut'
//               }}
//               className={`absolute ${step.top} ${step.left} w-[360px] md:w-[440px]`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStepsSection;


// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useInView } from 'framer-motion';

// import Step1 from '../../assets/images/step1.svg';
// import Step2 from '../../assets/images/step2.svg';
// import Step3 from '../../assets/images/step3.svg';
// import Step4 from '../../assets/images/step4.svg';
// import Step5 from '../../assets/images/step5.svg';
// import Illustration from '../../assets/images/illustration.svg';

// const steps = [
//   { id: 1, image: Step1, top: 'top-[-50px]', left: 'left-[-45%] md:left-[-45%]' },
//   { id: 2, image: Step2, top: 'top-[110px]', left: 'left-[-30%] md:left-[-30%]' },
//   { id: 3, image: Step3, top: 'top-[270px]', left: 'left-[-15%] md:left-[-15%]' },
//   { id: 4, image: Step4, top: 'top-[430px]', left: 'left-[0%] md:left-[0%]' },
//   { id: 5, image: Step5, top: 'top-[590px]', left: 'left-[15%] md:left-[15%]' }
// ];

// const OurStepsSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.4 });

//   const [animationKey, setAnimationKey] = useState(0);

//   useEffect(() => {
//     if (isInView) {
//       setAnimationKey(prev => prev + 1); // Triggers rerender of motion elements
//     }
//   }, [isInView]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-black text-white font-roboto pt-16 px-4 md:px-20 overflow-hidden"
//     >
//       <h2 className="text-[32px] md:text-[40px] font-bold text-center text-[#E8CBAF] mb-20">
//         Our Proven 5-Step Data Transformation Framework
//       </h2>

//       <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
//         <motion.img
//           key={`illustration-${animationKey}`}
//           src={Illustration}
//           alt="Left Chart Illustration"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="w-[400px] md:w-[600px] lg:w-[650px] mb-16 lg:mb-0"
//         />

//         <div className="relative w-full md:w-[90%] lg:w-[90%] h-[350px]">
//           {steps.map((step, index) => (
//             <motion.img
//               key={`step-${step.id}-${animationKey}`}
//               src={step.image}
//               alt={`Step ${step.id}`}
//               initial={{ opacity: 0, x: 300 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 delay: 0.5 + index * 0.4,
//                 duration: 0.6,
//                 ease: 'easeOut'
//               }}
//               className={`absolute ${step.top} ${step.left} w-[360px] md:w-[440px]`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStepsSection;




import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

import Step1 from '../../assets/images/step1.svg';
import Step2 from '../../assets/images/step2.svg';
import Step3 from '../../assets/images/step3.svg';
import Step4 from '../../assets/images/step4.svg';
import Step5 from '../../assets/images/step5.svg';
import Illustration from '../../assets/images/illustration.svg';

const steps = [
  { id: 1, image: Step1 },
  { id: 2, image: Step2 },
  { id: 3, image: Step3 },
  { id: 4, image: Step4 },
  { id: 5, image: Step5 }
];

const OurStepsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative bg-black text-white font-roboto pt-16 px-4 md:px-20 overflow-hidden"
    >
      <h2 className="text-[32px] md:text-[40px] font-bold text-center text-[#E8CBAF] mb-20">
        Our Proven 5-Step Data Transformation Framework
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">

        {/* ✅ Desktop & Large Screens Layout (unchanged) */}
        <div className="hidden lg:flex flex-row justify-between">
          <motion.img
            key={`illustration-${animationKey}`}
            src={Illustration}
            alt="Left Chart Illustration"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-[400px] md:w-[600px] lg:w-[650px] mb-16 lg:mb-0"
          />

          <div className="relative w-full md:w-[90%] lg:w-[90%] h-[800px]">
            {steps.map((step, index) => {
              const positions = [
                'top-[-50px] left-[-45%]',
                'top-[110px] left-[-30%]',
                'top-[270px] left-[-15%]',
                'top-[430px] left-[0%]',
                'top-[590px] left-[15%]'
              ];

              return (
                <motion.img
                  key={`step-${step.id}-${animationKey}`}
                  src={step.image}
                  alt={`Step ${step.id}`}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.4,
                    duration: 0.6,
                    ease: 'easeOut'
                  }}
                  className={`absolute ${positions[index]} w-[360px] md:w-[440px]`}
                />
              );
            })}
          </div>
        </div>

        {/* ✅ Mobile & Tablet Layout */}
        <div className="block lg:hidden flex flex-col items-center gap-8">
          {steps.map((step, index) => (
            <motion.img
              key={`mobile-step-${step.id}-${animationKey}`}
              src={step.image}
              alt={`Step ${step.id}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.3,
                duration: 0.5,
                ease: 'easeOut'
              }}
              className="w-[90%] max-w-[400px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStepsSection;
