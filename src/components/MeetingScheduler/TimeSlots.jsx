import React, { useState, useEffect } from 'react';

const TimeSlots = ({ onTimeSelect, selectedDate, selectedTimezone = 'Asia/Calcutta' }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);

  // Timezone-specific working hours
  const timezoneWorkingHours = {
    'Asia/Calcutta': { start: 9, end: 18 }, // 9 AM to 6 PM
    'America/New_York': { start: 9, end: 17 }, // 9 AM to 5 PM
    'America/Los_Angeles': { start: 9, end: 17 }, // 9 AM to 5 PM
    'Europe/London': { start: 9, end: 17 }, // 9 AM to 5 PM
    'Europe/Paris': { start: 9, end: 17 }, // 9 AM to 5 PM
    'Europe/Berlin': { start: 9, end: 17 }, // 9 AM to 5 PM
  };

  // Generate time slots based on timezone
  const generateTimeSlots = (timezone) => {
    const workingHours = timezoneWorkingHours[timezone] || timezoneWorkingHours['Asia/Calcutta'];
    const slots = [];
    
    for (let hour = workingHours.start; hour < workingHours.end; hour++) {
      // Add full hour slot
      slots.push({
        time: `${hour.toString().padStart(2, '0')}:00`,
        display: formatTime(hour, 0, timezone)
      });
      
      // Add half hour slot
      slots.push({
        time: `${hour.toString().padStart(2, '0')}:30`,
        display: formatTime(hour, 30, timezone)
      });
    }
    
    return slots;
  };

  // Format time in 12-hour format with AM/PM for all timezones
  const formatTime = (hour, minutes, timezone) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Helper function to get timezone display name
  const getTimezoneDisplay = (timezone) => {
    const timezoneMap = {
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
    const workingHours = timezoneWorkingHours[timezone] || timezoneWorkingHours['Asia/Calcutta'];
    
    const startPeriod = workingHours.start >= 12 ? 'PM' : 'AM';
    const endPeriod = workingHours.end >= 12 ? 'PM' : 'AM';
    const startHour = workingHours.start === 0 ? 12 : workingHours.start > 12 ? workingHours.start - 12 : workingHours.start;
    const endHour = workingHours.end === 0 ? 12 : workingHours.end > 12 ? workingHours.end - 12 : workingHours.end;
    
    return `${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`;
  };

  // Update time slots when timezone changes
  useEffect(() => {
    const newTimeSlots = generateTimeSlots(selectedTimezone);
    setTimeSlots(newTimeSlots);
    setSelectedTime(''); // Reset selection when timezone changes
  }, [selectedTimezone]);

  const handleTimeSelect = (timeSlot) => {
    setSelectedTime(timeSlot.time);
  };

  const handleConfirmSelection = () => {
    onTimeSelect(selectedTime);
  };

  return (
    <div className="space-y-6">
      {/* Time slots grid */}
      <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
        {timeSlots.map((timeSlot) => (
          <div key={timeSlot.time} className="flex items-center justify-between">
            <button
              onClick={() => handleTimeSelect(timeSlot)}
              className={`
                flex-1 p-3 rounded-md border text-sm font-medium transition-all duration-200
                ${selectedTime === timeSlot.time
                  ? 'bg-[#1A5069] text-[#EED4AD] border-[#55ACD5]'
                  : 'bg-transparent text-[#EED4AD] border-[#55ACD5]/30 hover:border-[#55ACD5] hover:bg-[#55ACD5]/10'
                }
              `}
            >
              {timeSlot.display}
            </button>
          </div>
        ))}
      </div>

      {/* Confirm selection button */}
      {selectedTime && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleConfirmSelection}
            className="px-6 py-3 bg-[#1A5069] text-[#EED4AD] rounded-md text-sm font-medium hover:bg-[#0F7BAE] transition-colors"
          >
            Confirm Time: {timeSlots.find(slot => slot.time === selectedTime)?.display}
          </button>
        </div>
      )}

    </div>
  );
};

export default TimeSlots;

