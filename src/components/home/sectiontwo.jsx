import React from 'react';
import group from '../../assets/Group.png';
import group2 from '../../assets/Group2.png';
import avicii from '../../assets/avicii.png';
import vector from '../../assets/Vector.png';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Hsec2() {
    const { t, i18n } = useTranslation(); // Initialize translation hook

    const isArabic = i18n.language === 'ar'; // Check if the current language is Arabic
    const isLTR = i18n.language !== 'ar'; // Check if the current language is LTR (French or other)

    return (
        <section
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className={`flex ${isArabic ? 'flex-row-reverse  ' : 'md:flex-row'} items-center overflow-hidden justify-between w-screen md:pb-[200px] px-12 mx-auto bg-[#d4f5ff] pt-20 relative lg:h-screen`}
        >
            {/* Image Section */}
            <div className="w-1/2">
                <img
                    className={`absolute ${isArabic ? 'right-[-70%] md:right-[-50%] lg:right-[-15px]' : 'left-[-70%] md:left-[-50%] lg:left-[-15px]'} h-auto top-0`}
                    src={isArabic ? group2 : group} // Use group2 if Arabic, else use group
                    alt="Group Image"
                />
            </div>

            {/* Text Section */}
            <div className={`ml-${isLTR ? '[40%]' : '[0]'} ${isArabic ? 'text-right mr-[100px] md:mr-[300px] ' : ''} z-10`}>
                <h1 className="font-bold md:font-extrabold text-[36px] mb-5">
                    {t('aboutUs.title')}
                </h1>
                <p className="text-[16px]">
                    {t('aboutUs.description')}
                </p>
            </div>

            {/* Bottom Images */}
            <img
                className="absolute md:bottom-20 md:left-[48%] hidden md:block"
                src={avicii}
                alt="Avicii"
            />

            <img
                className="absolute md:bottom-10 md:right-0 hidden md:block"
                src={vector}
                alt="Vector"
            />
        </section>
    );
}

export default Hsec2;
