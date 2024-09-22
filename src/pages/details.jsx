import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/${id}`); // Fetch product by ID
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-lg">Price: ${product.price}</p>
    </div>
  );
};

export default Details;
