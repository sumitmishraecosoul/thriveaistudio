// import React from 'react';
// import ThriveLogo from "../assets/icons/thrive_logo.svg";

// const Footer = () => {
//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="bg-gradient-to-b from-black via-[#042C3C] to-[#042C3C] text-white px-6 py-10 md:py-16 border-t border-[#B1864E]">
//       <div className="max-w-5xl mx-auto space-y-6">
//         {/* Logo */}
//         <img src={ThriveLogo} alt="Thrive Logo" className="h-10" />

//         {/* Description */}
//         <p className="text-sm md:text-base text-gray-300 leading-relaxed">
//           From crafting innovative products to transforming data into actionable insights, we bring strategies to life.
//         </p>

//         <p className="text-sm md:text-base text-gray-300 leading-relaxed">
//           We deliver end-to-end solutions that unlock growth, drive personalized experiences, and fuel transformation.
//         </p>

//         {/* Back to Top */}
//         <button
//           onClick={scrollToTop}
//           className="flex items-center text-sm md:text-base text-gray-300 mt-8 border-t border-gray-500 pt-4 hover:text-white transition"
//         >
//           Back on top <span className="ml-1">↑</span>
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import ThriveLogo from "../assets/icons/thrive_logo.svg";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="bg-gradient-to-b from-[#03141A] to-[#042C3C] text-gray-300 px-6 md:px-16 py-12 border-t border-[#B1864E]">
//       <div className="max-w-6xl mx-auto space-y-6">
        
//         <img src={ThriveLogo} alt="Thrive Logo" className="h-12" />

//         <p className="text-base leading-relaxed">
//           From crafting innovative products to transforming data into actionable insights, we bring strategies to life.
//         </p>

//         <p className="text-base leading-relaxed">
//           We deliver end-to-end solutions that unlock growth, drive personalized experiences, and fuel transformation.
//         </p>

//         <hr className="border-gray-500 mt-8" />

//         <button
//           onClick={scrollToTop}
//           className="mt-4 text-sm hover:text-white transition flex items-center space-x-1"
//         >
//           <span>Back on top</span>
//           <span>↑</span>
//         </button>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import ThriveLogo from "../../assets/icons/thrive_logo.svg";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="bg-gradient-to-b from-[#03141A] to-[#042C3C] text-gray-300 x-6 md:px-20 py-12 border-t border-[#B1864E]">
//       <div className=" mx-4 space-y-6">
//         {/* <hr className="border border-[#B1864E] my-4 " /> */}
//         <img src={ThriveLogo} alt="Thrive Logo" className="h-12" />

//         <div className="space-y-4 text-left text-xl  leading-relaxed">
//           <p>
//             From crafting innovative products to transforming data into <br/> actionable insights, we bring strategies to life.
//           </p>
//           <p>
//             We deliver end-to-end solutions that unlock growth, drive <br/> personalized experiences, and fuel transformation.
//           </p>
//         </div>

//         {/* <div className="border border-gray-600 my-4 w-full " ></div> */}
//         <hr className="border border-gray-600 my-4 " />

//         <button
//           onClick={scrollToTop}
//           className="text-sm text-left hover:text-white transition flex items-center space-x-1"
//         >
//           <span>Back on top</span>
//           <span>↑</span>
//         </button>

//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import ThriveLogo from "../../assets/icons/thrive_logo.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#03141A] to-[#042C3C] text-gray-300 px-4 sm:px-6 md:px-12 lg:px-20 py-10 border-t border-[#B1864E]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Logo */}
        <div>
          <img src={ThriveLogo} alt="Thrive Logo" className="h-10 sm:h-12 w-auto" />
        </div>

        {/* Text Content */}
        <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed">
          <p>
            From crafting innovative products to transforming data into<br className="hidden sm:block" />
            actionable insights, we bring strategies to life.
          </p>
          <p>
            We deliver end-to-end solutions that unlock growth, drive<br className="hidden sm:block" />
            personalized experiences, and fuel transformation.
          </p>
        </div>

        {/* Divider */}
        <hr className="border border-gray-600 my-2 sm:my-4" />

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="text-sm sm:text-base hover:text-white transition flex items-center space-x-1"
        >
          <span>Back on top</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
