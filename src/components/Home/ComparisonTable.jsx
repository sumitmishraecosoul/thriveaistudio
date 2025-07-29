// import React from "react";
// import cross from "../assets/icons/cross.svg";
// import tick from "../assets/icons/tick.svg";
// const features = [
//   "End-to-End management of complex data & insight generation",
//   "AI processors that generates data into new ideas",
//   "Generate actionable outputs like business intelligence, business analytics, images or text",
//   "Automated complex tasks like planning, forecasting and predictions",
//   "Better adaptability to new business situations and trend mapping",
//   "Offer simplified interfaces with AI assistants",
// ];

// const ComparisonTable = () => {
//   return (
//     <div className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4 py-16">
//       <div className="w-full max-w-6xl border border-gray-700 rounded-lg overflow-hidden">
//         {/* Header Row */}
//         <div className="grid grid-cols-3 bg-gradient-to-r from-[#0C0C0C] to-[#121212] text-white text-center text-sm md:text-base font-semibold border-b border-gray-700">
//           <div className="py-4 border-r border-gray-700">Feature</div>
//           <div className="py-4 border-r border-gray-700 bg-[#0E3E58]">AI Backend with Thrive</div>
//           <div className="py-4">Traditional ERP System</div>
//         </div>

//         {/* Data Rows */}
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-3 text-sm md:text-base text-center border-b border-gray-800"
//           >
//             <div className="py-6 px-4 text-left border-r border-gray-800 leading-relaxed">
//               {feature}
//             </div>
//             <div className="flex justify-center items-center border-r border-gray-800">
//               <img src={tick} alt="tick" className="w-6 h-6" />
//             </div>
//             <div className="flex justify-center items-center">
//               <img src={cross} alt="cross" className="w-6 h-6" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ComparisonTable;



import React from "react";
import cross from "../../assets/icons/cross.svg";
import tick from "../../assets/icons/tick.svg";

const features = [
  "End-to-End management of complex data & insight generation",
  "AI processors that generates data into new ideas",
  "Generate actionable outputs like business intelligence, business analytics, images or text",
  "Automated complex tasks like planning, forecasting and predictions",
  "Better adaptability to new business situations and trend mapping",
  "Offer simplified interfaces with AI assistants",
];

const ComparisonTable = () => {
  return (
    <div className="w-full bg-black text-white flex justify-center items-center px-4 pb-16 ">
      <div className="w-full max-w-6xl  rounded-lg overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 text-center text-sm md:text-base font-semibold">
          <div className="py-4 border-r border-gray-700 bg-[#0C0C0C] rounded-tl-md">Feature</div>
          <div className="py-4 border-r border-gray-700 bg-gradient-to-r from-[#0091A7] to-[#0F7BAE] text-black rounded-tr-md">
            AI Backend with Thrive
          </div>
          <div className="py-4 bg-[#0C0C0C]">Traditional ERP System</div>
        </div>

        {/* Features */}
        {features.map((feature, idx) => (
          <div key={idx} className="grid grid-cols-3 text-sm md:text-base text-center">
            {/* Feature description */}
            <div className="py-6 px-4 text-left border-r border-gray-800 leading-relaxed bg-black">
              {feature}
            </div>

            {/* Tick for AI Backend */}
            <div className="flex justify-center items-center border-r border-gray-800 bg-black">
              <img src={tick} alt="tick" className="w-5 h-5 md:w-6 md:h-6" />
            </div>

            {/* Cross for ERP */}
            <div className="flex justify-center items-center bg-black">
              <img src={cross} alt="cross" className="w-5 h-5 md:w-6 md:h-6" />
            </div>

            {/* Divider Line */}
            <div className="col-span-3 border-t border-[#0F7BAE] mx-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
