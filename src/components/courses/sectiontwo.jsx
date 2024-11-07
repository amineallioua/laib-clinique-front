import CourseCard from './courseCard';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Ssec2 = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation(); // Initialize translation hook
    const isArabic = i18n.language === 'ar'; // Check if the current language is Arabic

    const getCourses = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/trainings/get_training'); // Example API
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setCourses(result);
            setLoading(false);
            console.log(result);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => { getCourses() }, []);

    return (
        <section className={`w-screen pt-[70px] pb-5 bg-[#d4f5ff] px-12 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h1 className="text-center mb-10 text-2xl sm:text-4xl font-extrabold text-black">
                {t('courses.nous')}
            </h1>
            <div className="mx-auto w-full">
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-10'>
                    {loading ? (
                        // Render placeholder cards while loading
                        <>
                            {Array(8).fill().map((_, index) => (
                                <div key={index} className="w-full">
                                    <SkeletonLoader />
                                </div>
                            ))}
                        </>
                    ) : courses.length > 0 ? (
                        // Render actual data when loading is done
                        courses.map((item) => (
                            <div key={item.id} className="w-full">
                                <CourseCard Course={item} />
                            </div>
                        ))
                    ) : (
                        // Fallback UI when no courses are available
                        <div className="w-full text-center text-lg text-gray-600">
                            {t('courses.no_courses')}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

const SkeletonLoader = () => (
    <div className="w-full h-[310px] bg-white shadow-md rounded-lg overflow-hidden p-4 animate-pulse">
        {/* Skeleton for Course Image */}
        <div className="bg-gray-300 h-[150px] w-full rounded-[20px] mb-4"></div>
        
        {/* Skeleton for Title */}
        <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
        
        {/* Skeleton for Description */}
        <div className="w-1/2 h-3 bg-gray-300 rounded mb-4"></div>
        
        {/* Skeleton for Type */}
        <div className="w-1/3 h-4 bg-gray-300 rounded mb-2"></div>
    </div>
);

export default Ssec2;
