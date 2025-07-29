// import React from 'react';
// import { motion } from 'framer-motion';
// import WhyThriveImage from '../assets/images/whythrive.svg'; // Replace with your image path

// const cardStyles = "bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-4 w-80 md:w-[350px] text-sm shadow-lg rounded-xl relative";

// const cards = [
//   {
//     text: 'Make Data your Unfair Advantage.',
//     description: 'We clean, analyze and unify data across platforms– unlocking actionable insights that fuel smarter, stronger decisions.',
//     style: 'top-[5%] left-[5%]',
//     arrow: 'left'
//   },
//   {
//     text: 'Custom Tech. Built to Scale.',
//     description: 'Whether it’s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
//     style: 'top-[5%] right-[5%]',
//     arrow: 'right'
//   },
//   {
//     text: 'Smarter AI with Real Results.',
//     description: 'We don’t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
//     style: 'top-[40%] left-[5%]',
//     arrow: 'left'
//   },
//   {
//     text: 'Creative that Converts.',
//     description: 'We fuse design thinking with performance data to craft visuals that do more than look good—they drive clicks, conversions, and brand love.',
//     style: 'top-[40%] right-[5%]',
//     arrow: 'right'
//   },
//   {
//     text: 'Scale with Strategy, Not Guesswork.',
//     description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
//     style: 'bottom-[5%] left-1/2 -translate-x-1/2',
//     arrow: 'center'
//   }
// ];

// const WhyThriveSection = () => {
//   return (
//     <div className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden">
//       <h2 className="text-center text-xl md:text-3xl font-bold text-[#0091A7] border border-[#0091A7] rounded-md inline-block px-4 py-2 mb-4">
//         WHY THRIVE Ai STUDIO AND TECH LAB?
//       </h2>

//       <h3 className="text-center text-2xl md:text-4xl font-semibold mb-4">
//         <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation, <br /> Big-Text Experience & Start-Up Agility
//       </h3>

//       <p className="text-center text-gray-300 mb-12 text-lg max-w-4xl mx-auto">
//         Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
//       </p>

//       <div className="relative flex justify-center items-center mt-12">
//         <img src={WhyThriveImage} alt="Why Thrive" className="max-w-md md:max-w-lg z-10 relative" />

//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.3, duration: 0.6 }}
//             className={`absolute ${card.style}`}
//           >
//             <div className={`${cardStyles}`}>
//               <h4 className="text-base md:text-lg font-semibold mb-1">{card.text}</h4>
//               <p className="text-xs md:text-sm text-gray-200">{card.description}</p>

//               {/* Arrow */}
//               {card.arrow !== 'center' && (
//                 <div className={`absolute top-1/2 -translate-y-1/2 ${card.arrow === 'left' ? '-left-3' : '-right-3'}`}>
//                   <div
//                     className={`w-0 h-0 
//                     border-y-8 border-y-transparent 
//                     ${card.arrow === 'left' ? 'border-r-8 border-r-[#1A5069]' : 'border-l-8 border-l-[#0F7BAE]'}
//                     `}
//                   />
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyThriveSection;








// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// const WhyThriveSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.5 });

//   const cards = [
//     {
//       id: 1,
//       title: 'Make Data your Unfair Advantage.',
//       description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
//       position: 'top-[10%] left-[5%] md:left-[10%]',
//       direction: 'left',
//       delay: 0.2
//     },
//     {
//       id: 2,
//       title: 'Smarter AI with Real Results.',
//       description: 'We don\'t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
//       position: 'top-[40%] left-[5%] md:left-[10%]',
//       direction: 'left',
//       delay: 0.4
//     },
//     {
//       id: 3,
//       title: 'Custom Tech. Built to Scale.',
//       description: 'Whether it\'s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
//       position: 'top-[10%] right-[5%] md:right-[10%]',
//       direction: 'right',
//       delay: 0.3
//     },
//     {
//       id: 4,
//       title: 'Creative that Converts.',
//       description: 'We fuse design thinking with performance data to craft visuals that do more than look good - they drive clicks, conversions, and brand love.',
//       position: 'top-[40%] right-[5%] md:right-[10%]',
//       direction: 'right',
//       delay: 0.5
//     },
//     {
//       id: 5,
//       title: 'Scale with Strategy, Not Guesswork.',
//       description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
//       position: 'bottom-[5%] left-1/2 -translate-x-1/2',
//       direction: 'center',
//       delay: 0.6
//     }
//   ];

//   const variants = {
//     hiddenLeft: { opacity: 0, x: -100 },
//     hiddenRight: { opacity: 0, x: 100 },
//     hiddenCenter: { opacity: 0, y: 50 },
//     visible: (delay) => ({
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         delay: delay,
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     })
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-8"
//       >
//         <h2 className="text-xl md:text-3xl font-bold text-[#0091A7] border border-[#0091A7] rounded-md inline-block px-4 py-2 mb-4">
//           WHY THRIVE AI STUDIO AND TECH LAB?
//         </h2>

//         <h3 className="text-2xl md:text-4xl font-semibold mb-4">
//           <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation, <br /> Big-Text Experience & Start-Up Agility
//         </h3>

//         <p className="text-gray-300 mb-12 text-lg max-w-4xl mx-auto">
//           Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
//         </p>
//       </motion.div>

//       <div className="relative w-full max-w-6xl h-[600px] md:h-[800px] flex justify-center items-center">
//         {/* Central image or placeholder */}
//         <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#1A5069] to-[#0F7BAE] opacity-20 absolute z-0"></div>
        
//         {/* Animated cards */}
//         {cards.map((card) => (
//           <motion.div
//             key={card.id}
//             custom={card.delay}
//             initial={
//               card.direction === 'left' ? 'hiddenLeft' : 
//               card.direction === 'right' ? 'hiddenRight' : 'hiddenCenter'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${card.position} w-[280px] md:w-[320px] z-10`}
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-6 rounded-xl shadow-xl">
//               <h4 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h4>
//               <p className="text-sm md:text-base text-gray-200">{card.description}</p>
              
//               {/* Arrow indicator */}
//               {card.direction !== 'center' && (
//                 <div className={`absolute top-1/2 -translate-y-1/2 ${card.direction === 'left' ? '-left-3' : '-right-3'}`}>
//                   <div className={`w-0 h-0 border-y-8 border-y-transparent ${card.direction === 'left' ? 'border-r-8 border-r-[#1A5069]' : 'border-l-8 border-l-[#0F7BAE]'}`} />
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyThriveSection;






// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import WhyThriveImage from '../assets/images/whythrive.svg'; // Replace with your image path

// const WhyThriveSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.5 });

//   const cards = [
//     {
//       id: 1,
//       title: 'Make Data your Unfair Advantage.',
//       description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
//       position: 'top-[5%] left-[0%] lg:left-[5%]',
//       direction: 'right',
//       delay: 0.2,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 2,
//       title: 'Smarter AI with Real Results.',
//       description: 'We don\'t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
//       position: 'top-[35%] left-[0%] lg:left-[5%]',
//       direction: 'right',
//       delay: 0.4,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 3,
//       title: 'Custom Tech. Built to Scale.',
//       description: 'Whether it\'s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
//       position: 'top-[5%] right-[0%] lg:right-[5%]',
//       direction: 'left',
//       delay: 0.3,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 4,
//       title: 'Creative that Converts.',
//       description: 'We fuse design thinking with performance data to craft visuals that do more than look good - they drive clicks, conversions, and brand love.',
//       position: 'top-[35%] right-[0%] lg:right-[5%]',
//       direction: 'left',
//       delay: 0.5,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 5,
//       title: 'Scale with Strategy, Not Guesswork.',
//       description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
//       position: 'bottom-[5%] left-1/2 -translate-x-1/2',
//       direction: 'up',
//       delay: 0.6,
//       width: 'w-[300px] md:w-[400px]'
//     }
//   ];

//   const variants = {
//     hiddenLeft: { opacity: 0, x: -100 },
//     hiddenRight: { opacity: 0, x: 100 },
//     hiddenUp: { opacity: 0, y: 50 },
//     visible: (delay) => ({
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         delay: delay,
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     })
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-8 w-full max-w-5xl"
//       >
//         <h2 className="text-xl md:text-3xl font-bold text-[#0091A7] border border-[#0091A7] rounded-md inline-block px-4 py-2 mb-4">
//           WHY THRIVE AI STUDIO AND TECH LAB?
//         </h2>

//         <h3 className="text-2xl md:text-4xl font-semibold mb-4">
//           <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation, <br /> Big-Text Experience & Start-Up Agility
//         </h3>

//         <p className="text-gray-300 mb-12 text-lg max-w-4xl mx-auto">
//           Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
//         </p>
//       </motion.div>

//       <div className="relative w-full max-w-6xl h-[600px] md:h-[800px] flex justify-center items-center">
//         {/* Central image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="relative z-10"
//         >
//           <img 
//             src={WhyThriveImage} 
//             alt="Why Thrive" 
//             className="w-[280px] md:w-[380px] lg:w-[420px] h-auto" 
//           />
//         </motion.div>
        
//         {/* Animated cards */}
//         {cards.map((card) => (
//           <motion.div
//             key={card.id}
//             custom={card.delay}
//             initial={
//               card.direction === 'left' ? 'hiddenLeft' : 
//               card.direction === 'right' ? 'hiddenRight' : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${card.position} ${card.width} z-20`}
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-5 md:p-6 rounded-xl shadow-xl relative">
//               <h4 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h4>
//               <p className="text-sm md:text-base text-gray-200">{card.description}</p>
              
//               {/* Arrow pointer towards center */}
//               {card.direction !== 'up' && (
//                 <div className={`absolute top-1/2 -translate-y-1/2 ${card.direction === 'left' ? '-left-4' : '-right-4'}`}>
//                   <svg 
//                     width="24" 
//                     height="24" 
//                     viewBox="0 0 24 24" 
//                     fill="none" 
//                     xmlns="http://www.w3.org/2000/svg"
//                     className={card.direction === 'left' ? 'rotate-180' : ''}
//                   >
//                     <path 
//                       d="M9 18L15 12L9 6" 
//                       stroke={card.direction === 'left' ? '#0F7BAE' : '#1A5069'} 
//                       strokeWidth="2" 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               )}
//               {card.direction === 'up' && (
//                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
//                   <svg 
//                     width="24" 
//                     height="24" 
//                     viewBox="0 0 24 24" 
//                     fill="none" 
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="rotate-90"
//                   >
//                     <path 
//                       d="M9 18L15 12L9 6" 
//                       stroke="#1A5069" 
//                       strokeWidth="2" 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyThriveSection;



// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import WhyThriveImage from '../assets/images/whythrive.svg'; // Replace with your image path

// const WhyThriveSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.5 });

//   const cards = [
//     {
//       id: 1,
//       title: 'Make Data your Unfair Advantage.',
//       description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
//       position: 'top-[5%] left-[0%] lg:left-[5%]',
//       direction: 'right',
//       delay: 0.2,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 2,
//       title: 'Smarter AI with Real Results.',
//       description: 'We don\'t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
//       position: 'top-[35%] left-[0%] lg:left-[5%]',
//       direction: 'right',
//       delay: 0.4,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 3,
//       title: 'Custom Tech. Built to Scale.',
//       description: 'Whether it\'s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
//       position: 'top-[5%] right-[0%] lg:right-[5%]',
//       direction: 'left',
//       delay: 0.3,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 4,
//       title: 'Creative that Converts.',
//       description: 'We fuse design thinking with performance data to craft visuals that do more than look good - they drive clicks, conversions, and brand love.',
//       position: 'top-[35%] right-[0%] lg:right-[5%]',
//       direction: 'left',
//       delay: 0.5,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 5,
//       title: 'Scale with Strategy, Not Guesswork.',
//       description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
//       position: 'bottom-[5%] left-1/2 -translate-x-1/2',
//       direction: 'up',
//       delay: 0.6,
//       width: 'w-[300px] md:w-[400px]'
//     }
//   ];

//   const variants = {
//     hiddenLeft: { opacity: 0, x: -100 },
//     hiddenRight: { opacity: 0, x: 100 },
//     hiddenUp: { opacity: 0, y: 50 },
//     visible: (delay) => ({
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         delay: delay,
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     })
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-8 w-full max-w-5xl"
//       >
//         <h2 className="text-xl md:text-3xl font-bold text-[#0091A7] border border-[#0091A7] rounded-md inline-block px-4 py-2 mb-4">
//           WHY THRIVE AI STUDIO AND TECH LAB?
//         </h2>

//         <h3 className="text-2xl md:text-4xl font-semibold mb-4">
//           <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation, <br /> Big-Text Experience & Start-Up Agility
//         </h3>

//         <p className="text-gray-300 mb-12 text-lg max-w-4xl mx-auto">
//           Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
//         </p>
//       </motion.div>

//       <div className="relative w-full max-w-6xl h-[600px] md:h-[800px] flex justify-center items-center">
//         {/* Central image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="relative z-10"
//         >
//           <img 
//             src={WhyThriveImage} 
//             alt="Why Thrive" 
//             className="w-[280px] md:w-[380px] lg:w-[420px] h-auto" 
//           />
//         </motion.div>
        
//         {/* Animated cards */}
//         {cards.map((card) => (
//           <motion.div
//             key={card.id}
//             custom={card.delay}
//             initial={
//               card.direction === 'left' ? 'hiddenLeft' : 
//               card.direction === 'right' ? 'hiddenRight' : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${card.position} ${card.width} z-20`}
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-5 md:p-6 rounded-xl shadow-xl relative">
//               <h4 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h4>
//               <p className="text-sm md:text-base text-gray-200">{card.description}</p>
              
//               {/* Arrow pointer towards center */}
//               {card.direction !== 'up' && (
//                 <div className={`absolute top-1/2 -translate-y-1/2 ${card.direction === 'left' ? '-left-4' : '-right-4'}`}>
//                   <svg 
//                     width="24" 
//                     height="24" 
//                     viewBox="0 0 24 24" 
//                     fill="none" 
//                     xmlns="http://www.w3.org/2000/svg"
//                     className={card.direction === 'left' ? 'rotate-180' : ''}
//                   >
//                     <path 
//                       d="M9 18L15 12L9 6" 
//                       stroke={card.direction === 'left' ? '#0F7BAE' : '#1A5069'} 
//                       strokeWidth="2" 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               )}
//               {card.direction === 'up' && (
//                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
//                   <svg 
//                     width="24" 
//                     height="24" 
//                     viewBox="0 0 24 24" 
//                     fill="none" 
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="rotate-90"
//                   >
//                     <path 
//                       d="M9 18L15 12L9 6" 
//                       stroke="#1A5069" 
//                       strokeWidth="2" 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyThriveSection;





// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import WhyThriveImage from '../assets/images/whythrive.svg'; // Replace with your image path

// const WhyThriveSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.5 });

//   const cards = [
//     {
//       id: 1,
//       title: 'Make Data your Unfair Advantage.',
//       description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
//       position: 'top-[5%] left-[0%] lg:left-[5%]',
//       direction: 'right',
//       arrowPosition: 'bottom-right',
//       delay: 0.2,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 2,
//       title: 'Custom Tech. Built to Scale.',
//       description: 'Whether it\'s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
//       position: 'top-[5%] right-[0%] lg:right-[5%]',
//       direction: 'left',
//       arrowPosition: 'bottom-left',
//       delay: 0.3,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 3,
//       title: 'Smarter AI with Real Results.',
//       description: 'We don\'t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
//       position: 'top-[35%] left-[0%] lg:left-[5%]',
//       direction: 'right',
//       arrowPosition: 'top-right',
//       delay: 0.4,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 4,
//       title: 'Creative that Converts.',
//       description: 'We fuse design thinking with performance data to craft visuals that do more than look good - they drive clicks, conversions, and brand love.',
//       position: 'top-[35%] right-[0%] lg:right-[5%]',
//       direction: 'left',
//       arrowPosition: 'top-left',
//       delay: 0.5,
//       width: 'w-[300px] md:w-[380px]'
//     },
//     {
//       id: 5,
//       title: 'Scale with Strategy, Not Guesswork.',
//       description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
//       position: 'bottom-[5%] left-1/2 -translate-x-1/2',
//       direction: 'up',
//       arrowPosition: 'top-center',
//       delay: 0.6,
//       width: 'w-[300px] md:w-[400px]'
//     }
//   ];

//   const variants = {
//     hiddenLeft: { opacity: 0, x: -100 },
//     hiddenRight: { opacity: 0, x: 100 },
//     hiddenUp: { opacity: 0, y: 50 },
//     visible: (delay) => ({
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         delay: delay,
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     })
//   };

//   const getArrowPosition = (position) => {
//     switch(position) {
//       case 'bottom-right':
//         return 'bottom-3 right-3';
//       case 'bottom-left':
//         return 'bottom-3 left-3';
//       case 'top-right':
//         return 'top-3 right-3';
//       case 'top-left':
//         return 'top-3 left-3';
//       case 'top-center':
//         return 'top-3 left-1/2 -translate-x-1/2';
//       default:
//         return 'bottom-3 right-3';
//     }
//   };

//   const getArrowRotation = (position) => {
//     switch(position) {
//       case 'bottom-right':
//         return 'rotate-45';
//       case 'bottom-left':
//         return '-rotate-45';
//       case 'top-right':
//         return '-rotate-135';
//       case 'top-left':
//         return 'rotate-135';
//       case 'top-center':
//         return 'rotate-90';
//       default:
//         return 'rotate-45';
//     }
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-8 w-full max-w-5xl"
//       >
//         <h2 className="text-xl md:text-3xl font-bold text-[#0091A7] border border-[#0091A7] rounded-md inline-block px-4 py-2 mb-4">
//           WHY THRIVE AI STUDIO AND TECH LAB?
//         </h2>

//         <h3 className="text-2xl md:text-4xl font-semibold mb-4">
//           <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation, <br /> Big-Text Experience & Start-Up Agility
//         </h3>

//         <p className="text-gray-300 mb-12 text-lg max-w-4xl mx-auto">
//           Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
//         </p>
//       </motion.div>

//       <div className="relative w-full max-w-6xl h-[600px] md:h-[800px] flex justify-center items-center">
//         {/* Central image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="relative z-10"
//         >
//           <img 
//             src={WhyThriveImage} 
//             alt="Why Thrive" 
//             className="w-[280px] md:w-[380px] lg:w-[420px] h-auto" 
//           />
//         </motion.div>
        
//         {/* Animated cards */}
//         {cards.map((card) => (
//           <motion.div
//             key={card.id}
//             custom={card.delay}
//             initial={
//               card.direction === 'left' ? 'hiddenLeft' : 
//               card.direction === 'right' ? 'hiddenRight' : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${card.position} ${card.width} z-20`}
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-5 md:p-6 rounded-xl shadow-xl relative overflow-hidden">
//               <h4 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h4>
//               <p className="text-sm md:text-base text-gray-200">{card.description}</p>
              
//               {/* Arrow pointer towards center */}
//               {/* <div className={`absolute ${getArrowPosition(card.arrowPosition)} w-6 h-6`}>
//                 <div className={`w-full h-full bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] ${getArrowRotation(card.arrowPosition)} transform origin-center`}>
//                   <div className="absolute w-3 h-3 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//                 </div>
//               </div> */}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyThriveSection;





import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import WhyThriveImage from '../assets/images/whythrive.svg'; // Replace with your image path
import WhyThriveImage from '../../assets/images/WhyThriveImage.svg'; // Replace with your image path
import WhyThriveShadow from "../../assets/images/whythriveshadow.svg"; // Replace with your shadow image path

const WhyThriveSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  const cards = [
    // {
    //   id: 1,
    //   title: 'Make Data your Unfair Advantage.',
    //   description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
    //   position: 'top-[5%] left-[0%] lg:left-[5%]',
    //   direction: 'right',
    //   delay: 0.2,
    //   width: 'w-[450px] md:w-[520px]',
    //   height: 'h-[10px] md:h-[30px]'
    // },

    {
  id: 1,
  title: 'Make Data your Unfair Advantage.',
  description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
  position: 'top-[5%] left-[0%] lg:left-[5%]',
  direction: 'right',
  delay: 0.2,
  width: 'w-[450px] md:w-[520px]',
  height: 'h-[80px] md:h-[100px]' // More reasonable minimum height
},
    {
      id: 2,
      title: 'Custom Tech. Built to Scale.',
      description: 'Whether it\'s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
      position: 'top-[5%] right-[0%] lg:right-[-5%]',
      direction: 'left',
      delay: 0.3,
       width: 'w-[450px] md:w-[520px]',
  height: 'h-[80px] md:h-[100px]' // More reasonable minimum height
    },
    {
      id: 3,
      title: 'Smarter AI with Real Results.',
      description: 'We don\'t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
      position: 'top-[35%] left-[0%] lg:left-[-15%] ',
      direction: 'right',
      delay: 0.4,
      width: 'w-[450px] md:w-[520px]',
  height: 'h-[80px] md:h-[100px]' // More reasonable minimum height
    },
    {
      id: 4,
      title: 'Creative that Converts.',
      description: 'We fuse design thinking with performance data to craft visuals that do more than look good - they drive clicks, conversions, and brand love.',
      position: 'top-[30%] right-[10%] lg:right-[-12%]',
      direction: 'left',
      delay: 0.5,
      width: 'w-[450px] md:w-[520px]',
  height: 'h-[80px] md:h-[100px]' // More reasonable minimum height
    },
    {
      id: 5,
      title: 'Scale with Strategy, Not Guesswork.',
      description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
      position: 'bottom-[10%] left-1/2 -translate-x-1/2',
      direction: 'up',
      delay: 0.6,
        width: 'w-[450px] md:w-[520px]',
  height: 'h-[80px] md:h-[100px]' // More reasonable minimum height
    }
  ];

  const variants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    hiddenUp: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <div 
      ref={containerRef}
      className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 w-full max-w-5xl"
      >
        {/* <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] border border-[#0091A7] rounded-xl inline-block px-4 py-2 mb-4 ">
          WHY THRIVE AI STUDIO AND TECH LAB?
        </h2> */}
        <h2 className="text-xl md:text-3xl font-bold inline-block px-6 py-3 mb-4 rounded-[20px] 
  bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] 
  text-transparent bg-clip-text border border-[#1A5069] border-spacing-5 ">
  WHY THRIVE AI STUDIO AND TECH LAB?
</h2>

        <h3 className="text-2xl md:text-4xl font-semibold mb-4">
          <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation, <br /> Big-Text Experience & Start-Up Agility
        </h3>

        <p className="text-gray-300 mb-12 text-lg max-w-4xl mx-auto">
          Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl h-[600px] md:h-[800px] flex justify-center items-center">
        {/* Central image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative z-10"
        >
          <img 
        //    style={{
        //                 backgroundImage: `url(${WhyThriveShadow})`,
        //                 // backgroundRepeat: 'no-repeat',
        //                 backgroundPosition: 'center',
        //                 backgroundSize: '150%',
        //               }}
            src={WhyThriveImage} 
            alt="Why Thrive" 
            className="w-[980px] md:w-[1080px] lg:w-[1120px] h-auto" 
          />
        </motion.div>
        
        {/* Animated cards */}
        {cards.map((card) => (
          <motion.div
            key={card.id}
            custom={card.delay}
            initial={
              card.direction === 'left' ? 'hiddenLeft' : 
              card.direction === 'right' ? 'hiddenRight' : 'hiddenUp'
            }
            animate={isInView ? 'visible' : ''}
            variants={variants}
            className={`absolute ${card.position} ${card.width} ${card.height} z-20`}
          >
            {/* <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-6 md:p-7 rounded-[50px] shadow-xl flex flex-col justify-center">
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-center">{card.title}</h4>
              <p className="text-sm md:text-base text-gray-200 text-center">{card.description}</p>
            </div> */}
            <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-3 md:p-4 rounded-[50px] shadow-xl flex flex-col justify-center overflow-hidden min-h-0">
  <h4 className="text-sm md:text-base font-semibold mb-1 text-center line-clamp-2">{card.title}</h4>
  <p className="text-xs md:text-sm text-gray-200 text-center line-clamp-3">{card.description}</p>
</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyThriveSection;