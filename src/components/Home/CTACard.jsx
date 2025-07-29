// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CTAcardBg from '../assets/images/CTACardBg.svg';

// const steps = [
//   {
//     title: 'You might have countless questions',
//   },
//   {
//     title: 'But, we are here to answer them all,',
//   },
//   {
//     title: 'Get in Touch today',
//   }
// ];

// const CTAcard = () => {
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
//   style={{ backgroundImage: `url(${CTAcardBg})` }}
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

// export default CTAcard;





// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CTAcardBg from '../assets/images/CTACardBg.svg';

// const steps = [
//   { title: 'You might have countless questions.' },
//   { title: 'But, we are here to answer them all.' },
//   { title: 'Get in Touch today.' }
// ];

// const CTAcard = () => {
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
//     const isFullyInView = top >= 0 && bottom <= window.innerHeight;

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
//     <div className="flex justify-center bg-black text-white min-h-screen items-center">
//       <section
//         ref={sectionRef}
//         className="flex flex-col items-center justify-center w-full max-w-5xl px-4"
//       >
//         {/* Dots on the left */}
//         <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
//           {steps.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(idx)}
//               className={`w-3 h-3 rounded-full border border-white ${
//                 idx === currentIndex ? 'bg-white' : ''
//               }`}
//             />
//           ))}
//         </div>

//         {/* Card with background */}
//         <div
//           className="relative w-full bg-cover bg-center p-0"
//           style={{ backgroundImage: `url(${CTAcardBg})` }}
//         >
//           <AnimatePresence mode="wait" initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ y: direction > 0 ? 50 : -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: direction > 0 ? -50 : 50, opacity: 0 }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//               className="border border-[#0F7BAE] rounded-md py-6 px-8 m-4 text-center text-lg md:text-2xl font-medium bg-opacity-50 backdrop-blur-sm"
//             >
//               {steps[currentIndex].title}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Button */}
//         <button
//           className="mt-6 px-6 py-2 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white rounded-full text-sm md:text-base font-semibold"
//         >
//           Thrive with Us
//         </button>
//       </section>
//     </div>
//   );
// };

// export default CTAcard;



// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CTAcardBg from "../../assets/images/CTACardBg.svg";

// const steps = [
//   { title: 'You might have countless questions.' },
//   { title: 'But, we are here to answer them all.' },
//   { title: 'Get in Touch today.' }
// ];

// const CTAcard = () => {
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
//     const isFullyInView = top >= 0 && bottom <= window.innerHeight;

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
//     <div className="flex justify-center bg-red text-white  items-center relative overflow-hidden pb-16">
//       {/* Background pattern */}
//       {/* <img 
//         src={CTAcardBg} 
//         alt="Background pattern" 
//         className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
//       /> */}

//       <section
//         ref={sectionRef}
//         className="flex flex-col items-center justify-center w-full max-w-5xl px-4 relative z-10"
//       >
//         {/* Dots on the left */}
//         <div className="absolute left-6 top-1/3 transform -translate-y-1/2 flex flex-col gap-3">
//           {steps.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(idx)}
//               className={`w-3 h-3 rounded-full border border-white ${
//                 idx === currentIndex ? 'bg-white' : ''
//               }`}
//             />
//           ))}
//         </div>

//         {/* Card */}
//         <div className="border border-[#0F7BAE] rounded-md py-5 px-8 text-center text-lg md:text-2xl font-medium backdrop-blur-md bg-[#1c1c1c]/80 min-w-[800px] max-w-3xl" style={{ backgroundImage: `url(${CTAcardBg})` }}>
//           <AnimatePresence mode="wait" initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ y: direction > 0 ? 50 : -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: direction > 0 ? -50 : 50, opacity: 0 }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               {steps[currentIndex].title}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Button */}
//         <button
//           className="mt-8 px-16 py-2 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full text-xl md:text-base font-semibold"
//         >
//           Thrive with Us
//         </button>
//       </section>
//     </div>
//   );
// };

// export default CTAcard;

// import React, { useState, useRef, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import CTAcardBg from "../../assets/images/CTACardBg.svg";

// const steps = [
//   { title: 'You might have countless questions.' },
//   { title: 'But, we are here to answer them all.' },
//   { title: 'Get in Touch today.' }
// ];

// const CTAcard = () => {
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
//     const isFullyInView = top >= 0 && bottom <= window.innerHeight;

//     if (!isFullyInView || isAnimating.current || window.innerWidth < 768) return;

//     if (e.deltaY > 0 && currentIndex < steps.length - 1) {
//       e.preventDefault();
//       handleNavigation(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       e.preventDefault(); // Don't animate when scrolling up
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [currentIndex]);

//   return (
//     <div className="flex justify-center items-center bg-black text-white relative overflow-hidden pb-16 px-4">
//       <section
//         ref={sectionRef}
//         className="flex flex-col items-center justify-center w-full max-w-7xl relative z-10"
//       >
//         {/* Desktop Dots on the left */}
//         <div className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 flex-col gap-3">
//           {steps.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(idx)}
//               className={`w-3 h-3 rounded-full border border-white transition ${
//                 idx === currentIndex ? 'bg-white' : 'bg-transparent'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Desktop Card */}
//         <div
//           className="hidden md:block border border-[#0F7BAE] rounded-md py-6 px-8 text-center text-lg md:text-2xl font-medium backdrop-blur-md bg-[#1c1c1c]/80 min-w-[700px] max-w-3xl"
//           style={{ backgroundImage: `url(${CTAcardBg})`, backgroundSize: "cover" }}
//         >
//           <AnimatePresence mode="wait" initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ y: direction > 0 ? 50 : -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: direction > 0 ? -50 : 50, opacity: 0 }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               {steps[currentIndex].title}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Mobile/Tablet Swiper */}
//         <div className="md:hidden w-full">
//           <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 className="snap-center flex-shrink-0 w-full border border-[#0F7BAE] text-center rounded-md p-6 text-base font-medium backdrop-blur-md bg-[#1c1c1c]/80"
//                 style={{ backgroundImage: `url(${CTAcardBg})`, backgroundSize: "cover" }}
//               >
//                 {step.title}
//               </div>
//             ))}
//           </div>

//           {/* Dots below card */}
//           <div className="flex justify-center gap-2 mt-4">
//             {steps.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`w-3 h-3 rounded-full border border-white ${
//                   idx === currentIndex ? 'bg-white' : 'bg-transparent'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* CTA Button */}
//         <button className="mt-8 px-16 py-2 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full text-xl md:text-base font-semibold">
//           Thrive with Us
//         </button>
//       </section>
//     </div>
//   );
// };

// export default CTAcard;


import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CTAcardBg from "../../assets/images/CTACardBg.svg";

const steps = [
  { title: 'You might have countless questions.' },
  { title: 'But, we are here to answer them all.' },
  { title: 'Get in Touch today.' }
];

const CTAcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isAnimating = useRef(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(0);

  const handleNavigation = (newIndex) => {
    if (isAnimating.current || newIndex === currentIndex) return;
    isAnimating.current = true;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    setTimeout(() => (isAnimating.current = false), 600);
  };

  const handleWheel = (e) => {
    if (!sectionRef.current) return;
    const { top, bottom } = sectionRef.current.getBoundingClientRect();
    const isFullyInView = top >= 0 && bottom <= window.innerHeight;

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

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!sectionRef.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const swipeThreshold = 50;

    if (isAnimating.current) return;

    if (diff > swipeThreshold && currentIndex < steps.length - 1) {
      // Swiped left
      handleNavigation(currentIndex + 1);
    } else if (diff < -swipeThreshold && currentIndex > 0) {
      // Swiped right
      handleNavigation(currentIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  return (
    <div className="flex justify-center bg-red text-white items-center relative overflow-hidden py-8 md:py-16">
      <section
        ref={sectionRef}
        className="flex flex-col items-center justify-center w-full max-w-5xl px-4 relative z-10"
      >
        {/* Vertical dots for desktop (lg screens and above) */}
        <div className="hidden lg:flex absolute left-2 md:left-6 top-1/3 transform -translate-y-1/2 flex-col gap-3">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(idx)}
              className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
                idx === currentIndex ? 'bg-white scale-125' : 'bg-transparent'
              }`}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>

        {/* Card container */}
        <div 
          className="border border-[#0F7BAE] rounded-md  px-4 md:px-8 text-center text-lg md:text-xl lg:text-2xl font-medium backdrop-blur-md bg-[#1c1c1c]/80 w-full max-w-md md:max-w-2xl lg:max-w-3xl lg:min-w-[800px]"
          style={{ backgroundImage: `url(${CTAcardBg})` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ y: direction > 0 ? 50 : -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction > 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="min-h-[80px] md:min-h-[100px] flex items-center justify-center"
            >
              {steps[currentIndex].title}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Horizontal dots for mobile/tablet (below card) */}
        <div className="flex lg:hidden justify-center gap-3 mt-6">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(idx)}
              className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
                idx === currentIndex ? 'bg-white scale-125' : 'bg-transparent'
              }`}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>

        {/* Button */}
        <button
          className="mt-8 px-8 md:px-16 py-2 bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full text-base md:text-lg lg:text-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Thrive with Us
        </button>
      </section>
    </div>
  );
};

export default CTAcard;