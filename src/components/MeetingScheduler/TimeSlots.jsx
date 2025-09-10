import React, { useState, useEffect } from 'react';

// Utility functions for time format conversion
const convertTo24Hour = (time12) => {
  const [time, period] = time12.split(' ');
  const [hours, minutes] = time.split(':');
  let hour24 = parseInt(hours);
  
  if (period === 'PM' && hour24 !== 12) {
    hour24 += 12;
  } else if (period === 'AM' && hour24 === 12) {
    hour24 = 0;
  }
  
  return `${hour24.toString().padStart(2, '0')}:${minutes}`;
};

const convertTo12Hour = (time24) => {
  const [hours, minutes] = time24.split(':');
  const hour24 = parseInt(hours);
  
  let hour12 = hour24;
  let period = 'AM';
  
  if (hour24 === 0) {
    hour12 = 12;
  } else if (hour24 === 12) {
    period = 'PM';
  } else if (hour24 > 12) {
    hour12 = hour24 - 12;
    period = 'PM';
  }
  
  return `${hour12}:${minutes} ${period}`;
};

const TimeSlots = ({ onTimeSelect, selectedDate, selectedTimezone = 'Asia/Kolkata' }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch available time slots from backend API
  const fetchAvailableSlots = async (date) => {
    if (!date) return;
    
    setLoading(true);
    setError(null);
    
    // Enhanced debugging
    console.log('=== AVAILABLE SLOTS API CALL ===');
    console.log('Selected date object:', date);
    // Fix timezone issue: Use local date instead of UTC
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    console.log('Date string being sent:', dateString);
    console.log('Date day of week:', date.getDay(), '(0=Sunday, 1=Monday, etc.)');
    console.log('Current time in Asia/Kolkata:', new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}));
    console.log('Selected date in Asia/Kolkata:', date.toLocaleString('en-US', {timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}));
    
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      
      // Call both available slots and booked slots APIs for comprehensive data
      const [availableResponse, bookedResponse] = await Promise.all([
        fetch(`${apiBaseUrl}/api/available-slots?date=${dateString}`),
        fetch(`${apiBaseUrl}/api/booked-slots?date=${dateString}`)
      ]);
      
      console.log('Available slots API URL:', `${apiBaseUrl}/api/available-slots?date=${dateString}`);
      console.log('Booked slots API URL:', `${apiBaseUrl}/api/booked-slots?date=${dateString}`);
      
      // Check if both API calls were successful
      if (!availableResponse.ok) {
        const errorText = await availableResponse.text();
        console.error('Available Slots API Error:', errorText);
        throw new Error(`Failed to fetch available slots: ${availableResponse.status} - ${errorText}`);
      }
      
      if (!bookedResponse.ok) {
        const errorText = await bookedResponse.text();
        console.error('Booked Slots API Error:', errorText);
        throw new Error(`Failed to fetch booked slots: ${bookedResponse.status} - ${errorText}`);
      }
      
      const [availableData, bookedData] = await Promise.all([
        availableResponse.json(),
        bookedResponse.json()
      ]);
      
      console.log('Available slots data:', availableData);
      console.log('Booked slots data:', bookedData);
      
      // Enhanced debug logging
      console.log('=== API RESPONSE ===');
      console.log('Available slots response:', availableData);
      console.log('Booked slots response:', bookedData);
      console.log('Available slots count:', availableData.slots?.length || 0);
      console.log('Booked slots count:', bookedData.bookedSlots?.length || 0);
      console.log('Date from backend:', availableData.date);
      console.log('Day of week from backend:', availableData.dayOfWeek);
      console.log('Business hours from backend:', availableData.businessHours);
      
      if (availableData.slots && availableData.slots.length > 0) {
        console.log('Available slots received:', availableData.slots.length);
        console.log('First few available slots:', availableData.slots.slice(0, 3));
        console.log('Time format example:', availableData.slots[0]?.time, 'Display format:', availableData.slots[0]?.displayTime);
      } else {
        console.log('No available slots received from backend');
      }
      
      if (bookedData.bookedSlots && bookedData.bookedSlots.length > 0) {
        console.log('Booked slots received:', bookedData.bookedSlots.length);
        console.log('Booked slots:', bookedData.bookedSlots);
      } else {
        console.log('No booked slots for this date');
      }
      
      // Check if we have slots data
      if (availableData.slots && availableData.slots.length > 0) {
        // Convert backend slots to frontend format
        const formattedSlots = availableData.slots.map(slot => ({
          time: slot.time,
          display: slot.displayTime,
          available: slot.available,
          reason: slot.reason
        }));
        setTimeSlots(formattedSlots);
        
        // Check if it's a weekday but all slots are in the past
        const isWeekday = availableData.dayOfWeek && !['Saturday', 'Sunday'].includes(availableData.dayOfWeek);
        const hasAvailableSlots = availableData.availableSlots > 0;
        
        console.log('=== FRONTEND LOGIC DEBUG ===');
        console.log('isWeekday:', isWeekday);
        console.log('hasAvailableSlots:', hasAvailableSlots);
        console.log('dayOfWeek:', availableData.dayOfWeek);
        console.log('availableSlots:', availableData.availableSlots);
        console.log('totalBookedSlots:', bookedData.totalBookedSlots || 0);
        
        if (isWeekday && !hasAvailableSlots) {
          // It's a valid weekday, but all slots are in the past
          setError('All time slots for today have passed. Please select a future date or time.');
          console.log('⚠️ Valid weekday but all slots are in the past - ERROR SET');
        } else if (!isWeekday) {
          // It's a weekend
          setError('Meetings can only be scheduled on weekdays (Monday-Friday)');
          console.log('❌ Weekend date selected - ERROR SET');
        } else {
          // Clear any previous error
          setError(null);
          console.log('✅ Time slots set successfully:', formattedSlots.length, 'slots');
          console.log('📊 Summary: Available slots:', availableData.availableSlots, '| Booked slots:', bookedData.totalBookedSlots || 0);
        }
      } else {
        // No slots available (weekend or invalid date)
        setTimeSlots([]);
        setError(availableData.message || 'No time slots available for this date');
        console.error('❌ Backend says date is not available:', availableData.message);
        console.error('❌ This might be due to:');
        console.error('   - Weekend date (but Monday should be valid)');
        console.error('   - Past date/time');
        console.error('   - Backend validation issue');
      }
    } catch (err) {
      console.error('=== API CALL ERROR ===');
      console.error('Error fetching available slots:', err);
      
      // Check if it's a network error (backend not running)
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setError('Backend server is not running. Please start the server first.');
        console.error('❌ Backend server is not running or not accessible');
      } else {
        setError(`Failed to load available time slots: ${err.message}`);
        console.error('❌ API call failed:', err.message);
      }
      
      setTimeSlots([]);
    } finally {
      setLoading(false);
    }
  };

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

  // Helper function to get working hours display
  const getWorkingHoursDisplay = () => {
    return '9:00 AM - 6:00 PM (Monday-Friday)';
  };

  // Fetch available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
      setSelectedTime(''); // Reset selection when date changes
    }
  }, [selectedDate]);

  const handleTimeSelect = (timeSlot) => {
    if (timeSlot.available) {
      // Store the time in 24-hour format (HH:MM) for API calls
      console.log('Time slot selected:', timeSlot);
      console.log('Time value being set (24-hour):', timeSlot.time);
      setSelectedTime(timeSlot.time); // This should already be in 24-hour format from backend
    }
  };

  const handleConfirmSelection = () => {
    console.log('Confirming time selection:', selectedTime);
    onTimeSelect(selectedTime);
  };

  return (
    <div className="space-y-6">
      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#55ACD5]"></div>
          <span className="ml-3 text-[#55ACD5]">Loading available time slots...</span>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-md p-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-red-400">{error}</span>
          </div>
        </div>
      )}
      

      {/* Time slots summary */}
      {!loading && timeSlots.length > 0 && (
        <div className="mb-4 p-3 bg-[#051f30]/30 rounded-md border border-[#55ACD5]/20">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-[#55ACD5]">
                  Available: {timeSlots.filter(slot => slot.available).length}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-[#55ACD5]">
                  Booked: {timeSlots.filter(slot => !slot.available && slot.reason === 'Already booked').length}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-[#55ACD5]">
                  Past: {timeSlots.filter(slot => !slot.available && slot.reason === 'Past time slot').length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Time slots grid */}
      {!loading && timeSlots.length > 0 && (
        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
          {timeSlots.map((timeSlot) => (
            <div key={timeSlot.time} className="flex items-center justify-between">
              <button
                onClick={() => handleTimeSelect(timeSlot)}
                disabled={!timeSlot.available}
                className={`
                  flex-1 p-3 rounded-md border text-sm font-medium transition-all duration-200 relative
                  ${!timeSlot.available
                    ? timeSlot.reason === 'Already booked'
                      ? 'bg-red-500/10 text-red-400 border-red-500/30 cursor-not-allowed'
                      : 'bg-gray-600/20 text-gray-400 border-gray-600/30 cursor-not-allowed'
                    : selectedTime === timeSlot.time
                      ? 'bg-[#1A5069] text-[#EED4AD] border-[#55ACD5]'
                      : 'bg-transparent text-[#EED4AD] border-[#55ACD5]/30 hover:border-[#55ACD5] hover:bg-[#55ACD5]/10'
                  }
                `}
                title={!timeSlot.available ? timeSlot.reason : ''}
              >
                <div className="flex items-center justify-between">
                  <span>{timeSlot.display}</span>
                  {!timeSlot.available && (
                    <div className="flex items-center space-x-1">
                      {timeSlot.reason === 'Already booked' ? (
                        <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* No slots available */}
      {!loading && !error && timeSlots.length === 0 && (
        <div className="text-center py-8">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-400">No time slots available for this date</p>
          <p className="text-gray-500 text-sm mt-1">Please select a different date</p>
        </div>
      )}

      {/* Confirm selection button */}
      {selectedTime && !loading && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleConfirmSelection}
            className="px-6 py-3 bg-[#1A5069] text-[#EED4AD] rounded-md text-sm font-medium hover:bg-[#0F7BAE] transition-colors"
          >
            Confirm Time: {timeSlots.find(slot => slot.time === selectedTime)?.display || convertTo12Hour(selectedTime)}
          </button>
        </div>
      )}

    </div>
  );
};

export default TimeSlots;