import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location (route)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Check if the current path matches the link's path
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white text-black shadow-md fixed z-40 top-0 left-0 w-full">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-black">
                    Logo
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-black">
                    <Link
                        to="/"
                        className={`text-[15px] font-bold leading-[21.94px] text-left ${isActive('/') ? 'border-b-2 border-blue-500' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        className={`text-[15px] font-bold leading-[21.94px] text-left ${isActive('/appointment') ? 'border-b-2 border-blue-500' : ''}`}
                    >
                        Book an Appointment
                    </Link>
                    <Link
                        to="/"
                        className={`text-[15px] font-bold leading-[21.94px] text-left ${isActive('/store') ? 'border-b-2 border-blue-500' : ''}`}
                    >
                        Store
                    </Link>
                    <Link
                        to="/"
                        className={`text-[15px] font-bold leading-[21.94px] text-left ${isActive('/courses') ? 'border-b-2 border-blue-500' : ''}`}
                    >
                        Courses
                    </Link>
                    <Link
                        to="/"
                        className={`text-[15px] font-bold leading-[21.94px] text-left ${isActive('/about') ? 'border-b-2 border-blue-500' : ''}`}
                    >
                        About Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-700 text-white`}>
                <div className="px-2 py-3 space-y-1">
                    <Link
                        to="/"
                        className={`block px-3 py-2 text-lg hover:bg-blue-600 ${isActive('/') ? 'bg-blue-600' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/appointment"
                        className={`block px-3 py-2 text-lg hover:bg-blue-600 ${isActive('/appointment') ? 'bg-blue-600' : ''}`}
                    >
                        Book an Appointment
                    </Link>
                    <Link
                        to="/store"
                        className={`block px-3 py-2 text-lg hover:bg-blue-600 ${isActive('/store') ? 'bg-blue-600' : ''}`}
                    >
                        Store
                    </Link>
                    <Link
                        to="/courses"
                        className={`block px-3 py-2 text-lg hover:bg-blue-600 ${isActive('/courses') ? 'bg-blue-600' : ''}`}
                    >
                        Courses
                    </Link>
                    <Link
                        to="/about"
                        className={`block px-3 py-2 text-lg hover:bg-blue-600 ${isActive('/about') ? 'bg-blue-600' : ''}`}
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
