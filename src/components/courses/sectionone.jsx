import pngwing from '../../assets/course.jpg';
import { useTranslation } from 'react-i18next';

const Ssec1 = () => {
    const { t } = useTranslation(); // Initialize translation hook

    return (  
        <div className="w-screen bg-[#d4f5ff] mt-[68px] pb-20 px-12 pt-3">
            <div className="bg-[#ffffff] rounded-[50px] w-[100%] shadow-2xl flex-row md:flex mt-16 h-auto px-6 py-3 md:px-6">
                <div className="md:w-1/2 text-left relative py-5 md:py-[80px]">
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-black">{t('courses.title')}</h1>
                    <p className="mt-5 text-[#000000]">{t('courses.description')}</p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center md:ml-10">
                    <img src={pngwing} alt="" className='rounded-[50px]' />
                </div>
            </div>
        </div>
    );
};

export default Ssec1;
