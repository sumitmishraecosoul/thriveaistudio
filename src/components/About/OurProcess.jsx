// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     title: "Kick-off to align on scope and responsibilities, help needed etc.",
//   },
//   {
//     title: "Detailed Project Planning, 'Agile' based execution.",
//   },
//   {
//     title: "Interim Releases, with option for Thrive team to test and validate.",
//   },
//   {
//     title: "Bi-Weekly LT Updates on progress – meeting & emailed.",
//   },
//   {
//     title: "Interim Releases, with option for Thrive team to test and validate.",
//   },
//   {
//     title: "Detailed Documentation & knowledge Transfer would be provided to the internal team post completion.",
//   },
// ];

// const OurProcess = () => {
//   return (
//     <section className="w-full bg-black text-white py-20 px-4 flex flex-col items-center">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 border border-[#1E5D74] px-10 py-4 rounded-full">
//         Our Process
//       </h2>

//       <div className="relative w-full max-w-7xl overflow-hidden">
//         {/* Curve Path */}
//         <motion.div
//           className="absolute top-1/2 left-0 w-full h-24"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 3, ease: "easeInOut" }}
//         >
//           <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
//             <path
//               d="M0,60 C200,0 400,100 600,60 C800,20 1000,100 1200,60"
//               stroke="url(#gradient)"
//               strokeWidth="8"
//               fill="none"
//             />
//             <defs>
//               <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#1E5D74" />
//                 <stop offset="100%" stopColor="#50A7C2" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </motion.div>

//         {/* Steps */}
//         <div className="relative z-10 flex justify-between items-center w-full">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center w-[120px]"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ delay: index * 0.6, duration: 0.8 }}
//             >
//               <div className="relative mb-2">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FFE6B3] to-[#FFB16E] text-black flex items-center justify-center text-xl font-bold shadow-lg">
//                   {index + 1}
//                 </div>
//                 <div className="h-10 w-1 bg-[#FFB16E] absolute top-full left-1/2 -translate-x-1/2" />
//               </div>
//               <p className="text-sm text-center leading-snug max-w-[160px]">
//                 {step.title}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProcess;





// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   "Kick-off to align on scope and responsibilities, help needed etc.",
//   "Detailed Project Planning, 'Agile' based execution.",
//   "Interim Releases, with option for Thrive team to test and validate.",
//   "Bi-Weekly LT Updates on progress – meeting & emailed.",
//   "Interim Releases, with option for Thrive team to test and validate.",
//   "Detailed Documentation & knowledge Transfer would be provided to the internal team post completion."
// ];

// const OurProcess = () => {
//   return (
//     <section className="w-full bg-black text-white py-20 px-4 flex flex-col items-center overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 border border-[#1E5D74] px-10 py-4 rounded-full">
//         Our Process
//       </h2>

//       <div className="relative w-full max-w-7xl">
//         {/* Wavy SVG Path */}
//         <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="absolute top-20 left-0 w-full h-[200px] z-0">
//           <defs>
//             <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
//               <stop offset="0%" stopColor="#1E5D74" />
//               <stop offset="100%" stopColor="#50A7C2" />
//             </linearGradient>
//           </defs>
//           <path
//             d="M0,120 C200,40 400,200 600,120 C800,40 1000,200 1200,120"
//             stroke="url(#gradient)"
//             strokeWidth="40"
//             fill="none"
//           />
//         </svg>

//         {/* Steps with alternating animation */}
//         <div className="relative z-10 flex justify-between items-center w-full mt-10">
//           {steps.map((step, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <motion.div
//                 key={index}
//                 className={`flex flex-col items-center text-center w-[120px] ${isEven ? "mt-0" : "mt-32"}`}
//                 initial={{ opacity: 0, y: isEven ? -30 : 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, amount: 0.5 }}
//                 transition={{ delay: index * 0.4, duration: 0.6, ease: "easeOut" }}
//               >
//                 {/* Circle */}
//                 <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-[#FFE6B3] to-[#FFB16E] text-black flex items-center justify-center text-xl font-bold shadow-xl border-4 border-[#1E5D74]">
//                   {index + 1}
//                 </div>

//                 {/* Line Connector */}
//                 <div className="w-1 h-10 bg-[#FFB16E] mt-1" />

//                 {/* Step Description */}
//                 <p className="text-sm mt-2 leading-snug max-w-[160px]">
//                   {step}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProcess;



// import React from 'react';
// import CurveGraph from '../../assets/images/curveGraph.svg';
// import Circle1 from '../../assets/images/circle1.svg';
// import Circle2 from '../../assets/images/circle2.svg';
// import Circle3 from '../../assets/images/circle3.svg';
// import Circle4 from '../../assets/images/circle4.svg';
// import Circle5 from '../../assets/images/circle5.svg';
// import Circle6 from '../../assets/images/circle6.svg';

// const circlesData = [
//   {
//     img: Circle1,
//     text: "Kick-off to align on scope and responsibilities, help needed etc.",
//     position: { top: '30%', left: '5%' }
//   },
//   {
//     img: Circle2,
//     text: "Detailed Project Planning, 'Agile' based execution.",
//     position: { top: '10%', left: '20%' }
//   },
//   {
//     img: Circle3,
//     text: "Interim Releases, with option for Thrive team to test and validate.",
//     position: { top: '35%', left: '35%' }
//   },
//   {
//     img: Circle4,
//     text: "Bi-Weekly LT Updates on progress – meeting & emailed.",
//     position: { top: '10%', left: '50%' }
//   },
//   {
//     img: Circle5,
//     text: "Interim Releases, with option for Thrive team to test and validate.",
//     position: { top: '35%', left: '65%' }
//   },
//   {
//     img: Circle6,
//     text: "Detailed Documentation & knowledge Transfer provided to the internal team post completion.",
//     position: { top: '10%', left: '80%' }
//   },
// ];

// const OurProcess = () => {
//   return (
//     <section className="relative w-full max-w-6xl mx-auto py-12 bg-black text-white">
//       <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8 text-[#4DB5E8] border border-[#4DB5E8] w-fit mx-auto px-4 py-2 rounded-lg">
//         Our Process
//       </h2>

//       {/* Background curve graph */}
//       <img src={CurveGraph} alt="Process Curve" className="w-full h-auto" />

//       {/* Circles and Texts */}
//       <div className="absolute inset-0">
//         {circlesData.map((circle, idx) => (
//           <div
//             key={idx}
//             className="absolute flex flex-col items-center text-center max-w-[180px]"
//             style={{
//               top: circle.position.top,
//               left: circle.position.left,
//               transform: 'translate(-50%, -50%)',
//             }}
//           >
//             <img src={circle.img} alt={`Step ${idx + 1}`} className="w-12 h-12 mb-2" />
//             <p className="text-xs md:text-sm">{circle.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProcess;




// import React from 'react';

// // Images
// import CurveGraph from '../../assets/images/CurveGraph.svg';
// import Circle1 from '../../assets/images/Circle1.svg';
// import Circle2 from '../../assets/images/Circle2.svg';
// import Circle3 from '../../assets/images/Circle3.svg';
// import Circle4 from '../../assets/images/Circle4.svg';
// import Circle5 from '../../assets/images/Circle5.svg';
// import Circle6 from '../../assets/images/Circle6.svg';

// const steps = [
//   {
//     icon: Circle1,
//     text: 'Kick-off to align on scope and responsibilities, help needed etc.',
//     top: '20px',
//     left: '7%',
//     textAlign: 'center',
//   },
//   {
//     icon: Circle2,
//     text: 'Detailed Project Planning, "Agile" based execution.',
//     top: '10px',
//     left: '23%',
//     textAlign: 'center',
//   },
//   {
//     icon: Circle3,
//     text: 'Interim Releases, with option for Thrive team to test and validate.',
//     top: '30px',
//     left: '38%',
//     textAlign: 'center',
//   },
//   {
//     icon: Circle4,
//     text: 'Bi-Weekly LT Updates on progress – meeting & emailed.',
//     top: '10px',
//     left: '52%',
//     textAlign: 'center',
//   },
//   {
//     icon: Circle5,
//     text: 'Interim Releases, with option for Thrive team to test and validate.',
//     top: '30px',
//     left: '68%',
//     textAlign: 'center',
//   },
//   {
//     icon: Circle6,
//     text: 'Detailed Documentation & knowledge Transfer provided to the internal team post completion.',
//     top: '10px',
//     left: '84%',
//     textAlign: 'center',
//   },
// ];

// const OurProcess = () => {
//   return (
//     <section className="relative bg-black py-12">
//       <h2 className="text-center text-3xl text-[#52C1E1] font-semibold mb-12 border border-[#52C1E1] w-fit mx-auto px-6 py-2 rounded-lg">
//         Our Process
//       </h2>

//       <div className="relative max-w-6xl mx-auto">
//         <img src={CurveGraph} alt="Process Curve" className="w-full h-auto" />

//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="absolute flex flex-col items-center w-40 text-center"
//             style={{
//               top: step.top,
//               left: step.left,
//             }}
//           >
//             <img
//               src={step.icon}
//               alt={`Step ${index + 1}`}
//               className="w-12 h-12 mb-2"
//             />
//             <p className="text-gray-300 text-xs md:text-sm">{step.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProcess;




// import React from 'react';

// // Images
// import CurveGraph from '../../assets/images/CurveGraph.svg';
// import Circle1 from '../../assets/images/Circle1.svg';
// import Circle2 from '../../assets/images/Circle2.svg';
// import Circle3 from '../../assets/images/Circle3.svg';
// import Circle4 from '../../assets/images/Circle4.svg';
// import Circle5 from '../../assets/images/Circle5.svg';
// import Circle6 from '../../assets/images/Circle6.svg';

// const steps = [
//   {
//     icon: Circle1,
//     text: 'Kick-off to align on scope and responsibilities, help needed etc.',
//     top: '50px',
//     left: '5%',
//   },
//   {
//     icon: Circle2,
//     text: 'Detailed Project Planning, "Agile" based execution.',
//     top: '20px',
//     left: '21%',
//   },
//   {
//     icon: Circle3,
//     text: 'Interim Releases, with option for Thrive team to test and validate.',
//     top: '50px',
//     left: '37%',
//   },
//   {
//     icon: Circle4,
//     text: 'Bi-Weekly LT Updates on progress – meeting & emailed.',
//     top: '20px',
//     left: '53%',
//   },
//   {
//     icon: Circle5,
//     text: 'Interim Releases, with option for Thrive team to test and validate.',
//     top: '50px',
//     left: '68%',
//   },
//   {
//     icon: Circle6,
//     text: 'Detailed Documentation & knowledge Transfer provided to the internal team post completion.',
//     top: '20px',
//     left: '85%',
//   },
// ];

// const OurProcess = () => {
//   return (
//     <section className="relative bg-black py-12">
//       <h2 className="text-center text-3xl text-[#52C1E1] font-semibold mb-12 border border-[#52C1E1] w-fit mx-auto px-6 py-2 rounded-lg">
//         Our Process
//       </h2>

//       <div className="relative max-w-7xl mx-auto">
//         <img src={CurveGraph} alt="Process Curve" className="w-full h-auto" />

//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="absolute flex flex-col items-center text-center w-48"
//             style={{ top: step.top, left: step.left, transform: 'translateX(-50%)' }}
//           >
//             <p className="text-gray-300 text-xs mb-2">{step.text}</p>
//             <img
//               src={step.icon}
//               alt={`Step ${index + 1}`}
//               className="w-10 h-10"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProcess;






// import React from 'react';

// // Images
// import CurveGraph from '../../assets/images/CurveGraph.svg';
// import Circle1 from '../../assets/images/Circle1.svg';
// import Circle2 from '../../assets/images/Circle2.svg';
// import Circle3 from '../../assets/images/Circle3.svg';
// import Circle4 from '../../assets/images/Circle4.svg';
// import Circle5 from '../../assets/images/Circle5.svg';
// import Circle6 from '../../assets/images/Circle6.svg';

// const steps = [
//   {
//     icon: Circle1,
//     text: 'Kick-off to align on scope and responsibilities, help needed etc.',
//     left: '15%',
//     top: '18%',
//   },
//   {
//     icon: Circle2,
//     text: 'Detailed Project Planning, "Agile" based execution.',
//     left: '28%',
//     top: '-65%',
//   },
//   {
//     icon: Circle3,
//     text: 'Interim Releases, with option for Thrive team to test and validate.',
//     left: '43%',
//     top: '18%',
//   },
//   {
//     icon: Circle4,
//     text: 'Bi-Weekly LT Updates on progress – meeting & emailed.',
//     left: '57%',
//     top: '-65%',
//   },
//   {
//     icon: Circle5,
//     text: 'Interim Releases, with option for Thrive team to test and validate.',
//     left: '72%',
//     top: '18%',
//   },
//   {
//     icon: Circle6,
//     text: 'Detailed Documentation & knowledge Transfer provided to the internal team post completion.',
//     left: '86%',
//     top: '-84%',
//   },
// ];

// const OurProcess = () => {
//   return (
//     <section className="relative bg-black py-12 mb-40">
//       <h2 className="text-center text-3xl text-[#52C1E1] font-semibold mb-12 border border-[#52C1E1] w-fit mx-auto px-48 py-2 rounded-lg">
//         Our Process
//       </h2>

//       <div className="relative mx-auto mt-40 mb-30">
//         <img src={CurveGraph} alt="Process Curve" className="w-full h-auto" />

//         {steps.map((step, index) => {
//           const isEven = index % 2 === 0; // 0-based, so even indices will have text below

//           return (
//             <div
//               key={index}
//               className="absolute flex flex-col items-center text-center w-48"
//               style={{
//                 left: step.left,
//                 // top: isEven ? '65%' : '-10%',
//                 top: step.top,
//                 transform: isEven ? 'translateX(-50%)' : 'translateX(-50%) translateY(20px)',
//                 // transform: 'translateX(-50%)',
//               }}
//             >
//               {isEven ? (
//                 <>
//                   <img src={step.icon} alt={`Step ${index + 1}`} className="w-30 h-30 mb-2" />
//                   <p className="text-gray-300 text-sm">{step.text}</p>
//                 </>
//               ) : (
//                 <>
//                   <p className="text-gray-300 text-sm mb-2">{step.text}</p>
//                   <img src={step.icon} alt={`Step ${index + 1}`} className="w-30 h-30" />
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default OurProcess;




import React from 'react';

// Images
import CurveGraph from '../../assets/images/CurveGraph.svg';
import VericalCurveGraph from '../../assets/images/vertical_curve.svg';
import Circle1 from '../../assets/images/Circle1.svg';
import Circle2 from '../../assets/images/Circle2.svg';
import Circle3 from '../../assets/images/Circle3.svg';
import Circle4 from '../../assets/images/Circle4.svg';
import Circle5 from '../../assets/images/Circle5.svg';
import Circle6 from '../../assets/images/Circle6.svg';

const steps = [
  {
    icon: Circle1,
    text: 'Kick-off to align on scope and responsibilities, help needed etc.',
    left: '15%',
    top: '18%',
  },
  {
    icon: Circle2,
    text: 'Detailed Project Planning, "Agile" based execution.',
    left: '28%',
    top: '-25%',
  },
  {
    icon: Circle3,
    text: 'Interim Releases, with option for Thrive team to test and validate.',
    left: '43%',
    top: '18%',
  },
  {
    icon: Circle4,
    text: 'Bi-Weekly LT Updates on progress – meeting & emailed.',
    left: '57%',
    top: '-25%',
  },
  {
    icon: Circle5,
    text: 'Interim Releases, with option for Thrive team to test and validate.',
    left: '72%',
    top: '18%',
  },
  {
    icon: Circle6,
    text: 'Detailed Documentation & knowledge Transfer provided to the internal team post completion.',
    left: '86%',
    top: '-35%',
  },
];

const OurProcess = () => {
  return (
    <section className="relative bg-black py-8 md:py-12 lg:py-16 mb-20 md:mb-30 lg:mb-40">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#52C1E1] font-semibold mb-8 md:mb-12 border border-[#52C1E1] w-fit mx-auto px-4 sm:px-8 md:px-12 lg:px-24 py-1 md:py-2 rounded-lg">
        Our Process
      </h2>

      {/* Desktop/Tablet View - Curve Graph */}
      <div className="hidden md:block relative mx-auto mt-20 md:mt-30 lg:mt-40 mb-10 md:mb-20 lg:mb-30 max-w-6xl lg:max-w-full xl:max-w-full">
        <img 
          src={CurveGraph} 
          alt="Process Curve" 
          className="w-full h-auto"
        />

        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center text-center w-32 md:w-36 lg:w-54 xl:w-64"
              style={{
                left: step.left,
                top: step.top,
                transform: 'translateX(-50%)',
              }}
            >
              {isEven ? (
                <>
                  <img 
                    src={step.icon} 
                    alt={`Step ${index + 1}`} 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-48 mb-2"
                  />
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base">{step.text}</p>
                </>
              ) : (
                <>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-2">{step.text}</p>
                  <img 
                    src={step.icon} 
                    alt={`Step ${index + 1}`} 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-48"
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile View - Vertical Timeline */}
      <div className="md:hidden">
        <div className="relative flex flex-col items-center mt-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#52C1E1] via-[#52C1E1] to-transparent z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative mb-12 w-full max-w-xs flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className="relative z-10 flex flex-col items-center w-5/6">
                <img 
                  src={step.icon} 
                  alt={`Step ${index + 1}`} 
                  className="w-16 h-16 mb-4"
                />
                <p className="text-gray-300 text-sm text-center bg-[#1a1a1a] p-3 rounded-lg border border-[#52C1E1]/30">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;