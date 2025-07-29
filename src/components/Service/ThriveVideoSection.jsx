import React from "react";
import ThriveVideo from "../../assets/images/Thrive_video.mp4"; // adjust path if needed

const ThriveVideoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 py-10">
      {/* Top Heading */}
      <div className="border border-[#0ea5e9] rounded-xl px-6 py-2 text-sm md:text-base text-[#0ea5e9] font-semibold text-center">
        Scale Stronger & Rank Higher in the E-Com Domain with <span className="text-[#22d3ee]">Thrive Brands</span>
      </div>

      {/* Video Container */}
      <div className="w-full max-w-full rounded-[2rem] p-[2px] bg-gradient-to-r from-[#7de2fc] via-[#b9b6e5] to-[#EDD5B1]">
        <div className="bg-black rounded-[2rem] p-6 flex flex-col items-center justify-center">
          {/* <p className="text-[#3b82f6] mb-4 text-lg md:text-xl font-medium">Thrive Video Embed</p> */}

          {/* Replace with actual video */}
          <video
            className="w-full max-h-[600px] rounded-xl"
            controls
            muted
            autoPlay
            loop
          >
            <source src={ThriveVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ThriveVideoSection;
