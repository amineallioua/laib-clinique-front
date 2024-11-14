import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import picture from '../../assets/png 2.png';

const Hsec3 = () => {
    const { t, i18n } = useTranslation(); // Initialize translation hook
    const isRtl = i18n.language === 'ar'; // Check if the language is Arabic (or any RTL language)

    return (
        <section
            className={`flex items-center justify-between w-screen pt-[50px] px-12 mx-auto bg-[#d4f5ff] relative flex-col md:flex-row ${isRtl ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Text Section */}
            <div className={`md:w-1/2 mb-20 mt-20 ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
                <h1 className="font-bold md:font-extrabold text-[36px] mb-5">{t('meetLPC.title')}</h1>
                <p className="md:text-lg">{t('meetLPC.description')}</p>
            </div>
            
            {/* Image Section */}
            <div className="md:w-1/2 justify-center flex mt-6 md:mt-0">
                <div className="w-[320px] aspect-square sm:w-[350px] sm:h-[350px] bg-white rounded-full border-[15px] border-[#4BA6C3] overflow-hidden flex items-center justify-center">
                    <img 
                        src={picture} 
                        alt="Meet LPC" 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </section>
    );
}

export default Hsec3;
