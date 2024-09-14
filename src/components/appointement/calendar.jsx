import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';  // Import dayjs

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
      className="rounded-[50px] shadow-3xl shadow-black p-10 h-[480px] w-[750px]"
        orientation="landscape"
        defaultValue={dayjs()}  // Set default date
        sx={{
          backgroundColor: 'white',       // Background color of the picker
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '800',  
          fontSize: '20px',  

          '& .MuiPickersCalendarHeader-root': {
            
            backgroundColor: '#5188F2',    // Custom header color (blue)
            color: 'white',     
            fontFamily: 'Montserrat, sans-serif',  
            fontWeight: '800',  
            fontSize: '20px', 
            borderRadius:'15px'          // Custom text color
          },
          '& .MuiPickersDay-root': {
            fontWeight: 'bold', 
            fontFamily:'Montserrat', 
            fontFamily: 'Montserrat, sans-serif', 
            fontWeight: '800', 
            fontSize: '15px',            // Custom text styles for days
            '&:hover': {
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: '#6366f1',  // Hover color on day
            },
            '&.Mui-selected': {
              backgroundColor: '#5188F2', 
              fontFamily: 'Montserrat, sans-serif', // Selected day color
            },
            '& .MuiTypography-root.MuiTypography-overline': {
              display: 'none !important',  // Hide the "Select date" text
            },
            '& .MuiPickersToolbar-content': {
              display: 'none !important',  // Hide the toolbar content
            },
            '& .MuiDatePickerToolbar-title': {
              display: 'none !important',  // Hide the selected date header
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
