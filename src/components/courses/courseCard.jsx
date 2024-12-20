import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook

// Truncate text function to limit description length
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const Itemcard = ({ Course }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize the translation hook

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const photourl = Course?.photo ? Course.photo.replace(/\\/g, '/') : 'default-image.jpg';
  const description = Course?.description || '';  // Fallback to an empty string if description is undefined

  // Get the translated course type using the translation hook
  const courseType = t(`course.${Course.type}`); // Translate the course type (free, paid, etc.)

  return (
    <button>
      <div
        onClick={() => { navigate(`/courseDetails/${Course._id}`); }} 
        className="w-[278px] mb-20 hover:scale-110 ease-in-out duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-gray-400 bg-white h-[310px] rounded-[50px] mt-5 flex-row shadow-xl p-4 overflow-hidden shadow-slate-300"
      >
        <center>
          {Course.title === "loading" ? (
            <div role="status" className="flex-col justify-center items-center relative top-[70px] h-full">
              <svg
                aria-hidden="true"
                className="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-300 fill-[#9ce4fa]"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <h1 className="text-2xl font-semibold text-[#818181] mt-5 ">{Course.title}</h1>
            </div>
          ) : (
            <div className='relative'>
              <div className='bg-gray-100 h-[150px] overflow-hidden rounded-[20px]'>
                <img src={`http://localhost:4000/${photourl}`} alt="" className='w-full h-full' />
              </div>
              <h1 className="text-md mt-2 h-12 overflow-hidden text-left font-bold text-black">{Course.title} </h1>
              <div className='text-[14px] text-black text-left absolute text center p-0'>
                <p>{truncateText(description, 105)}</p>
              </div>

              <div className={` ${Course.type === "free" ? "bg-green-500" : 
                Course.type === "paid" ? "bg-red-500" : 
                "bg-blue-500"} 
                font-border text-white text-[18px] font-extrabold absolute rotate-45 top-3 px-20 py-1 right-[-70px] text-center `}>
                {courseType} {/* Translated course type */}
              </div>
            </div>
          )}
        </center>
      </div>
    </button>
  );
};

export default Itemcard;
