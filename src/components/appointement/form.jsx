import correct from '../../assets/correct.png';
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';

const Form = ({ selectedDate }) => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate phone number
    const phoneRegex = /^[0-9]*$/;
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      setError(t('form.phoneError'));
      return;
    }
    if (phoneNumber.length > 10) {
      setError(t('form.phoneLengthError'));
      return;
    }

    // Validate date selection
    if (!selectedDate) {
      setError(t('form.dateError'));
      return;
    }

    const appointmentData = {
      fullName,
      phoneNumber,
      location,
      date: selectedDate.format('YYYY-MM-DD'),
      category: appointmentType,
    };

    console.log('Appointment Data:', appointmentData);

    try {
      setLoading(true); // Start loading spinner
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

      toggleMenu();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };
  
  return (
    <div className={`lg:w-[430px] md:w-[600px] sm:w-[500px] xs:w-full w-[320px] sm:h-[500px] h-[480px] mb-10 bg-white rounded-[50px] shadow-3xl shadow-black flex-col justify-between ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <form onSubmit={handleSubmit} className="px-8 pt-[55px] pb-8 mb-1">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            {t('form.fullName')}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder={t('form.fullNamePlaceholder')}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="appearance-none border-[2px] mb-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            {t('form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t('form.phonePlaceholder')}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-[2px] appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }} 
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            {t('form.location')}
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder={t('form.locationPlaceholder')}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-[2px] mb-4 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentType">
            {t('form.diagnosis')}
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            value={appointmentType}
            onChange={(e) => setAppointmentType(e.target.value)}
            className="border-[2px] mb-4 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
          <option value="" disabled>{t('form.selectOption')}</option>
          <option value="consultation Psychologique">{t('form.psychologicalConsultation')}</option>
          <option value="consultation Orthophonique">{t('form.speechTherapyConsultation')}</option>
          <option value="suivi">{t('form.followUp')}</option>
          <option value="Première réunion">{t('form.initialMeeting')}</option>
          </select>
        </div>

        <div className="flex items-center justify-center relative">
      <button
          type="submit"
          className="bg-[#4BA6C3] w-[85%] min-h-[48px] flex items-center justify-center relative hover:bg-blue-700 hover:scale-105 ease-in-out duration-300 hover:shadow-xl hover:shadow-gray-400 text-white font-extrabold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          disabled={loading} // Disable button when loading
        >
        {loading ? (
        <ClipLoader
          color="#ffffff"
          size={24}
          loading={loading}
        />
      ) : (
          t('form.bookAppointment')
        )}
      </button>

        </div>
        {error && <span className="text-red-500 text-xs m-0 text-center block mt-3">{error}</span>}
      </form>

      <div className={`w-full flex transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40`} onClick={() => { toggleMenu(); navigate(`/`) }}>
        <div 
          onClick={(e) => e.stopPropagation()}
          className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] mt-[200px] sm:mt-auto shadow-2xl flex-row relative justify-center"
        >
          <center>
            <img src={correct} alt="Appointment booked" className='w-[170px] h-[170px] mb-[60px]' />
            <h1 className='text-[22px] font-extrabold text-[#374885]'>{t('form.appointmentBooked')}</h1>
          </center>
          <button>
            <IoClose onClick={() => { toggleMenu(); navigate(`/`) }} className='absolute top-10 right-10 text-[40px] text-[#585858]' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
