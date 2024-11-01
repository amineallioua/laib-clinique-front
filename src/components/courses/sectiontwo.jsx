
import CourseCard from './courseCard'
import { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';


 
const Ssec2 = () => {
    const [courses , setcourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation(); // Initialize translation hook
 
    const getcourses = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/trainings/get_training'); // Example API
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setcourses(result); 
          setLoading(false);
          console.log(result)
          
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
      useEffect(() => { getcourses() }, []);

    return ( 
        <section className=" w-screen  pt-[70px] pb-5 bg-[#d4f5ff] px-12 " >
            <h1 className="text-center mb-10 text-2xl sm:text-4xl font-extrabold  text-black" > {t('courses.nous')} </h1>
            <center>
               <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-5 mb-10 ' >


               {loading ? (
          // Render placeholder cards while loading
          <>
           <CourseCard  Course={{title:"loading"}} />
           <CourseCard  Course={{title:"loading"}} />
           <CourseCard  Course={{title:"loading"}} />
           <CourseCard  Course={{title:"loading"}} />
           <CourseCard  Course={{title:"loading"}} />
          <CourseCard  Course={{title:"loading"}} />
          <CourseCard  Course={{title:"loading"}} />
          <CourseCard  Course={{title:"loading"}} />
           
          
          </>
        ) : (
          // Render actual data when loading is done
          courses.map((item)=> ( <CourseCard  key={item.id} Course={item} /> ))
        )}
            </div>

            </center>

        </section>
     );
}
 
export default Ssec2;