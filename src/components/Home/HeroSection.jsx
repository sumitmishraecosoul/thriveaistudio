// import RightArrow from "../../assets/icons/ArrowRight.svg";
// const HeroSection = () => {
//   return (
//     <section className="text-white px-6  min-h-[40vh] flex flex-col items-center justify-center text-center">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">Scale Smarter. Grow Faster.</h1>
//       <p className="text-lg md:text-xl text-blue-300 mb-8">AI-Powered Brand Acceleration for Ecommerce Leaders</p>
//       <div className="flex gap-4">
//         {/* <button className="bg-[#11729f] hover:bg-[#125f87] text-[#FFE1AF] text-3xl px-10 py-3 rounded-full ">Let’s Talk</button> */}
//         {/* <button className="bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-3xl px-10 py-3 rounded-full transition duration-300">Let’s Talk</button> */}
//         <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-3xl px-10 py-3 rounded-full transition duration-300">
//   Let’s Talk
// </button>

//         <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-3xl px-8 py-3 rounded-full flex items-center gap-2 transition duration-300">
//   Read Our Blog
//   <span>
//     <img src={RightArrow} alt="Right Arrow" className="h-10" />
//   </span>
// </button>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import RightArrow from "../../assets/icons/ArrowRight.svg";

// const HeroSection = () => {
//   return (
//     <section className="text-white px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 py-12 min-h-[60vh] flex flex-col items-center justify-center text-center">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
//         Scale Smarter. Grow Faster.
//       </h1>
//       <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 mb-8 max-w-3xl">
//         AI-Powered Brand Acceleration for Ecommerce Leaders
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center">
//         <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 py-3 rounded-full transition duration-300 w-full sm:w-auto">
//           Let’s Talk
//         </button>

//         <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition duration-300 w-full sm:w-auto">
//           Read Our Blog
//           <img src={RightArrow} alt="Right Arrow" className="h-6 sm:h-8 lg:h-10" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// import { useEffect, useState } from "react";
// import RightArrow from "../../assets/icons/ArrowRight.svg";

// const HeroSection = () => {
//   const [currentWord, setCurrentWord] = useState(0);
//   const words = ["Decisions", "Insights", "Progress", "Growth", "Strategies"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % words.length);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="text-white px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 py-12 min-h-[60vh] flex flex-col items-center justify-center text-center">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
//         AI-Powered Acceleration for Scalable{" "}
//         <span className="inline-block min-w-[180px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
//           <span className="inline-block animate-fadeInOut">
//             {words[currentWord]}
//           </span>
//         </span>
//       </h1>
//       <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 mb-8 max-w-3xl">
//         AI-Powered Brand Acceleration for Ecommerce Leaders
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center">
//         <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 py-3 rounded-full transition duration-300 w-full sm:w-auto">
//           Let's Talk
//         </button>

//         <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition duration-300 w-full sm:w-auto">
//           Read Our Blog
//           <img src={RightArrow} alt="Right Arrow" className="h-6 sm:h-8 lg:h-10" />
//         </button>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInOut {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           20% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           80% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//         }
//         .animate-fadeInOut {
//           animation: fadeInOut 1s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RightArrow from "../../assets/icons/ArrowRight.svg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Decisions", "Insights", "Progress", "Growth", "Strategies"];
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
    <section className="text-white px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 py-12 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
        AI-Powered Acceleration for Scalable{" "}
        <span 
          className="inline-block text-left" 
          style={{ width: maxWidth, minWidth: maxWidth }}
        >
          <span className="inline-block animate-fadeInOut w-full">
            {words[currentWord]}
          </span>
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 mb-8 max-w-3xl">
        AI-Powered Brand Acceleration for Ecommerce Leaders
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center">
        <button 
          onClick={() => navigate('/contact')}
          className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 py-3 rounded-full transition duration-300 w-full sm:w-auto"
        >
          Connect Now
        </button>
      </div>

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

export default HeroSection;