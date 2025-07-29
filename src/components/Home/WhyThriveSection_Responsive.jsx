
// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import WhyThriveImage from '../../assets/images/WhyThriveImage.svg';
// import WhyThriveShadow from "../../assets/images/whythriveshadow.svg";

// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import WhyThriveImage from '../../assets/images/WhyThriveImage.svg';

// const cards = [
//   {
//     id: 1,
//     title: 'Make Data your Unfair Advantage.',
//     description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
//     position: 'top-[5%] left-[0%] lg:left-[5%]',
//     direction: 'right',
//     delay: 0.2,
//   },
//   {
//     id: 2,
//     title: 'Custom Tech. Built to Scale.',
//     description: 'Whether it\'s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
//     position: 'top-[5%] right-[0%] lg:right-[-5%]',
//     direction: 'left',
//     delay: 0.3,
//   },
//   {
//     id: 3,
//     title: 'Smarter AI with Real Results.',
//     description: 'We don\'t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
//     position: 'top-[35%] left-[0%] lg:left-[-15%]',
//     direction: 'right',
//     delay: 0.4,
//   },
//   {
//     id: 4,
//     title: 'Creative that Converts.',
//     description: 'We fuse design thinking with performance data to craft visuals that do more than look good - they drive clicks, conversions, and brand love.',
//     position: 'top-[30%] right-[10%] lg:right-[-12%]',
//     direction: 'left',
//     delay: 0.5,
//   },
//   {
//     id: 5,
//     title: 'Scale with Strategy, Not Guesswork.',
//     description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
//     position: 'bottom-[10%] left-1/2 -translate-x-1/2',
//     direction: 'up',
//     delay: 0.6,
//   }
// ];

// const getVariant = (direction) => {
//   switch (direction) {
//     case 'left':
//       return { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
//     case 'right':
//       return { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } };
//     case 'up':
//       return { opacity: 0, y: 40 };
//     default:
//       return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
//   }
// };

// const WhyThriveSectionResponsive = () => {
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const controls = cards.map(() => useAnimation());

//   const [scrollDirection, setScrollDirection] = useState('down');
//   const [lastY, setLastY] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const currentY = window.scrollY;
//       setScrollDirection(currentY > lastY ? 'down' : 'up');
//       setLastY(currentY);
//     };

//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, [lastY]);

//   useEffect(() => {
//     if (!cardRefs.current.length) return;

//     const observer = new IntersectionObserver(
//       async ([entry]) => {
//         if (entry.isIntersecting && scrollDirection === 'down') {
//           // Animate cards one by one
//           for (let i = 0; i < cards.length; i++) {
//             await controls[i].start('visible');
//             await new Promise((resolve) => setTimeout(resolve, 200)); // stagger delay
//           }
//         } else if (!entry.isIntersecting || scrollDirection === 'up') {
//           // Reset animations
//           cards.forEach((card, index) => {
//             controls[index].start('hidden');
//           });
//         }
//       },
//       {
//         threshold: 0.3,
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current);
//     };
//   }, [scrollDirection]);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
//     >
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-12 w-full max-w-5xl"
//       >
//         <h2 className="text-xl md:text-3xl font-bold inline-block px-6 py-3 mb-4 rounded-[20px] 
//           bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] 
//           text-transparent bg-clip-text border border-[#1A5069]">
//           WHY THRIVE AI STUDIO AND TECH LAB?
//         </h2>
//         <h3 className="text-2xl md:text-4xl font-semibold mb-4">
//           <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation,<br /> Big-Text Experience & Start-Up Agility
//         </h3>
//         <p className="text-gray-300 mb-6 text-lg max-w-4xl mx-auto">
//           Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
//         </p>
//       </motion.div>

//       {/* Desktop Layout */}
//       <div className="hidden lg:flex relative w-full max-w-7xl h-[800px] justify-center items-center">
//         <motion.img
//           src={WhyThriveImage}
//           alt="Why Thrive"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: false }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="w-full max-w-[1000px] z-10"
//         />

//         {cards.map((card, index) => {
//           const variant = getVariant(card.direction);

//           return (
//             <motion.div
//               key={card.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               initial="hidden"
//               animate={controls[index]}
//               variants={{
//                 hidden: variant.hidden,
//                 visible: {
//                   ...variant.visible,
//                   transition: {
//                     delay: 0,
//                     duration: 0.6,
//                     ease: [0.16, 1, 0.3, 1],
//                   },
//                 },
//               }}
//               className={`absolute ${card.position} w-[420px] h-auto z-20`}
//             >
//               <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-4 rounded-[50px] shadow-xl">
//                 <h4 className="text-base font-semibold mb-1 text-center">{card.title}</h4>
//                 <p className="text-sm text-gray-200 text-center">{card.description}</p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Mobile Layout */}
//       <div className="lg:hidden w-full flex flex-col gap-6">
//         {cards.map((card, index) => (
//           <motion.div
//             key={card.id}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ delay: card.delay, duration: 0.6 }}
//             className="w-full bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-4 rounded-[30px] shadow-lg"
//           >
//             <h4 className="text-base font-semibold mb-1 text-center">{card.title}</h4>
//             <p className="text-sm text-gray-200 text-center">{card.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyThriveSectionResponsive;



import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import WhyThriveImage from '../../assets/images/WhyThriveImage.svg';

const cards = [
  {
    id: 1,
    title: 'Make Data your Unfair Advantage.',
    description: 'We clean, analyze and unify data across platforms, unlocking actionable insights that fuel smarter, stronger decisions.',
    position: 'top-[5%] left-[0%] lg:left-[5%]',
    direction: 'right',
    delay: 0.2,
  },
  {
    id: 2,
    title: 'Custom Tech. Built to Scale.',
    description: 'Whether it\'s marketplace integrations, automation pipelines, or AI-driven tools—we build systems that evolve with you.',
    position: 'top-[5%] right-[0%] lg:right-[-5%]',
    direction: 'left',
    delay: 0.3,
  },
  {
    id: 3,
    title: 'Smarter AI with Real Results.',
    description: 'We don\'t just plug in AI—we align it with your objectives. Our AI solutions deliver a measurable business impact.',
    position: 'top-[35%] left-[0%] lg:left-[-15%]',
    direction: 'right',
    delay: 0.4,
  },
  {
    id: 4,
    title: 'Creative that Converts.',
    description: 'We fuse design thinking with performance data to craft visuals that do more than look good - they drive clicks, conversions, and brand love.',
    position: 'top-[30%] right-[10%] lg:right-[-12%]',
    direction: 'left',
    delay: 0.5,
  },
  {
    id: 5,
    title: 'Scale with Strategy, Not Guesswork.',
    description: 'Our growth experts create full-funnel strategies powered by data and AI—across marketplaces, DTC, and beyond.',
    position: 'bottom-[10%] left-1/2 -translate-x-1/2',
    direction: 'up',
    delay: 0.6,
  }
];

const getVariant = (direction) => {
  switch (direction) {
    case 'left':
      return { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
    case 'right':
      return { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } };
    case 'up':
      return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

const WhyThriveSectionResponsive = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const controls = cards.map(() => useAnimation());

  const [scrollDir, setScrollDir] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollDir(y > lastScrollY ? 'down' : 'up');
      setLastScrollY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && scrollDir === 'down') {
          for (let i = 0; i < cards.length; i++) {
            await controls[i].start('visible');
            await new Promise((r) => setTimeout(r, 200));
          }
        } else if (!entry.isIntersecting || scrollDir === 'up') {
          cards.forEach((_, i) => controls[i].start('hidden'));
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [scrollDir]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white font-roboto py-16 px-4 md:px-20 relative overflow-hidden min-h-screen flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 w-full max-w-5xl"
      >
        <h2 className="text-xl md:text-3xl font-bold inline-block px-6 py-3 mb-4 rounded-[20px] 
          bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] 
          text-transparent bg-clip-text border border-[#1A5069]">
          WHY THRIVE AI STUDIO AND TECH LAB?
        </h2>
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">
          <span className="text-[#EDD5B1]">Optimized & AI-Driven Solutions</span> Built for Innovation,<br /> Big-Text Experience & Start-Up Agility
        </h3>
        <p className="text-gray-300 mb-6 text-lg max-w-4xl mx-auto">
          Whether you are just starting out or building a full, end-to-end team to manage your data and tech stack, our customized Vector Pods help you meet our design requirements through cost-efficiency, agility and ownership.
        </p>
      </motion.div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative w-full max-w-7xl h-[800px] justify-center items-center">
        <motion.img
          src={WhyThriveImage}
          alt="Why Thrive"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full max-w-[1100px] z-10"
        />

        {cards.map((card, index) => {
          const variant = getVariant(card.direction);

          return (
            <motion.div
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
              initial="hidden"
              animate={controls[index]}
              variants={{
                hidden: variant.hidden,
                visible: {
                  ...variant.visible,
                  transition: {
                    delay: 0,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className={`absolute ${card.position} w-[450px] md:w-[520px] h-[80px] md:h-[100px] z-20`}
            >
              <div className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-3 md:p-4 rounded-[50px] shadow-xl flex flex-col justify-center overflow-hidden min-h-0">
                <h4 className="text-sm md:text-base font-semibold mb-1 text-center line-clamp-2">{card.title}</h4>
                <p className="text-xs md:text-sm text-gray-200 text-center line-clamp-3">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex flex-col gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: card.delay, duration: 0.6 }}
            className="w-full bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-white p-4 rounded-[30px] shadow-lg"
          >
            <h4 className="text-base font-semibold mb-1 text-center">{card.title}</h4>
            <p className="text-sm text-gray-200 text-center">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyThriveSectionResponsive;
