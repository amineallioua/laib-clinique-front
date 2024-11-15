import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import Logo1 from '../assets/Logo-reversed-cion.png';


const Navbar = () => {
    const { t, i18n } = useTranslation(); // Initialize i18n for language switching
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to change language
    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    const isActive = (path) => location.pathname === path;

   

    return (
        <nav className="bg-white text-black shadow-md fixed z-40 top-0 left-0 w-screen">
            <div className="container mx-auto px-3 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center max-w-14 max-h-14">
                    <img src={Logo1} alt="Logo" className="" />
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-black">
                    <Link
                        to="/"
                        className={`text-[15px] font-bold ${isActive('/') ? 'border-b-2 border-[#4BA6C3]' : ''}`}
                    >
                        {t('navbar.home')}
                    </Link>
                    <Link
                        to="/appointment"
                        className={`text-[15px] font-bold ${isActive('/appointment') ? 'border-b-2 border-[#4BA6C3]' : ''}`}
                    >
                        {t('navbar.appointment')}
                    </Link>
                    <Link
                        to="/store"
                        className={`text-[15px] font-bold ${isActive('/store') ? 'border-b-2 border-[#FFCAD4]' : ''}`}
                    >
                        {t('navbar.store')}
                    </Link>
                    <Link
                        to="/courses"
                        className={`text-[15px] font-bold ${isActive('/courses') ? 'border-b-2 border-[#4BA6C3]' : ''}`}
                    >
                        {t('navbar.courses')}
                    </Link>
                    
                </div>

                {/* Language Selector */}
                <select
                    onChange={handleLanguageChange}
                    className="border rounded p-1 text-black"
                    defaultValue={i18n.language}
                >
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                </select>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <RiMenu3Line className='text-[30px]' />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#4BA6C3] text-white`}>
  <div className="px-2 py-3 space-y-1">
    <Link
      onClick={toggleMenu}
      to="/"
      className={`block px-3 py-2 text-lg hover:bg-[#3A8DA4] ${isActive('/') ? 'bg-[#4BA6C3]' : ''}`}
    >
      {t('navbar.home')}
    </Link>
    <Link
      onClick={toggleMenu}
      to="/appointment"
      className={`block px-3 py-2 text-lg hover:bg-[#3A8DA4] ${isActive('/appointment') ? 'bg-[#4BA6C3]' : ''}`}
    >
      {t('navbar.appointment')}
    </Link>
    <Link
      onClick={toggleMenu}
      to="/store"
      className={`block px-3 py-2 text-lg hover:bg-[#3A8DA4] ${isActive('/store') ? 'bg-[#4BA6C3]' : ''}`}
    >
      {t('navbar.store')}
    </Link>
    <Link
      onClick={toggleMenu}
      to="/courses"
      className={`block px-3 py-2 text-lg hover:bg-[#3A8DA4] ${isActive('/courses') ? 'bg-[#4BA6C3]' : ''}`}
    >
      {t('navbar.courses')}
    </Link>
  </div>
</div>

        </nav>
    );
};

export default Navbar;
