import React from 'react';
import group from '../../assets/Group.png';
import avicii from '../../assets/avicii.png';
import vector from '../../assets/Vector.png';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Hsec2() {
    const { t } = useTranslation(); // Initialize translation hook

    return (
        <section
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="flex md:flex-row items-center justify-between w-screen md:pb-[200px] px-12 mx-auto bg-[#d4f5ff] pt-20 relative lg:h-screen"
        >
            <div className="w-1/2">
                <img
                    className="absolute left-[-70%] h-auto md:left-[-50%] lg:left-[-15px] top-0"
                    src={group}
                    alt=""
                />
            </div>

            <div className="ml-[40%]">
                <h1 className="font-bold md:font-extrabold text-[36px] mb-5">
                    {t('aboutUs.title')}
                </h1>
                <p className="text-[16px]">
                    {t('aboutUs.description')}
                </p>
            </div>

            <img
                className="absolute md:bottom-20 md:left-[48%] hidden md:block"
                src={avicii}
                alt=""
            />

            <img
                className="absolute md:bottom-10 md:right-0 hidden md:block"
                src={vector}
                alt=""
            />
        </section>
    );
}

export default Hsec2;
