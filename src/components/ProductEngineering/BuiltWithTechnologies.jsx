// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // Import your 5 box images and 1 arrow image
// import Frontend from '../../assets/images/Frontend.svg'; // Frontend
// import Backend from '../../assets/images/Backend.svg'; // Backend
// import Databases from '../../assets/images/Databases.svg'; // Databases
// import Cloud from '../../assets/images/Cloud.svg'; // Cloud
// import DevOps from '../../assets/images/DevOps.svg'; // DevOps
// import Arrow from '../../assets/images/Arrow.svg';

// const boxes = [Frontend, Backend, Databases, Cloud, DevOps];

// const BuiltWithTechnologies = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   return (
//     <div ref={ref} className="w-full py-20 bg-black text-center">
//       <h2 className="text-3xl md:text-4xl font-semibold text-[#f5d7a0] mb-12">
//         Built Using Modern, Scalable Technologies
//       </h2>

//       <div className="flex justify-center items-center flex-wrap gap-4 px-4">
//         {boxes.map((box, index) => (
//           <React.Fragment key={index}>
//             <motion.img
//               src={box}
//               alt={`Tech Box ${index + 1}`}
//               className="w-40 md:w-48 lg:w-56"
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.6, duration: 0.6 }}
//             />
//             {index < boxes.length - 1 && (
//               <motion.img
//                 src={Arrow}
//                 alt="Arrow"
//                 className="w-6 md:w-8 lg:w-10"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: index * 0.6 + 0.3, duration: 0.4 }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BuiltWithTechnologies;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // Import images
// import Frontend from '../../assets/images/Frontend.svg';
// import Backend from '../../assets/images/Backend.svg';
// import Databases from '../../assets/images/Databases.svg';
// import Cloud from '../../assets/images/Cloud.svg';
// import DevOps from '../../assets/images/DevOps.svg';
// import RightArrow from '../../assets/images/Arrow.svg';
// import DownwardArrow from '../../assets/images/downward_arrow.svg';

// const boxes = [Frontend, Backend, Databases, Cloud, DevOps];

// const BuiltWithTechnologies = () => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

//   return (
//     <div ref={ref} className="w-full pb-20 bg-black text-center">
//       <h2 className="text-3xl md:text-4xl font-semibold text-[#f5d7a0] mb-12">
//         Built Using Modern, Scalable Technologies
//       </h2>

//       <div className="flex justify-center items-center flex-wrap gap-4 px-4">
//         {boxes.map((box, index) => (
//           <React.Fragment key={`${index}-${inView}`}>
//             <motion.img
//               src={box}
//               alt={`Tech Box ${index + 1}`}
//               className="w-40 md:w-48 lg:w-56"
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ delay: index * 0.6, duration: 0.6 }}
//             />
//             {index < boxes.length - 1 && (
//               <motion.img
//                 src={RightArrow}
//                 alt="RightArrow"
//                 className="w-6 md:w-8 lg:w-10"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
//                 transition={{ delay: index * 0.6 + 0.3, duration: 0.4 }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BuiltWithTechnologies;



import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images
import Frontend from '../../assets/images/Frontend.svg';
import Backend from '../../assets/images/Backend.svg';
import Databases from '../../assets/images/Databases.svg';
import Cloud from '../../assets/images/Cloud.svg';
import DevOps from '../../assets/images/DevOps.svg';
import RightArrow from '../../assets/images/Arrow.svg';
import DownwardArrow from '../../assets/images/downward_arrow.svg';

const boxes = [Frontend, Backend, Databases, Cloud, DevOps];

const BuiltWithTechnologies = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div ref={ref} className="w-full pb-20 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#f5d7a0] mb-12">
        Built Using Modern, Scalable Technologies
      </h2>

      {/* Horizontal Layout for Desktop */}
      <div className="hidden md:flex justify-center items-center flex-wrap gap-4 px-4">
        {boxes.map((box, index) => (
          <React.Fragment key={`desktop-${index}`}>
            <motion.img
              src={box}
              alt={`Tech Box ${index + 1}`}
              className="w-40 md:w-48 lg:w-56"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.5, duration: 0.6 }}
            />
            {index < boxes.length - 1 && (
              <motion.img
                src={RightArrow}
                alt="Right Arrow"
                className="w-6 md:w-8 lg:w-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: index * 0.5 + 0.25, duration: 0.4 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Vertical Layout for Mobile/Tablet */}
      <div className="flex md:hidden flex-col items-center gap-4 px-4">
        {boxes.map((box, index) => (
          <React.Fragment key={`mobile-${index}`}>
            <motion.img
              src={box}
              alt={`Tech Box ${index + 1}`}
              className="w-32 sm:w-36"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.5, duration: 0.6 }}
            />
            {index < boxes.length - 1 && (
              <motion.img
                src={DownwardArrow}
                alt="Downward Arrow"
                className="w-5 sm:w-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: index * 0.5 + 0.25, duration: 0.4 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BuiltWithTechnologies;
