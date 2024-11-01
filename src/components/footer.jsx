import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = ({ color }) => {
    const { t } = useTranslation();

    return (
        <div className={`relative bottom-0 w-full ${color ? "bg-[#f7869b]" : "bg-[#4BA6C3]"} text-white py-10`}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
                {/* About Us Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">{t("footer.about_us")}</h2>
                    <p className="text-sm mb-4">
                        {t("footer.about_text")}
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
                    <h2 className="text-xl font-bold mb-4">{t("footer.menu")}</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">{t("footer.menu_items.home")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.menu_items.about")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.menu_items.services")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.menu_items.blog")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.menu_items.contact")}</a></li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">{t("footer.quick_links")}</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">{t("footer.quick_links_items.privacy_policy")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.quick_links_items.terms_conditions")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.quick_links_items.disclaimer")}</a></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">{t("footer.contact_us")}</h2>
                    <ul className="space-y-2 text-sm">
                        <li>{t("footer.contact_info.address")}</li>
                        <li>{t("footer.contact_info.phone")}</li>
                        <li>{t("footer.contact_info.email")}</li>
                        <li><a href="#" className="hover:underline">{t("footer.contact_info.website")}</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8">
                {t("footer.copyright")}
            </div>
        </div>
    );
}

export default Footer;
