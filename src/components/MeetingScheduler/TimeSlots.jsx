import React, { useState } from 'react';

const TimeSlots = ({ onTimeSelect, selectedDate }) => {
  const [selectedTime, setSelectedTime] = useState('10:30 PM');

  // Available time slots (in 24-hour format for easier comparison)
  const timeSlots = [
    '07:30 PM',
    '08:00 PM', 
    '09:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM'
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmSelection = () => {
    onTimeSelect(selectedTime);
  };

  return (
    <div className="space-y-6">
      {/* Time slots grid */}
      <div className="grid grid-cols-1 gap-3">
        {timeSlots.map((time) => (
          <div key={time} className="flex items-center justify-between">
            <button
              onClick={() => handleTimeSelect(time)}
              className={`
                flex-1 p-3 rounded-md border text-sm font-medium transition-all duration-200
                ${selectedTime === time
                  ? 'bg-[#1A5069] text-[#EED4AD] border-[#55ACD5]'
                  : 'bg-transparent text-[#EED4AD] border-[#55ACD5]/30 hover:border-[#55ACD5] hover:bg-[#55ACD5]/10'
                }
              `}
            >
              {time}
            </button>
            
            {selectedTime === time && (
              <button
                onClick={handleConfirmSelection}
                className="ml-3 px-4 py-3 bg-[#1A5069] text-[#EED4AD] rounded-md text-sm font-medium hover:bg-[#0F7BAE] transition-colors"
              >
                Select
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Timezone info */}
      <div className="pt-4 border-t border-[#55ACD5]/20">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-[#55ACD5]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="text-[#55ACD5] text-sm">Asia/Calcutta (GMT+5:30)</span>
        </div>
      </div>
    </div>
  );
};

export default TimeSlots;

