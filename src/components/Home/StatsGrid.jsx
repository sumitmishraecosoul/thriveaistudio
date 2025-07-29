// import { useEffect, useState } from "react";

// const stats = [
//   { value: 71, suffix: "%", text: "of organisations are currently using AI" },
//   { value: 22, suffix: "%", text: "of organizations are expected to switch to AI in the next 6 months." },
//   { value: 10, suffix: "X", text: "The top leaders using generative AI are realizing an ROI of $10x." },
//   { value: 43, suffix: "%", text: "Productivity use cases have provided the greatest ROI." },
// ];

// const StatCard = ({ value, suffix, text }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1000; // animation duration
//     const increment = value / (duration / 16); // run every ~16ms (~60fps)
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(interval);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(interval);
//   }, [value]);

//   return (
//     <div className="flex flex-col items-center justify-center px-4 py-6 border border-blue-500 text-center w-full">
//       <p className="text-4xl font-bold text-[#D3B88C]">
//         {count}
//         {suffix}
//       </p>
//       <p className="text-sm text-white mt-2 leading-snug">{text}</p>
//     </div>
//   );
// };

// const StatsGrid = () => {
//   return (
//     <div className="bg-black py-10 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 border border-blue-500 divide-x divide-blue-500">
//         {stats.map((stat, index) => (
//           <StatCard key={index} {...stat} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsGrid;



// src/components/StatsGrid.jsx


// import { useEffect, useState } from "react";

// const stats = [
//   { label: "of organisations are currently using AI", value: 71, suffix: "%" },
//   {
//     label: "of organizations are expected to switch to AI in the next 6 months.",
//     value: 22,
//     suffix: "%",
//   },
//   {
//     label: "The top leaders using generative AI are realizing an ROI of",
//     value: 10,
//     suffix: "X",
//   },
//   {
//     label: "Productivity use cases have provided the greatest ROI.",
//     value: 43,
//     suffix: "%",
//   },
// ];

// const StatItem = ({ value, suffix, label }) => {
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     let current = 0;
//     const increment = value / 30;
//     const interval = setInterval(() => {
//       current += increment;
//       if (current >= value) {
//         setDisplayValue(value);
//         clearInterval(interval);
//       } else {
//         setDisplayValue(Math.floor(current));
//       }
//     }, 30);

//     return () => clearInterval(interval);
//   }, [value]);

//   return (
//     <div className="flex flex-col items-center px-6 text-center">
//       <span className="text-4xl font-bold text-[#D0B78F]">
//         {displayValue}
//         {suffix}
//       </span>
//       <p className="text-sm text-white mt-2 max-w-[220px]">{label}</p>
//     </div>
//   );
// };

// const StatsGrid = () => {
//   return (
//     <div className="w-full bg-black py-10 flex justify-center">
//       <div className="flex border-b border-t border-blue-500 divide-x divide-white/40">
//         {stats.map((item, index) => (
//           <StatItem key={index} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsGrid;






import React, { useEffect, useState } from 'react';

const stats = [
  { value: 298, suffix: '+', description: 'Seamless Integeration' },
  { value: 978, suffix: '+', description: 'AI Projects Delivered' },
  { value: 300, suffix: '%', description: 'Handled By AI Bots' },
  { value: 95, suffix: 'X', description: 'Faster Time to Market.' },
];

const AnimatedNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // total duration in ms
    const stepTime = 20; // update interval in ms
    const steps = duration / stepTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
   <div className="text-4xl md:text-8xl font-bold bg-gradient-to-b from-[#EAD6B3] via-[#EAD6B3] to-[#745E39] bg-clip-text text-transparent">
  {count}
  {suffix}
</div>

  );
};

const StatsGrid = () => {
  return (
    <div className="w-full bg-black  px-6 font-sans">
      <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-[#d0b78f]/40 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="px-6 md:px-12 py-6 text-center flex flex-col items-center"
          >
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <p className="text-white mt-2 text-sm md:text-base max-w-xs leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;