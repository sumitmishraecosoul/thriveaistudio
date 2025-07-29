// import React from 'react';
// import { motion } from 'framer-motion';

// // Import your images
// import AIFirstThinking from '../../assets/images/AIFirstThinking.svg';
// import DataDriven from '../../assets/images/DataDriven.svg';
// import CustomerBuiltSystem from '../../assets/images/CustomerBuiltSystem.svg';
// import DedicatedTeam from '../../assets/images/DedicatedTeam.svg';

// const boxImages = [AIFirstThinking, DataDriven, CustomerBuiltSystem, DedicatedTeam];

// const AboutContentBoxes = () => {
//   return (
//     <section className="w-full bg-black py-16 px-4 flex flex-col items-center space-y-12">
//       {boxImages.map((img, index) => {
//         const isEven = index % 2 === 0;

//         return (
//           <motion.div
//             key={index}
//             initial={{
//               opacity: 0,
//               x: isEven ? 100 : -100,
//               scale: 0.8,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: 'easeInOut',
//               delay: index * 1.0, // time gap between boxes
//             }}
//             viewport={{ once: true }}
//             className={`w-full max-w-6xl ${
//               isEven ? 'md:self-start' : 'md:self-end'
//             }`}
//           >
//             <img
//               src={img}
//               alt={`Box ${index + 1}`}
//               className="w-full h-auto shadow-xl rounded-lg"
//             />
//           </motion.div>
//         );
//       })}
//     </section>
//   );
// };

// export default AboutContentBoxes;





import React from 'react';
import { motion } from 'framer-motion';

// Import your images
import AIFirstThinking from '../../assets/images/AIFirstThinking.svg';
import DataDriven from '../../assets/images/DataDriven.svg';
import CustomerBuiltSystem from '../../assets/images/CustomerBuiltSystem.svg';
import DedicatedTeam from '../../assets/images/DedicatedTeam.svg';

const boxImages = [AIFirstThinking, DataDriven, CustomerBuiltSystem, DedicatedTeam];

const AboutContentBoxes = () => {
  return (
    <section className="w-full bg-black py-16 px-4 flex flex-col items-center space-y-12">
      {boxImages.map((img, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: isEven ? 100 : -100,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: index * 0.3, // stagger effect
            }}
            viewport={{ once: false, amount: 0.3 }} // animate every time visible by 30%
            className={`w-full max-w-5xl ${isEven ? 'md:self-start' : 'md:self-end'}`}
          >
            <img
              src={img}
              alt={`Box ${index + 1}`}
              className="w-full h-auto shadow-xl rounded-lg"
            />
          </motion.div>
        );
      })}
    </section>
  );
};

export default AboutContentBoxes;
