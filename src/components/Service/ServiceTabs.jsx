// import React, { useState } from 'react';

// const tabs = [
//   {
//     label: 'Full-Stack Data & Analytics',
//     title: 'Convert raw data into real-time advantage.',
//     description: [
//       "Our Full-Stack Data & Engineering services are designed for data management. Here to offer visibility and complete growth over your brand's touchpoints, this is more than just data reporting. It involves transforming data into intelligence, insights and infrastructure that helps you make powerful decisions.",
//       "We collect, clean, unify and activate data across different back-end and front-end reporting dashboards to offer analytics that are reliable, real-time and revenue-focused."
//     ]
//   },
//   {
//     label: 'Product Engineering',
//     title: 'Build products that scale with precision.',
//     description: [
//       "We engineer scalable and future-ready products tailored to business needs. From MVPs to full-scale solutions, we streamline the product journey with cutting-edge tech.",
//       "Our end-to-end development ensures quality, agility, and robust architecture."
//     ]
//   },
//   {
//     label: 'AI Solutions',
//     title: 'Intelligent automation at its best.',
//     description: [
//       "We design AI solutions that automate workflows, enhance decision-making and unlock deep insights from your data assets.",
//       "Our expertise spans machine learning, NLP, and predictive analytics for real business impact."
//     ]
//   },
//   {
//     label: 'Brand Growth Solutions',
//     title: 'Strategies to accelerate brand growth.',
//     description: [
//       "We craft data-driven marketing strategies that boost brand visibility and engagement.",
//       "By leveraging insights, we optimize customer journeys and conversion funnels."
//     ]
//   },
//   {
//     label: 'CX Accelerator',
//     title: 'Transform customer experience with technology.',
//     description: [
//       "Enhance customer satisfaction with tailored CX solutions that foster loyalty.",
//       "Our frameworks ensure seamless experiences across digital touchpoints."
//     ]
//   }
// ];

// const ServicesTabs = () => {
//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   return (
//     <section className="bg-black text-white px-4 md:px-20 py-12">
//       {/* Tabs */}
//       <div className="flex flex-wrap gap-4 mb-10">
//         {tabs.map((tab, index) => (
//         //   <button
//         //     key={index}
//         //     onClick={() => setSelectedTab(tab)}
//         //     className={`px-4 py-2 rounded-full border text-sm md:text-base ${
//         //       selectedTab.label === tab.label
//         //         ? 'border-[#EED4AD] bg-white text-black font-semibold'
//         //         : 'border-transparent text-gray-400 hover:text-white'
//         //     }`}
//         //   >
//         //     {tab.label}
//         //   </button>

//         <button
//   key={index}
//   onClick={() => setSelectedTab(tab)}
//   className={`px-8 py-4 rounded-full text-sm md:text-base relative overflow-hidden ${
//     selectedTab.label === tab.label
//       ? 'text-white font-semibold'
//       : 'text-gray-400 hover:text-white'
//   }`}
// >
//   {/* Background for selected state */}
//   {selectedTab.label === tab.label && (
//     <span className="absolute inset-0 bg-white rounded-full"></span>
//   )}
  
//   {/* Gradient border effect */}
//   <span className={`absolute inset-0 rounded-full p-[15px] ${
//     selectedTab.label === tab.label 
//     //   ? 'border border-gradient-to-b from-[#06202D] via-[#06202D] to-[#06202D] '
//       ? 'border-4 border-t-[#06202D] border-b-[#EED4AD] border-l-[#EED4AD] border-r-[#EED4AD]'
//       : ''
//   }`}>
//     <span className="absolute inset-0 bg-black rounded-full opacity-95"></span>
//   </span>
  
//   {/* Button content */}
//   <span className="relative z-10">
//     {tab.label}
//   </span>
// </button>
//         ))}
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl md:text-4xl font-bold mb-6">
//         <span className="text-[#D1AF77]">{selectedTab.title.split(' ')[0]} </span>
//         <span className="text-[#50BFE3]">{selectedTab.title.split(' ')[1]} </span>
//         <span className="text-[#D1AF77]">{selectedTab.title.split(' ').slice(2).join(' ')}</span>
//       </h2>

//       {/* Description */}
//       <div className="space-y-4 max-w-3xl mb-8 text-gray-300 text-sm md:text-base leading-relaxed">
//         {selectedTab.description.map((para, idx) => (
//           <p key={idx}>{para}</p>
//         ))}
//       </div>

//       {/* Explore More Button */}
//       <button className="bg-[#1A5069] text-white px-6 py-2 rounded-full hover:scale-105 transition">
//         Explore More
//       </button>
//     </section>
//   );
// };

// export default ServicesTabs;



// import React, { useState } from 'react';

// const tabs = [
//   {
//     label: 'Full-Stack Data & Analytics',
//     title: 'Convert raw data into real-time advantage.',
//     description: [
//       "Our Full-Stack Data & Engineering services are designed for data management. Here to offer visibility and complete growth over your brand's touchpoints, this is more than just data reporting. It involves transforming data into intelligence, insights and infrastructure that helps you make powerful decisions.",
//       "We collect, clean, unify and activate data across different back-end and front-end reporting dashboards to offer analytics that are reliable, real-time and revenue-focused."
//     ]
//   },
//   {
//     label: 'Product-Engineering',
//     title: 'Build the next MVP product with us.',
//     description: [
//       "Our Product Engineering services are designed to take ideas into concepts and aspirations into scalable, high-performing digital products. From developing an internal portal to customer facing app por a propriety toll to manage your brand's inventory, we engineer the magic behind it to make it real, fast and future-ready.",
//       "With a robust backend syste,, intelligent automation, agile development and high-end optimized performance, these products are built, not just to work, but to grow with your businesses."
//     ]
//   },
//   {
//     label: 'AI Solutions',
//     title: 'Embed intelligence to accelerate efficiency and unlock scalability.',
//     description: [
//       "This is more than just deploying AI in your brand. It is also about offering AI solutions that solve real business problems like automating workflows, customer experience, personal experience and optimizing campaigns. From smarter PPC automaruion to enabling predictive insights or building agentic systems for pps, we create actual real-world solutions.",
//       "Our AI solution services help brands move and scale faster, smarter and with greater precision. With AI powered embeds and co-pilots, we also help you automate tasks across operations, commerce and marketing."
//     ]
//   },
//   {
//     label: 'Brand Growth Solutions',
//     title: 'AKA Thrive Brands: Helping You Navigate Ecommerce',
//     description: [
//       "The e-commerce landscape is competitive. But, with the right handful of talent, your online stores can thrive! From spectacular e-commerce marketing services to building a wide presence, we ace at helping you make sales, drive revenue, and increase customer retention rate.",
//       "Go 360° with the best e-commerce marketing services and help your online store reach its full potential. From building successful online stores to taking your Shopify websites on the first pages, we are here to help your brand thrive."
//     ]
//   },
//   {
//     label: 'CX accelerator',
//     title: 'AI-Powered Experiences That Learn, Adapt, and Convert',
//     description: [
//       "At Thrive, we use AI not just to understand your customers—but to actively enhance their journey in real-time. Our Customer Experience Acceleration services embed intelligence into every interaction, enabling smarter personalization, faster service, and seamless cross-channel engagement.",
//       "We don’t just analyze CX—we engineer it through AI-powered tools, predictive models, and automation workflows that deliver meaningful experiences at scale."
//     ]
//   }
// ];

// const ServicesTabs = () => {
//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   return (
//     <section className="bg-black text-white py-12 flex flex-col items-center ">
//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-4 mb-8">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedTab(tab)}
//             className={`px-12 py-4 rounded-full text-sm md:text-base border ${
//               selectedTab.label === tab.label
//                 ? 'border-4 border-t-[#06202D] border-b-[#EED4AD] border-l-[#EED4AD] border-r-[#EED4AD]'
//                 : 'border-transparent text-gray-400 hover:text-white'
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Title with gradient */}
//       <h2
//         className="text-5xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#EDD5B1] via-[#1077A7] to-[#EDD5B1] bg-clip-text text-transparent"
//       >
//         {selectedTab.title}
//       </h2>

//       {/* Description */}
//       <div className="max-w-5xl text-gray-300  text-xl md:text-lg leading-relaxed space-y-4 mb-8">
//         {selectedTab.description.map((para, idx) => (
//           <p key={idx}>{para}</p>
//         ))}
//       </div>

//       {/* Explore More Button */}
//       <button className="px-20 py-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full hover:scale-105 transition">
//         Explore More
//       </button>
//     </section>
//   );
// };

// export default ServicesTabs;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  {
    label: 'Full-Stack Data & Analytics',
    title: 'Convert raw data into real-time advantage.',
    description: [
      "Our Full-Stack Data & Engineering services are designed for data management. Here to offer visibility and complete growth over your brand's touchpoints, this is more than just data reporting. It involves transforming data into intelligence, insights and infrastructure that helps you make powerful decisions.",
      "We collect, clean, unify and activate data across different back-end and front-end reporting dashboards to offer analytics that are reliable, real-time and revenue-focused."
    ]
  },
  {
    label: 'Product-Engineering',
    title: 'Build the next MVP product with us.',
    description: [
      "Our Product Engineering services are designed to take ideas into concepts and aspirations into scalable, high-performing digital products. From developing an internal portal to customer facing app or a proprietary tool to manage your brand's inventory, we engineer the magic behind it to make it real, fast and future-ready.",
      "With a robust backend system, intelligent automation, agile development and high-end optimized performance, these products are built, not just to work, but to grow with your businesses."
    ]
  },
  {
    label: 'AI Solutions',
    title: 'Embed intelligence to accelerate efficiency and unlock scalability.',
    description: [
      "This is more than just deploying AI in your brand. It is also about offering AI solutions that solve real business problems like automating workflows, customer experience, personalization and optimizing campaigns. From smarter PPC automation to enabling predictive insights or building agentic systems for apps, we create actual real-world solutions.",
      "Our AI solution services help brands move and scale faster, smarter and with greater precision. With AI-powered embeds and co-pilots, we also help you automate tasks across operations, commerce and marketing."
    ]
  },
  {
    label: 'Brand Growth Solutions',
    title: 'AKA Thrive Brands: Helping You Navigate Ecommerce',
    description: [
      "The e-commerce landscape is competitive. But, with the right handful of talent, your online stores can thrive! From spectacular e-commerce marketing services to building a wide presence, we ace at helping you make sales, drive revenue, and increase customer retention rate.",
      "Go 360° with the best e-commerce marketing services and help your online store reach its full potential. From building successful online stores to taking your Shopify websites on the first pages, we are here to help your brand thrive."
    ]
  },
  {
    label: 'CX accelerator',
    title: 'AI-Powered Experiences That Learn, Adapt, and Convert',
    description: [
      "At Thrive, we use AI not just to understand your customers—but to actively enhance their journey in real-time. Our Customer Experience Acceleration services embed intelligence into every interaction, enabling smarter personalization, faster service, and seamless cross-channel engagement.",
      "We don’t just analyze CX—we engineer it through AI-powered tools, predictive models, and automation workflows that deliver meaningful experiences at scale."
    ]
  }
];

const ServicesTabs = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="bg-black text-white py-12 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      
      {/* Tabs Section - Responsive */}
      <div className="w-full max-w-7xl overflow-x-auto whitespace-nowrap scrollbar-hide mb-10">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 md:px-8 md:py-4 whitespace-nowrap rounded-full text-xs sm:text-sm md:text-base border transition-all duration-300
                ${
                  selectedTab.label === tab.label
                    ? 'border-4 border-t-[#06202D] border-b-[#EED4AD] border-l-[#EED4AD] border-r-[#EED4AD] text-white'
                    : 'border-transparent text-gray-400 hover:text-white'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-[#EDD5B1] via-[#1077A7] to-[#EDD5B1] bg-clip-text text-transparent max-w-4xl">
        {selectedTab.title}
      </h2>

      {/* Description */}
      <div className="max-w-5xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed space-y-4 mb-10 px-2 sm:px-0 text-center md:text-left">
        {selectedTab.description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* Button */}
      <button 
        onClick={() => navigate('/contact')}
        className="px-10 py-3 sm:px-14 sm:py-4 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] rounded-full hover:scale-105 transition text-base sm:text-lg"
      >
        Connect Now
      </button>
    </section>
  );
};

export default ServicesTabs;
