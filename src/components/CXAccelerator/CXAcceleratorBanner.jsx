import React from 'react';
import CXAcceleratorBannerImg from '../../assets/images/CXAcceleratorBannerImg.svg'; // Use your actual image path

const CXAcceleratorBanner = () => {
  return (
    <section
      className="w-full min-h-[200px] bg-cover bg-center flex flex-col justify-center px-6 md:px-20 py-12"
      style={{ backgroundImage: `url(${CXAcceleratorBannerImg})`,           backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-[#EDD5B1] mt-24 mb-4">
       Customer Experience, Reimagined with AI
      </h1>

      <p className="text-[#52C1E1] text-sm md:text-lg max-w-2xl mb-6">
       Using AI to embed real-time intelligence into every Customer Interaction 
      </p>

      <button className="px-20 py-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full text-sm md:text-base font-medium hover:scale-105 transition w-max">
        Book A Call
      </button>
    </section>
  );
};

export default CXAcceleratorBanner;
