// import React from 'react';
// import ThriveLogo from "../assets/icons/thrive_logo.svg";
// const Navbar = () => {
//   return (
//     <div
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('/src/assets/bg.png')", // Rename your uploaded image to bg.png and place it in src/assets
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <nav className="flex items-center justify-between px-10 py-6">
//         {/* Logo */}
//         <div className="h-10 w-auto">
//           <img src={ThriveLogo} alt="Thrive Logo" className="h-14" />
//         </div>

//         {/* Nav Items with curved background */}
//         {/* <div className="bg-[#051f30] rounded-full px-10 py-6 mt-2 flex gap-12 text-lg font-medium items-center"> */}
//         <div className="bg-[#051f30]/50 rounded-full px-10 py-6 mt-2 flex gap-12 text-lg font-medium items-center">

//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Home</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">About Us</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Services</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Portfolio</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Blog</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Contact Us</span>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex gap-4">
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Thrive Brands
//           </button>
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Vector.ai
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;







// import React, { useState } from "react";
// import ThriveLogo from "../assets/icons/thrive_logo.svg";
// import { ChevronDown } from "lucide-react"; // You must install lucide-react or use your own icon

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <div
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('/src/assets/bg.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <nav className="flex items-center justify-between px-10 py-6">
//         {/* Logo */}
//         <div className="h-10 w-auto">
//           <img src={ThriveLogo} alt="Thrive Logo" className="h-14" />
//         </div>

//         {/* Nav Items with semi-transparent background */}
//         <div className="bg-[#051f30]/60 rounded-full px-10 py-6 mt-2 flex gap-12 text-lg font-medium items-center relative">
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Home
//           </span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             About Us
//           </span>

//           {/* Services with dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <div className="flex items-center gap-1 text-[#d9b96a] hover:text-white cursor-pointer">
//               Services
//               <ChevronDown className="w-4 h-4" />
//             </div>

//             {/* Dropdown */}
//             {isDropdownOpen && (
//               <div className="absolute top-12 left-0 w-64 bg-[#072d45]/90 text-white rounded-lg shadow-lg py-2 z-50">
//                 {[
//                   "Full-Stack Data & Analytics",
//                   "Product-Engineering",
//                   "AI Solutions",
//                   "Brand Growth Solutions",
//                   "Creative",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="px-4 py-2 hover:bg-[#0c3b59] cursor-pointer transition"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Portfolio
//           </span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Blog
//           </span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Contact Us
//           </span>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex gap-4">
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Thrive Brands
//           </button>
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Vector.ai
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;









// import React, { useState } from 'react';
// import { FaChevronDown } from 'react-icons/fa';
// import ThriveLogo from "../assets/icons/thrive_logo.svg";

// const Navbar = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <div
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('/src/assets/bg.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <nav className="flex items-center justify-between px-10 py-6 relative z-50">
//         {/* Logo */}
//         <div className="h-10 w-auto">
//           <img src={ThriveLogo} alt="Thrive Logo" className="h-14" />
//         </div>

//         {/* Nav Items */}
//         <div className="bg-[#051f30]/50 rounded-full px-10 py-6 mt-2 flex gap-12 text-lg font-medium items-center relative">
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Home</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">About Us</span>

//           {/* Services Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsServicesOpen(true)}
//             onMouseLeave={() => setIsServicesOpen(false)}
//           >
//             <div className="flex items-center text-[#d9b96a] hover:text-white cursor-pointer">
//               <span>Services</span>
//               <FaChevronDown className="ml-1 mt-[2px]" size={12} />
//             </div>

//             {/* Dropdown List */}
//             {isServicesOpen && (
//               <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-b from-[#08314e] to-[#05263e] rounded-lg shadow-lg z-50 py-3">
//                 {[
//                   "Full-Stack Data & Analytics",
//                   "Product-Engineering",
//                   "AI Solutions",
//                   "Brand Growth Solutions",
//                   "Creative"
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     onClick={() => alert(`Navigate to: ${item}`)} // Replace with real routing logic
//                     className="px-5 py-3 text-white hover:bg-[#14496e] cursor-pointer transition-all duration-200"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Portfolio</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Blog</span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">Contact Us</span>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex gap-4">
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Thrive Brands
//           </button>
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Vector.ai
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaChevronDown } from 'react-icons/fa';
// import ThriveLogo from "../assets/icons/thrive_logo.svg";

// const Navbar = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleServiceClick = (service) => {
//     navigate('/services', { state: { selectedService: service } });
//     setIsServicesOpen(false);
//   };

//   return (
//     <div
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('/src/assets/bg.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <nav className="flex items-center justify-between px-10 py-6 relative z-50">
//         {/* Logo */}
//         <div className="h-10 w-auto">
//           <img src={ThriveLogo} alt="Thrive Logo" className="h-14" />
//         </div>

//         {/* Nav Items */}
//         <div className="bg-[#051f30]/50 rounded-full px-10 py-6 mt-2 flex gap-12 text-lg font-medium items-center relative">
//           <NavLink
//             to="/home"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             About Us
//           </NavLink>

//           {/* Services Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsServicesOpen(true)}
//             onMouseLeave={() => setIsServicesOpen(false)}
//           >
//             <div className="flex items-center text-[#d9b96a] hover:text-white cursor-pointer">
//               <span>Services</span>
//               <FaChevronDown className="ml-1 mt-[2px]" size={12} />
//             </div>

//             {isServicesOpen && (
//               <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-b from-[#08314e] to-[#05263e] rounded-lg shadow-lg z-50 py-3">
//                 {[
//                   "Full-Stack Data & Analytics",
//                   "Product-Engineering",
//                   "AI Solutions",
//                   "Brand Growth Solutions",
//                   "CX accelerator",
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     onClick={() => handleServiceClick(item)}
//                     className="px-5 py-3  text-white hover:bg-[#14496e] cursor-pointer transition-all duration-200"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <NavLink
//             to="/portfolio"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Portfolio
//           </NavLink>

//           <NavLink
//             to="/blog"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Blog
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Contact Us
//           </NavLink>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex gap-4">
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Thrive Brands
//           </button>
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Vector.ai
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaChevronDown } from 'react-icons/fa';
// import ThriveLogo from "../assets/icons/thrive_logo.svg";

// const Navbar = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleServiceClick = (service) => {
//     navigate(`/services/${service.toLowerCase().replace(/\s+/g, '-')}`);
//     setIsServicesOpen(false);
//   };

//   const servicesList = [
//     "Full-Stack Data & Analytics",
//     "Product-Engineering",
//     "AI Solutions",
//     // "Brand Growth Solutions",
//     "CX accelerator",
//   ];

//   return (
//     <div
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('/src/assets/bg.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <nav className="flex items-center justify-between px-10 py-6 relative z-50">
//         {/* Logo */}
//         <div className="h-10 w-auto">
//           <img src={ThriveLogo} alt="Thrive Logo" className="h-14" />
//         </div>

//         {/* Nav Items */}
//         <div className="bg-[#051f30]/50 rounded-full px-10 py-6 mt-2 flex gap-24 text-lg font-medium items-center relative">
//           <NavLink
//             to="/home"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             About Us
//           </NavLink>
//           {/* <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Services
//           </NavLink> */}

//           {/* Services Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsServicesOpen(true)}
//             onMouseLeave={() => setIsServicesOpen(false)}
//           >
//             <div className="flex items-center text-[#d9b96a] hover:text-white cursor-pointer">
//               <span>
//                  <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Services
//           </NavLink>
//               </span>
//               <FaChevronDown className="ml-1 mt-[2px]" size={12} />
//             </div>

//             {isServicesOpen && (
//               <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-b from-[#08314e] to-[#05263e] rounded-lg shadow-lg z-50 py-3">
//                 {servicesList.map((item, idx) => (
//                   <div
//                     key={idx}
//                     onClick={() => handleServiceClick(item)}
//                     className="px-5 py-3 text-white hover:bg-[#14496e] cursor-pointer transition-all duration-200"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* <NavLink
//             to="/portfolio"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Portfolio
//           </NavLink>

//           <NavLink
//             to="/blog"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Blog
//           </NavLink> */}

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'
//             }
//           >
//             Contact Us
//           </NavLink>
//         </div>

//         {/* Right Buttons */}
//         {/* <div className="flex gap-4">
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Thrive Brands
//           </button>
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Vector.ai
//           </button>
//         </div> */}

//           <div className="flex gap-4">
//           <a
//             href="https://thrivebrands.ai/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold"
//           >
//             Thrive Brands
//           </a>
//           <a
//             href="https://vectorwebapp.thrivebrands.ai/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold"
//           >
//             Vector.ai
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import ThriveLogo from "../assets/icons/thrive_logo.svg";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate(`/services/${service.toLowerCase().replace(/\s+/g, '-')}`);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const servicesList = [
    "Full-Stack Data & Analytics",
    "Product-Engineering",
    "AI Solutions",
    "CX accelerator",
  ];

  return (
    <div
      className="relative text-white w-full"
      style={{
        backgroundColor: "#051f30",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex items-center justify-between px-6 lg:px-10 py-6 relative z-50 w-full">
        {/* Logo */}
        <div className="h-10 w-auto">
          <img src={ThriveLogo} alt="Thrive Logo" className="h-14" />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex bg-[#051f30]/50 rounded-full px-10 py-4 gap-16 text-base font-medium items-center">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'}>About Us</NavLink>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center text-[#d9b96a] group-hover:text-white cursor-pointer">
              <NavLink to="/services" className={({ isActive }) => isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'}>
                Services
              </NavLink>
              <FaChevronDown className="ml-1 mt-[2px]" size={12} />
            </div>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-b from-[#08314e] to-[#05263e] rounded-lg shadow-lg z-50 py-3">
                {servicesList.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleServiceClick(item)}
                    className="px-5 py-3 text-white hover:bg-[#14496e] cursor-pointer transition-all duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white' : 'text-[#d9b96a] hover:text-white'}>Contact Us</NavLink>
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex gap-4">
          <a href="https://brands.thrivebrands.ai/" target="_blank" rel="noopener noreferrer" className="bg-[#eed4ad] text-[#001220] px-5 py-2 rounded-full text-sm font-semibold">Thrive Brands</a>
          <a href="https://vectorwebapp.thrivebrands.ai/" target="_blank" rel="noopener noreferrer" className="bg-[#eed4ad] text-[#001220] px-5 py-2 rounded-full text-sm font-semibold">Vector.ai</a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#051f30]/90 px-6 py-4 space-y-4 text-base font-medium z-40">
          <NavLink to="/home" className="block text-[#d9b96a] hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block text-[#d9b96a] hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>

          {/* Mobile Services Dropdown */}
          <div className="text-[#d9b96a]">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left flex items-center justify-between"
            >
              <span>Services</span>
              <FaChevronDown size={12} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {servicesList.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleServiceClick(item)}
                    className="text-white hover:text-yellow-400 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact" className="block text-[#d9b96a] hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>

          <div className="flex flex-col gap-3 mt-4">
            <a href="https://brands.thrivebrands.ai/" target="_blank" rel="noopener noreferrer" className="bg-[#eed4ad] text-[#001220] px-4 py-2 rounded-full text-center font-semibold">Thrive Brands</a>
            <a href="https://vectorwebapp.thrivebrands.ai/" target="_blank" rel="noopener noreferrer" className="bg-[#eed4ad] text-[#001220] px-4 py-2 rounded-full text-center font-semibold">Vector.ai</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import ThriveLogo from "../assets/icons/thrive_logo.svg";
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <div
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('/src/assets/bg.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <nav className="flex items-center justify-between px-10 py-6 relative">
//         {/* Logo */}
//         <div className="h-10 w-auto">
//           <img src={ThriveLogo} alt="Thrive Logo" className="h-14" />
//         </div>

//         {/* Nav Items */}
//         <div className="bg-[#051f30]/50 rounded-full px-10 py-6 mt-2 flex gap-12 text-lg font-medium items-center relative">
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Home
//           </span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             About Us
//           </span>

//           {/* Services with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <div className="flex items-center gap-2 text-[#d9b96a] hover:text-white cursor-pointer">
//               Services <FaChevronDown className="mt-[2px]" size={12} />
//             </div>

//             {isDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 py-2">
//                 <a
//                   href="#branding"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Branding
//                 </a>
//                 <a
//                   href="#social-media"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Social Media Marketing
//                 </a>
//                 <a
//                   href="#seo"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   SEO
//                 </a>
//                 <a
//                   href="#ppc"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   PPC Marketing
//                 </a>
//                 <a
//                   href="#influencer"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Influencer Marketing
//                 </a>
//               </div>
//             )}
//           </div>

//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Portfolio
//           </span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Blog
//           </span>
//           <span className="text-[#d9b96a] hover:text-white cursor-pointer">
//             Contact Us
//           </span>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex gap-4">
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Thrive Brands
//           </button>
//           <button className="bg-[#eed4ad] text-[#001220] px-6 py-3 rounded-full text-lg font-semibold">
//             Vector.ai
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ThriveLogo from "../assets/icons/thrive_logo.svg";
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const services = [
//     { name: "Full-Stack Data & Analytics", path: "/services/data-analytics" },
//     { name: "Product-Engineering", path: "/services/product-engineering" },
//     { name: "AI Solutions", path: "/services/ai-solutions" },
//     { name: "Brand Growth Solutions", path: "/services/brand-growth" },
//     { name: "Creative", path: "/services/creative" },
//   ];

//   return (
//     <div
//       className="relative text-white w-full"
//       style={{
//         backgroundImage: "url('/src/assets/images/navbar_and_hero_bg.svg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <nav className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6 relative z-10 max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link to="/" className="h-16 w-auto flex-shrink-0">
//           <img 
//             src={ThriveLogo} 
//             alt="Thrive Logo" 
//             className="h-full w-auto hover:opacity-90 transition-opacity" 
//           />
//         </Link>

//         {/* Navigation Items - Desktop */}
//         <div className="hidden lg:flex items-center">
//           <div
//             className="bg-[#051f30]/50 backdrop-blur-sm rounded-full px-6 md:px-10 py-3 md:py-4 flex gap-6 md:gap-10 text-base md:text-lg font-medium items-center relative mx-4"
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About Us</NavLink>

//             {/* Services with Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setDropdownOpen(true)}
//               onMouseLeave={() => setDropdownOpen(false)}
//             >
//               <button className="flex items-center text-[#d9b96a] hover:text-white transition-colors">
//                 Services <FaChevronDown className="ml-1 text-sm" />
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute left-0 top-full mt-2 bg-gradient-to-b from-[#0F7BAE] via-[#1A5069] to-[#1A5069] rounded-lg shadow-lg px-4 py-3 w-64 z-20 animate-fadeIn">
//                   <ul className="space-y-2">
//                     {services.map((service, index) => (
//                       <li key={index}>
//                         <Link
//                           to={service.path}
//                           className="block text-white hover:text-[#d9b96a] transition-colors py-2 px-3 rounded-md hover:bg-white/10"
//                           onClick={() => setDropdownOpen(false)}
//                         >
//                           {service.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <NavLink to="/portfolio">Portfolio</NavLink>
//             <NavLink to="/blog">Blog</NavLink>
//             <NavLink to="/contact">Contact Us</NavLink>
//           </div>

//           {/* Right Side Buttons */}
//           <div className="flex gap-3 ml-4">
//             <NavButton 
//               onClick={() => navigate("/thrive-brands")} 
//               className="bg-[#eed4ad] hover:bg-[#e5c99f]"
//             >
//               Thrive Brands
//             </NavButton>
//             <NavButton 
//               onClick={() => navigate("/vector-ai")} 
//               className="bg-[#eed4ad] hover:bg-[#e5c99f]"
//             >
//               Vector.ai
//             </NavButton>
//           </div>
//         </div>

//         {/* Mobile Menu Button - You can implement this later */}
//         <button className="lg:hidden text-[#d9b96a] p-2">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </nav>
//     </div>
//   );
// };

// // Reusable NavLink component
// const NavLink = ({ to, children }) => (
//   <Link
//     to={to}
//     className="text-[#d9b96a] hover:text-white transition-colors whitespace-nowrap"
//     activeClassName="text-white font-semibold"
//   >
//     {children}
//   </Link>
// );

// // Reusable NavButton component
// const NavButton = ({ onClick, children, className }) => (
//   <button
//     onClick={onClick}
//     className={`${className} text-[#001220] px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors whitespace-nowrap`}
//   >
//     {children}
//   </button>
// );

// export default Navbar;