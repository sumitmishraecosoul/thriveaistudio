// // ContactUs.jsx
// import React from "react";
// import ContactusShadowBg from "../assets/images/contactus_shadow_bg.svg";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Home/Footer";

// const ContactUs = () => {
//   return (
//     <div className="bg-black text-white font-sans">
//        <Navbar />
//     <div
//       className="min-h-screen flex flex-col justify-center items-center px-4 py-12  bg-center bg-no-repeat"
//     //  style={{
//     //         backgroundImage: `url(${ContactusShadowBg})`,
//     //     }}
//     >
//         <div className="w-full max-w-4xl rounded-lg shadow-lg p-8 mb-12">
//             <h1 className="text-5xl md:text-6xl font-bold text-[#EED4AD]">
//             Thrive with Us. <span className="text-[#55ACD5]">Connect Now</span>
//           </h1>
//           <p className="mt-6 text-4xl md:text-lg text-[#55ACD5]">
//             With a creative team and extensive industry experience, our
//             e-commerce managing services are here to help you thrive. Get in
//             touch with our team and let's explore opportunities together.
//           </p>
//              </div>
//       <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 text-[#EED4AD]">
//         {/* Left Side Content */}
        
//         <div className="flex flex-col ">
          

//           <div className="">
//             <h2 className="text-3xl font-semibold mb-2 text-[#55ACD5]">Contact Us | Thrive</h2>
//             <p className="text-[#55ACD5] text-lg">
//               We're dedicated to empowering individuals and businesses alike.
//               Let's explore opportunities together.
//             </p>
//           </div>
//         </div>

//         {/* Right Side Form */}
//         <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="First Name*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <input
//             type="text"
//             placeholder="Last Name*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <input
//             type="email"
//             placeholder="Email*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <textarea
//             placeholder="Message*"
//             rows="5"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-full"
//           ></textarea>
//           <button
//             type="submit"
//             className="col-span-full bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold py-3 rounded-md hover:opacity-90"
//           >
//             THRIVE WITH US
//           </button>
//         </form>
//       </div>
//     </div>
//     <Footer />
//     </div>
//   );
// };

// export default ContactUs;




import React from "react";
import ContactusShadowBg from "../assets/images/contactus_shadow_bg.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Home/Footer";

const ContactUs = () => {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Navbar />

      <div
        className="flex flex-col items-center justify-start px-4 py-16 bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: `url(${ContactusShadowBg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Hero Title */}
        <div className="w-full max-w-6xl mb-12 text-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EED4AD] leading-tight">
            Thrive with Us. <span className="text-[#55ACD5]">Connect Now</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#55ACD5]">
            With a creative team and extensive industry experience, our
            e-commerce managing services are here to help you thrive. Get in
            touch with our team and let's explore opportunities together.
          </p>
        </div>

        {/* Form and Content */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#55ACD5] mb-4">
              Contact Us | Thrive
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#EED4AD]">
              We're dedicated to empowering individuals and businesses alike.
              Let's explore opportunities together.
            </p>
          </div>

          {/* Right Column - Form */}
          <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
            />
            <textarea
              placeholder="Message*"
              rows="5"
              className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-full"
            ></textarea>
            <button
              type="submit"
              className="col-span-full bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold py-3 rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              THRIVE WITH US
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
