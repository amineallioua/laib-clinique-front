import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../components/cartcontext';
import { PiEmptyBold } from "react-icons/pi";
import Buy from '../components/store/form';



const Details = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
    const [isOpen, setIsOpen] = useState(true);

  const {  addToCart } = useCart();
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/${id}`); // Fetch product by ID
        const result = await response.json();
        setProduct(result);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false); // Set loading to false if there is an error
      }
    };
    
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator while fetching
  }

  if (!product) {
    return <p className=' flex items-center justify-center  text-center font-extrabold text-[40px] text-black my-[200px]' > Product not found <br /> <PiEmptyBold  className=' text-center font-extrabold text-[80px] text-black ml-10 ' /> </p>; // Handle case when product is null or not found
  }
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='max-w-[96%] shadow-xl shadow-slate-300 py-5 mt-[100px] px-5 mb-[70px] sm:justify-normal justify-center rounded-[50px] lg:flex flex-row items-center bg-[#FFCAD4] ml-[2%]'>
      <div className='sm:w-[600px] w-[350px] bg-white h-[400px] sm:h-[570px] rounded-[50px]'></div>
      <div className='max-w-[600px] ml-5 h-[500px] relative'>
        <h1 className='sm:text-[60px] text-[40px] font-bold text-black inline'>{product.name}</h1>
        <h1 className='sm:text-[70px] text-[40px] ml-16 font-extrabold inline text-white'>{product.price}</h1>
        <p className='mt-[30px] text-white mb-10'>{product.description}</p>
        <div className='absolute bottom-0 flex'>
          <button onClick={() => {addToCart(product , 1)  }} className='w-[150px] h-[40px] sm:w-[250px] sm:h-[50px] sm:ml-10 rounded-[50px] font-bold text-white text-[20px] bg-[#5C0029]'>
            ADD TO CART
          </button>
          <button onClick={  ()=>{toggleMenu()} } className='w-[150px] ml-5 sm:ml-10 h-[40px] sm:w-[250px] sm:h-[50px] rounded-[50px] font-bold text-white text-[25px] bg-[#00B2FF]'>
            BUY NOW
          </button>
        </div>
      </div>
        <Buy isOpen={isOpen} toggleMenu={toggleMenu} product={product} />
    </div>
  );
};

export default Details;
