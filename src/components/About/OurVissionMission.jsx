// import React from 'react';
// import OurVisionImg from '../../assets/images/OurVision.svg';  // Update path as per your project
// import OurMissionImg from '../../assets/images/OurMission.svg';  // Update path as per your project

// const OurVisionMission = () => {
//   return (
//     <section className="w-full bg-black text-white py-12 px-4 flex flex-col items-center space-y-10">
//       {/* Vision and Mission Images */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8">
//         <img
//           src={OurVisionImg}
//           alt="Our Vision"
//           className="w-[500px] md:w-[600px] h-auto"
//         />
//         <img
//           src={OurMissionImg}
//           alt="Our Mission"
//           className="w-[500px] md:w-[600px] h-auto"
//         />
//       </div>

//       {/* Connect Now Button */}
//       <button
//         className="mt-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white text-lg font-medium px-16 py-3 rounded-full hover:scale-105 transition"
//       >
//         Connect Now
//       </button>
//     </section>
//   );
// };

// export default OurVisionMission;




// import React from 'react';
// import { motion } from 'framer-motion';
// import OurVisionImg from '../../assets/images/OurVision.svg'; // Adjust the path if needed
// import OurMissionImg from '../../assets/images/OurMission.svg'; // Adjust the path if needed

// const imageVariant = {
//   hidden: { opacity: 0, x: -50 },
//   visible: (i) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: i * 0.6,
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   }),
// };

// const buttonVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 1.4,
//       duration: 0.7,
//     },
//   },
// };

// const OurVisionMission = () => {
//   return (
//     <section className="w-full bg-black text-white py-12 px-4 flex flex-col items-center space-y-10">
//       {/* Vision and Mission Images */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8">
//         <motion.img
//           src={OurVisionImg}
//           alt="Our Vision"
//           className="w-[500px] md:w-[600px] h-auto"
//           custom={0}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={imageVariant}
//         />
//         <motion.img
//           src={OurMissionImg}
//           alt="Our Mission"
//           className="w-[500px] md:w-[600px] h-auto"
//           custom={1}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={imageVariant}
//         />
//       </div>

//       {/* Connect Now Button */}
//       <motion.button
//         className="mt-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white text-lg font-medium px-16 py-3 rounded-full hover:scale-105 transition"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         variants={buttonVariant}
//       >
//         Connect Now
//       </motion.button>
//     </section>
//   );
// };

// export default OurVisionMission;





// import React from 'react';
// import { motion } from 'framer-motion';
// import OurVisionImg from '../../assets/images/OurVision.svg';
// import OurMissionImg from '../../assets/images/OurMission.svg';
// import AboutGridShadowBg from '../../assets/images/AboutGridShadowBg.png'; 
// const imageVariant = {
//   hidden: { opacity: 0, x: -50 },
//   visible: (i) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: i * 0.4,
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   }),
// };

// const buttonVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.7,
//       duration: 0.4,
//     },
//   },
// };

// const OurVisionMission = () => {
//   return (
//     <section className="w-full bg-black text-white py-12 px-4 flex flex-col items-center space-y-10">
//       {/* Vision and Mission Images */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8">
//         <motion.img
//           src={OurVisionImg}
//           alt="Our Vision"
//           className="w-[500px] md:w-[600px] h-auto"
//           custom={0}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.5 }} // 👈 trigger on every scroll into view
//           variants={imageVariant}
//         />
//         <motion.img
//           src={OurMissionImg}
//           alt="Our Mission"
//           className="w-[500px] md:w-[600px] h-auto"
//           custom={1}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.5 }} // 👈 again, not once
//           variants={imageVariant}
//         />
//       </div>

//       {/* Connect Now Button */}
//       <motion.button
//         className="mt-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white text-lg font-medium px-16 py-3 rounded-full hover:scale-105 transition"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.5 }} // 👈 re-animate when re-entering view
//         variants={buttonVariant}
//       >
//         Connect Now
//       </motion.button>
//     </section>
//   );
// };

// export default OurVisionMission;



import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import OurVisionImg from '../../assets/images/OurVision.svg';
import OurMissionImg from '../../assets/images/OurMission.svg';
import AboutGridShadowBg from '../../assets/images/AboutGridShadowBg.png';

const imageVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.4,
    },
  },
};

const OurVisionMission = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-black text-white py-12 px-4 flex flex-col items-center space-y-10 overflow-hidden">
      
      {/* Grid Shadow Background Image */}
      <img
        src={AboutGridShadowBg}
        alt="Grid Shadow Background"
        className="absolute top-[200px] bottom+[30%] left-[15%] w-[70%] h-full object-contain opacity-80 z-0 pointer-events-none"
      />

      {/* Vision and Mission Images */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8">
        <motion.img
          src={OurVisionImg}
          alt="Our Vision"
          className="w-[500px] md:w-[600px] h-auto"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariant}
        />
        <motion.img
          src={OurMissionImg}
          alt="Our Mission"
          className="w-[500px] md:w-[600px] h-auto"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariant}
        />
      </div>

      {/* Connect Now Button */}
      <motion.button
        onClick={() => navigate('/contact')}
        className="relative z-10 mt-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white text-lg font-medium px-16 py-3 rounded-full hover:scale-105 transition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={buttonVariant}
      >
        Connect Now
      </motion.button>
    </section>
  );
};

export default OurVisionMission;
