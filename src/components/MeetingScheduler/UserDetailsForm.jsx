import React, { useState } from 'react';

const UserDetailsForm = ({ onBack, onSubmit, meetingDetails, selectedDate, selectedTime, onAddGuest, onRemoveGuest, guestEmails, isScheduling }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    revenue: '',
    agreeToTerms: false
    // Organizer selection removed - managed internally
  });

  const [errors, setErrors] = useState({});
  const [showGuestField, setShowGuestField] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');
  const [guestEmailError, setGuestEmailError] = useState('');

  const revenueOptions = [
    '0-200,000',
    '200,000-500,000', 
    '500,000 - 1M',
    '1M - 5M',
    '5M+'
  ];

  // Organizer selection removed - managed internally

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.revenue) newErrors.revenue = 'Please select your revenue range';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleAddGuest = () => {
    if (!guestEmail.trim()) {
      setGuestEmailError('Please enter a guest email address');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(guestEmail.trim())) {
      setGuestEmailError('Please enter a valid email address');
      return;
    }
    
    // Check if email already exists
    if (guestEmails.includes(guestEmail.trim())) {
      setGuestEmailError('This email is already added');
      return;
    }
    
    onAddGuest(guestEmail.trim());
    setGuestEmail('');
    setGuestEmailError('');
    setShowGuestField(false);
  };

  const handleShowGuestField = () => {
    setShowGuestField(true);
    setGuestEmail('');
    setGuestEmailError('');
  };

  const handleCancelGuest = () => {
    setShowGuestField(false);
    setGuestEmail('');
    setGuestEmailError('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side - Meeting Details */}
      <div className="space-y-6">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-[#55ACD5] hover:text-[#EED4AD] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back</span>
        </button>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#EED4AD]">Discovery Call</h1>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#55ACD5]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-[#55ACD5]">{meetingDetails.duration}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#55ACD5]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-[#55ACD5]">
                {selectedTime} - {selectedTime.replace(/(\d{1,2}):(\d{2})/, (match, hour, minute) => {
                  const endHour = hour === '11' ? '12' : hour === '10' ? '11' : String(parseInt(hour) + 1);
                  return `${endHour}:${minute}`;
                })} , {selectedDate?.toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#55ACD5]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#55ACD5]">Microsoft Teams Meeting</span>
            </div>

            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#55ACD5]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="text-[#55ACD5]">Anna (Asia/Calcutta GMT+5:30)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-[#051f30]/30 rounded-lg p-6 border border-[#55ACD5]/20">
        <h3 className="text-xl font-semibold text-[#EED4AD] mb-6">Enter Details</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#EED4AD] mb-2">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full p-3 bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#55ACD5] transition-colors ${
                  errors.firstName ? 'border-red-500' : 'border-[#55ACD5]/30'
                }`}
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#EED4AD] mb-2">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full p-3 bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#55ACD5] transition-colors ${
                  errors.lastName ? 'border-red-500' : 'border-[#55ACD5]/30'
                }`}
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#EED4AD] mb-2">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full p-3 bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#55ACD5] transition-colors ${
                errors.email ? 'border-red-500' : 'border-[#55ACD5]/30'
              }`}
              placeholder="example@example.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-[#EED4AD] mb-2">Company/Brand Name</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className="w-full p-3 bg-transparent border border-[#55ACD5]/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#55ACD5] transition-colors"
              placeholder="Company/Brand Name"
            />
          </div>

          {/* Revenue Range */}
          <div>
            <label className="block text-sm font-medium text-[#EED4AD] mb-2">Last Year Revenue *</label>
            <div className="space-y-2">
              {revenueOptions.map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="revenue"
                    value={option}
                    checked={formData.revenue === option}
                    onChange={(e) => handleInputChange('revenue', e.target.value)}
                    className="w-4 h-4 text-[#55ACD5] bg-transparent border-[#55ACD5] focus:ring-[#55ACD5] focus:ring-2"
                  />
                  <span className="text-[#55ACD5]">{option}</span>
                </label>
              ))}
            </div>
            {errors.revenue && <p className="text-red-400 text-sm mt-1">{errors.revenue}</p>}
          </div>

          {/* Meeting Organizer - Removed from frontend, managed internally */}

          {/* Terms and Conditions */}
          <div>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                className="mt-1 w-4 h-4 text-[#55ACD5] bg-transparent border-[#55ACD5] rounded focus:ring-[#55ACD5] focus:ring-2"
              />
              <span className="text-[#55ACD5] text-sm">
                I agree to{' '}
                <a href="#" className="text-[#EED4AD] hover:underline">terms & conditions</a>
                {' '}provided by the company. By providing my phone number, I agree to receive text messages from the business.
              </span>
            </label>
            {errors.agreeToTerms && <p className="text-red-400 text-sm mt-1">{errors.agreeToTerms}</p>}
          </div>

                     {/* Guest Email Input Field */}
           {showGuestField && (
             <div className="space-y-3 p-4 bg-[#051f30]/50 rounded border border-[#55ACD5]/20">
               <label className="block text-sm font-medium text-[#EED4AD]">Add Guest Email</label>
               <input
                 type="email"
                 value={guestEmail}
                 onChange={(e) => {
                   setGuestEmail(e.target.value);
                   if (guestEmailError) setGuestEmailError('');
                 }}
                 className={`w-full p-3 bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#55ACD5] transition-colors ${
                   guestEmailError ? 'border-red-500' : 'border-[#55ACD5]/30'
                 }`}
                 placeholder="Enter guest email address"
               />
               {guestEmailError && <p className="text-red-400 text-sm">{guestEmailError}</p>}
               
               <div className="flex space-x-2">
                 <button
                   type="button"
                   onClick={handleAddGuest}
                   className="flex-1 p-2 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-medium rounded-md hover:opacity-90 transition-opacity"
                 >
                   Add Guest
                 </button>
                 <button
                   type="button"
                   onClick={handleCancelGuest}
                   className="flex-1 p-2 border border-[#55ACD5]/30 text-[#EED4AD] rounded-md hover:border-[#55ACD5] hover:bg-[#55ACD5]/10 transition-colors"
                 >
                   Cancel
                 </button>
               </div>
             </div>
           )}

           {/* Guest Emails Section */}
           {guestEmails.length > 0 && (
             <div className="space-y-2">
               <label className="block text-sm font-medium text-[#EED4AD] mb-2">Guest Emails ({guestEmails.length})</label>
               <div className="space-y-2">
                 {guestEmails.map((email, index) => (
                   <div key={index} className="flex items-center space-x-2 p-2 bg-[#051f30]/50 rounded border border-[#55ACD5]/20">
                     <span className="text-[#55ACD5] text-sm flex-1">{email}</span>
                     <button
                       type="button"
                       onClick={() => onRemoveGuest(index)}
                       className="text-red-400 hover:text-red-300 transition-colors"
                     >
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                       </svg>
                     </button>
                   </div>
                 ))}
               </div>
             </div>
           )}

           {/* Add Guest Button */}
           {!showGuestField && (
             <button
               type="button"
               onClick={handleShowGuestField}
               className="w-full p-3 border border-[#55ACD5]/30 rounded-md text-[#EED4AD] hover:border-[#55ACD5] hover:bg-[#55ACD5]/10 transition-colors"
             >
               Add Guest
             </button>
           )}

          {/* Schedule Meeting Button */}
          <button
            type="submit"
            disabled={isScheduling}
            className={`w-full p-3 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold rounded-md transition-opacity ${
              isScheduling ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            {isScheduling ? (
              <div className="flex items-center justify-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-[#EED4AD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Scheduling Meeting...</span>
              </div>
            ) : (
              'Confirm & Schedule'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;

