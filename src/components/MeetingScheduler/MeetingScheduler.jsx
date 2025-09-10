import React, { useState } from 'react';
import Calendar from './Calendar';
import TimeSlots from './TimeSlots';
import UserDetailsForm from './UserDetailsForm';
import MeetingConfirmation from './MeetingConfirmation';
import ThriveLogo from '../../assets/icons/thrive_logo.svg';
import teamsService from '../../services/teamsService';

const MeetingScheduler = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata');
  const [userDetails, setUserDetails] = useState({});
  const [guestEmails, setGuestEmails] = useState([]);
  const [isScheduling, setIsScheduling] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState({
    title: "Discovery Call",
    duration: "30 Mins",
    description: "Opening New Revenue Streams Starts Here!!!",
    longDescription: "We've helped thousands of brands just like you double, triple, or even quadruple their sales on Amazon and other marketplaces like TikTok shop, Target+, Walmart and more."
  });

  // Helper function to get timezone display name
  const getTimezoneDisplay = (timezone) => {
    const timezoneMap = {
      'Asia/Kolkata': 'GMT+5:30',
      'Asia/Calcutta': 'GMT+5:30',
      'America/New_York': 'GMT-5:00',
      'America/Los_Angeles': 'GMT-8:00',
      'Europe/London': 'GMT+0:00',
      'Europe/Paris': 'GMT+1:00',
      'Europe/Berlin': 'GMT+1:00',
    };
    return timezoneMap[timezone] || 'GMT+5:30';
  };

  // Helper function to get working hours display in 12-hour format
  const getWorkingHoursDisplay = (timezone) => {
    // All timezones now use Noida business hours (9 AM - 6 PM)
    return '9:00 AM - 6:00 PM (Monday-Friday)';
  };

  const handleDateSelect = (date, timezone) => {
    setSelectedDate(date);
    setSelectedTimezone('Asia/Kolkata'); // Always use Asia/Kolkata (Noida)
    setCurrentStep(2);
  };

  const handleTimeSelect = (time) => {
    console.log('MeetingScheduler received time:', time);
    setSelectedTime(time);
    setCurrentStep(3);
  };

  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
    setCurrentStep(4);
  };

  const handleScheduleMeeting = async () => {
    if (isScheduling) return; // Prevent multiple clicks
    
    setIsScheduling(true);
    try {
      // Create Teams meeting
      // Fix timezone issue: Use local date instead of UTC
      const year = selectedDate?.getFullYear();
      const month = String(selectedDate?.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate?.getDate()).padStart(2, '0');
      const dateString = `${year}-${month}-${day}`;
      
      const meetingData = {
        selectedDate: dateString, // Format as YYYY-MM-DD (local date, not UTC)
        selectedTime: selectedTime, // Use the exact time format from frontend
        userDetails: userDetails,
        guestEmails: guestEmails // Add guest emails
        // Organizer selection removed - managed internally
      };

      console.log('=== SCHEDULING MEETING REQUEST ===');
      console.log('📅 Selected Date:', selectedDate);
      console.log('⏰ Selected Time (raw):', selectedTime);
      console.log('👤 User Details:', userDetails);
      console.log('📧 Guest Emails:', guestEmails);
      console.log('📦 Request Body (meetingData):', JSON.stringify(meetingData, null, 2));
      console.log('🌐 API Endpoint: /api/schedule-discovery-call');
      console.log('=====================================');

      const teamsResult = await teamsService.createTeamsMeeting(meetingData);
      
      console.log('=== SCHEDULING MEETING RESPONSE ===');
      console.log('✅ Success:', teamsResult.success);
      console.log('📝 Message:', teamsResult.message);
      console.log('🔗 Meeting Link:', teamsResult.meetingLink);
      console.log('📧 Email Sent:', teamsResult.emailSent);
      console.log('📊 Full Response:', JSON.stringify(teamsResult, null, 2));
      console.log('=====================================');
      
      if (teamsResult.success) {
        // Send meeting invitation email
        const emailResult = await teamsService.sendMeetingInvitation(
          { ...meetingData, meetingLink: teamsResult.meetingLink },
          userDetails
        );

        if (emailResult.success) {
          setCurrentStep(5);
        } else {
          console.error('Failed to send email:', emailResult.error);
          // Still show success but log the email error
          setCurrentStep(5);
        }
      } else {
        console.error('Failed to create Teams meeting:', teamsResult.error);
        // Handle error - you might want to show an error message to the user
        alert('Failed to schedule meeting. Please try again.');
      }
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      alert('An error occurred while scheduling the meeting. Please try again.');
    } finally {
      setIsScheduling(false);
    }
  };

  const handleAddGuest = (email) => {
    setGuestEmails(prev => [...prev, email]);
  };

  const handleRemoveGuest = (index) => {
    setGuestEmails(prev => prev.filter((_, i) => i !== index));
  };

  const handleScheduleAnother = () => {
    setCurrentStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserDetails({});
    setGuestEmails([]);
    setIsScheduling(false);
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src={ThriveLogo} alt="Thrive" className="w-12 h-12" />
                <h1 className="text-3xl font-bold text-[#EED4AD]">Discovery Call</h1>
              </div>
              
              <div className="space-y-4">
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
                  <span className="text-[#55ACD5]">Select a date and time</span>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#EED4AD]">{meetingDetails.description}</h2>
                <p className="text-[#55ACD5] leading-relaxed">{meetingDetails.longDescription}</p>
              </div>
            </div>

            <div className="bg-[#051f30]/30 rounded-lg p-6 border border-[#55ACD5]/20">
              <h3 className="text-xl font-semibold text-[#EED4AD] mb-6">Select Date & Time</h3>
              <div className="mb-4 p-3 bg-[#051f30]/50 rounded border border-[#55ACD5]/20">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#55ACD5]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#55ACD5] text-sm">Timezone: Asia/Kolkata (GMT+5:30) - Noida</span>
                </div>
              </div>
              <Calendar onDateSelect={handleDateSelect} />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <button 
                onClick={goBack}
                className="flex items-center space-x-2 text-[#55ACD5] hover:text-[#EED4AD] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span>Back</span>
              </button>

              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-[#EED4AD]">Discovery Call</h1>
                
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
                  <span className="text-[#55ACD5]">{selectedDate?.toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#051f30]/30 rounded-lg p-6 border border-[#55ACD5]/20">
              <h3 className="text-xl font-semibold text-[#EED4AD] mb-6">Select Time</h3>
              <div className="mb-4 p-3 bg-[#051f30]/50 rounded border border-[#55ACD5]/20">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#55ACD5]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#55ACD5] text-sm">Timezone: {selectedTimezone} ({getTimezoneDisplay(selectedTimezone)})</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#55ACD5] text-xs">
                    Working Hours: {getWorkingHoursDisplay(selectedTimezone)}
                  </span>
                </div>
              </div>
              <TimeSlots onTimeSelect={handleTimeSelect} selectedDate={selectedDate} selectedTimezone={selectedTimezone} />
            </div>
          </div>
        );

      case 3:
        return (
          <UserDetailsForm 
            onBack={goBack}
            onSubmit={handleUserDetailsSubmit}
            meetingDetails={meetingDetails}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onAddGuest={handleAddGuest}
            onRemoveGuest={handleRemoveGuest}
            guestEmails={guestEmails}
            isScheduling={isScheduling}
          />
        );

      case 4:
        return (
          <MeetingConfirmation 
            onBack={goBack}
            onSchedule={handleScheduleMeeting}
            meetingDetails={meetingDetails}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            userDetails={userDetails}
            isScheduling={isScheduling}
          />
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#EED4AD]">Meeting Scheduled!</h1>
            <p className="text-[#55ACD5] text-lg">
              Your Discovery Call has been successfully scheduled. You'll receive a confirmation email with the Microsoft Teams meeting link shortly.
            </p>
            <div className="bg-[#051f30]/30 rounded-lg p-6 border border-[#55ACD5]/20 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-[#EED4AD] mb-4">Meeting Details</h3>
              <div className="space-y-2 text-left">
                <p className="text-[#55ACD5]"><strong>Date:</strong> {selectedDate?.toLocaleDateString()}</p>
                <p className="text-[#55ACD5]"><strong>Time:</strong> {selectedTime}</p>
                <p className="text-[#55ACD5]"><strong>Duration:</strong> {meetingDetails.duration}</p>
                <p className="text-[#55ACD5]"><strong>Platform:</strong> Microsoft Teams</p>
              </div>
            </div>
            
            {/* Schedule Another Meeting Button */}
            <div className="space-y-4">
              <button
                onClick={handleScheduleAnother}
                className="px-8 py-3 bg-gradient-to-r from-[#1A5069] to-[#0F7BAE] text-[#EED4AD] font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                Schedule Another Meeting
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <style>{`
        /* Fix dropdown background for dark theme */
        select {
          background-color: #051f30 !important;
          color: #55ACD5 !important;
        }
        
        select option {
          background-color: #051f30 !important;
          color: #55ACD5 !important;
        }
        
        /* Ensure select maintains dark styling */
        select:focus {
          background-color: #051f30 !important;
          color: #55ACD5 !important;
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        {renderStep()}
      </div>
    </div>
  );
};

export default MeetingScheduler;
