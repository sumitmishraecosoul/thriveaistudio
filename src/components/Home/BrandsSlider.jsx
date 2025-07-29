// BrandSlider.jsx
import React from "react";
import "./BrandSlider.css";
import ETSY from "../../assets/icons/ETSY.svg";
import FacebookAds from "../../assets/icons/FacebookAds.svg";
import FlipkartMinutes from "../../assets/icons/FlipkartMinutes.svg";
import GoogleAds from "../../assets/icons/GoogleAds.svg";

// const brands = [
//   { name: "Etsy", image: ETSY },
//   { name: "Facebook Ads", image: FacebookAds },
//   { name: "Flipkart Minutes", image: FlipkartMinutes },
//   { name: "Google Ads", image: GoogleAds },
//   { name: "Flipkart", image: FlipkartMinutes },
// ];

// const BrandSlider = () => {
//   return (
//     <div className="w-full bg-black py-10 overflow-hidden">
//       <h2 className="text-center text-[#FFE1AF] text-2xl md:text-4xl font-semibold mb-10">
//         Backed by the Brands Who Lead— <span className="text-[#EAD6B3]">and Scale</span>
//       </h2>
//       <div className="slider">
//         <div className="slide-track">
//           {[...brands, ...brands].map((brand, index) => (
//             <div
//               key={index}
//               className="slide shadow-inner rounded-2xl border border-[#134860] bg-gradient-to-b from-[#134860] to-[#0F2F44] flex items-center justify-center p-6 min-w-[200px] h-[100px]"
//             >
//               <img src={brand.image} alt={brand.name} className="h-12 object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandSlider;




// import React from "react";
// import "./BrandSlider.css";

// const brands = [
//     ETSY,
//     FacebookAds,
//     FlipkartMinutes,
//     GoogleAds,
//     FacebookAds,
//     FlipkartMinutes,
//     ETSY,
//     GoogleAds,
// ];

// const BrandSlider = () => {
//   return (
//     <div className="w-full bg-black py-12 overflow-hidden relative">
//       <h2 className="text-center text-[#FFE1AF] text-2xl md:text-4xl font-semibold mb-10">
//         Backed by the Brands Who Lead— <span className="font-bold">and Scale</span>
//       </h2>

//       <div className="slider">
//         <div className="slide-track">
//           {[...brands, ...brands].map((logo, index) => (
//             <div
//               className="slide min-w-[220px] h-[120px] rounded-2xl shadow-lg border border-[#1c4e5d] flex items-center justify-center"
//               style={{
//                 background: "linear-gradient(135deg, #156489, #0A2D3D)"
//               }}
//               key={index}
//             >
//               <img src={logo} alt={`brand-${index}`} className="h-28 object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandSlider;


import "./BrandSlider.css";

const brands = [
    ETSY,
    FacebookAds,
    FlipkartMinutes,
    GoogleAds,
    FacebookAds,
    FlipkartMinutes,
    ETSY,
    GoogleAds,
];
const BrandSlider = () => {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 overflow-hidden relative">
      <h2 className="text-center text-[#FFE1AF] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-12">
        Backed by the Brands Who Lead— <span className="font-bold">and Scale</span>
      </h2>

      <div className="slider">
        <div className="slide-track">
          {[...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              className="slide min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] h-[80px] sm:h-[100px] md:h-[120px] rounded-xl sm:rounded-2xl shadow-lg border border-[#1c4e5d] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #156489, #0A2D3D)",
              }}
            >
              <img src={logo} alt={`brand-${index}`} className="h-12 sm:h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
