import React from 'react';
import { useTranslation } from 'react-i18next';
import shape from '../../assets/Component2.png';

const Hsec5 = () => {
    const { t } = useTranslation();

    return (
        <section 
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="w-full overflow-hidden bg-[#d4f5ff] p-12"
        >
            <div className="sm:flex flex-row items-center justify-between">
                <div className='sm:w-1/3 h-auto bottom-5 md:left-18'>
                    <img 
                        src={shape} 
                        alt="Sample" 
                        className="w-15 h-auto"
                    />
                </div>

                <div className='sm:w-2/3 p-12'>
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
