import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/file.png'
const Hsec5 = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    return (
        <section 
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="w-full overflow-hidden bg-[#d4f5ff] p-12"
        >
            <div className={`sm:flex ${isArabic ? 'flex-row-reverse' : 'flex-row'} items-center justify-between`}>
                <div className={`sm:w-1/3 h-auto ${isArabic ? 'sm:right-18' : 'md:left-18'}`}>
                    <img 
                        src={logo} 
                        alt="Sample" 
                        className="w-15 h-auto"
                    />
                </div>

                <div className={`sm:w-2/3 p-12 ${isArabic ? 'text-right' : 'text-left'}`}>
                    <h1 className="text-4xl font-bold relative mt-20px md:mt-0">
                        {t('sectionFive.title')}
                    </h1>

                    <p className="mb-6 relative mt-10 md:mt-10">
                        {t('sectionFive.description')}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hsec5;
