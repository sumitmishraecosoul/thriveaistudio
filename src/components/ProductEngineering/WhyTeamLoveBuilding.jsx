
// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import HandShake from '../../assets/images/HandShake.svg';

// const WhyTeamLoveBuilding = () => {
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
//         <h2 className="text-xl md:text-3xl lg:text-4xl text-[#EED4AD] font-bold inline-block px-6 pt-3 mb-4 rounded-[20px] bg-gradient-to-r from-[#1A5069] to-[#0F7BAE]  bg-clip-text ">
//          Why Team Love Building With Us
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

// export default WhyTeamLoveBuilding;


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HandShake from '../../assets/images/HandShake.svg';

const WhyTeamLoveBuilding = () => {
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
          Why Team Love Building With Us
        </h2>
      </motion.div>

      {/* Mobile & Tablet Layout */}
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

      {/* Desktop Layout */}
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

export default WhyTeamLoveBuilding;
