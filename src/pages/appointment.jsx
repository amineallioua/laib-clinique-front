
import Form from '../components/appointement/form'
import Calender from '../components/appointement/calendar'
import React, { useState } from 'react';
import Footer from '../components/footer';

const appointment = () => {
    const [selectedDate, setSelectedDate] = useState(null);  // State for storing the selected date
 
    const handleDateChange = (newDate) => {
      setSelectedDate(newDate);  // Update the selected date
    };
    return ( 
        <section className='w-screen  h-auto' > 
       
        <div className='w-screen  p-5 sm:p-[51px]   lg:flex-row flex-col items-center flex   justify-between bg-custom-gradient mt-[68px]' >
           <div className='w-auto rounded-[50px] h-auto overflow-x-scroll ' >
           <Calender selectedDate={selectedDate} onDateChange={handleDateChange} />
           </div>
            
            <Form selectedDate={selectedDate}  />

        </div>
      <Footer />

        </section>
        
       
     
     );
}
 
export default appointment;