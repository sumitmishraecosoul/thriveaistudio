// import React from 'react';
// import AboutUsBg from '../../assets/images/AboutUsBanner.svg'; // replace with your actual image path

// const AboutUsBanner = () => {
//   return (
//     <section
//       className="w-full min-h-[500px] bg-black bg-cover bg-center flex flex-col justify-center items-start text-white px-6 md:px-20 py-12 space-y-6"
//       style={{ backgroundImage: `url(${AboutUsBg})` }}
//     >
//       <div>
//         <h1 className="text-3xl md:text-5xl font-semibold text-[#EDD5B1] mt-24 mb-2">
//           Re-imagining Growth
//         </h1>
//         <h2 className="text-3xl md:text-3xl text-[#52C1E1]">
//           for the AI era
//         </h2>

//         <button
//           className="mt-6 px-12 py-2 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white rounded-full text-sm md:text-base font-medium hover:scale-105 transition"
//         >
//           Let's Talk
//         </button>
//       </div>

//       <p className="text-sm md:text-xl text-gray-300 max-w-3xl text-center self-center">
//   From transforming raw into actionable insights to crafting highly innovation products, 
//   we embed AI to every layer of your brand - building the products and infrastructure 
//   needed to scale in the AI era.
// </p>

//     </section>
//   );
// };

// export default AboutUsBanner;



import React, { useEffect, useState } from 'react';
import AboutUsBg from '../../assets/images/AboutUsBanner.svg';

const AboutUsBanner = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Growth", "Innovation", "Transformation", "Impact", "Progress"];
  const [prevWord, setPrevWord] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => {
        let nextWord;
        do {
          nextWord = Math.floor(Math.random() * words.length);
        } while (nextWord === prev && words.length > 1);
        setPrevWord(prev);
        return nextWord;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate max width based on the longest word
  const maxWidth = Math.max(...words.map(word => word.length)) * 0.6 + "em";

  return (
    <section
      className="w-full min-h-[500px] bg-black bg-cover bg-center flex flex-col justify-center items-start text-white px-6 md:px-20 py-12 space-y-6"
      style={{ backgroundImage: `url(${AboutUsBg})` }}
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold text-[#EDD5B1] mt-24 mb-2">
          Re-imagining{" "}
          <span 
            className="inline-block text-left" 
            style={{ width: maxWidth, minWidth: maxWidth }}
          >
            <span className="inline-block animate-fadeInOut w-full">
              {words[currentWord]}
            </span>
          </span>
        </h1>
        <h2 className="text-3xl md:text-3xl text-[#52C1E1]">
          for the AI era
        </h2>

        <button
          className="mt-6 px-12 py-2 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white rounded-full text-sm md:text-base font-medium hover:scale-105 transition"
        >
          Let's Talk
        </button>
      </div>

      <p className="text-sm md:text-xl text-gray-300 max-w-3xl text-center self-center">
        From transforming raw into actionable insights to crafting highly innovative products, 
        we embed AI to every layer of your brand - building the products and infrastructure 
        needed to scale in the AI era.
      </p>

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUsBanner;