import React from 'react';
import ProductEngineeringBannerBg from '../../assets/images/ProductEngineeringBanner.svg'; // Use your actual image path

const ProductEngineeringBanner = () => {
  return (
    <section
      className="w-full min-h-[200px] bg-cover bg-center flex flex-col justify-center px-6 md:px-20 py-12"
      style={{ backgroundImage: `url(${ProductEngineeringBannerBg})`,           backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-[#EDD5B1] mt-24 mb-4">
       Build the Next MVP Product with Us 
      </h1>

      <p className="text-[#52C1E1] text-sm md:text-lg max-w-2xl mb-6">
       From internal portals to customer-facing apps, we engineer scalable digital products that evolve with your business.
      </p>

      <button className="px-20 py-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full text-sm md:text-base font-medium hover:scale-105 transition w-max">
        Connect Now
      </button>
    </section>
  );
};

export default ProductEngineeringBanner;
