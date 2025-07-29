import React from 'react';
import BrainGif from '../../assets/brain.gif'; // center GIF
import ShadowEffect from '../../assets/shadow-effect.png'; // shadow effect bg for each block

// const ProblemsWithAI = () => {
//   return (
//     <div className="bg-black text-white py-12 px-4 md:px-16 relative">
//       {/* Header */}
//       <h2 className="text-center text-3xl font-semibold mb-3">
//         Some Real Problems <span className="text-yellow-400">Brands Face with AI</span>
//       </h2>
//       <p className="text-center text-gray-300 mb-12">
//         AI offers smarter decisions, speed and scalability - But for most brands, reality is different.
//       </p>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
//         {/* Left Side */}
//         <div className="flex flex-col gap-12 items-center md:items-end text-center md:text-right">
//           <div
//             className="max-w-xs p-4 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold text-lg mb-2">One-Size-Fits-All Tech</h3>
//             <p className="text-gray-300 text-sm">
//               Prebuilt AI never offers customized solutions that align with market, growth goals and products.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-4 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold text-lg mb-2">Design That Doesn't Convert</h3>
//             <p className="text-gray-300 text-sm">
//               Your brand looks good—but does it move people to act?
//             </p>
//           </div>
//         </div>

//         {/* Center GIF */}
//         <div className="flex justify-center items-center my-8 md:my-0">
//           <img src={BrainGif} alt="AI Brain" className="w-56 md:w-64 lg:w-72" />
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
//           <div
//             className="max-w-xs p-4 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold text-lg mb-2">Data Overload, Insight Shortage</h3>
//             <p className="text-gray-300 text-sm">
//               Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-4 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold text-lg mb-2">AI without ROI</h3>
//             <p className="text-gray-300 text-sm">
//               Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-4 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold text-lg mb-2">Strategies That Actually Work</h3>
//             <p className="text-gray-300 text-sm">
//               Without an AI-aligned growth strategy, your brand’s potential gets stuck at “almost.”
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProblemsWithAI;



// import React from 'react';
// import BrainGif from '../../assets/brain.gif'; // Central GIF
// import ShadowEffect from '../../assets/shadow-effect.png'; // Shadow background image

const ProblemsWithAI = () => {
  return (
    <div className="bg-black text-white font-roboto py-12 px-4 md:px-16 relative">
      {/* Main Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
        Some Real Problems <span className="text-[#EDD5B1]">Brands Face with AI</span>
      </h2>
      <p className="text-center text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
        AI offers smarter decisions, speed and scalability - But for most brands, reality is different.
      </p>

      {/* Center Top Tile */}
      <div className="flex justify-center mb-12">
        <div
          className="max-w-md p-6 bg-no-repeat bg-center bg-contain text-center"
          style={{ backgroundImage: `url(${ShadowEffect})` }}
        >
          <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">Data Overload, Insight Shortage</h3>
          <p className="text-gray-300 text-base md:text-lg">
            Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12">
        {/* Left Side */}
        <div className="flex flex-col gap-12 items-center text-center">
          <div
            className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${ShadowEffect})` }}
          >
            <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">One-Size-Fits-All Tech</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Prebuilt AI never offers customized solutions that align with market, growth goals and products.
            </p>
          </div>

          <div
            className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${ShadowEffect})` }}
          >
            <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">Design That Doesn't Convert</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Your brand looks good—but does it move people to act?
            </p>
          </div>
        </div>

        {/* Center GIF */}
        <div className="flex justify-center items-center">
          <img src={BrainGif} alt="AI Brain" className="w-56 md:w-64 lg:w-72" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-12 items-center text-center">
          <div
            className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${ShadowEffect})` }}
          >
            <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">AI without ROI</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of.
            </p>
          </div>

          <div
            className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${ShadowEffect})` }}
          >
            <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">Strategies That Actually Work</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Without an AI-aligned growth strategy, your brand’s potential gets stuck at “almost.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsWithAI;
