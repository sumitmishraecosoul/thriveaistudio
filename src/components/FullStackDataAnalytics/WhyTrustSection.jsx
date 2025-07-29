// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import HandShake from '../../assets/images/HandShake.svg'; // Replace with your actual image

// const WhyTrustSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.5 });

//   const items = [
//     {
//       title: 'End-to-End Ownership: From ingestion to insights',
//       position: 'top-[5%] left-[0%] lg:left-[5%]',
//       direction: 'right',
//       delay: 0.2,
//     },
//     {
//       title: 'Platform-Agnostic: Cloud, on-premise, or hybrid',
//       position: 'top-[5%] right-[0%] lg:right-[-5%]',
//       direction: 'left',
//       delay: 0.3,
//     },
//     {
//       title: 'Real-Time Data Handling',
//       position: 'top-[35%] left-[0%] lg:left-[-15%]',
//       direction: 'right',
//       delay: 0.4,
//     },
//     {
//       title: 'Scalable Infrastructure Design',
//       position: 'top-[35%] right-[0%] lg:right-[-15%]',
//       direction: 'left',
//       delay: 0.5,
//     },
//     {
//       title: 'Dedicated Analysts & Engineers',
//       position: 'bottom-[10%] left-[15%]',
//       direction: 'up',
//       delay: 0.6,
//     },
//     {
//       title: 'Outcome-Driven Roadmaps',
//       position: 'bottom-[10%] right-[15%]',
//       direction: 'up',
//       delay: 0.7,
//     },
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
//         delay,
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="bg-black text-white py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
//     >
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-xl md:text-3xl font-bold mb-8 text-center 
//         text-[#EDD5B1]"
//       >
//         Why Leading Brands Trust Our Data Team?
//       </motion.h2>

//       {/* Main content area */}
//       <div className="relative w-full max-w-6xl h-[600px] md:h-[700px] flex justify-center items-center">
//         {/* Center handshake image */}
//         <motion.img
//           src={HandShake}
//           alt="Trust Handshake"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="w-[300px] md:w-[400px] z-10"
//         />

//         {/* Floating cards */}
//         {items.map((item, idx) => (
//           <motion.div
//             key={idx}
//             custom={item.delay}
//             initial={
//               item.direction === 'left'
//                 ? 'hiddenLeft'
//                 : item.direction === 'right'
//                 ? 'hiddenRight'
//                 : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${item.position} w-[240px] md:w-[300px] bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] p-3 md:p-4 text-sm md:text-base text-white rounded-[40px] text-center shadow-md`}
//           >
//             {item.title}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyTrustSection;




// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import HandShake from '../../assets/images/HandShake.svg'; // Replace with your actual image path

// const WhyBrandsTrustSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.4 });

//   const features = [
//     {
//       id: 1,
//       title: 'End-to-End Ownership:From ingestion to insights',
//       description: '  ',
//       position: 'top-[20%] left-[-5%] lg:left-[2%]',
//       direction: 'right',
//       delay: 0.2
//     },
//     {
//       id: 2,
//       title: 'Platform-Agnostic: Cloud, on-premise, or hybrid',
//       description: '  ',
//       position: 'top-[5%] right-[0%] lg:right-[5%]',
//       direction: 'left',
//       delay: 0.3
//     },
//     {
//       id: 3,
//       title: 'Real-Time Data Handling',
//       description: '   ',
//       position: 'top-[35%] left-[0%] lg:left-[-15%]',
//       direction: 'right',
//       delay: 0.4
//     },
//     {
//       id: 4,
//       title: 'Scalable Infrastructure Design',
//       description: '  ',
//       position: 'top-[30%] right-[0%] lg:right-[-15%]',
//       direction: 'left',
//       delay: 0.5
//     },
//     {
//       id: 5,
//       title: 'Dedicated Analysts & Engineers',
//       description: '  ',
//       position: 'bottom-[5%] left-[0%] lg:left-[12%]',
//       direction: 'right',
//       delay: 0.6
//     },
//     {
//       id: 6,
//       title: 'Outcome-Driven Roadmaps',
//       description: '',
//       position: 'bottom-[5%] right-[0%] lg:right-[12%]',
//       direction: 'left',
//       delay: 0.7
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
//         delay,
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     })
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="bg-black text-white font-roboto py-20 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-10 w-full max-w-5xl"
//       >
//         <h2 className="text-xl md:text-3xl font-bold inline-block px-6 py-3 mb-4 rounded-[20px] bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-transparent bg-clip-text border border-[#1A5069]">
//           WHY LEADING BRANDS TRUST OUR DATA TEAM?
//         </h2>
//       </motion.div>

//       <div className="relative w-full max-w-6xl h-[600px] md:h-[700px] flex justify-center items-center">
//         <motion.img
//           src={HandShake}
//           alt="Handshake"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="w-[1000px] md:w-[1200px] h-auto z-10"
//         />

//         {features.map((feature) => (
//           <motion.div
//             key={feature.id}
//             custom={feature.delay}
//             initial={
//               feature.direction === 'left'
//                 ? 'hiddenLeft'
//                 : feature.direction === 'right'
//                 ? 'hiddenRight'
//                 : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${feature.position} w-[220px] md:w-[280px] z-20`}
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white p-3 md:p-4 rounded-[50px] shadow-xl flex flex-col justify-center overflow-hidden min-h-0">
//               <h4 className="text-sm md:text-base font-semibold mb-1 text-center line-clamp-2">
//                 {feature.title}
//               </h4>
//               {feature.description && (
//                 <p className="text-xs md:text-sm text-gray-200 text-center line-clamp-3">
//                   {feature.description}
//                 </p>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyBrandsTrustSection;



// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import HandShake from '../../assets/images/HandShake.svg';

// const WhyBrandsTrustSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.4 });

//   const features = [
//     {
//       id: 1,
//       title: 'End-to-End Ownership: From ingestion to insights',
//       position: 'top-[25%] left-[-5%] lg:left-[2%]',
//       direction: 'right',
//       delay: 0.2,
//     },
//     {
//       id: 2,
//       title: 'Platform-Agnostic: Cloud, on-premise, or hybrid',
//       position: 'top-[25%] right-[10%] lg:right-[20%]',
//       direction: 'left',
//       delay: 0.3,
//     },
//     {
//       id: 3,
//       title: 'Real-Time Data Handling',
//       position: 'top-[50%] left-[0%] lg:left-[2%]',
//       direction: 'right',
//       delay: 0.4,
//     },
//     {
//       id: 4,
//       title: 'Scalable Infrastructure Design',
//       position: 'top-[50%] right-[0%] lg:right-[15%]',
//       direction: 'left',
//       delay: 0.5,
//     },
//     {
//       id: 5,
//       title: 'Dedicated Analysts & Engineers',
//       position: 'bottom-[15%] left-[4%] lg:left-[20%]',
//       direction: 'right',
//       delay: 0.6,
//     },
//     {
//       id: 6,
//       title: 'Outcome-Driven Roadmaps',
//       position: 'bottom-[15%] right-[8%] lg:right-[20%]',
//       direction: 'left',
//       delay: 0.7,
//     },
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
//         delay,
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="bg-black text-white font-roboto pt-20 px-4 md:px-20 relative overflow-hidden  flex flex-col items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center  w-full max-w-5xl"
//       >
//         <h2 className="text-xl md:text-3xl lg:text-4xl text-[#EED4AD] font-bold inline-block px-6 pt-3 mb-4 rounded-[20px] bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-transparent bg-clip-text ">
//           WHY LEADING BRANDS TRUST OUR DATA TEAM?
//         </h2>
//       </motion.div>

//       <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] lg:h-[600px]  lg:ml-54  flex justify-center items-center">
//         <motion.img
//           src={HandShake}
//           alt="Handshake"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="w-[90%] md:w-[95%] lg:w-[100%] h-auto z-10"
//         />

//         {features.map((feature) => (
//           <motion.div
//             key={feature.id}
//             custom={feature.delay}
//             initial={
//               feature.direction === 'left'
//                 ? 'hiddenLeft'
//                 : feature.direction === 'right'
//                 ? 'hiddenRight'
//                 : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${feature.position} w-[220px] md:w-[270px] xl:w-[300px] z-20`}
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white p-3 md:p-4 rounded-[50px] shadow-xl flex flex-col justify-center items-center text-center min-w-[200px] min-h-[80px] md:min-h-[90px]">
//               <h4 className="text-sm md:text-lg lg:text-lg font-semibold line-clamp-3 text-[#EED4AD]">
//                 {feature.title}
//               </h4>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyBrandsTrustSection;


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HandShake from '../../assets/images/HandShake.svg';

const WhyBrandsTrustSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });

  const features = [
    {
      id: 1,
      title: 'End-to-End Ownership: From ingestion to insights',
      position: 'top-[25%] left-[-5%] lg:left-[2%]',
      direction: 'right',
      delay: 0.2,
    },
    {
      id: 2,
      title: 'Platform-Agnostic: Cloud, on-premise, or hybrid',
      position: 'top-[25%] right-[10%] lg:right-[20%]',
      direction: 'left',
      delay: 0.3,
    },
    {
      id: 3,
      title: 'Real-Time Data Handling',
      position: 'top-[50%] left-[0%] lg:left-[2%]',
      direction: 'right',
      delay: 0.4,
    },
    {
      id: 4,
      title: 'Scalable Infrastructure Design',
      position: 'top-[50%] right-[0%] lg:right-[15%]',
      direction: 'left',
      delay: 0.5,
    },
    {
      id: 5,
      title: 'Dedicated Analysts & Engineers',
      position: 'bottom-[15%] left-[4%] lg:left-[20%]',
      direction: 'right',
      delay: 0.6,
    },
    {
      id: 6,
      title: 'Outcome-Driven Roadmaps',
      position: 'bottom-[15%] right-[8%] lg:right-[20%]',
      direction: 'left',
      delay: 0.7,
    },
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
        delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className="bg-black text-white font-roboto pt-20 px-4 md:px-20 relative overflow-hidden flex flex-col items-center"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center w-full max-w-5xl"
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl text-[#EED4AD] font-bold inline-block px-6 pt-3 mb-8 rounded-[20px] bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-transparent bg-clip-text">
          WHY LEADING BRANDS TRUST OUR DATA TEAM?
        </h2>
      </motion.div>

      {/* Mobile & Tablet: stacked layout */}
      <div className="block lg:hidden w-full max-w-xl mb-4 space-y-6 z-20">
        <motion.img
          src={HandShake}
          alt="Handshake"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="w-[80%] mx-auto mb-8"
        />

        {features.map((feature) => (
          <motion.div
            key={feature.id}
            custom={feature.delay}
            initial={
              feature.direction === 'left'
                ? 'hiddenLeft'
                : feature.direction === 'right'
                ? 'hiddenRight'
                : 'hiddenUp'
            }
            animate={isInView ? 'visible' : ''}
            variants={variants}
            className="w-full px-2"
          >
            <div className="bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white p-4 rounded-[40px] shadow-xl flex flex-col justify-center items-center text-center min-h-[90px]">
              <h4 className="text-sm sm:text-base font-semibold text-[#EED4AD] leading-snug">
                {feature.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: image with absolutely positioned boxes */}
      <div className="hidden lg:flex relative w-full max-w-6xl h-[600px] justify-center items-center">
        <motion.img
          src={HandShake}
          alt="Handshake"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="w-[100%] h-auto z-10"
        />

        {features.map((feature) => (
          <motion.div
            key={feature.id}
            custom={feature.delay}
            initial={
              feature.direction === 'left'
                ? 'hiddenLeft'
                : feature.direction === 'right'
                ? 'hiddenRight'
                : 'hiddenUp'
            }
            animate={isInView ? 'visible' : ''}
            variants={variants}
            className={`absolute ${feature.position} w-[220px] md:w-[270px] xl:w-[300px] z-20`}
          >
            <div className="bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white p-3 md:p-4 rounded-[50px] shadow-xl flex flex-col justify-center items-center text-center min-w-[200px] min-h-[80px] md:min-h-[90px]">
              <h4 className="text-sm md:text-lg lg:text-lg font-semibold line-clamp-3 text-[#EED4AD]">
                {feature.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyBrandsTrustSection;





// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import HandShake from '../../assets/images/HandShake.svg';

// const WhyBrandsTrustSection = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.3 });

//   const features = [
//     {
//       id: 1,
//       title: 'End-to-End Ownership: From ingestion to insights',
//       position: 'top-[10%] left-4 lg:left-[2%]',
//       direction: 'right',
//       delay: 0.2,
//     },
//     {
//       id: 2,
//       title: 'Platform-Agnostic: Cloud, on-premise, or hybrid',
//       position: 'top-[10%] right-4 lg:right-[20%]',
//       direction: 'left',
//       delay: 0.3,
//     },
//     {
//       id: 3,
//       title: 'Real-Time Data Handling',
//       position: 'top-[40%] left-6 lg:left-[2%]',
//       direction: 'right',
//       delay: 0.4,
//     },
//     {
//       id: 4,
//       title: 'Scalable Infrastructure Design',
//       position: 'top-[40%] right-6 lg:right-[15%]',
//       direction: 'left',
//       delay: 0.5,
//     },
//     {
//       id: 5,
//       title: 'Dedicated Analysts & Engineers',
//       position: 'bottom-[10%] left-10 lg:left-[20%]',
//       direction: 'right',
//       delay: 0.6,
//     },
//     {
//       id: 6,
//       title: 'Outcome-Driven Roadmaps',
//       position: 'bottom-[10%] right-10 lg:right-[20%]',
//       direction: 'left',
//       delay: 0.7,
//     },
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
//         delay,
//         duration: 0.7,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="bg-black text-white font-roboto pt-16 px-4 md:px-10 lg:px-20 relative overflow-hidden flex flex-col items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center w-full max-w-5xl"
//       >
//         <h2 className="text-xl md:text-3xl lg:text-4xl text-[#EED4AD] font-bold inline-block px-6 pt-3 mb-8 rounded-[20px] bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-transparent bg-clip-text">
//           WHY LEADING BRANDS TRUST OUR DATA TEAM?
//         </h2>
//       </motion.div>

//       {/* Mobile stacked layout */}
//       <div className="block lg:hidden w-full max-w-xl space-y-6 z-20">
//         {features.map((feature) => (
//           <motion.div
//             key={feature.id}
//             custom={feature.delay}
//             initial={
//               feature.direction === 'left'
//                 ? 'hiddenLeft'
//                 : feature.direction === 'right'
//                 ? 'hiddenRight'
//                 : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className="w-full px-4"
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white p-4 rounded-[40px] shadow-lg text-center min-h-[90px] flex justify-center items-center">
//               <h4 className="text-sm sm:text-base font-semibold text-[#EED4AD] leading-snug">
//                 {feature.title}
//               </h4>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Desktop layout with positioned cards */}
//       <div className="relative hidden lg:flex w-full max-w-6xl h-[600px] justify-center items-center">
//         <motion.img
//           src={HandShake}
//           alt="Handshake"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="w-[65%] h-auto z-10"
//         />

//         {features.map((feature) => (
//           <motion.div
//             key={feature.id}
//             custom={feature.delay}
//             initial={
//               feature.direction === 'left'
//                 ? 'hiddenLeft'
//                 : feature.direction === 'right'
//                 ? 'hiddenRight'
//                 : 'hiddenUp'
//             }
//             animate={isInView ? 'visible' : ''}
//             variants={variants}
//             className={`absolute ${feature.position} w-[240px] xl:w-[280px] z-20`}
//           >
//             <div className="bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white p-4 rounded-[50px] shadow-xl flex flex-col justify-center items-center text-center min-h-[90px]">
//               <h4 className="text-sm lg:text-base xl:text-lg font-semibold text-[#EED4AD] leading-snug">
//                 {feature.title}
//               </h4>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyBrandsTrustSection;
