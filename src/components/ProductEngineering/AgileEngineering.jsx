// components/AgileEngineering.jsx

// import React from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// import ProductStep1 from "../../assets/images/ProductStep1.svg"
// import ProductStep2 from "../../assets/images/ProductStep2.svg"
// import ProductStep3 from "../../assets/images/ProductStep3.svg"
// import ProductStep4 from "../../assets/images/ProductStep4.svg"
// import ProductStep5 from "../../assets/images/ProductStep5.svg"

// import AgileMobile from '../../assets/images/AgileMobile.svg';

// const steps = [
//   {
//     img: ProductStep1,
//     title: 'Ideate & Strategize',
//     description: 'Understand your goals, audience, and tech needs',
//   },
//   {
//     img: ProductStep2,
//     title: 'Design & Prototype',
//     description: 'Create intuitive wireframes and MVP flows',
//   },
//   {
//     img: ProductStep3,
//     title: 'Develop & Test',
//     description: 'Code, iterate, test, and refine',
//   },
//   {
//     img: ProductStep4,
//     title: 'Launch & Scale',
//     description: 'Go live with confidence and room to grow',
//   },
//   {
//     img: ProductStep5,
//     title: 'Support & Optimize',
//     description: 'Post-launch care to keep your product sharp',
//   },
// ];

// const AgileEngineering = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: false });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start((i) => ({
//         x: 0,
//         opacity: 1,
//         transition: {
//           delay: i * 0.3,
//           duration: 0.6,
//           ease: 'easeOut',
//         },
//       }));
//     } else {
//       controls.start(() => ({
//         x: -100,
//         opacity: 0,
//       }));
//     }
//   }, [inView, controls]);

//   return (
//     <div ref={ref} className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 py-20">
//       {/* Left Side Steps */}
//       <div className="w-full md:w-1/2 space-y-6">
//         <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left mb-8 text-yellow-200">
//           Our Agile Engineering Approach
//         </h2>

//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             animate={controls}
//             initial={{ x: -100, opacity: 0 }}
//             className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-[#0f172a] to-[#1e293b]"
//           >
//             <img src={step.img} alt={`Step ${index + 1}`} className="w-12 h-12" />
//             <div>
//               <h3 className="text-xl font-bold">{step.title}</h3>
//               <p className="text-sm text-gray-300">{step.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Right Side Image */}
//       <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
//         <img src={AgileMobile} alt="Right Side Illustration" className="w-[90%] max-w-[400px]" />
//       </div>
//     </div>
//   );
// };

// export default AgileEngineering;




// import React from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// import ProductStep1 from "../../assets/images/ProductStep1.svg";
// import ProductStep2 from "../../assets/images/ProductStep2.svg";
// import ProductStep3 from "../../assets/images/ProductStep3.svg";
// import ProductStep4 from "../../assets/images/ProductStep4.svg";
// import ProductStep5 from "../../assets/images/ProductStep5.svg";
// import AgileMobile from '../../assets/images/AgileMobile.svg';

// const stepImages = [ProductStep1, ProductStep2, ProductStep3, ProductStep4, ProductStep5];

// const AgileEngineering = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start((i) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.3,
//           duration: 0.6,
//           ease: 'easeOut',
//         },
//       }));
//     }
//   }, [inView, controls]);

//   return (
//     <div
//       ref={ref}
//       className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 py-20"
//     >
//       {/* Left Side: Animated Step Images */}
//       <div className="w-full md:w-1/3 space-y-8 ">
//         <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left mb-8 text-yellow-200">
//           Our Agile Engineering Approach
//         </h2>

//         {stepImages.map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             alt={`Step ${index + 1}`}
//             className="w-full max-w-md"
//             custom={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//           />
//         ))}
//       </div>

//       {/* Right Side: Main Illustration */}
//       <div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center ">
//         <img src={AgileMobile} alt="Right Side Illustration" className="w-[90%] max-w-[400px]" />
//       </div>
//     </div>
//   );
// };

// export default AgileEngineering;




import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProductStep1 from "../../assets/images/ProductStep1.svg";
import ProductStep2 from "../../assets/images/ProductStep2.svg";
import ProductStep3 from "../../assets/images/ProductStep3.svg";
import ProductStep4 from "../../assets/images/ProductStep4.svg";
import ProductStep5 from "../../assets/images/ProductStep5.svg";
import AgileMobile from '../../assets/images/AgileMobile.svg';

const stepImages = [ProductStep1, ProductStep2, ProductStep3, ProductStep4, ProductStep5];

const AgileEngineering = () => {
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
    <div ref={ref} className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#EED4AD] text-center mb-12">
        Our Agile Engineering Approach
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
            src={AgileMobile}
            alt="Agile Mobile"
            className="w-[90%] max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AgileEngineering;
