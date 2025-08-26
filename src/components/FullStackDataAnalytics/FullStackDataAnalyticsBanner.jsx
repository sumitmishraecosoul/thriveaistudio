// import React from 'react';
// import ServiceBg from '../../assets/images/FullStackBanner.svg'; // Use your actual image path

// const FullStackDataAnalyticsBanner = () => {
//   return (
//     <section
//       className="w-full min-h-[200px] bg-cover bg-center flex flex-col justify-center px-6 md:px-20 py-12"
//       style={{ backgroundImage: `url(${ServiceBg})`,           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center", }}
//     >
//       <h1 className="text-3xl md:text-5xl font-bold text-[#EDD5B1] mt-24 mb-4">
//        Turn Raw Data into Actionable Insights
//       </h1>

//       <p className="text-[#52C1E1] text-sm md:text-lg max-w-2xl mb-6">
//        Offering end-to-end Data Solutions, we integrate, store, visualize and predict to help you make smarter decisions. 
//       </p>

//       <button className="px-20 py-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full text-sm md:text-base font-medium hover:scale-105 transition w-max">
//         Connect with Us
//       </button>
//     </section>
//   );
// };

// export default FullStackDataAnalyticsBanner;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceBg from '../../assets/images/FullStackBanner.svg';

const FullStackDataAnalyticsBanner = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Insights", "Strategies", "Decisions", "Opportunities", "Intelligence"];
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
      className="w-full min-h-[200px] bg-cover bg-center flex flex-col justify-center px-6 md:px-20 py-12"
      style={{ 
        backgroundImage: `url(${ServiceBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-[#EDD5B1] mt-24 mb-4">
        Turn Raw Data into Actionable{" "}
        <span 
          className="inline-block text-left" 
          style={{ width: maxWidth, minWidth: maxWidth }}
        >
          <span className="inline-block animate-fadeInOut w-full">
            {words[currentWord]}
          </span>
        </span>
      </h1>

      <p className="text-[#52C1E1] text-sm md:text-lg max-w-2xl mb-6">
        Offering end-to-end Data Solutions, we integrate, store, visualize and predict to help you make smarter decisions. 
      </p>

      <button 
        onClick={() => navigate('/contact')}
        className="px-20 py-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full text-sm md:text-base font-medium hover:scale-105 transition w-max"
      >
        Connect Now
      </button>

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

export default FullStackDataAnalyticsBanner;