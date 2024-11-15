import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

// Define the color you want for the buttons
const calendarButtonColor = '#4BA6C3';

// Custom styled wrapper to apply styles to the OK and Cancel buttons
const StyledStaticDatePicker = styled(StaticDatePicker)({
  '& .MuiPickersModalDialog-root .MuiButton-textPrimary': {
    color: calendarButtonColor,
  },
});

export default function Calendar({ selectedDate, onDateChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledStaticDatePicker
        displayStaticWrapperAs={isMobile ? 'mobile' : ''}
        className="rounded-[30px] shadow-3xl shadow-black md:p-10 mb-10 w-full"
        orientation={isMobile ? 'portrait' : 'landscape'}
        value={selectedDate || dayjs()}
        onChange={onDateChange}
        renderInput={(params) => <input {...params} />}
        sx={{
          backgroundColor: 'white',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '800',
          fontSize: { xs: '16px', sm: '18px', lg: '20px' },
          width: { xs: 'auto', sm: 'auto', md: '600px', lg: '750px' },
          height: { xs: 'auto', lg: '500px' },
          '& .MuiPickersCalendarHeader-root': {
            backgroundColor: '#4BA6C3',
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
              backgroundColor: '#4BA6C3',
            },
            '&.Mui-selected': {
              backgroundColor: '#4BA6C3',
            },
          },
        }}
        localeText={{
          calendarLabel: t('calendar.label'),
          okButtonLabel: t('calendar.ok'),
          cancelButtonLabel: t('calendar.cancel'),
        }}
      />
    </LocalizationProvider>
  );
}
