// import React from "react";
// import BrainGif from "../assets/images/BrainGIIF.gif"; // Replace with actual path

// const RealProblemsSection = () => {
//   return (
//     <div className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-[#156489] to-[#0A2D3D] text-white relative">
//       {/* Header */}
//       <div className="text-center mb-16 px-4">
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#FFE1AF]">
//           Some Real Problems Brands Face with <span className="text-white">AI</span>
//         </h2>
//         <p className="text-lg md:text-xl mt-4 text-gray-200">
//           AI offers smarter decisions, speed and scalability – But for most brands, reality is different.
//         </p>
//       </div>

//       {/* Content Grid */}
//       <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
//         {/* Top Row */}
//         <div className="text-center shadow-xl p-4 md:p-6 bg-opacity-0 backdrop-blur-md">
//           <h3 className="text-[#FFE1AF] font-semibold text-lg md:text-xl">
//             One-Size-Fits-All Tech
//           </h3>
//           <p className="text-gray-200 mt-2">
//             Prebuilt AI never offers customized solutions that align with market, growth goals and products.
//           </p>
//         </div>
//         <div className="text-center shadow-xl p-4 md:p-6 bg-opacity-0 backdrop-blur-md">
//           <h3 className="text-[#FFE1AF] font-semibold text-lg md:text-xl">
//             Data Overload, Insight Shortage
//           </h3>
//           <p className="text-gray-200 mt-2">
//             Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
//           </p>
//         </div>
//         <div className="text-center shadow-xl p-4 md:p-6 bg-opacity-0 backdrop-blur-md">
//           <h3 className="text-[#FFE1AF] font-semibold text-lg md:text-xl">
//             AI without ROI
//           </h3>
//           <p className="text-gray-200 mt-2">
//             Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of.
//           </p>
//         </div>

//         {/* Brain GIF Centered */}
//         <div className="md:col-span-3 flex justify-center my-10">
//           <img
//             src={BrainGif}
//             alt="AI Brain"
//             className="w-[220px] md:w-[280px] object-contain"
//           />
//         </div>

//         {/* Bottom Row */}
//         <div className="text-center shadow-xl p-4 md:p-6 bg-opacity-0 backdrop-blur-md">
//           <h3 className="text-[#FFE1AF] font-semibold text-lg md:text-xl">
//             Design That Doesn’t Convert
//           </h3>
//           <p className="text-gray-200 mt-2">
//             Your brand looks good—but does it move people to act?
//           </p>
//         </div>
//         <div className="text-center shadow-xl p-4 md:p-6 bg-opacity-0 backdrop-blur-md">
//           <h3 className="text-[#FFE1AF] font-semibold text-lg md:text-xl">
//             Strategies That Actually Work
//           </h3>
//           <p className="text-gray-200 mt-2">
//             Without an AI-aligned growth strategy, your brand’s potential gets stuck at “almost.”
//           </p>
//         </div>
//       </div>

//       {/* Glowing Shadows (Optional Fancy Background) */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(21,100,137,0.3)_0%,_transparent_70%)] pointer-events-none z-0"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(10,45,61,0.3)_0%,_transparent_70%)] pointer-events-none z-0"></div>
//     </div>
//   );
// };

// export default RealProblemsSection;





// import React from 'react';
// import BrainGif from "../assets/images/BrainGIIF.gif";

// const ProblemsWithAI = () => {
//   return (
//     <div className="bg-black text-white py-12 px-4 md:px-16 relative">
//       <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">
//         Some Real Problems <span className="text-yellow-400">Brands Face with AI</span>
//       </h2>
//       <p className="text-center text-gray-300 mb-12">
//         AI offers smarter decisions, speed and scalability - But for most brands, reality is different.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//         {/* Left Side */}
//         <div className="flex flex-col gap-8 justify-center items-center md:items-end text-right">
//           <div className="max-w-xs shadow-lg p-2 bg-gradient-to-r from-black via-gray-900 to-black rounded">
//             <h3 className="text-yellow-400 font-semibold mb-1">One-Size-Fits-All Tech</h3>
//             <p className="text-gray-300 text-sm">
//               Prebuilt AI never offers customized solutions that align with market, growth goals and products.
//             </p>
//           </div>

//           <div className="max-w-xs shadow-lg p-2 bg-gradient-to-r from-black via-gray-900 to-black rounded">
//             <h3 className="text-yellow-400 font-semibold mb-1">Design That Doesn't Convert</h3>
//             <p className="text-gray-300 text-sm">
//               Your brand looks good—but does it move people to act?
//             </p>
//           </div>
//         </div>

//         {/* Center Image */}
//         <div className="flex justify-center items-center">
//           <img src={BrainGif} alt="AI Brain" className="w-52 md:w-64 lg:w-72" />
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col gap-8 justify-center items-center md:items-start text-left">
//           <div className="max-w-xs shadow-lg p-2 bg-gradient-to-r from-black via-gray-900 to-black rounded">
//             <h3 className="text-yellow-400 font-semibold mb-1">Data Overload, Insight Shortage</h3>
//             <p className="text-gray-300 text-sm">
//               Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
//             </p>
//           </div>

//           <div className="max-w-xs shadow-lg p-2 bg-gradient-to-r from-black via-gray-900 to-black rounded">
//             <h3 className="text-yellow-400 font-semibold mb-1">AI without ROI</h3>
//             <p className="text-gray-300 text-sm">
//               Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of.
//             </p>
//           </div>

//           <div className="max-w-xs shadow-lg p-2 bg-gradient-to-r from-black via-gray-900 to-black rounded">
//             <h3 className="text-yellow-400 font-semibold mb-1">Strategies That Actually Work</h3>
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
// import BrainGif from "../../assets/images/BrainGIIF.gif";
// import ShadowEffect from '../../assets/images/shadowbg.png'; // Your shadow effect image

// const ProblemsWithAI = () => {
//   return (
//     <div className="bg-black text-white py-12 px-4 md:px-16">
//       <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4">
//         Some Real Problems <span className="text-yellow-400">Brands Face with AI</span>
//       </h2>
//       <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
//         AI offers smarter decisions, speed and scalability - But for most brands, reality is different.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
//         {/* Left Column */}
//         <div className="flex flex-col gap-6 items-center md:items-end text-center md:text-right">
//           <div
//             className="max-w-xs p-4 bg-center bg-no-repeat bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold mb-2">One-Size-Fits-All Tech</h3>
//             <p className="text-gray-300 text-sm">
//               Prebuilt AI never offers customized solutions that align with market, growth goals and products.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-4 bg-center bg-no-repeat bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold mb-2">Design That Doesn't Convert</h3>
//             <p className="text-gray-300 text-sm">
//               Your brand looks good—but does it move people to act?
//             </p>
//           </div>
//         </div>

//         {/* Center GIF */}
//         <div className="flex justify-center items-center">
//           <img src={BrainGif} alt="AI Brain" className="w-52 md:w-64 lg:w-72" />
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
//           <div
//             className="max-w-xs p-4 bg-center bg-no-repeat bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold mb-2">Data Overload, Insight Shortage</h3>
//             <p className="text-gray-300 text-sm">
//               Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-4 bg-center bg-no-repeat bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold mb-2">AI without ROI</h3>
//             <p className="text-gray-300 text-sm">
//               Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-4 bg-center bg-no-repeat bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-yellow-400 font-semibold mb-2">Strategies That Actually Work</h3>
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



// const ProblemsWithAI = () => {
//   return (
//     <div className="bg-black text-white py-12 px-4 md:px-16 relative">
//       <h2 className="text-center text-3xl font-semibold mb-4">
//         Some Real Problems <span className="text-yellow-400">Brands Face with AI</span>
//       </h2>
//       <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
//         AI offers smarter decisions, speed and scalability - But for most brands, reality is different.
//       </p>

//       {/* Top Center Tile */}
//       <div className="flex justify-center mb-12">
//         <div
//           className="max-w-md p-4 bg-no-repeat bg-center bg-contain text-center"
//           style={{ backgroundImage: `url(${ShadowEffect})` }}
//         >
//           <h3 className="text-yellow-400 font-semibold text-lg mb-2">Data Overload, Insight Shortage</h3>
//           <p className="text-gray-300 text-sm">
//             Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
//           </p>
//         </div>
//       </div>

//       {/* Three Columns */}
//       <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
//         {/* Left Column */}
//         <div className="flex flex-col gap-8 items-center md:items-end text-center md:text-right">
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
//         <div className="flex justify-center items-center">
//           <img src={BrainGif} alt="AI Brain" className="w-56 md:w-64 lg:w-72" />
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
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





// const ProblemsWithAI = () => {
//   return (
//     <div className="bg-black text-white font-roboto py-12 px-4 md:px-16 relative">
//       {/* Main Heading */}
//       <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
//         Some Real Problems <span className="text-[#EDD5B1]">Brands Face with AI</span>
//       </h2>
//       <p className="text-center text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
//         AI offers smarter decisions, speed and scalability - But for most brands, reality is different.
//       </p>

//       {/* Center Top Tile */}
//       <div className="flex justify-center mb-12">
//         <div
//           className="max-w-md p-6 bg-no-repeat bg-center bg-contain text-center"
//           style={{ backgroundImage: `url(${ShadowEffect})` }}
//         >
//           <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">Data Overload, Insight Shortage</h3>
//           <p className="text-gray-300 text-base md:text-lg">
//             Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12">
//         {/* Left Side */}
//         <div className="flex flex-col gap-12 items-center text-center">
//           <div
//             className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">One-Size-Fits-All Tech</h3>
//             <p className="text-gray-300 text-base md:text-lg">
//               Prebuilt AI never offers customized solutions that align with market, growth goals and products.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">Design That Doesn't Convert</h3>
//             <p className="text-gray-300 text-base md:text-lg">
//               Your brand looks good—but does it move people to act?
//             </p>
//           </div>
//         </div>

//         {/* Center GIF */}
//         <div className="flex justify-center items-center">
//           <img src={BrainGif} alt="AI Brain" className="w-64 md:w-72 lg:w-84" />
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col gap-12 items-center text-center">
//           <div
//             className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">AI without ROI</h3>
//             <p className="text-gray-300 text-base md:text-lg">
//               Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-6 bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: `url(${ShadowEffect})` }}
//           >
//             <h3 className="text-[#EDD5B1] font-semibold text-xl md:text-2xl mb-3">Strategies That Actually Work</h3>
//             <p className="text-gray-300 text-base md:text-lg">
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
// import BrainGif from '../../assets/brain.gif'; // Center GIF
// import ShadowEffect from '../../assets/shadow-effect.png'; // Shadow background image


// import React from 'react';
// import BrainGif from "../../assets/images/BrainGIIF.gif";
// import ShadowEffect from '../../assets/images/shadowbg.png';

// const ProblemsWithAI = () => {
//   return (
//     <div className="bg-black text-white font-roboto py-12 px-4 md:px-16 relative">
//       {/* Main Heading */}
//       <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
//         Some Real Problems <span style={{ color: '#EDD5B1' }}>Brands Face with AI</span>
//       </h2>
//       <p className="text-center text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
//         AI offers smarter decisions, speed and scalability - But for most brands, reality is different.
//       </p>

//       {/* Center Top Tile */}
//       <div className="flex justify-center mb-12">
//         <div
//           className="max-w-md p-6 text-center"
//           style={{
//             backgroundImage: `url(${ShadowEffect})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundSize: '150%', // Enlarged shadow
//           }}
//         >
//           <h3 className="font-semibold text-2xl mb-3" style={{ color: '#EDD5B1' }}>
//             Data Overload, Insight Shortage
//           </h3>
//           <p className="text-gray-300 text-lg">
//             Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12">
//         {/* Left Side */}
//         <div className="flex flex-col gap-12 items-center text-center">
//           <div
//             className="max-w-xs p-6"
//             style={{
//               backgroundImage: `url(${ShadowEffect})`,
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//               backgroundSize: '150%',
//             }}
//           >
//             <h3 className="font-semibold text-2xl mb-3" style={{ color: '#EDD5B1' }}>
//               One-Size-Fits-All Tech
//             </h3>
//             <p className="text-gray-300 text-lg">
//               Prebuilt AI never offers customized solutions that align with market, growth goals and products.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-6"
//             style={{
//               backgroundImage: `url(${ShadowEffect})`,
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//               backgroundSize: '150%',
//             }}
//           >
//             <h3 className="font-semibold text-2xl mb-3" style={{ color: '#EDD5B1' }}>
//               Design That Doesn't Convert
//             </h3>
//             <p className="text-gray-300 text-lg">
//               Your brand looks good—but does it move people to act?
//             </p>
//           </div>
//         </div>

//         {/* Center GIF */}
//         <div className="flex justify-center items-center">
//           {/* <img
//             src={BrainGif}
//             alt="AI Brain"
//             className="w-72 md:w-96 lg:w-[500px]" // Increased GIF size
//           /> */}
//           <img
//   src={BrainGif}
//   alt="AI Brain"
//   className="w-96 md:w-[600px] transition-transform duration-300 hover:scale-110"
// />

//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col gap-12 items-center text-center">
//           <div
//             className="max-w-xs p-6"
//             style={{
//               backgroundImage: `url(${ShadowEffect})`,
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//               backgroundSize: '150%',
//             }}
//           >
//             <h3 className="font-semibold text-2xl mb-3" style={{ color: '#EDD5B1' }}>
//               AI without ROI
//             </h3>
//             <p className="text-gray-300 text-lg">
//               Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of.
//             </p>
//           </div>

//           <div
//             className="max-w-xs p-6"
//             style={{
//               backgroundImage: `url(${ShadowEffect})`,
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//               backgroundSize: '150%',
//             }}
//           >
//             <h3 className="font-semibold text-2xl mb-3" style={{ color: '#EDD5B1' }}>
//               Strategies That Actually Work
//             </h3>
//             <p className="text-gray-300 text-lg">
//               Without an AI-aligned growth strategy, your brand’s potential gets stuck at “almost.”
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProblemsWithAI;



import React from 'react';
import BrainGif from "../../assets/images/BrainGIIF.gif";
import ShadowEffect from '../../assets/images/shadowbg.png';

const ProblemsWithAI = () => {
  return (
    <div className="bg-black text-white font-roboto py-12 px-4 sm:px-6 md:px-12 lg:px-20 relative">
      {/* Main Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Some Real Problems <span style={{ color: '#EDD5B1' }}>Brands Face with AI</span>
      </h2>
      <p className="text-center text-gray-300 mb-10 text-base sm:text-lg max-w-3xl mx-auto px-2">
        AI offers smarter decisions, speed and scalability — But for most brands, reality is different.
      </p>

      {/* Center Top Tile */}
      <div className="flex justify-center mb-12">
        <div
          className="w-full max-w-md p-6 text-center"
          style={{
            backgroundImage: `url(${ShadowEffect})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '150%',
          }}
        >
          <h3 className="font-semibold text-xl sm:text-2xl mb-3" style={{ color: '#EDD5B1' }}>
            Data Overload, Insight Shortage
          </h3>
          <p className="text-gray-300 text-base sm:text-lg">
            Brands are sitting on mountains of data, but can’t convert it into clear, actionable strategies.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-20">
        {/* Left Boxes */}
        <div className="flex flex-col gap-10 items-center text-center">
          {[{
            title: "One-Size-Fits-All Tech",
            desc: "Prebuilt AI never offers customized solutions that align with market, growth goals and products."
          }, {
            title: "Design That Doesn't Convert",
            desc: "Your brand looks good—but does it move people to act?"
          }].map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-xs p-6"
              style={{
                backgroundImage: `url(${ShadowEffect})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '150%',
              }}
            >
              <h3 className="font-semibold text-xl sm:text-2xl mb-3" style={{ color: '#EDD5B1' }}>
                {item.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center GIF */}
        <div className="flex justify-center items-center py-8 lg:py-0">
          <img
            src={BrainGif}
            alt="AI Brain"
            className="w-72 sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[650px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Boxes */}
        <div className="flex flex-col gap-10 items-center text-center">
          {[{
            title: "AI without ROI",
            desc: "Implementing AI is a piece of cake. But, making it perform? That’s where most brands fall short of."
          }, {
            title: "Strategies That Actually Work",
            desc: "Without an AI-aligned growth strategy, your brand’s potential gets stuck at “almost.”"
          }].map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-xs p-6"
              style={{
                backgroundImage: `url(${ShadowEffect})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '150%',
              }}
            >
              <h3 className="font-semibold text-xl sm:text-2xl mb-3" style={{ color: '#EDD5B1' }}>
                {item.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemsWithAI;
