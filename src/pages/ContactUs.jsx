// // ContactUs.jsx
// import React from "react";
// import ContactusShadowBg from "../assets/images/contactus_shadow_bg.svg";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Home/Footer";

// const ContactUs = () => {
//   return (
//     <div className="bg-black text-white font-sans">
//        <Navbar />
//     <div
//       className="min-h-screen flex flex-col justify-center items-center px-4 py-12  bg-center bg-no-repeat"
//     //  style={{
//     //         backgroundImage: `url(${ContactusShadowBg})`,
//     //     }}
//     >
//         <div className="w-full max-w-4xl rounded-lg shadow-lg p-8 mb-12">
//             <h1 className="text-5xl md:text-6xl font-bold text-[#EED4AD]">
//             Thrive with Us. <span className="text-[#55ACD5]">Connect Now</span>
//           </h1>
//           <p className="mt-6 text-4xl md:text-lg text-[#55ACD5]">
//             With a creative team and extensive industry experience, our
//             e-commerce managing services are here to help you thrive. Get in
//             touch with our team and let's explore opportunities together.
//           </p>
//              </div>
//       <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 text-[#EED4AD]">
//         {/* Left Side Content */}
        
//         <div className="flex flex-col ">
          

//           <div className="">
//             <h2 className="text-3xl font-semibold mb-2 text-[#55ACD5]">Contact Us | Thrive</h2>
//             <p className="text-[#55ACD5] text-lg">
//               We're dedicated to empowering individuals and businesses alike.
//               Let's explore opportunities together.
//             </p>
//           </div>
//         </div>

//         {/* Right Side Form */}
//         <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="First Name*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <input
//             type="text"
//             placeholder="Last Name*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <input
//             type="email"
//             placeholder="Email*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number*"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//           />
//           <textarea
//             placeholder="Message*"
//             rows="5"
//             className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-full"
//           ></textarea>
//           <button
//             type="submit"
//             className="col-span-full bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold py-3 rounded-md hover:opacity-90"
//           >
//             THRIVE WITH US
//           </button>
//         </form>
//       </div>
//     </div>
//     <Footer />
//     </div>
//   );
// };

// export default ContactUs;




// import React from "react";
// import ContactusShadowBg from "../assets/images/contactus_shadow_bg.svg";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Home/Footer";

// const ContactUs = () => {
//   return (
//     <div className="bg-black text-white font-sans overflow-x-hidden">
//       <Navbar />

//       <div
//         className="flex flex-col items-center justify-start px-4 py-16 bg-center bg-no-repeat min-h-screen"
//         style={{
//           backgroundImage: `url(${ContactusShadowBg})`,
//           backgroundSize: "cover",
//         }}
//       >
//         {/* Hero Title */}
//         <div className="w-full max-w-6xl mb-12 text-center px-2">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EED4AD] leading-tight">
//             Thrive with Us. <span className="text-[#55ACD5]">Connect Now</span>
//           </h1>
//           <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#55ACD5]">
//             With a creative team and extensive industry experience, our
//             e-commerce managing services are here to help you thrive. Get in
//             touch with our team and let's explore opportunities together.
//           </p>
//         </div>

//         {/* Form and Content */}
//         <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
//           {/* Left Column */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#55ACD5] mb-4">
//               Contact Us | Thrive
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-[#EED4AD]">
//               We're dedicated to empowering individuals and businesses alike.
//               Let's explore opportunities together.
//             </p>
//           </div>

//           {/* Right Column - Form */}
//           <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="First Name*"
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//             />
//             <input
//               type="text"
//               placeholder="Last Name*"
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//             />
//             <input
//               type="email"
//               placeholder="Email*"
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number*"
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//             />
//             <textarea
//               placeholder="Message*"
//               rows="5"
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-full"
//             ></textarea>
//             <button
//               type="submit"
//               className="col-span-full bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold py-3 rounded-md hover:opacity-90 transition-opacity duration-200"
//             >
//               THRIVE WITH US
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;



// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import ContactusShadowBg from "../assets/images/contactus_shadow_bg.svg";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Home/Footer";

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     console.log("form.current ====>", form.current.value);
//     emailjs
//       .sendForm(
//         "service_xay2tie",     // Replace with your actual Service ID
//         "template_9jiozjd",    // Replace with your Template ID
//         form.current,
//         "NxCzsOWCqHsR8s5ky"      // Replace with your Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Message sent:", result.text);
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.error("Failed to send message:", error.text);
//           alert("Failed to send message.");
//         }
//       );
//   };

//   return (
//     <div className="bg-black text-white font-sans overflow-x-hidden">
//       <Navbar />

//       <div
//         className="flex flex-col items-center justify-start px-4 py-16 bg-center bg-no-repeat min-h-screen"
//         // style={{
//         //   backgroundImage: `url(${ContactusShadowBg})`,
//         //   backgroundSize: "cover",
//         // }}
//       >
//         {/* Hero Title */}
//         <div className="w-full max-w-6xl mb-12 text-center px-2">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EED4AD] leading-tight">
//             Thrive with Us. <span className="text-[#55ACD5]">Connect Now</span>
//           </h1>
//           <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#55ACD5]">
//             With a creative team and extensive industry experience, our
//             e-commerce managing services are here to help you thrive. Get in
//             touch with our team and let's explore opportunities together.
//           </p>
//         </div>

//         {/* Form and Content */}
//         <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
//           {/* Left Column */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#55ACD5] mb-4">
//               Contact Us | Thrive
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-[#EED4AD]">
//               We're dedicated to empowering individuals and businesses alike.
//               Let's explore opportunities together.
//             </p>
//           </div>

//           {/* Right Column - EmailJS Form */}
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
//           >
//             <input
//               type="text"
//               name="user_name"
//               placeholder="Full Name*"
//               required
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1 sm:col-span-2"
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Email Address*"
//               required
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//             />
            // <input
            //   type="tel"
            //   name="phone"
            //   placeholder="Phone Number"
            //   className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
            // />
//             <select
//               name="subject"
//               required
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1 sm:col-span-2"
//             >
//               <option value="">Select a topic</option>
//               <option value="General Inquiry">General Inquiry</option>
//               <option value="Partnership">Partnership</option>
//               <option value="Support">Support</option>
//             </select>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Message*"
//               required
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-black col-span-full"
//             ></textarea>
//             <button
//               type="submit"
//               className="col-span-full bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold py-3 rounded-md hover:opacity-90 transition-opacity duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;



// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import ContactusShadowBg from "../assets/images/contactus_shadow_bg.svg";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Home/Footer";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const ContactUs = () => {
//   const form = useRef();
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Append the full phone number to a hidden input so it gets sent with the form
//     const hiddenPhoneInput = document.createElement("input");
//     hiddenPhoneInput.type = "hidden";
//     hiddenPhoneInput.name = "phone";
//     hiddenPhoneInput.value = phoneNumber;
//     form.current.appendChild(hiddenPhoneInput);

//     emailjs
//       .sendForm(
//         "service_xay2tie", // Replace with your actual Service ID
//         "template_9jiozjd", // Replace with your Template ID
//         form.current,
//         "NxCzsOWCqHsR8s5ky" // Replace with your Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Message sent:", result.text);
//           alert("Message sent successfully!");
//           form.current.reset();
//           setPhoneNumber("");
//         },
//         (error) => {
//           console.error("Failed to send message:", error.text);
//           alert("Failed to send message.");
//         }
//       );
//   };

//   return (
//     <div className="bg-black text-white font-sans overflow-x-hidden">
//       <Navbar />

//       <div
//         className="flex flex-col items-center justify-start px-4 py-16 bg-center bg-no-repeat min-h-screen"
//       >
//         <div className="w-full max-w-6xl mb-12 text-center px-2">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EED4AD] leading-tight">
//             Thrive with Us. <span className="text-[#55ACD5]">Connect Now</span>
//           </h1>
//           <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#55ACD5]">
//             With a creative team and extensive industry experience, our
//             e-commerce managing services are here to help you thrive. Get in
//             touch with our team and let's explore opportunities together.
//           </p>
//         </div>

//         <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
//           <div className="flex flex-col justify-center">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#55ACD5] mb-4">
//               Contact Us | Thrive
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-[#EED4AD]">
//               We're dedicated to empowering individuals and businesses alike.
//               Let's explore opportunities together.
//             </p>
//           </div>

//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
//           >
//             <input
//               type="text"
//               name="user_name"
//               placeholder="Full Name*"
//               required
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1 sm:col-span-2"
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Email Address*"
//               required
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-gray-400 col-span-1"
//             />
//             <div className="col-span-1">
//               <PhoneInput
//                 country={"us"}
//                 value={phoneNumber}
//                 onChange={(phone) => setPhoneNumber(`+${phone}`)}
//                 inputStyle={{
//                   width: "100%",
//                   padding: "16px",
//                   backgroundColor: "#1f2937",
//                   color: "white",
//                   border: "1px solid #3b82f6",
//                   borderRadius: "0.375rem",
//                 }}
//                 dropdownStyle={{ backgroundColor: "#d1d5db", color: "black" }}
//                 enableSearch
//               />
//             </div>
//             <select
//               name="subject"
//               required
//               className="p-3  border border-blue-500 rounded-md text-black placeholder-gray-700 col-span-1 sm:col-span-2"
//             >
//               <option value="">Select a topic</option>
//               <option value="General Inquiry">General Inquiry</option>
//               <option value="Partnership">Partnership</option>
//               <option value="Support">Support</option>
//             </select>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Message*"
//               required
//               className="p-3 bg-transparent border border-blue-500 rounded-md text-white placeholder-black col-span-full"
//             ></textarea>
//             <button
//               type="submit"
//               className="col-span-full bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold py-3 rounded-md hover:opacity-90 transition-opacity duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactusShadowBg from "../assets/images/contactus_shadow_bg.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Home/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MeetingScheduler from "../components/MeetingScheduler/MeetingScheduler";

const ContactUs = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneInputKey, setPhoneInputKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] = useState("schedule"); // Only "schedule" - contact form removed

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    // Add phone number to form before sending
    const hiddenPhoneInput = document.createElement("input");
    hiddenPhoneInput.type = "hidden";
    hiddenPhoneInput.name = "phone";
    hiddenPhoneInput.value = phoneNumber;
    form.current.appendChild(hiddenPhoneInput);

    emailjs
      .sendForm(
        "service_xay2tie",
        "template_9jiozjd",
        form.current,
        "NxCzsOWCqHsR8s5ky"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSubmitting(false);
          setShowSuccess(true);
          form.current.reset();
          setPhoneNumber("");
          setPhoneInputKey((prev) => prev + 1);
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          setIsSubmitting(false);
          setErrorMessage("Failed to send message. Please try again.");
          setShowError(true);
          
          // Hide error message after 5 seconds
          setTimeout(() => {
            setShowError(false);
          }, 5000);
        }
      );
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <style>{`
        /* Fix autofill styling */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus,
        select:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px transparent inset !important;
          -webkit-text-fill-color: white !important;
          background-color: transparent !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        
        /* Ensure form elements maintain dark styling */
        input, textarea, select {
          background-color: transparent !important;
          color: white !important;
        }
        
        input::placeholder, textarea::placeholder {
          color: #9ca3af !important;
        }
        
        /* Focus states */
        input:focus, textarea:focus, select:focus {
          background-color: transparent !important;
          color: white !important;
          outline: none !important;
        }
      `}</style>
      
      <Navbar />

      <div className="flex flex-col items-center justify-start px-4 py-16 bg-center bg-no-repeat min-h-screen">
        {/* Hero Title */}
        <div className="w-full max-w-6xl mb-12 text-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EED4AD] leading-tight">
            Thrive with Us. <span className="text-[#55ACD5]">Connect Now</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#55ACD5]">
            With a creative team and extensive industry experience, our
            e-commerce managing services are here to help you thrive. Get in
            touch with our team and let's explore opportunities together.
          </p>
        </div>

        {/* Only Schedule Discovery Call - Contact Form Commented Out */}
        {/* 
        <div className="w-full max-w-4xl mb-8">
          <div className="flex justify-center space-x-1 bg-[#051f30]/30 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "contact"
                  ? "bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD]"
                  : "text-[#55ACD5] hover:text-[#EED4AD] hover:bg-[#55ACD5]/10"
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "schedule"
                  ? "bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD]"
                  : "text-[#55ACD5] hover:text-[#EED4AD] hover:bg-[#55ACD5]/10"
              }`}
            >
              Schedule Discovery Call
            </button>
          </div>
        </div>
        */}

        {/* Only Schedule Discovery Call */}
        <div className="w-full max-w-6xl">
          <MeetingScheduler />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
