import React, { useEffect, useState } from 'react';

const stats = [
  { value: 86, suffix: '%', description: 'of buyers will pay\nmore for great CX' },
  { value: 5, suffix: 'x', description: 'Loyal customers are\nmore likely to repurchase' },
  { value: 80, suffix: '%', description: 'Increase in Real-time\npersonalizations' },
];

const AnimatedNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
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
    <div className="text-5xl md:text-6xl font-bold text-[#f5d7a0] leading-none">
      {count}
      {suffix}
    </div>
  );
};

const CXStats = () => {
  return (
    <div className="w-full md:w-full lg:w-full bg-black px-6 pb-8 text-center font-sans">
      <h2 className="text-3xl md:text-4xl text-[#EED4AD] font-medium mb-12">
        Because Great CX is the Fastest Growth Lever
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-40 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-2 px-4">
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <p className="text-sm md:text-base text-[#EED4AD] whitespace-pre-line">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CXStats;
