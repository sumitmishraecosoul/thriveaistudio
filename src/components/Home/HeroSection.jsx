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


import RightArrow from "../../assets/icons/ArrowRight.svg";

const HeroSection = () => {
  return (
    <section className="text-white px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 py-12 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
        Scale Smarter. Grow Faster.
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 mb-8 max-w-3xl">
        AI-Powered Brand Acceleration for Ecommerce Leaders
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center">
        <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 py-3 rounded-full transition duration-300 w-full sm:w-auto">
          Let’s Talk
        </button>

        <button className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] hover:opacity-90 text-[#FFE1AF] text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition duration-300 w-full sm:w-auto">
          Read Our Blog
          <img src={RightArrow} alt="Right Arrow" className="h-6 sm:h-8 lg:h-10" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
