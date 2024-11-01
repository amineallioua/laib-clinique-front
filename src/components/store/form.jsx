import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCart } from '../cartcontext';

const Buy = ({ isOpen, toggleMenu, product, toggleMenu1 }) => {
  const [clientName, setFullName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [quantities, setQuantities] = useState({});
  const { emptyCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product || (Array.isArray(product) && product.length === 0)) {
      setError('Cart is empty');
      return;
    }

    const phoneRegex = /^[0-9]*$/;
    if (phone && !phoneRegex.test(phone)) {
      setError('Phone number must be a valid number.');
      return;
    }
    if (phone.length > 10) {
      setError('Phone number must be a shorter number');
      return;
    }

    const productsArray = Array.isArray(product)
      ? product.map((item) => ({
          productId: item._id,
          quantity: quantities[item._id] ? parseInt(quantities[item._id]) : 1,
        }))
      : [{ productId: product._id, quantity: quantities[product._id] || 1 }];

    const orderData = {
      clientName,
      phone,
      products: productsArray,
      address,
    };

    try {
      const response = await fetch('http://localhost:4000/api/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const result = await response.json();
      toggleMenu1();
      toggleMenu();
      emptyCart();
      return result;
    } catch (error) {
      console.error('Error creating order:', error.message);
    }
  };

  return (
    <div
      className={`w-full flex left-0 justify-center items-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      onClick={toggleMenu}
    >
      <div onClick={(e) => e.stopPropagation()} className="sm:w-[430px] sm:h-[500px] shadow-lg shadow-grey-00 w-[330px] h-[480px] mb-10 bg-white rounded-[50px] shadow-3xl shadow-black flex-col">
        <form onSubmit={handleSubmit} className="px-8 pt-[55px] pb-8 mb-1 relative">
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Client name
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
              Phone Number
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

            <div className="my-5 text-center h-[80px] overflow-scroll bg-slate-100 rounded-[20px]">
              {Array.isArray(product) ? (
                product.map((item) => (
                  <div key={item._id} className="flex items-center justify-between border-gray-200 border-2 rounded-[50px] p-2 mb-2">
                    <span className="text-gray-700 font-semibold">Your product: {item.name}</span>
                    <input
                      type="number"
                      min="1"
                      className="w-16 text-center rounded"
                      value={quantities[item._id] || 1}
                      onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                    />
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-between border-gray-200 border-2 rounded-[50px] p-2">
                  <span className="text-gray-700 font-semibold">Your product: {product.name}</span>
                  <input
                    type="number"
                    min="1"
                    className="w-16 text-center rounded"
                    value={quantities[product._id] || 1}
                    onChange={(e) => handleQuantityChange(product._id, e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Address
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your address"
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
              Order
            </button>
          </div>
          <IoClose onClick={toggleMenu} className="absolute top-5 right-5 text-[40px] text-[#585858]" />
        </form>
      </div>
    </div>
  );
};

export default Buy;
