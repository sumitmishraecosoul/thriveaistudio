import React, { useState } from 'react';

const Calendar = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const getAvailableDates = () => {
    const today = new Date();
    const availableDates = [];
    
    // Generate available dates for the next 30 days
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (Saturday = 6, Sunday = 0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        availableDates.push(date);
      }
    }
    
    return availableDates;
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);
  const availableDates = getAvailableDates();

  const isDateAvailable = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return availableDates.some(availableDate => 
      availableDate.toDateString() === date.toDateString()
    );
  };

  const isDateSelected = (day) => {
    // For demo purposes, let's say August 27th is selected
    return currentMonth.getMonth() === 7 && day === 27; // August is month 7 (0-indexed)
  };

  const handleDateClick = (day) => {
    if (isDateAvailable(day)) {
      const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      onDateSelect(selectedDate, 'Asia/Calcutta');
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-4">
      {/* Month Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="p-2 text-[#55ACD5] hover:text-[#EED4AD] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <h3 className="text-lg font-semibold text-[#EED4AD]">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        
        <button
          onClick={nextMonth}
          className="p-2 text-[#55ACD5] hover:text-[#EED4AD] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-[#55ACD5] py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before the first day of the month */}
        {Array.from({ length: startingDay }, (_, i) => (
          <div key={`empty-${i}`} className="h-10"></div>
        ))}
        
        {/* Days of the month */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isAvailable = isDateAvailable(day);
          const isSelected = isDateSelected(day);
          const isToday = new Date().toDateString() === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toDateString();
          
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={!isAvailable}
              className={`
                h-10 w-10 rounded-full text-sm font-medium transition-all duration-200 relative
                ${isSelected 
                  ? 'bg-[#1A5069] text-[#EED4AD] border-2 border-[#55ACD5]' 
                  : isAvailable 
                    ? 'text-[#55ACD5] hover:bg-[#55ACD5]/20 hover:text-[#EED4AD] cursor-pointer' 
                    : 'text-gray-600 cursor-not-allowed'
                }
                ${isToday ? 'ring-2 ring-[#55ACD5]' : ''}
              `}
            >
              {day}
              {/* Red dot indicator for special dates */}
              {day === 26 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Fixed Timezone Display */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-[#EED4AD] mb-2">Time zone</label>
        <div className="w-full p-3 bg-[#051f30]/30 border border-[#55ACD5]/30 rounded-md text-[#55ACD5]">
          Asia/Calcutta (GMT+5:30)
        </div>
      </div>
    </div>
  );
};

export default Calendar;

