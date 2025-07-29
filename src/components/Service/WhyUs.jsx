import React from 'react';
import { motion } from 'framer-motion';
import AIImage from '../../assets/images/AIImageWithShadow.svg'; // Update with your AI image path

// const features = [
//   {
//     title: 'End-to-End Execution',
//     description: 'We bridge strategy, design, engineering to deliver real-world impact - not just ideas.'
//   },
//   {
//     title: 'AI-Native Mindset',
//     description: "AI isn't just an add-on, it's embedded in everything we do for your brand."
//   },
//   {
//     title: 'CX at the Core',
//     description: 'Every touchpoint that we design is made to enhance the customer experience and trigger conversion.'
//   },
//   {
//     title: 'Data-Driven by Default',
//     description: 'Smarter systems are built with structured, actionable data at the core of every decision.'
//   }
// ];

// const WhyUs = () => {
//   return (
//     <section className="relative bg-black text-white py-16 flex flex-col items-center justify-center overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-semibold mb-8 border border-[#1077A7] px-6 py-2 rounded-md text-[#1077A7]">
//         Why Us?
//       </h2>

//       {/* Central AI Image */}
//       <div className="relative mb-12">
//         <img src={AIImage} alt="AI" className="w-450 md:w-600 opacity-80" />
//         <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-[#1077A7]">
//           AI
//         </span>
//       </div>

//       {/* Feature Boxes */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl relative z-10">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
//             viewport={{ once: false, amount: 0.5 }}
//             className="bg-[#0A5A7C] bg-opacity-60 rounded-xl p-4 md:p-6 text-center shadow-lg backdrop-blur-sm"
//           >
//             <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
//             <p className="text-sm text-gray-200">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyUs;




const features = [
  {
    title: 'End-to-End Execution',
    description: 'We bridge strategy, design, engineering to deliver real-world impact - not just ideas.'
  },
  {
    title: 'AI-Native Mindset',
    description: "AI isn't just an add-on, it's embedded in everything we do for your brand."
  },
  {
    title: 'CX at the Core',
    description: 'Every touchpoint that we design is made to enhance the customer experience and trigger conversion.'
  },
  {
    title: 'Data-Driven by Default',
    description: 'Smarter systems are built with structured, actionable data at the core of every decision.'
  }
];

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center ">
     <h2 className="text-3xl md:text-4xl font-semibold mb-12 border border-[#1077A7] px-48 py-2 rounded-md text-[#1077A7]">
        Why Us?
      </h2>
    <section className="relative bg-black text-white py-16 flex flex-col  justify-center overflow-hidden">

      {/* AI Image as Background */}
      <div className="absolute inset-0  flex opacity-80 z-0">
        <img src={AIImage} alt="AI Background" className="w-full md:w-full h-full object-contain" />
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-5xl relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-br from-[#0A5A7C] to-[#043347] bg-opacity-60 rounded-2xl p-6 text-center shadow-xl border border-blue-600 backdrop-blur-md"
          >
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-200">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default WhyUs;
