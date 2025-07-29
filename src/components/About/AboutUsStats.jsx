import React, { useEffect, useState } from 'react';
import AboutUsStatImg from '../../assets/images/AboutUsStatsImg.svg'; 
import AboutGridBackground from '../../assets/images/AboutGridBackground.png'; 


const stats = [
  { value: 20, suffix: '+', description: 'Years of\nindustry experience' },
  { value: 100, suffix: '+', description: 'Successful brand\nonboarding' },
  { value: 30, suffix: '%', description: 'Operational cost\nsaved' },
];

const AnimatedNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; 
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-[#EAD6B3] via-[#EAD6B3] to-[#745E39] bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
};

const AboutUsStats = () => {
  return (
    <div className="w-full bg-black flex flex-col md:flex-row justify-center items-center px-4 md:px-20 py-12 font-sans gap-6 md:gap-12">
      <div className="w-[250px] md:w-[350px] flex-shrink-0"  style={{ backgroundImage: `url(${AboutGridBackground})` }}>
        <img src={AboutUsStatImg} alt="Statistics Visual" className="w-full h-auto" />
      </div>

      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#d0b78f]/50">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center px-6 md:px-12 py-4 md:py-0">
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <p className="text-white mt-2 whitespace-pre-line text-sm md:text-base">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsStats;
