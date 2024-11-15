import pngwing from '../../assets/pnng.avif';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Ssec1 = () => {
    const { t, i18n } = useTranslation(); // Initialize translation hook
    const isArabic = i18n.language === 'ar'; // Check if the current language is Arabic
    const isFrench = i18n.language === 'fr'; // Check if the current language is French

    return (  
        <div className={`w-screen mt-[68px] px-12 pt-3 ${isArabic ? 'text-right' : 'text-left'}`}>
            <div className={`bg-[#FFCAD4] rounded-[50px] w-full shadow-2xl flex-row md:flex mt-16 h-auto px-5 md:px-16 ${isArabic ? 'flex-row-reverse' : ''} ${isFrench ?''  : ''}`}>
                <div className="md:w-1/2 relative py-5 md:py-[80px]">
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-black">{t('store.title')}</h1>
                    <p className="mt-5 text-white text-[18px] font-bold">{t('store.description')}</p>
                </div>
                <div className="md:w-1/2 md:flex   justify-center  items-center py-10 " > 
        <img src={pngwing} alt="" className=' rounded-[80px] h-full  '  />
        </div>
            </div>
        </div>
    );
}

export default Ssec1;
