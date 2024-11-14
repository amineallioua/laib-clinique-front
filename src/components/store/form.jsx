import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useCart } from '../cartcontext';
import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';


const Buy = ({ isOpen, toggleMenu, product, toggleMenu1 }) => {
  const { t, i18n } = useTranslation();
  const [clientName, setFullName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [quantities, setQuantities] = useState({});
  const [stockQuantities, setStockQuantities] = useState({});
  const { emptyCart } = useCart();
  const [loading, setLoading] = useState(false); // Add loading state


  // Assume stock information is available within the product prop
  useEffect(() => {
    if (Array.isArray(product)) {
      const initialStock = {};
      product.forEach(item => {
        initialStock[item._id] = item.stockQuantity;
      });
      setStockQuantities(initialStock);
    } else if (product) {
      setStockQuantities({ [product._id]: product.stockQuantity });
    }
  }, [product]);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;

    // Check if quantity exceeds stock
    if (quantity > stockQuantities[productId]) {
      setError(`${t('storeForm.InsufficientStock')}: ${stockQuantities[productId]} ${t('storeForm.Available')}`);
      setQuantities((prev) => ({ ...prev, [productId]: stockQuantities[productId] }));
    } else {
      setError(''); // Clear any previous error if the quantity is valid
      setQuantities((prev) => ({ ...prev, [productId]: quantity }));
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product || (Array.isArray(product) && product.length === 0)) {
      setError(t('CartEmpty'));
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setError(t('10-digit'));
      return;
    }

    const productsArray = Array.isArray(product)
    ? product.map((item) => ({ productId: item._id, quantity: item.quantity }))
    : [{ productId: product._id, quantity: 1   }];

    const orderData = {
      clientName,
      phone,
      products: productsArray,
      address,
    };

    try {
      setLoading(true); // Start loading spinner
      const response = await fetch('http://localhost:4000/api/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(t('FailedCreateOrder'));
      }

      await response.json();
      toggleMenu1();
      toggleMenu();
      emptyCart();
    } catch (error) {
      console.error('Error creating order:', error.message);
      setError(t('Error.'));
    }finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const textAlignClass = i18n.language === 'ar' ? 'text-right' : 'text-left';

  return (
    <div
    className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    onClick={toggleMenu}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[330px] h-[480px] sm:w-[430px] sm:h-[500px] bg-white rounded-[50px] shadow-3xl flex flex-col mb-10"
    >
      <form onSubmit={handleSubmit} className="p-8 relative flex flex-col h-full">
        <h2 className="text-lg font-bold text-center mb-4">{t('storeForm.OrderForm')}</h2>
        {error && <div className={`text-red-500 text-sm ${textAlignClass}`}>{error}</div>}
  
        <div className="flex-grow"> {/* Container for form fields */}
          <div className="mb-2">
            <label className={`block text-gray-700 text-sm font-bold mb-2 ${textAlignClass}`} htmlFor="fullName">
              {t('storeForm.ClientName')}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder={t('storeForm.fullNamePlaceholder')}
              value={clientName}
              onChange={(e) => setFullName(e.target.value)}
              className={`border-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${textAlignClass}`}
              required
            />
          </div>
  
          <div className="mb-2">
            <label className={`block text-gray-700 text-sm font-bold mb-2 ${textAlignClass}`} htmlFor="phone">
              {t('storeForm.PhoneNumber')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t('storeForm.PhoneNumberPlaceholder')}
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`border-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${textAlignClass}`}
              required
            />
          </div>
  
          <div className="mb-2">
            <label className={`block text-gray-700 text-sm font-bold mb-2 ${textAlignClass}`} htmlFor="address">
              {t('storeForm.Address')}
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder={t('storeForm.AddressPlaceholder')}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`border-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${textAlignClass}`}
              required
            />
          </div>
        </div>
  
        <div className="flex justify-center w-full mt-auto">
          <button
            type="submit"
            className="bg-[#4BA6C3] w-[85%] min-h-[48px] flex items-center justify-center relative hover:bg-[#3A8DA4] text-white font-extrabold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <ClipLoader color="#ffffff" size={24} loading={loading} />
            ) : (
              t('storeForm.Order')
            )}
          </button>
        </div>
  
        <button
          type="button"
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <IoClose />
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default Buy;