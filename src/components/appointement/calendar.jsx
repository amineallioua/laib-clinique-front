import * as React from 'react';
import { useState } from 'react';  // Import useState for managing date state
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs());  // State for storing the selected date

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);  // Update the selected date
    
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        className="rounded-[50px] shadow-3xl shadow-black p-10 h-[480px] mb-10 w-[750px] "
        orientation="landscape"
        value={selectedDate}  // Controlled value from state
        onChange={handleDateChange}  // Handle date change
        sx={{
          backgroundColor: 'white',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '800',
          fontSize: '20px',

          '& .MuiPickersCalendarHeader-root': {
            backgroundColor: '#5188F2',
            color: 'white',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '800',
            fontSize: '20px',
            borderRadius: '15px'
          },
          '& .MuiPickersDay-root': {
            
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '800',
            fontSize: '15px',
            '&:hover': {
              backgroundColor: '#6366f1',
            },
            '&.Mui-selected': {
              backgroundColor: '#5188F2',
            },
            '& .MuiTypography-root.MuiTypography-overline': {
              display: 'none !important',
            },
            '& .MuiPickersToolbar-content': {
              display: 'none !important',
            },
            '& .MuiDatePickerToolbar-title': {
              display: 'none !important',
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
