import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const Cform = ({ Name, toggleMenu, isOpen, toggleMenu1 }) => {
  const { t, i18n } = useTranslation();
  const [error, setError] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [title, settitle] = useState(Name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear error before new submission

    const phoneRegex = /^[0-9]*$/; // Only digits allowed
    if (phone && !phoneRegex.test(phone)) {
      setError(t('Courseform.error.phoneInvalid'));
      return;
    }
    if (phone.length < 10 || phone.length >10) {
      setError(t('Courseform.error.phoneTooLong'));
      return;
    }

    // Title length validation
    if (title.length < 5) {
      setError(t('Courseform.error.titleTooShort'));
      return;
    }

    const trainingrequest = {
      name,
      phone,
      email,
      title,
    };
    console.log(trainingrequest);

    try {
      const response = await fetch('http://localhost:4000/api/trainingrequest/create_trainingRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainingrequest),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || t('Courseform.error.requestFailed'));
        return;
      }

      // Close modal on success
      toggleMenu1();
      toggleMenu();
    } catch (error) {
      console.error('Error:', error);
      setError(t('Courseform.error.processingRequest'));
    }
  };

  // Determine alignment based on current language
  const textAlignment = i18n.language === 'ar' ? 'text-right' : 'text-left';
  const formAlignment = i18n.language === 'ar' ? 'text-right' : 'text-left';

  return (
    <div
      className={`w-full flex left-0 justify-center items-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      onClick={toggleMenu}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative sm:w-[430px] sm:h-[500px] w-[330px] h-[480px] mt-[100px] mb-10 bg-white rounded-[50px] shadow-3xl shadow-black flex-col justify-between p-6"
      >
        {/* Title Container */}
        <div className="text-center mb-4">
          <h1 className={`text-[25px] font-bold text-black overflow-hidden text-ellipsis whitespace-nowrap text-center`}>
            {title}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="mb-1">
          <div className="mb-5 mt-10">
            <label className={`block text-gray-700 text-sm font-bold mb-2 ${formAlignment}`} htmlFor="name">
              {t('Courseform.fullName')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('Courseform.enterFullName')}
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="appearance-none border-[2px] mb-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }} // Align placeholder text
              required
            />
          </div>
          <div className="mb-5">
            <label className={`block text-gray-700 text-sm font-bold mb-2 ${formAlignment}`} htmlFor="phone">
              {t('Courseform.phoneNumber')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t('Courseform.enterPhoneNumber')}
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="border-[2px] mb-2 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }} // Align placeholder text
              required
            />
          </div>
          <div className="mb-5">
            <label className={`block text-gray-700 text-sm font-bold mb-2 ${formAlignment}`} htmlFor="email">
              {t('Courseform.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('Courseform.enterEmail')}
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border-[2px] mb-4 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }} // Align placeholder text
              required
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-[#5188F2] w-full hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            >
              {t('Courseform.enroll')}
            </button>
          </div>
          {error && <div className="text-red-500 text-xs text-center mt-3">{error}</div>}
        </form>
        <button onClick={toggleMenu} className="absolute top-5 right-5">
          <IoClose className="text-[40px] text-[#585858]" />
        </button>
      </div>
    </div>
  );
};

export default Cform;
