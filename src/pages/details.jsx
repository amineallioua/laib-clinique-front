import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../components/cartcontext';
import { PiEmptyBold } from "react-icons/pi";
import Buy from '../components/store/form';
import correct from '.././assets/correct.png';
import wallpaper from '.././assets/pink-girly-25.jpg';
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const Details = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(true);

  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };

  const { addToCart } = useCart();
  
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/${id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); // Ensure loading is set to false after the request
      }
    };

    fetchProductDetails();
  }, [id]);

  // Display loading indicator while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full">
          {t('loading')}...
        </button>
      </div>
    );
  }  

  // Handle case when product is null or not found
  if (!product) {
    return (
      <p className='flex items-center justify-center text-center font-extrabold text-[40px] text-black my-[200px]'>
        {t('productNotFound')} <br />
        <PiEmptyBold className='text-center font-extrabold text-[80px] text-black ml-10' />
      </p>
    );
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const photourl = product?.photo ? product.photo.replace(/\\/g, '/') : 'default-image.jpg';

  return (
    <>
      <img src={wallpaper} alt="" className='w-full h-full pb-10 mt-[68px] fixed' />
      <div
        className={`max-w-[90%] absolute top-0 shadow-xl shadow-slate-300 px-10 py-7 mt-[100px] sm:px-5 mb-10 sm:justify-normal justify-center rounded-[50px] lg:flex flex-row items-center bg-[#f7869b] ml-[5%] ${i18n.language === 'ar' ? 'lg:flex-row-reverse' : ''}`}
        style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}
      >
        <div className='sm:w-[600px] overflow-hidden p-2 md:p-8 w-[300px] bg-white h-[300px] sm:h-[500px] rounded-[50px]'>
          <img src={`http://localhost:4000/${photourl}`} alt="" className='w-full h-full  rounded-[50px]' />
        </div>
        <div className='max-w-[600px] ml-5 h-auto relative flex flex-col justify-between'>
          <div>
            <h1 className='sm:text-[60px] text-[35px] font-bold text-black'>{product.name}</h1>
            <h1 className='sm:text-[50px] text-[30px] font-extrabold text-white'>{product.price} DZ</h1>
          </div>

          <div className='mt-[20px] h-[200px] sm:h-[250px] overflow-y-auto text-[16px] sm:text-[18px] text-white mb-10'>
            <p>{product.description}</p>
          </div>

          <div className={`flex space-x-5 mt-5 ${i18n.language === 'ar' ? 'space-x-reverse' : ''}`}>
            <button
              onClick={() => {
                addToCart(product, 1);
                const event = new CustomEvent('itemAddedToCart');
                window.dispatchEvent(event);
              }}
              className='w-[150px] h-[40px] sm:w-[250px] sm:h-[50px] rounded-[50px] font-bold text-black text-[16px] sm:text-[20px] hover:scale-110 hover:bg-[#ffb0b0] bg-[#f7c0c0] overflow-hidden whitespace-nowrap text-ellipsis'
            >
              {t('addToCart')}
            </button>

            <button
              onClick={() => toggleMenu()}
              className='w-[150px] h-[40px] sm:w-[250px] sm:h-[50px] rounded-[50px] font-bold text-black text-[16px] sm:text-[20px] hover:bg-[#75d6ff] hover:scale-110 bg-[#9fddf8] overflow-hidden whitespace-nowrap text-ellipsis'
            >
              {t('buyNow')}
            </button>
          </div>
        </div>
      </div>

      <Buy isOpen={isOpen} toggleMenu={toggleMenu} product={product} toggleMenu1={toggleMenu1} />

      <div
        className={`w-full flex transition-opacity duration-300 ease-in-out ${isOpen1 ? 'opacity-0 pointer-events-none' : 'opacity-100'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40`}
        onClick={toggleMenu1}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] mt-[200px] sm:mt-auto shadow-2xl flex flex-col items-center relative"
        >
          <img src={correct} alt="Appointment booked" className='w-[170px] h-[170px] mb-[60px]' />
          <h1 className='text-[22px] font-extrabold text-[#374885]'>
            {t('productOrdered')}
          </h1>
          <IoClose onClick={toggleMenu1} className='absolute top-10 right-10 text-[40px] text-[#585858]' />
        </div>
      </div>
    </>
  );
};

export default Details;
