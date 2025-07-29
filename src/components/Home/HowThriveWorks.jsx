// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';


// const steps = [
//   {
//     title: 'Adoption',
//     description:
//       'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation. Adoption is where we integrate ourselves into your business.',
//     image: '/path/to/handshake.png', // replace with your asset path
//   },
//   {
//     title: 'Activation',
//     description:
//       'We help activate your data streams and automation, ensuring your business is equipped to operate with AI capabilities.',
//     image: '/path/to/activation.png',
//   },
//   {
//     title: 'Optimization',
//     description:
//       'Optimize every aspect of your digital strategy with continuous data-driven improvements.',
//     image: '/path/to/optimization.png',
//   },
//   {
//     title: 'Scale',
//     description:
//       'Scale up your business confidently with systems and strategies aligned for exponential growth.',
//     image: '/path/to/scale.png',
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleWheel = (e) => {
//     if (e.deltaY > 0) {
//       // Scroll Down
//       setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
//     } else {
//       // Scroll Up
//       setCurrentStep((prev) => Math.max(prev - 1, 0));
//     }
//   };

//   return (
//     <section
//       onWheel={handleWheel}
//       className="h-screen w-full flex flex-col items-center justify-center bg-black text-white font-roboto overflow-hidden"
//     >
//       <h2 className="text-2xl md:text-3xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 py-2 mb-6">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <div className="relative border border-[#0091A7] rounded-lg p-6 md:p-12 flex items-center justify-between w-[90%] md:w-[70%] h-[60vh] bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentStep}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.6 }}
//             className="flex w-full items-center justify-between"
//           >
//             <div className="w-1/2 pr-4">
//               <h3 className="text-xl md:text-2xl text-[#0091A7] font-bold mb-2">
//                 {steps[currentStep].title}
//               </h3>
//               <p className="text-gray-300">{steps[currentStep].description}</p>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <img
//                 src={steps[currentStep].image}
//                 alt={steps[currentStep].title}
//                 className="w-48 h-48 object-contain"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="flex space-x-2 mt-6">
//         {steps.map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-3 h-3 rounded-full border ${
//               currentStep === idx ? 'bg-white' : 'bg-gray-600'
//             }`}
//           ></span>
//         ))}
//       </div>

//       <button className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white hover:opacity-90">
//         Let’s Thrive
//       </button>
//     </section>
//   );
// };

// export default HowThriveWorks;






// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import HandshakeImg from '../../assets/handshake.png'; // replace with your image

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation. Adoption is where we integrate ourselves into your business.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Activation',
//     description: 'We help activate your data streams and automation, ensuring your business is equipped to operate with AI capabilities.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Optimization',
//     description: 'Optimize every aspect of your digital strategy with continuous data-driven improvements.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Scale',
//     description: 'Scale up your business confidently with systems and strategies aligned for exponential growth.',
//     image: HandshakeImg,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleWheel = (e) => {
//     if (e.deltaY > 0) {
//       // scroll down
//       if (currentIndex < steps.length - 1) setCurrentIndex(currentIndex + 1);
//     } else {
//       // scroll up
//       if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section
//       onWheel={handleWheel}
//       className="h-screen w-full flex flex-col items-center justify-center bg-black text-white font-roboto overflow-hidden"
//     >
//       <h2 className="text-2xl md:text-3xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 py-2 mb-6">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <div className="relative border border-[#0091A7] rounded-lg p-4 md:p-10 w-[90%] md:w-[70%] min-h-[50vh] flex items-center justify-between bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.5 }}
//             className="flex w-full items-center justify-between"
//           >
//             <div className="w-1/2 pr-4">
//               <h3 className="text-xl md:text-2xl text-[#0091A7] font-bold mb-3">
//                 {steps[currentIndex].title}
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base">{steps[currentIndex].description}</p>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <img src={steps[currentIndex].image} alt="Step Visual" className="w-60 h-60 object-contain" />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="flex space-x-2 mt-6">
//         {steps.map((_, index) => (
//           <span
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? 'bg-white' : 'bg-gray-600'
//             }`}
//           />
//         ))}
//       </div>

//       <button className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white hover:opacity-90">
//         Let’s Thrive
//       </button>
//     </section>
//   );
// };

// export default HowThriveWorks;



// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import HandshakeImg from '../assets/images/card1.svg'; // replace with your image

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation. Adoption is where we integrate ourselves into your business.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Activation',
//     description: 'We help activate your data streams and automation, ensuring your business is equipped to operate with AI capabilities.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Optimization',
//     description: 'Optimize every aspect of your digital strategy with continuous data-driven improvements.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Scale',
//     description: 'Scale up your business confidently with systems and strategies aligned for exponential growth.',
//     image: HandshakeImg,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleWheel = (e) => {
//     if (e.deltaY > 0) {
//       // scroll down
//       if (currentIndex < steps.length - 1) setCurrentIndex(currentIndex + 1);
//     } else {
//       // scroll up
//       if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section
//       onWheel={handleWheel}
//       className="h-screen w-full flex flex-col items-center justify-center bg-black text-white font-roboto overflow-hidden"
//     >
//       <h2 className="text-2xl md:text-3xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 py-2 mb-6">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <div className="relative border border-[#0091A7] rounded-lg p-4 md:p-10 w-[90%] md:w-[70%] min-h-[50vh] flex items-center justify-between bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.5 }}
//             className="flex w-full items-center justify-between"
//           >
//             <div className="w-1/2 pr-4">
//               <h3 className="text-xl md:text-2xl text-[#0091A7] font-bold mb-3">
//                 {steps[currentIndex].title}
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base">{steps[currentIndex].description}</p>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <img src={steps[currentIndex].image} alt="Step Visual" className="w-60 h-60 object-contain" />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="flex space-x-2 mt-6">
//         {steps.map((_, index) => (
//           <span
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? 'bg-white' : 'bg-gray-600'
//             }`}
//           />
//         ))}
//       </div>

//       <button className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white hover:opacity-90">
//         Let’s Thrive
//       </button>
//     </section>
//   );
// };

// export default HowThriveWorks;



// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import HandshakeImg from '../assets/images/card1.svg'; // replace with your image

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation. Adoption is where we integrate ourselves into your business.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Activation',
//     description: 'We help activate your data streams and automation, ensuring your business is equipped to operate with AI capabilities.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Optimization',
//     description: 'Optimize every aspect of your digital strategy with continuous data-driven improvements.',
//     image: HandshakeImg,
//   },
//   {
//     title: 'Scale',
//     description: 'Scale up your business confidently with systems and strategies aligned for exponential growth.',
//     image: HandshakeImg,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward

//   const handleWheel = (e) => {
//     if (e.deltaY > 5) { // Added threshold to prevent double triggers
//       // scroll down
//       if (currentIndex < steps.length - 1) {
//         setDirection(1);
//         setCurrentIndex(currentIndex + 1);
//       }
//     } else if (e.deltaY < -5) {
//       // scroll up
//       if (currentIndex > 0) {
//         setDirection(-1);
//         setCurrentIndex(currentIndex - 1);
//       }
//     }
//   };

//   // Handle touch events for mobile swipe
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 50) {
//       // swipe left (next)
//       if (currentIndex < steps.length - 1) {
//         setDirection(1);
//         setCurrentIndex(currentIndex + 1);
//       }
//     }

//     if (touchStart - touchEnd < -50) {
//       // swipe right (previous)
//       if (currentIndex > 0) {
//         setDirection(-1);
//         setCurrentIndex(currentIndex - 1);
//       }
//     }
//   };

//   return (
//     <section
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       className="h-screen w-full flex flex-col items-center justify-center bg-black text-white font-roboto overflow-hidden relative"
//     >
//       <h2 className="text-2xl md:text-3xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 py-2 mb-6">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <div className="relative border border-[#0091A7] rounded-lg p-4 md:p-10 w-[90%] md:w-[70%] min-h-[50vh] flex items-center justify-between bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A]">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             className="flex w-full items-center justify-between"
//           >
//             <div className="w-1/2 pr-4">
//               <h3 className="text-xl md:text-2xl text-[#0091A7] font-bold mb-3">
//                 {steps[currentIndex].title}
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base">{steps[currentIndex].description}</p>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <img src={steps[currentIndex].image} alt="Step Visual" className="w-60 h-60 object-contain" />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Vertical dots indicator */}
//       <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
//         {steps.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className="flex items-center justify-center"
//           >
//             <span className={`w-3 h-3 rounded-full transition-all ${
//               index === currentIndex ? 'bg-white w-4 h-4' : 'bg-gray-600'
//             }`} />
//             {index === currentIndex && (
//               <span className="ml-2 text-xs text-white">{steps[index].title}</span>
//             )}
//           </button>
//         ))}
//       </div>

//       <button className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white hover:opacity-90">
//         Let's Thrive
//       </button>
//     </section>
//   );
// };

// export default HowThriveWorks;




// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg'; // replace with your image
// import CardImg2 from '../assets/images/card2.svg'; // replace with your image
// import CardImg3 from '../assets/images/card3.svg'; // replace with your image
// import CardImg4 from '../assets/images/card4.svg'; // replace with your image
// import ShadowPattern from '../assets/images/CardsBG.png'; // add your shadow image

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integratibg ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It’s growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleNavigation = (newIndex) => {
//     if (isAnimating || newIndex === currentIndex) return;
    
//     setIsAnimating(true);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
    
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleWheel = (e) => {
//     if (isAnimating) return;
    
//     if (e.deltaY > 5 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < -5 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   // Touch handlers for mobile swipe
//   const [touchStart, setTouchStart] = useState(0);
  
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchEnd = (e) => {
//     if (isAnimating) return;
    
//     const touchEnd = e.changedTouches[0].clientX;
//     const diff = touchStart - touchEnd;

//     if (diff > 50 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (diff < -50 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   return (
//     <section
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       className="h-screen w-full flex flex-col items-center justify-center bg-black text-white font-roboto overflow-hidden relative"
//     >
//       {/* Shadow background */}
//       <img 
//         src={ShadowPattern} 
//         alt="shadow pattern" 
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
//       />

//       <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-8 z-10">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <div className="relative border border-[#0091A7] rounded-lg p-6 md:p-12 w-[90%] md:w-[70%] min-h-[60vh] flex items-center justify-between bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A] z-10">
//         {/* Left vertical dots */}
//         <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
//           {steps.map((step, index) => (
//             <button
//               key={index}
//               onClick={() => handleNavigation(index)}
//               className="flex items-center justify-start"
//             >
//               <span className={`w-4 h-4 rounded-full transition-all ${
//                 index === currentIndex ? 'bg-white w-5 h-5' : 'bg-gray-600'
//               }`} />
//               {index === currentIndex && (
//                 <motion.span 
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="ml-3 text-sm md:text-base text-white whitespace-nowrap"
//                 >
//                   {/* {step.title} */}
//                 </motion.span>
//               )}
//             </button>
//           ))}
//         </div>

//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             className="flex w-full items-center justify-between pl-12"
//           >
//             <div className="w-1/2 pr-8">
//               <h3 className="text-2xl md:text-3xl text-[#0091A7] font-bold mb-4">
//                 {steps[currentIndex].title}
//               </h3>
//               <p className="text-gray-300 text-base md:text-lg">
//                 {steps[currentIndex].description}
//               </p>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <motion.img 
//                 src={steps[currentIndex].image} 
//                 alt="Step Visual" 
//                 className="w-92 h-92 md:w-80 md:h-100 object-contain"
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <motion.button 
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-10 px-8 py-3 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white text-lg font-semibold z-10"
//       >
//         Let's Thrive
//       </motion.button>
//     </section>
//   );
// };

// export default HowThriveWorks;






// import React, { useState, useEffect, useRef } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg'; // replace with your image
// import CardImg2 from '../assets/images/card2.svg'; // replace with your image
// import CardImg3 from '../assets/images/card3.svg'; // replace with your image
// import CardImg4 from '../assets/images/card4.svg'; // replace with your image
// import ShadowPattern from '../assets/images/CardsBG.png'; // add your shadow image

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integratibg ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It’s growth, on autopilot.",
//     image: CardImg4,
//   },
// ];


// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const sectionRef = useRef(null);
//   const isScrollLocked = useRef(false);

//   // Handle wheel/touch events
//   const handleNavigation = (newIndex) => {
//     if (isAnimating || newIndex === currentIndex) return;
    
//     setIsAnimating(true);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
    
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
    
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isInView = top < window.innerHeight && bottom > 0;
    
//     if (!isInView) return;
    
//     e.preventDefault();
    
//     if (isAnimating) return;
    
//     if (e.deltaY > 5 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < -5 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   // Touch handlers for mobile swipe
//   const [touchStart, setTouchStart] = useState(0);
  
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchEnd = (e) => {
//     if (isAnimating) return;
    
//     const touchEnd = e.changedTouches[0].clientX;
//     const diff = touchStart - touchEnd;

//     if (diff > 50 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (diff < -50 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   // Scroll lock effect
//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (!sectionRef.current) return;
      
//       const { top, bottom } = sectionRef.current.getBoundingClientRect();
//       const isInView = top < window.innerHeight && bottom > 0;
      
//       if (isInView && (currentIndex > 0 || currentIndex < steps.length - 1)) {
//         // Prevent scrolling when not at first or last card
//         if (isScrollLocked.current) {
//           e.preventDefault();
//           e.stopPropagation();
//           window.scrollTo(0, sectionRef.current.offsetTop);
//         }
//       }
//     };

//     window.addEventListener('wheel', handleScroll, { passive: false });
//     window.addEventListener('touchmove', handleScroll, { passive: false });
    
//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//       window.removeEventListener('touchmove', handleScroll);
//     };
//   }, [currentIndex]);

//   return (
//     <section
//       ref={sectionRef}
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       className="h-screen w-full flex flex-col items-center justify-center text-white font-roboto overflow-hidden relative snap-start"
//     >
//       {/* Shadow background - ensure the image path is correct */}
//       <div className="absolute inset-0 overflow-hidden z-0" >
//         {/* <img 
//           src={ShadowPattern} 
//           alt="shadow pattern" 
//           className="w-full h-full object-cover opacity-100"
//         /> */}
//       </div>

//       <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-8 z-10">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <div className="relative  rounded-lg p-6 md:p-12 w-[90%] md:w-[70%] min-h-[60vh] flex items-center justify-between bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A] z-10" style={{
//                     backgroundImage: `url(${ShadowPattern})`,
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     backgroundSize: '100%',
//                   }}>
//         {/* Left vertical dots */}
//         <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
//           {steps.map((step, index) => (
//             <button
//               key={index}
//               onClick={() => handleNavigation(index)}
//               className="flex items-center justify-start group"
//             >
//               <span className={`w-4 h-4 rounded-full transition-all ${
//                 index === currentIndex ? 'bg-white w-5 h-5' : 'bg-gray-600 group-hover:bg-gray-400'
//               }`} />
//               {index === currentIndex && (
//                 <motion.span 
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="ml-3 text-sm md:text-base text-white whitespace-nowrap"
//                 >
//                   {/* {step.title} */}
//                 </motion.span>
//               )}
//             </button>
//           ))}
//         </div>

//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             className="flex w-full items-center justify-between pl-12"
//           >
//             <div className="w-1/2 pr-8">
//               <h3 className="text-2xl md:text-3xl text-[#0091A7] font-bold mb-4">
//                 {steps[currentIndex].title}
//               </h3>
//               <p className="text-gray-300 text-base md:text-lg">
//                 {steps[currentIndex].description}
//               </p>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <motion.img 
//                 src={steps[currentIndex].image} 
//                 alt="Step Visual" 
//                 className="w-72 h-72 md:w-80 md:h-80 object-contain"
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <motion.button 
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-10 px-8 py-3 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white text-lg font-semibold z-10"
//       >
//         Let's Thrive
//       </motion.button>
//     </section>
//   );
// };

// export default HowThriveWorks;





// import React, { useState, useEffect, useRef } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg';
// import CardImg2 from '../assets/images/card2.svg';
// import CardImg3 from '../assets/images/card3.svg';
// import CardImg4 from '../assets/images/card4.svg';
// import ShadowPattern from '../assets/images/CardsBG.png';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It's growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const sectionRef = useRef(null);
//   const isScrollLocked = useRef(false);

//   const handleNavigation = (newIndex) => {
//     if (isAnimating || newIndex === currentIndex) return;
    
//     setIsAnimating(true);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
    
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
    
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isInView = top < window.innerHeight && bottom > 0;
    
//     if (!isInView) return;
    
//     e.preventDefault();
    
//     if (isAnimating) return;
    
//     if (e.deltaY > 5 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < -5 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   const [touchStart, setTouchStart] = useState(0);
  
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchEnd = (e) => {
//     if (isAnimating) return;
    
//     const touchEnd = e.changedTouches[0].clientX;
//     const diff = touchStart - touchEnd;

//     if (diff > 50 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (diff < -50 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (!sectionRef.current) return;
      
//       const { top, bottom } = sectionRef.current.getBoundingClientRect();
//       const isInView = top < window.innerHeight && bottom > 0;
      
//       if (isInView && (currentIndex > 0 || currentIndex < steps.length - 1)) {
//         if (isScrollLocked.current) {
//           e.preventDefault();
//           e.stopPropagation();
//           window.scrollTo(0, sectionRef.current.offsetTop);
//         }
//       }
//     };

//     window.addEventListener('wheel', handleScroll, { passive: false });
//     window.addEventListener('touchmove', handleScroll, { passive: false });
    
//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//       window.removeEventListener('touchmove', handleScroll);
//     };
//   }, [currentIndex]);

//   return (
//     <section
//       ref={sectionRef}
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       className="h-screen w-full flex flex-col items-center justify-center text-white font-roboto overflow-hidden relative snap-start"
//     >
//       {/* Background with shadow pattern */}
//       <div className="absolute inset-0 w-full h-full z-0"
//         style={{
//           backgroundImage: `url(${ShadowPattern})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           opacity: 0.2
//         }}
//       />

//       <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center z-10">
//         <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-8 text-center">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2>

//         <div className="relative w-full max-w-5xl rounded-lg p-6 md:p-12 min-h-[60vh] flex items-center justify-between bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A]">
//           {/* Left vertical dots - centered with the card */}
//           <div className="absolute -left-10 md:-left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
//             {steps.map((step, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleNavigation(index)}
//                 className="flex items-center justify-start group"
//               >
//                 <span className={`w-4 h-4 rounded-full transition-all ${
//                   index === currentIndex ? 'bg-white w-5 h-5' : 'bg-gray-600 group-hover:bg-gray-400'
//                 }`} />
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="flex w-full items-center justify-between"
//             >
//               <div className="w-1/2 pr-8">
//                 <h3 className="text-2xl md:text-3xl text-[#0091A7] font-bold mb-4">
//                   {steps[currentIndex].title}
//                 </h3>
//                 <p className="text-gray-300 text-base md:text-lg">
//                   {steps[currentIndex].description}
//                 </p>
//               </div>
//               <div className="w-1/2 flex justify-center">
//                 <motion.img 
//                   src={steps[currentIndex].image} 
//                   alt="Step Visual" 
//                   className="w-72 h-72 md:w-80 md:h-80 object-contain"
//                   initial={{ scale: 0.9 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2 }}
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-10 px-8 py-3 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white text-lg font-semibold"
//         >
//           Let's Thrive
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default HowThriveWorks;






// import React, { useState, useEffect, useRef } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg';
// import CardImg2 from '../assets/images/card2.svg';
// import CardImg3 from '../assets/images/card3.svg';
// import CardImg4 from '../assets/images/card4.svg';
// import ShadowPattern from '../assets/images/CardsBG.png';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It's growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const sectionRef = useRef(null);
//   const isScrollLocked = useRef(false);

//   const handleNavigation = (newIndex) => {
//     if (isAnimating || newIndex === currentIndex) return;
    
//     setIsAnimating(true);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
    
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
    
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isInView = top < window.innerHeight && bottom > 0;
    
//     if (!isInView) return;
    
//     e.preventDefault();
    
//     if (isAnimating) return;
    
//     if (e.deltaY > 5 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < -5 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   const [touchStart, setTouchStart] = useState(0);
  
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchEnd = (e) => {
//     if (isAnimating) return;
    
//     const touchEnd = e.changedTouches[0].clientX;
//     const diff = touchStart - touchEnd;

//     if (diff > 50 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (diff < -50 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (!sectionRef.current) return;
      
//       const { top, bottom } = sectionRef.current.getBoundingClientRect();
//       const isInView = top < window.innerHeight && bottom > 0;
      
//       if (isInView && (currentIndex > 0 || currentIndex < steps.length - 1)) {
//         if (isScrollLocked.current) {
//           e.preventDefault();
//           e.stopPropagation();
//           window.scrollTo(0, sectionRef.current.offsetTop);
//         }
//       }
//     };

//     window.addEventListener('wheel', handleScroll, { passive: false });
//     window.addEventListener('touchmove', handleScroll, { passive: false });
    
//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//       window.removeEventListener('touchmove', handleScroll);
//     };
//   }, [currentIndex]);

//   return (
//     <section
//       ref={sectionRef}
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       className="h-screen w-full flex flex-col items-center justify-center text-white font-roboto overflow-hidden relative snap-start"
     
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

//       <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center z-10">
//         <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-8 text-center">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2>

//         <div className="relative w-full max-w-5xl rounded-lg p-6 md:p-12 min-h-[60vh] flex items-center justify-between bg-[#0B0B0B] bg-opacity-80 backdrop-blur-sm border border-[#0091A7]">
//           {/* Left vertical dots - centered with the card */}
//           <div className="absolute -left-10 md:-left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
//             {steps.map((step, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleNavigation(index)}
//                 className="flex items-center justify-start group"
//               >
//                 <span className={`w-4 h-4 rounded-full transition-all ${
//                   index === currentIndex ? 'bg-white w-5 h-5' : 'bg-gray-600 group-hover:bg-gray-400'
//                 }`} />
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="flex w-full items-center justify-between"
//             >
//               <div className="w-1/2 pr-8">
//                 <h3 className="text-2xl md:text-3xl text-[#0091A7] font-bold mb-4">
//                   {steps[currentIndex].title}
//                 </h3>
//                 <p className="text-gray-300 text-base md:text-lg">
//                   {steps[currentIndex].description}
//                 </p>
//               </div>
//               <div className="w-1/2 flex justify-center">
//                 <motion.img 
//                   src={steps[currentIndex].image} 
//                   alt="Step Visual" 
//                   className="w-72 h-72 md:w-80 md:h-80 object-contain"
//                   initial={{ scale: 0.9 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2 }}
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-10 px-8 py-3 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white text-lg font-semibold"
//         >
//           Let's Thrive
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default HowThriveWorks;






// import React, { useState, useEffect, useRef } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg';
// import CardImg2 from '../assets/images/card2.svg';
// import CardImg3 from '../assets/images/card3.svg';
// import CardImg4 from '../assets/images/card4.svg';
// // import ShadowPattern from '../assets/images/CardsBG.png';
// import ShadowPattern from '../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It's growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const sectionRef = useRef(null);
//   const isScrollLocked = useRef(false);

//   const handleNavigation = (newIndex) => {
//     if (isAnimating || newIndex === currentIndex) return;
    
//     setIsAnimating(true);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
    
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
    
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isInView = top < window.innerHeight && bottom > 0;
    
//     if (!isInView) return;
    
//     e.preventDefault();
    
//     if (isAnimating) return;
    
//     if (e.deltaY > 5 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < -5 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   const [touchStart, setTouchStart] = useState(0);
  
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchEnd = (e) => {
//     if (isAnimating) return;
    
//     const touchEnd = e.changedTouches[0].clientX;
//     const diff = touchStart - touchEnd;

//     if (diff > 50 && currentIndex < steps.length - 1) {
//       handleNavigation(currentIndex + 1);
//     } else if (diff < -50 && currentIndex > 0) {
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (!sectionRef.current) return;
      
//       const { top, bottom } = sectionRef.current.getBoundingClientRect();
//       const isInView = top < window.innerHeight && bottom > 0;
      
//       if (isInView && (currentIndex > 0 || currentIndex < steps.length - 1)) {
//         if (isScrollLocked.current) {
//           e.preventDefault();
//           e.stopPropagation();
//           window.scrollTo(0, sectionRef.current.offsetTop);
//         }
//       }
//     };

//     window.addEventListener('wheel', handleScroll, { passive: false });
//     window.addEventListener('touchmove', handleScroll, { passive: false });
    
//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//       window.removeEventListener('touchmove', handleScroll);
//     };
//   }, [currentIndex]);

//   return (
//     <section
//       ref={sectionRef}
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       className="h-screen w-full flex flex-col items-center justify-center text-white font-roboto overflow-hidden relative snap-start bg-black"
//     >
//       {/* Background shadow image */}
//       <div 
//         className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
//         style={{ backgroundImage: `url(${ShadowPattern})` }}
//       ></div>

//       <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

//       <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center z-10">
//         <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-8 text-center">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2>

//         <div className="relative w-full max-w-5xl rounded-lg p-6 md:p-12 min-h-[60vh] flex items-center justify-between  bg-opacity-80 backdrop-blur-sm">
//           {/* Left vertical dots */}
//           <div className="absolute -left-10 md:-left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
//             {steps.map((step, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleNavigation(index)}
//                 className="flex items-center justify-start group"
//               >
//                 <span className={`w-4 h-4 rounded-full transition-all ${
//                   index === currentIndex ? 'bg-white w-5 h-5' : 'bg-gray-600 group-hover:bg-gray-400'
//                 }`} />
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="flex w-full items-center justify-between"
//             >
//               <div className="w-1/2 pr-8">
//                 <h3 className="text-2xl md:text-3xl text-[#0091A7] font-bold mb-4">
//                   {steps[currentIndex].title}
//                 </h3>
//                 <p className="text-gray-300 text-base md:text-lg">
//                   {steps[currentIndex].description}
//                 </p>
//               </div>
//               <div className="w-1/2 flex justify-center">
//                 <motion.img 
//                   src={steps[currentIndex].image} 
//                   alt="Step Visual" 
//                   className="w-72 h-72 md:w-80 md:h-80 object-contain"
//                   initial={{ scale: 0.9 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2 }}
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-10 px-8 py-3 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-white text-lg font-semibold"
//         >
//           Let's Thrive
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default HowThriveWorks;






// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg';
// import CardImg2 from '../assets/images/card2.svg';
// import CardImg3 from '../assets/images/card3.svg';
// import CardImg4 from '../assets/images/card4.svg';
// import ShadowPattern from '../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation...',
//     image: CardImg1
//   },
//   {
//     title: 'Expansion',
//     description: 'We scale Thrive’s capabilities across your brand ecosystem, automating systems and activating AI co-pilots...',
//     image: CardImg2
//   },
//   {
//     title: 'Transformation',
//     description: 'Business evolves into an AI-native operation—implementing agentic workflows with continuous performance monitoring...',
//     image: CardImg3
//   },
//   {
//     title: 'Scaling',
//     description: 'Scaling turns momentum into exponential growth, powered by predictive analytics and automated execution...',
//     image: CardImg4
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sectionRef = useRef(null);
//   const [animating, setAnimating] = useState(false);

//   const navigateStep = (index) => {
//     if (index < 0 || index >= steps.length || animating) return;
//     setAnimating(true);
//     setCurrentIndex(index);
//     setTimeout(() => setAnimating(false), 700);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
//     e.preventDefault();

//     if (animating) return;
//     if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//       navigateStep(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       navigateStep(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (section) {
//       section.addEventListener('wheel', handleWheel, { passive: false });
//     }
//     return () => {
//       if (section) section.removeEventListener('wheel', handleWheel);
//     };
//   }, [currentIndex, animating]);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen w-full bg-black text-white font-roboto overflow-hidden relative flex flex-col justify-center items-center"
//       style={{ backgroundImage: `url(${ShadowPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-6 text-center z-10">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ y: 300, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -300, opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] max-w-5xl w-full flex items-center justify-between p-8 rounded-lg relative"
//         >
//           <div className="w-1/2">
//             <h3 className="text-[#0091A7] text-2xl md:text-3xl font-bold mb-4">{steps[currentIndex].title}</h3>
//             <p className="text-gray-300">{steps[currentIndex].description}</p>
//           </div>
//           <div className="w-1/2 flex justify-center">
//             <img src={steps[currentIndex].image} alt={steps[currentIndex].title} className="w-72 h-72 object-contain" />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dots */}
//       <div className="flex flex-col space-y-2 absolute left-8 top-1/2 transform -translate-y-1/2">
//         {steps.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => navigateStep(index)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
//           />
//         ))}
//       </div>

//       {/* CTA */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-lg z-10"
//       >
//         Let's Thrive
//       </motion.button>
//     </section>
//   );
// };

// export default HowThriveWorks;




// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg';
// import CardImg2 from '../assets/images/card2.svg';
// import CardImg3 from '../assets/images/card3.svg';
// import CardImg4 from '../assets/images/card4.svg';
// import ShadowPattern from '../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation...',
//     image: CardImg1
//   },
//   {
//     title: 'Expansion',
//     description: 'We scale Thrive’s capabilities across your brand ecosystem, automating systems and activating AI co-pilots...',
//     image: CardImg2
//   },
//   {
//     title: 'Transformation',
//     description: 'Business evolves into an AI-native operation—implementing agentic workflows with continuous performance monitoring...',
//     image: CardImg3
//   },
//   {
//     title: 'Scaling',
//     description: 'Scaling turns momentum into exponential growth, powered by predictive analytics and automated execution...',
//     image: CardImg4
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sectionRef = useRef(null);
//   const [animating, setAnimating] = useState(false);

//   const navigateStep = (index) => {
//     if (index < 0 || index >= steps.length || animating) return;
//     setAnimating(true);
//     setCurrentIndex(index);
//     setTimeout(() => setAnimating(false), 700);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
//     e.preventDefault();

//     if (animating) return;
//     if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//       navigateStep(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       navigateStep(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (section) {
//       section.addEventListener('wheel', handleWheel, { passive: false });
//     }
//     return () => {
//       if (section) section.removeEventListener('wheel', handleWheel);
//     };
//   }, [currentIndex, animating]);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen w-full bg-black text-white font-roboto overflow-hidden relative flex flex-col justify-center items-center"
//       style={{ backgroundImage: `url(${ShadowPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-6 text-center z-10">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ y: 300, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -300, opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] max-w-5xl w-full flex items-center justify-between p-8 rounded-lg relative"
//         >
//           <div className="w-1/2">
//             <h3 className="text-[#0091A7] text-2xl md:text-3xl font-bold mb-4">{steps[currentIndex].title}</h3>
//             <p className="text-gray-300">{steps[currentIndex].description}</p>
//           </div>
//           <div className="w-1/2 flex justify-center">
//             <img src={steps[currentIndex].image} alt={steps[currentIndex].title} className="w-72 h-72 object-contain" />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dots */}
//       <div className="flex flex-col space-y-2 absolute left-8 top-1/2 transform -translate-y-1/2">
//         {steps.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => navigateStep(index)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
//           />
//         ))}
//       </div>

//       {/* CTA */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-lg z-10"
//       >
//         Let's Thrive
//       </motion.button>
//     </section>
//   );
// };

// export default HowThriveWorks;





// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../../assets/images/card1.svg';
// import CardImg2 from '../../assets/images/card2.svg';
// import CardImg3 from '../../assets/images/card3.svg';
// import CardImg4 from '../../assets/images/card4.svg';
// import ShadowPattern from '../../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It's growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);

//   const handleNavigation = (newIndex) => {
//     if (isAnimating.current || newIndex === currentIndex) return;
//     isAnimating.current = true;
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
//     setTimeout(() => (isAnimating.current = false), 600);
//   };

//   // const handleWheel = (e) => {
//   //   if (!sectionRef.current) return;
//   //   const { top, bottom } = sectionRef.current.getBoundingClientRect();
//   //   const inView = top < window.innerHeight && bottom > 0;
//   //   if (!inView) return;

//   //   e.preventDefault();

//   //   if (e.deltaY > 5 && currentIndex < steps.length - 1) {
//   //     handleNavigation(currentIndex + 1);
//   //   } else if (e.deltaY < -5 && currentIndex > 0) {
//   //     handleNavigation(currentIndex - 1);
//   //   }
//   // };

//   // useEffect(() => {
//   //   const preventScroll = (e) => {
//   //     if (currentIndex !== steps.length - 1 || currentIndex !== 0) {
//   //       e.preventDefault();
//   //     }
//   //   };
//   //   window.addEventListener('wheel', handleWheel, { passive: false });
//   //   return () => window.removeEventListener('wheel', handleWheel);
//   // }, [currentIndex]);


//  const handleWheel = (e) => {
//   if (!sectionRef.current) return;

//   const { top, bottom } = sectionRef.current.getBoundingClientRect();

//   // const isFullyInView = top >= 0 && bottom <= window.innerHeight;
//   // const isFullyInView = top >= 0 && bottom <= window.innerHeight;
//   const isFullyInView = top >= 0 && bottom <= window.innerHeight + 50;



//   if (!isFullyInView) return; // Do nothing if not fully in view

//   if (isAnimating.current) {
//     e.preventDefault();
//     return;
//   }

//   if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//     e.preventDefault();
//     handleNavigation(currentIndex + 1);
//   } else if (e.deltaY < 0 && currentIndex > 0) {
//     e.preventDefault();
//     handleNavigation(currentIndex - 1);
//   }
// };



// useEffect(() => {
//   window.addEventListener('wheel', handleWheel, { passive: false });

//   return () => {
//     window.removeEventListener('wheel', handleWheel);
//   };
// }, [currentIndex]);

//   return (
//    <div className='flex justify-center'>
//          <section
//       ref={sectionRef}
//       className="h-screen w-full flex flex-col items-center justify-center text-white font-roboto relative overflow-hidden bg-black"
//     >
//       {/* <img src={ShadowPattern} alt="Shadow" className="absolute inset-0  h-full object-cover z-0" /> */}

//       <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-4 z-10">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       {/* Dots outside card */}
//       <div className="absolute ml-56 left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
//         {steps.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleNavigation(idx)}
//             className={`w-4 h-4 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
//           />
//         ))}
//       </div>

//     <div
//   className="max-w-5xl relative flex items-center justify-center h-[60vh] z-10 bg-cover  bg-center"
//   style={{ backgroundImage: `url(${ShadowPattern})` }}
// >
//         <AnimatePresence mode="wait" initial={false} custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             initial={{ y: direction > 0 ? 300 : -300, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: direction > 0 ? -300 : 300, opacity: 0 }}
//             transition={{ duration: 0.6, ease: 'easeInOut' }}
//             className="bg-opacity-80 backdrop-blur-md p-6 md:p-10 rounded-lg w-full flex items-center justify-between shadow-lg"
//           >
//             <div className="w-1/2 pr-6">
//               <h3 className="text-2xl md:text-3xl text-[#0091A7] font-bold mb-4">
//                 {steps[currentIndex].title}
//               </h3>
//               <p className="text-gray-300 text-base md:text-lg">{steps[currentIndex].description}</p>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <img src={steps[currentIndex].image} alt="Visual" className="w-80 h-80 object-contain" />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 px-20 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-lg font-semibold z-10"
//       >
//         Let's Thrive
//       </motion.button>
//     </section>
//    </div>
//   );
// };

// export default HowThriveWorks;



// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../../assets/images/card1.svg';
// import CardImg2 from '../../assets/images/card2.svg';
// import CardImg3 from '../../assets/images/card3.svg';
// import CardImg4 from '../../assets/images/card4.svg';
// import ShadowPattern from '../../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation...',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses...",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline...",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance...",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);

//   const handleNavigation = (newIndex) => {
//     if (isAnimating.current || newIndex === currentIndex) return;
//     isAnimating.current = true;
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
//     setTimeout(() => (isAnimating.current = false), 600);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isFullyInView = top >= 0 && bottom <= window.innerHeight + 50;

//     if (!isFullyInView) return;

//     if (isAnimating.current) {
//       e.preventDefault();
//       return;
//     }

//     if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//       e.preventDefault();
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       e.preventDefault();
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [currentIndex]);

//   return (
//     <div className="flex justify-center">
//       <section
//         ref={sectionRef}
//         className="min-h-screen w-full flex flex-col items-center justify-center text-white font-roboto relative overflow-hidden bg-black px-4 md:px-10 xl:px-20"
//       >
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 sm:px-6 py-2 sm:py-3 mb-6 text-center z-10">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2>

//         {/* Dots (Navigation) */}
//         <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
//           {steps.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(idx)}
//               className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
//             />
//           ))}
//         </div>

//         {/* Card Content */}
//         <div
//           className="w-full max-w-[1200px] relative z-10 bg-center bg-cover mt-4 sm:mt-8"
//           style={{ backgroundImage: `url(${ShadowPattern})` }}
//         >
//           <AnimatePresence mode="wait" initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ y: direction > 0 ? 300 : -300, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: direction > 0 ? -300 : 300, opacity: 0 }}
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               className="bg-opacity-80 backdrop-blur-md p-4 sm:p-6 md:p-10 rounded-lg w-full flex flex-col lg:flex-row items-center justify-between shadow-lg"
//             >
//               {/* Text */}
//               <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
//                 <h3 className="text-xl sm:text-2xl md:text-3xl text-[#0091A7] font-bold mb-4 text-center lg:text-left">
//                   {steps[currentIndex].title}
//                 </h3>
//                 <p className="text-gray-300 text-sm sm:text-base text-center lg:text-left">
//                   {steps[currentIndex].description}
//                 </p>
//               </div>

//               {/* Image */}
//               <div className="w-full lg:w-1/2 flex justify-center">
//                 <img
//                   src={steps[currentIndex].image}
//                   alt="Visual"
//                   className="w-40 sm:w-60 md:w-72 lg:w-80 xl:w-96 object-contain"
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* CTA Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-10 px-10 sm:px-16 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-sm sm:text-base font-semibold z-10"
//         >
//           Let's Thrive
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default HowThriveWorks;


// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../../assets/images/card1.svg';
// import CardImg2 from '../../assets/images/card2.svg';
// import CardImg3 from '../../assets/images/card3.svg';
// import CardImg4 from '../../assets/images/card4.svg';
// import ShadowPattern from '../../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation...',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem...",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation...",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth...",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen width for responsive animation/dot layout
//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkScreen();
//     window.addEventListener('resize', checkScreen);
//     return () => window.removeEventListener('resize', checkScreen);
//   }, []);

//   const handleNavigation = (newIndex) => {
//     if (isAnimating.current || newIndex === currentIndex) return;
//     isAnimating.current = true;
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
//     setTimeout(() => (isAnimating.current = false), 600);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const inView = top >= 0 && bottom <= window.innerHeight + 50;

//     if (!inView) return;

//     if (isAnimating.current) {
//       e.preventDefault();
//       return;
//     }

//     // Only animate when scrolling down
//     if (e.deltaY > 5 && currentIndex < steps.length - 1) {
//       e.preventDefault();
//       handleNavigation(currentIndex + 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [currentIndex]);

//   return (
//     <div className="flex justify-center">
//       <section
//         ref={sectionRef}
//         className="h-screen w-full flex flex-col items-center justify-center text-white font-roboto relative overflow-hidden bg-black px-4 md:px-10"
//       >
//         <h2 className="text-2xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-6 z-10 text-center">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2>

//         {/* Dots */}
//         <div
//           className={`z-10 ${
//             isMobile
//               ? 'flex flex-row gap-3 mt-4 mb-6'
//               : 'absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4'
//           }`}
//         >
//           {steps.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(idx)}
//               className={`w-4 h-4 rounded-full transition-colors ${
//                 idx === currentIndex ? 'bg-white' : 'bg-gray-500'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Card Section */}
//         <div
//           className="max-w-6xl w-full relative flex items-center justify-center z-10 bg-cover bg-center"
//           style={{ backgroundImage: `url(${ShadowPattern})` }}
//         >
//           <AnimatePresence mode="wait" initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={
//                 isMobile
//                   ? { x: direction > 0 ? 300 : -300, opacity: 0 }
//                   : { y: direction > 0 ? 300 : -300, opacity: 0 }
//               }
//               animate={{ x: 0, y: 0, opacity: 1 }}
//               exit={
//                 isMobile
//                   ? { x: direction > 0 ? -300 : 300, opacity: 0 }
//                   : { y: direction > 0 ? -300 : 300, opacity: 0 }
//               }
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               className="bg-opacity-80 backdrop-blur-md p-6 md:p-10 rounded-lg w-full flex flex-col md:flex-row items-center justify-between shadow-lg"
//             >
//               {/* Text */}
//               <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0 text-center md:text-left">
//                 <h3 className="text-2xl md:text-3xl text-[#0091A7] font-bold mb-4">
//                   {steps[currentIndex].title}
//                 </h3>
//                 <p className="text-gray-300 text-base md:text-lg">
//                   {steps[currentIndex].description}
//                 </p>
//               </div>

//               {/* Image */}
//               <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                   src={steps[currentIndex].image}
//                   alt="Visual"
//                   className="w-64 h-64 md:w-80 md:h-80 object-contain"
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-8 px-12 md:px-20 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-lg font-semibold z-10"
//         >
//           Let’s Thrive
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default HowThriveWorks;





// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../../assets/images/card1.svg';
// import CardImg2 from '../../assets/images/card2.svg';
// import CardImg3 from '../../assets/images/card3.svg';
// import CardImg4 from '../../assets/images/card4.svg';
// import ShadowPattern from '../../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description:
//       'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description:
//       "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description:
//       "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description:
//       "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It's growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const handleNavigation = (newIndex) => {
//     if (isAnimating.current || newIndex === currentIndex) return;
//     isAnimating.current = true;
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
//     setTimeout(() => (isAnimating.current = false), 600);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current || isMobile) return;
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isFullyInView = top >= 0 && bottom <= window.innerHeight + 50;
//     if (!isFullyInView) return;
//     if (isAnimating.current) {
//       e.preventDefault();
//       return;
//     }
//     if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//       e.preventDefault();
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       e.preventDefault();
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [currentIndex]);

//   const cardVariants = {
//     enter: (direction) => ({
//       x: isMobile ? (direction > 0 ? 300 : -300) : 0,
//       y: isMobile ? 0 : (direction > 0 ? 300 : -300),
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: isMobile ? (direction > 0 ? -300 : 300) : 0,
//       y: isMobile ? 0 : (direction > 0 ? -300 : 300),
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className="flex justify-center">
//       <section
//         ref={sectionRef}
//         className="h-screen w-full flex flex-col items-center justify-center text-white font-roboto relative overflow-hidden bg-black px-4"
//       >
//         {/* <h2 className="text-2xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 md:px-6 py-2 md:py-3 mb-6 z-10 text-center">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2> */}
// <h2 className="text-2xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 md:px-6 py-2 md:py-3 z-10 text-center mt-6 md:mt-0">
//   HOW THRIVE Ai STUDIO & TECH LAB WORKS?
// </h2>

//         {/* <div
//           className={`absolute ${isMobile ? 'bottom-6 flex-row left-1/2 -translate-x-1/2' : 'ml-56 left-6 top-1/2 -translate-y-1/2'} transform flex ${isMobile ? 'flex-row' : 'flex-col'} gap-4 z-10`}
//         > */}
//         <div
//   className={`absolute ${isMobile ? 'bottom-24 flex-row left-1/2 -translate-x-1/2' : 'ml-56 left-6 top-1/2 -translate-y-1/2'} transform flex ${isMobile ? 'flex-row' : 'flex-col'} gap-4 z-10`}
// >

//           {steps.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(idx)}
//               className={`w-4 h-4 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
//             />
//           ))}
//         </div>

//         {/* <div className="w-full max-w-6xl flex items-center justify-center h-[60vh] z-10 bg-cover bg-center relative" style={{ backgroundImage: `url(${ShadowPattern})` }}> */}
//         <div className={`w-full max-w-6xl flex items-center justify-center h-[60vh] z-10 bg-cover bg-center relative ${isMobile ? 'mt-12' : ''}`} style={{ backgroundImage: `url(${ShadowPattern})` }}>

//           <AnimatePresence mode="wait" initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={cardVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               className="bg-opacity-80 backdrop-blur-md p-4 md:p-10 rounded-lg w-full flex flex-col md:flex-row items-center md:items-start justify-between shadow-lg"
//             >
//               <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
//                 <h3 className="text-xl md:text-3xl text-[#0091A7] font-bold mb-4 text-center md:text-left">
//                   {steps[currentIndex].title}
//                 </h3>
//                 <p className="text-gray-300 text-sm md:text-lg text-center md:text-left">
//                   {steps[currentIndex].description}
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 flex justify-center">
//                 <img src={steps[currentIndex].image} alt="Visual" className="w-60 md:w-80 h-60 md:h-80 object-contain" />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-8 px-16 md:px-20 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-base md:text-lg font-semibold z-10"
//         >
//           Let's Thrive
//         </motion.button> */}
//         <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   className="mt-6 md:mt-8 px-16 md:px-20 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-base md:text-lg font-semibold z-10"
// >
//   Let's Thrive
// </motion.button>

//       </section>
//     </div>
//   );
// };

// export default HowThriveWorks;


// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../../assets/images/card1.svg';
// import CardImg2 from '../../assets/images/card2.svg';
// import CardImg3 from '../../assets/images/card3.svg';
// import CardImg4 from '../../assets/images/card4.svg';
// import ShadowPattern from '../../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description:
//       'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business...',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description:
//       "This is where we scale Thrive's capabilities across your brand ecosystem...",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description:
//       "Transformation is the stage where your business evolves into a truly AI-native operation...",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description:
//       "Scaling is where momentum turns into exponential growth...",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);

//   const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

//   const handleNavigation = (newIndex) => {
//     if (isAnimating.current || newIndex === currentIndex) return;
//     isAnimating.current = true;
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
//     setTimeout(() => (isAnimating.current = false), 600);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current || isMobile) return;
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isFullyInView = top >= 0 && bottom <= window.innerHeight + 50;
//     if (!isFullyInView) return;
//     if (isAnimating.current) {
//       e.preventDefault();
//       return;
//     }
//     if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//       e.preventDefault();
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       e.preventDefault();
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [currentIndex]);

//   const cardVariants = {
//     enter: (direction) => ({
//       x: isMobile ? (direction > 0 ? 300 : -300) : 0,
//       y: isMobile ? 0 : (direction > 0 ? 300 : -300),
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: isMobile ? (direction > 0 ? -300 : 300) : 0,
//       y: isMobile ? 0 : (direction > 0 ? -300 : 300),
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className="flex justify-center">
//       <section
//         ref={sectionRef}
//         className="min-h-screen w-full flex flex-col items-center justify-start text-white font-roboto relative overflow-hidden bg-black px-4 pt-12 pb-8"
//       >
//         {/* Title */}
//         <h2 className="text-2xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 md:px-6 py-2 md:py-3 mb-6 text-center z-20">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2>

//         {/* Cards */}
//         <div
//           className="w-full max-w-6xl flex items-center justify-center h-[60vh] z-10 bg-cover bg-center relative mb-8"
//           style={{ backgroundImage: `url(${ShadowPattern})` }}
//         >
//           <AnimatePresence mode="wait" initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={cardVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               className="bg-opacity-80 backdrop-blur-md p-4 md:p-10 rounded-lg w-full flex flex-col md:flex-row items-center md:items-start justify-between shadow-lg"
//             >
//               <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
//                 <h3 className="text-xl md:text-3xl text-[#0091A7] font-bold mb-4 text-center md:text-left">
//                   {steps[currentIndex].title}
//                 </h3>
//                 <p className="text-gray-300 text-sm md:text-lg text-center md:text-left">
//                   {steps[currentIndex].description}
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                   src={steps[currentIndex].image}
//                   alt="Visual"
//                   className="w-60 md:w-80 h-60 md:h-80 object-contain"
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Dots */}
//         <div
//           className={`z-30 mb-6 ${isMobile ? 'flex-row' : 'flex-col'} flex items-center gap-3 ${
//             isMobile ? 'mb-6' : ''
//           }`}
//         >
//           {steps.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(idx)}
//               className={`w-4 h-4 rounded-full border-2 transition ${
//                 idx === currentIndex
//                   ? 'bg-[#0091A7] border-[#0091A7]'
//                   : 'bg-transparent border-gray-400'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-2 px-16 md:px-20 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-base md:text-lg font-semibold z-10"
//         >
//           Let's Thrive
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default HowThriveWorks;



// const steps = [
//   {
//     title: 'Adoption',
//     description:
//       'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business...',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description:
//       "This is where we scale Thrive's capabilities across your brand ecosystem...",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description:
//       'Transformation is the stage where your business evolves into a truly AI-native operation...',
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: 'Scaling is where momentum turns into exponential growth...',
//     image: CardImg4,
//   },
// ];

// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CardImg1 from '../../assets/images/card1.svg';
// import CardImg2 from '../../assets/images/card2.svg';
// import CardImg3 from '../../assets/images/card3.svg';
// import CardImg4 from '../../assets/images/card4.svg';
// import ShadowPattern from '../../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description:
//       "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description:
//       "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description:
//       "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It’s growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const isAnimating = useRef(false);
//   const sectionRef = useRef(null);

//   const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

//   const handleNavigation = (newIndex) => {
//     if (isAnimating.current || newIndex === currentIndex) return;
//     isAnimating.current = true;
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setCurrentIndex(newIndex);
//     setTimeout(() => (isAnimating.current = false), 600);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current || isMobile) return;
//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isFullyInView = top >= 0 && bottom <= window.innerHeight + 50;
//     if (!isFullyInView) return;
//     if (isAnimating.current) {
//       e.preventDefault();
//       return;
//     }
//     if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//       e.preventDefault();
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       e.preventDefault();
//       handleNavigation(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [currentIndex]);

//   const cardVariants = {
//     enter: (direction) => ({
//       x: isMobile ? (direction > 0 ? 300 : -300) : 0,
//       y: isMobile ? 0 : direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: { x: 0, y: 0, opacity: 1 },
//     exit: (direction) => ({
//       x: isMobile ? (direction > 0 ? -300 : 300) : 0,
//       y: isMobile ? 0 : direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className="flex justify-center">
//       <section
//         ref={sectionRef}
//         className="min-h-screen w-full flex flex-col items-center justify-start text-white font-roboto relative overflow-hidden bg-black px-4 pt-12 pb-8"
//       >
//         {/* Title */}
//         <h2 className="text-2xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 md:px-6 py-2 md:py-3 mb-6 text-center z-20">
//           HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//         </h2>

//         {/* Cards with Dots Layout */}
//         <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center h-[60vh] z-10 relative mb-8">
//           {/* Dots (Left for Desktop) */}
//           <div className="hidden md:flex flex-col items-center justify-center gap-4 pr-8">
//             {steps.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleNavigation(idx)}
//                 className={`w-4 h-4 rounded-full border-2 transition ${
//                   idx === currentIndex
//                     ? 'bg-[#0091A7] border-[#0091A7]'
//                     : 'bg-transparent border-gray-400'
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Card Container */}
//           <div
//             className="w-full md:w-[calc(100%-4rem)] flex items-center justify-center h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${ShadowPattern})` }}
//           >
//             <AnimatePresence mode="wait" initial={false} custom={direction}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={cardVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.6, ease: 'easeInOut' }}
//                 className="bg-opacity-80 backdrop-blur-md p-4 md:p-10 rounded-lg w-full flex flex-col md:flex-row items-center md:items-start justify-between shadow-lg"
//               >
//                 <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
//                   <h3 className="text-xl md:text-3xl text-[#0091A7] font-bold mb-4 text-center md:text-left">
//                     {steps[currentIndex].title}
//                   </h3>
//                   <p className="text-gray-300 text-sm md:text-lg text-center md:text-left">
//                     {steps[currentIndex].description}
//                   </p>
//                 </div>
//                 <div className="w-full md:w-1/2 flex justify-center">
//                   <img
//                     src={steps[currentIndex].image}
//                     alt="Visual"
//                     className="w-60 md:w-80 h-60 md:h-80 object-contain"
//                   />
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Dots (Bottom for Mobile) */}
//           <div className="flex md:hidden flex-row items-center justify-center gap-3 mt-6">
//             {steps.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleNavigation(idx)}
//                 className={`w-4 h-4 rounded-full border-2 transition ${
//                   idx === currentIndex
//                     ? 'bg-[#0091A7] border-[#0091A7]'
//                     : 'bg-transparent border-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* CTA Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-2 px-16 md:px-20 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-base md:text-lg font-semibold z-10"
//         >
//           Let's Thrive
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default HowThriveWorks;



import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CardImg1 from '../../assets/images/card1.svg';
import CardImg2 from '../../assets/images/card2.svg';
import CardImg3 from '../../assets/images/card3.svg';
import CardImg4 from '../../assets/images/card4.svg';
import ShadowPattern from '../../assets/images/shadowbg.svg';

const steps = [
  {
    title: 'Adoption',
    description:
      "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
    image: CardImg1,
  },
  {
    title: 'Expansion',
    description:
      "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
    image: CardImg2,
  },
  {
    title: 'Transformation',
    description:
      "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
    image: CardImg3,
  },
  {
    title: 'Scaling',
    description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It’s growth, on autopilot.",
    image: CardImg4,
  },
];

const HowThriveWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isAnimating = useRef(false);
  const sectionRef = useRef(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleNavigation = (newIndex) => {
    if (isAnimating.current || newIndex === currentIndex) return;
    isAnimating.current = true;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    setTimeout(() => (isAnimating.current = false), 600);
  };

  const handleWheel = (e) => {
    if (!sectionRef.current || isMobile) return;
    const { top, bottom } = sectionRef.current.getBoundingClientRect();
    const isFullyInView = top >= 0 && bottom <= window.innerHeight + 50;
    if (!isFullyInView) return;
    if (isAnimating.current) {
      e.preventDefault();
      return;
    }
    if (e.deltaY > 0 && currentIndex < steps.length - 1) {
      e.preventDefault();
      handleNavigation(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      e.preventDefault();
      handleNavigation(currentIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  const cardVariants = {
    enter: (direction) => ({
      x: isMobile ? (direction > 0 ? 300 : -300) : 0,
      y: isMobile ? 0 : direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, y: 0, opacity: 1 },
    exit: (direction) => ({
      x: isMobile ? (direction > 0 ? -300 : 300) : 0,
      y: isMobile ? 0 : direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex justify-center">
      <section
        ref={sectionRef}
        className="min-h-screen w-full flex flex-col items-center justify-start text-white font-roboto relative overflow-hidden bg-black px-4 pt-6 md:pt-12 pb-8"
      >
        {/* Title with more space below */}
        <h2 className="text-2xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-4 md:px-6 py-2 md:py-3 mb-10 md:mb-4 text-center z-20">
          HOW THRIVE Ai STUDIO & TECH LAB WORKS?
        </h2>

        {/* Cards with Dots Layout - Added more vertical space */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center h-[50vh] md:h-[60vh] z-10 relative mb-8">
          {/* Dots (Left for Desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center gap-4 pr-8">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(idx)}
                className={`w-4 h-4 rounded-full border-2 transition ${
                  idx === currentIndex
                    ? 'bg-[#0091A7] border-[#0091A7]'
                    : 'bg-transparent border-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Card Container - Reduced height on mobile */}
          <div
            className="w-full md:w-[calc(100%-4rem)] flex items-center justify-center h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${ShadowPattern})` }}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="bg-opacity-80 backdrop-blur-md p-4 md:p-10 rounded-lg w-full flex flex-col md:flex-row items-center md:items-start justify-between shadow-lg"
              >
                <div className="w-full md:w-1/2 md:pr-6 mb-4 md:mb-0">
                  <h3 className="text-xl md:text-3xl text-[#0091A7] font-bold mb-2 md:mb-4 text-center md:text-left">
                    {steps[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-lg text-center md:text-left">
                    {steps[currentIndex].description}
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
                  <img
                    src={steps[currentIndex].image}
                    alt="Visual"
                    className="w-40 md:w-80 h-40 md:h-80 object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots (Bottom for Mobile) - Moved outside card container */}
        <div className="flex md:hidden flex-row items-center justify-center gap-3 mt-4 mb-6">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(idx)}
              className={`w-4 h-4 rounded-full border-2 transition ${
                idx === currentIndex
                  ? 'bg-[#0091A7] border-[#0091A7]'
                  : 'bg-transparent border-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Button - Added more space above */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 px-16 md:px-20 py-3 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] rounded-full text-white text-base md:text-lg font-semibold z-10"
        >
          Let's Thrive
        </motion.button>
      </section>
    </div>
  );
};

export default HowThriveWorks;


// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import CardImg1 from '../assets/images/card1.svg';
// import CardImg2 from '../assets/images/card2.svg';
// import CardImg3 from '../assets/images/card3.svg';
// import CardImg4 from '../assets/images/card4.svg';
// import ShadowPattern from '../assets/images/shadowbg.svg';

// const steps = [
//   {
//     title: 'Adoption',
//     description: 'From connecting and integrating ecommerce platforms to launching the Thrive App infrastructure and enabling PPC and ad automation, Adoption is where we integrate ourselves into your business. With a dedicated admin portal, you gain real-time visibility and control, setting the stage for intelligent, scalable growth.',
//     image: CardImg1,
//   },
//   {
//     title: 'Expansion',
//     description: "This is where we scale Thrive's capabilities across your brand ecosystem. We onboard multiple ecommerce and offline businesses, automate front-end and back-end systems for each, and activate AI co-pilots to streamline PPC and operational workflows. The admin portal evolves to support multiple domains, advanced analytics, and AI-powered growth recommendations—unlocking unified control and accelerated impact at scale.",
//     image: CardImg2,
//   },
//   {
//     title: 'Transformation',
//     description: "Transformation is the stage where your business evolves into a truly AI-native operation—both online and offline. We enhance your front-end and back-end systems with advanced AI capabilities, implement agentic workflows that autonomously execute across functions, and ensure continuous performance through intelligent monitoring with manual override controls. This is where intelligence, efficiency, and agility converge.",
//     image: CardImg3,
//   },
//   {
//     title: 'Scaling',
//     description: "Scaling is where momentum turns into exponential growth. With AI systems fully embedded, we amplify performance across brands, channels, and markets. Predictive analytics, continuous optimization, and automated execution drive sustained results—while our infrastructure supports global expansion without added complexity. It's growth, on autopilot.",
//     image: CardImg4,
//   },
// ];

// const HowThriveWorks = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const sectionRef = useRef(null);

//   const navigateStep = (index) => {
//     if (index < 0 || index >= steps.length || isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex(index);
//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   const handleWheel = (e) => {
//     if (!sectionRef.current) return;

//     const { top, bottom } = sectionRef.current.getBoundingClientRect();
//     const isInView = top < window.innerHeight && bottom > 0;
//     if (!isInView) return;

//     if (isAnimating) return;

//     if (e.deltaY > 0) {
//       // Scroll down
//       if (currentIndex < steps.length - 1) {
//         e.preventDefault();
//         navigateStep(currentIndex + 1);
//       }
//       // Else allow scroll to next section
//     } else if (e.deltaY < 0) {
//       // Scroll up
//       if (currentIndex > 0) {
//         e.preventDefault();
//         navigateStep(currentIndex - 1);
//       }
//       // Else allow scroll to previous section
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [currentIndex, isAnimating]);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen w-full text-white font-roboto overflow-hidden relative flex flex-col justify-center items-center"
//       style={{ backgroundImage: `url(${ShadowPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <h2 className="text-3xl md:text-4xl text-[#0091A7] border border-[#0091A7] rounded-md px-6 py-3 mb-6 text-center z-10">
//         HOW THRIVE Ai STUDIO & TECH LAB WORKS?
//       </h2>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ y: 300, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -300, opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-opacity-80 backdrop-blur-sm max-w-5xl w-full flex items-center justify-between p-8 rounded-lg relative"
//         >
//           <div className="w-1/2">
//             <h3 className="text-[#0091A7] text-2xl md:text-3xl font-bold mb-4">{steps[currentIndex].title}</h3>
//             <p className="text-gray-300">{steps[currentIndex].description}</p>
//           </div>
//           <div className="w-1/2 flex justify-center">
//             <img src={steps[currentIndex].image} alt={steps[currentIndex].title} className="w-72 h-72 object-contain" />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dots */}
//       <div className="flex flex-col space-y-2 absolute left-8 top-1/2 transform -translate-y-1/2">
//         {steps.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => navigateStep(index)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
//           />
//         ))}
//       </div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] rounded-full text-lg z-10"
//       >
//         Let's Thrive
//       </motion.button>
//     </section>
//   );
// };

// export default HowThriveWorks;

