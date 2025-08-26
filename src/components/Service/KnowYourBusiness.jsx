import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobilePhones from '../../assets/images/MobileWithShadow.png';  // adjust path if needed

const KnowYourBusiness = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white py-12 flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="border border-[#1077A7] px-6 py-2 rounded-md text-[#1077A7] text-xl md:text-2xl mb-8">
        Know Your Business At Fingertips - Vector Ai
      </h2>

      {/* Mobile Phones Image */}
      <div className="w-full max-w-full mb-8">
        <img
          src={MobilePhones}
          alt="Vector AI Mobile Preview"
          className="w-full h-auto "
        />
      </div>

      {/* CTA Button */}
      <button 
        onClick={() => navigate('/contact')}
        className="bg-gradient-to-r from-[#1A5069] via-[#1A5069] to-[#0F7BAE] text-[#EED4AD] hover:bg-[#0A5A7C] text-lg px-12 py-4 rounded-full transition-all duration-300"
      >
        Connect Now
      </button>
    </section>
  );
};

export default KnowYourBusiness;
