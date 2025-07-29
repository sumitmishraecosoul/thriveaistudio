// import React, { useEffect, useState } from 'react';

// const stats = [
//   { value: 71, suffix: '%', description: 'of organisations are currently using AI' },
//   { value: 22, suffix: '%', description: 'of organizations are expected to switch to AI in the next 6 months.' },
//   { value: 10, suffix: 'X', description: 'The top leaders using generative AI are realizing an ROI of $10x.' },
//   { value: 43, suffix: '%', description: 'Productivity use cases have provided the greatest ROI.' },
// ];

// const AnimatedNumber = ({ target, suffix }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1200; // total duration in ms
//     const stepTime = 20; // update interval in ms
//     const steps = duration / stepTime;
//     const increment = target / steps;

//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         clearInterval(interval);
//         setCount(target);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, stepTime);

//     return () => clearInterval(interval);
//   }, [target]);

//   return (
//     <div className="text-4xl md:text-5xl font-bold text-[#d0b78f]">
//       {count}
//       {suffix}
//     </div>
//   );
// };

// const StatsGrid = () => {
//   return (
//     <div className="w-full bg-black py-16 px-6 font-sans">
//       <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-[#d0b78f]/40 max-w-6xl mx-auto">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="px-6 md:px-12 py-6 text-center flex flex-col items-center"
//           >
//             <AnimatedNumber target={stat.value} suffix={stat.suffix} />
//             <p className="text-white mt-2 text-sm md:text-base max-w-xs leading-relaxed">
//               {stat.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsGrid;