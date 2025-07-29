import React from 'react';
import AboutUsBg from '../../assets/images/AboutUsBanner.svg'; // replace with your actual image path

const AboutUsBanner = () => {
  return (
    <section
      className="w-full min-h-[500px] bg-black bg-cover bg-center flex flex-col justify-center items-start text-white px-6 md:px-20 py-12 space-y-6"
      style={{ backgroundImage: `url(${AboutUsBg})` }}
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold text-[#EDD5B1] mt-24 mb-2">
          Re-imagining Growth
        </h1>
        <h2 className="text-3xl md:text-3xl text-[#52C1E1]">
          for the AI era
        </h2>

        <button
          className="mt-6 px-12 py-2 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-white rounded-full text-sm md:text-base font-medium hover:scale-105 transition"
        >
          Let's Talk
        </button>
      </div>

      <p className="text-sm md:text-xl text-gray-300 max-w-3xl text-center self-center">
  From transforming raw into actionable insights to crafting highly innovation products, 
  we embed AI to every layer of your brand - building the products and infrastructure 
  needed to scale in the AI era.
</p>

    </section>
  );
};

export default AboutUsBanner;
