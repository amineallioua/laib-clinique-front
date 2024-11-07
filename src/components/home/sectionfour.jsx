import React from 'react';
import Card from './cards'; // Adjust the import according to your structure
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Hsec4 = () => {
    const { t, i18n } = useTranslation(); // Initialize i18n for language switching
    const isArabic = i18n.language === 'ar';

    return (
        <section data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="w-screen px-12 mx-auto bg-[#d4f5ff] relative flex-row pt-[80px]"
        >
            <h1 className="font-bold md:font-extrabold text-[36px] mb-5 mx-auto text-center">{t('services.title')}</h1>
            <p className="text-center">{t('services.description')}</p>
            <center>
                <div className="w-[90%] px-3 md:px-10 py-5 pb-10 bg-custom-gradient2 h-auto justify-center mt-16 rounded-3xl flex-row">
                    <div>
                        <h1 className="font-bold md:font-extrabold text-white text-[18px] sm:text-[36px] mb-5 mx-auto text-center">{t('services.psychotherapy.title')}</h1>
                        <div className="flex flex-wrap justify-center">
                            {t('services.psychotherapy.services', { returnObjects: true }).map((service, index) => (
                                <Card key={index} title={service.title} description={service.description} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold md:font-extrabold text-white sm:text-[36px] text-[18px] mb-5 mx-auto text-center mt-5">{t('services.orthophony.title')}</h1>
                        <div className="flex flex-wrap justify-center">
                            {t('services.orthophony.services', { returnObjects: true }).map((service, index) => (
                                <Card key={index} title={service.title} description={service.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </center>
        </section>
    );
}

export default Hsec4;
