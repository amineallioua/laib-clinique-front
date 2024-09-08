import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white text-black shadow-md  top-0 left-0 w-full">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-black">
                    Logo
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-black">
                    <a href="#" className="text-[15px] font-bold leading-[21.94px] text-left">Home</a>
                    <a href="#" className="text-[15px] font-bold leading-[21.94px] text-left">Book an Appointment</a>
                    <a href="#" className="text-[15px] font-bold leading-[21.94px] text-left">Store</a>
                    <a href="#" className="text-[15px] font-bold leading-[21.94px] text-left">Courses</a>
                    <a href="#" className="text-[15px] font-bold leading-[21.94px] text-left">About Us</a>
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
                    <a href="#" className="block px-3 py-2 text-lg hover:bg-blue-600">Home</a>
                    <a href="#" className="block px-3 py-2 text-lg hover:bg-blue-600">Book an Appointment</a>
                    <a href="#" className="block px-3 py-2 text-lg hover:bg-blue-600">Store</a>
                    <a href="#" className="block px-3 py-2 text-lg hover:bg-blue-600">Courses</a>
                    <a href="#" className="block px-3 py-2 text-lg hover:bg-blue-600">About Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
