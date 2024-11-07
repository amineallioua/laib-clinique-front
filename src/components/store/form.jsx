import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCart } from '../cartcontext'; 



 


const buy = ({isOpen , toggleMenu , product ,  toggleMenu1 }) => {
  const [clientName, setFullName] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [address, setAddress] = useState(''); 
    const [error, setError] = useState('');
    const {emptyCart}=useCart()
   
  const handleSubmit = async (e) => {

    e.preventDefault();

    if(!product || (Array.isArray(product) && product.length === 0)){
      setError('cart is empty')

    }else 

    {
    setError('');
    const phoneRegex = /^[0-9]*$/; // Only digits allowed
    if (phone && !phoneRegex.test(phone)) {
      setError('Phone number must be a valid number.');
      return;
    }if( phone.length > 10  ){
      setError('Phone number must be a shorter number ')
      return;
    }
    const productsArray = Array.isArray(product)
    ? product.map((item) => ({ productId: item._id, quantity: item.quantity }))
    : [{ productId: product._id, quantity: product.quantity }];

    const orderData = {
      clientName,
      phone,
      products : productsArray,
      address,
      

    };
    console.log(orderData);
    try {
      const response = await fetch('http://localhost:4000/api/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData), // Convert orderData to JSON
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
  
      // Parse the response JSON
      const result = await response.json();
    
      toggleMenu1();
      toggleMenu();
      emptyCart();

      
  
      return result; // Return the result if needed
  
    } catch (error) {
      console.error('Error creating order:', error.message);
      // Handle any additional error behavior (e.g., alerting the user)
    }}
  };




    return ( 
   <div className={`w-full flex   left-0 justify-center items-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onClick={toggleMenu} >  
        <div onClick={(e) => e.stopPropagation()} className="sm:w-[430px] sm:h-[500px] shadow-lg shadow-grey-00 w-[330px] h-[480px] mb-10 bg-white  rounded-[50px] shadow-3xl shadow-black flex-col " >
        
   <form  onSubmit={handleSubmit} className="px-8 pt-[55px] pb-8 mb-1 relative">
     <div className="mb-2">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
     client name
       </label>
       <input
         type="text"
         id="fullName"
         name="fullName"
         placeholder="Enter your full name"
         value={clientName}
            onChange={(e) => setFullName(e.target.value)}
         className="appearance-none border-[2px] mb-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         required
       />
     </div>
     <div className="mb-2">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Number
       </label>
       <input
         type="tel"
         id="phone"
         name="phone"
         placeholder="Enter your phone number"
         value={phone}
         onChange={(e) => setPhoneNumber(e.target.value)}
         className="border-[2px] mb- appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         required
       />
        {error && <span className="text-red-500 text-xs m-0">{error}</span>}
        
        <div className="my-5 text-center h-[80px] overflow-scroll bg-slate-100 rounded-[20px] ">
    {Array.isArray(product) ? (
      product.map((item) => (
        <h1
          key={item._id}
          className="text-gray-700 font-semibold border-gray-200 border-2 rounded-[50px] p-2 mb-2"
        >
          Your product: {item.name}
        </h1>
      ))
    ) : (
      <h1 className="text-gray-700 font-semibold border-gray-200 border-2 rounded-[50px] p-2">
        Your product: {product.name}
      </h1>
    )}
  </div>
        

     
     </div>
     <div className="mb-2">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
         address
       </label>
       <input
         type="text"
         id="location"
         name="location"
         placeholder="Enter your addrese"
         value={address}
         onChange={(e) => setAddress(e.target.value)}
         className="border-[2px] mb-4 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         required
       />
     </div>
   
     <div className="flex items-center justify-center">
       <button
         type="submit"
         className="bg-[#5188F2] w-[85%] hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
       >
            order
       </button>
     </div>
     <IoClose onClick={ toggleMenu} className='absolute top-5 right-5 text-[40px] text-[#585858]' /> 
   </form>



   </div>
 
    </div>
     );
}
 
export default buy;
 