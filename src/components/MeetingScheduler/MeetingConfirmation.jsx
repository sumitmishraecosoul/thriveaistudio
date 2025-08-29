import React from 'react';

const MeetingConfirmation = ({ onBack, onSchedule, meetingDetails, selectedDate, selectedTime, userDetails, isScheduling }) => {
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
              <span className="text-[#55ACD5]">Microsoft Teams Meeting Link</span>
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

      {/* Right Side - User Details Confirmation */}
      <div className="bg-[#051f30]/30 rounded-lg p-6 border border-[#55ACD5]/20">
        <h3 className="text-xl font-semibold text-[#EED4AD] mb-6">Confirm Details</h3>
        
        <div className="space-y-4">
          {/* User Details Display */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-[#EED4AD] mb-2">Company/Brand Name</label>
              <div className="p-3 bg-[#051f30]/50 border border-[#55ACD5]/20 rounded-md text-[#55ACD5]">
                {userDetails.companyName || 'Not provided'}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#EED4AD] mb-2">Last Year Revenue</label>
              <div className="p-3 bg-[#051f30]/50 border border-[#55ACD5]/20 rounded-md text-[#55ACD5]">
                {userDetails.revenue || 'Not selected'}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#EED4AD] mb-2">Contact Information</label>
              <div className="space-y-2">
                <div className="p-3 bg-[#051f30]/50 border border-[#55ACD5]/20 rounded-md text-[#55ACD5]">
                  <strong>Name:</strong> {userDetails.firstName} {userDetails.lastName}
                </div>
                <div className="p-3 bg-[#051f30]/50 border border-[#55ACD5]/20 rounded-md text-[#55ACD5]">
                  <strong>Email:</strong> {userDetails.email}
                </div>
              </div>
            </div>
          </div>

          {/* Terms Confirmation */}
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[#55ACD5] text-sm">
              Terms & conditions accepted
            </span>
          </div>

          {/* Meeting Link Preview */}
          <div className="mt-6 p-4 bg-[#051f30]/50 border border-[#55ACD5]/20 rounded-md">
            <h4 className="text-[#EED4AD] font-medium mb-2">Microsoft Teams Meeting</h4>
            <p className="text-[#55ACD5] text-sm">
              A meeting link will be generated and sent to your email address once confirmed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <button
              onClick={onBack}
              className="flex-1 p-3 border border-[#55ACD5]/30 rounded-md text-[#EED4AD] hover:border-[#55ACD5] hover:bg-[#55ACD5]/10 transition-colors"
            >
              Back
            </button>
            <button
              onClick={onSchedule}
              disabled={isScheduling}
              className={`flex-1 p-3 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold rounded-md transition-opacity ${
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingConfirmation;

