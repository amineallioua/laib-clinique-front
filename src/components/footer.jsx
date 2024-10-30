import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = ({ color }) => {
    return (
        <div className={`relative bottom-0 w-full ${color ? "bg-[#f7869b]" : "bg-[#4BA6C3]"} text-white py-10`}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
                {/* About Us Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">About Us</h2>
                    <p className="text-sm mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex space-x-4 text-lg">
                        <a href="https://www.facebook.com/amine.allioua/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-[#3b5998] transition-colors duration-300" />
                        </a>
                        <a href="https://www.instagram.com/darine_lb/?locale=fr&hl=en" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-[#E1306C] transition-colors duration-300" />
                        </a>
                        <a href="https://www.tiktok.com/@darine_lb" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="hover:text-[#000000] transition-colors duration-300" />
                        </a>
                        <a href="https://wa.me/0798653819" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="hover:text-[#25D366] transition-colors duration-300" />
                        </a>
                    </div>
                </div>

                {/* Menu Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Menu</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Disclaimer</a></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Batna, Algeria</li>
                        <li>+213 798 653 819</li>
                        <li>amineallioua123@gmail.com</li>
                        <li><a href="#" className="hover:underline">www.example.com</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8">
                © 2024 All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;