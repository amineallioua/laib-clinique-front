import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Hsec3 = () => {
    const { t } = useTranslation(); // Initialize translation hook

    return (
        <section
            className="flex md:flex-row items-center flex-col justify-between w-screen pt-[50px] px-12 mx-auto bg-[#d4f5ff] relative"
        >
            <div className="md:w-1/2 mb-20 mt-20">
                <h1 className="font-bold md:font-extrabold text-[36px] mb-5">
                    {t('meetLPC.title')} {/* Translation key for title */}
                </h1>
                <p>
                    {t('meetLPC.description')} {/* Translation key for description */}
                </p>
            </div>
            <div className="md:w-1/2 justify-center flex">
                <div className="w-[320px] aspect-square sm:w-[350px] sm:h-[350px] bg-white rounded-full border-[15px] border-[#4BA6C3]">
                    {/* This div can hold an image or content */}
                </div>
            </div>
        </section>
    );
}

export default Hsec3;
