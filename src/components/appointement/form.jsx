import correct from '../../assets/correct.png';
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';

const Form = ({ selectedDate }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [error, setError] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const phoneRegex = /^[0-9]*$/; // Only digits allowed
    if (phoneNumber && !phoneRegex.test(phoneNumber) ||  phoneNumber.length !== 10 ) {
      setError('Phone number must be a valid number.');
      return;
    }
    if(selectedDate==null){
      setError('set date please')
      return;
    }
    const appointmentData = {
      fullName,
      phoneNumber,
      location,
      date: selectedDate ? selectedDate.format('YYYY-MM-DD') : '', // Use selected date
      category: appointmentType,
    };

    try {
      const response = await fetch('http://localhost:4000/api/appointments/create_appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error('Failed to create appointment');
      }

      // Show confirmation message
      toggleMenu();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="sm:w-[430px] sm:h-[500px] w-[330px] h-[480px] mb-10 bg-white rounded-[50px] shadow-3xl shadow-black flex-col justify-between">
      <form onSubmit={handleSubmit} className="px-8 pt-[55px] pb-8 mb-1">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="appearance-none border-[2px] mb-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-[2px] mb- appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
              
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-[2px] mb-4 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentType">
            Diagnosis
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            value={appointmentType}
            onChange={(e) => setAppointmentType(e.target.value)}
            className="border-[2px] mb-4 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="consultation">Consultation</option>
            <option value="follow-up">Follow-up</option>
            <option value="initial">Initial Meeting</option>
          </select>
          {error && <span className="text-red-500 text-xs m-0">{error}</span>}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#5188F2] w-[85%] hover:bg-blue-700 hover:scale-105 ease-in-out duration-300   hover:shadow-xl hover:shadow-gray-400 text-white font-extrabold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Book an Appointment
          </button>
        </div>
      </form>

      <div className={`w-full flex transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40`} onClick={toggleMenu} >
        <div 
        onClick={(e) => e.stopPropagation()}
        className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] mt-[200px] sm:mt-auto shadow-2xl flex-row relative justify-center">
          <center>
            <img src={correct} alt="Appointment booked" className='w-[170px] h-[170px] mb-[60px]' />
            <h1 className='text-[22px] font-extrabold text-[#374885]'>Appointment Booked</h1>
          </center>
        <button>  <IoClose onClick={toggleMenu} className='absolute top-10 right-10 text-[40px] text-[#585858]' /></button>
        </div>
      </div>
    </div>
  );
};

export default Form;
