import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function Calendar({ selectedDate, onDateChange }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs={isMobile ? 'mobile' : ''} // Display as mobile on small screens
          className="rounded-[30px] shadow-3xl shadow-black md:p-10 mb-10 w-full "
          orientation={isMobile ? 'portrait' : 'landscape'} // Portrait for mobile, landscape for larger screens
          value={selectedDate || dayjs()}
          onChange={onDateChange}
          sx={{
            backgroundColor: 'white',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '800',
            fontSize: { xs: '16px', sm: '18px', lg: '20px' },
            width: { xs: 'auto',sm:'auto', md:'600px', lg: '750px' },
            height: { xs: 'auto', lg: '500px' },

            '& .MuiPickersCalendarHeader-root': {
              backgroundColor: '#5188F2',
              color: 'white',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              borderRadius: '15px',
            },
            '& .MuiPickersDay-root': {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              fontSize: { xs: '12px', sm: '15px' },
              '&:hover': {
                backgroundColor: '#6366f1',
              },
              '&.Mui-selected': {
                backgroundColor: '#5188F2',
              },
            },
          }}
        />
    </LocalizationProvider>
  );
}