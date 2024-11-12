
import Itemcard from './itemcard'
import { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation


 
const Ssec2 = () => {
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation(); // Initialize translation hook

 
    const getproducts = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/products/get'); // Example API
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setProducts(result); 
          setLoading(false);
          
          
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      useEffect(() => { getproducts() }, []);

    return ( 
        <section className=" w-screen  pt-[70px] px-12 " >
            <h1 className="text-center mb-10 text-2xl sm:text-4xl font-extrabold  text-black" > {t('store.swipe')} </h1>
            <center>
               <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center  gap-5 mb-10 ' >


               {loading ? (
          // Render placeholder cards while loading
          <>
           <Itemcard  Product={{name:"loading"}} />
           <Itemcard  Product={{name:"loading"}} />    
           <Itemcard  Product={{name:"loading"}} />    
           <Itemcard  Product={{name:"loading"}} />    
           <Itemcard  Product={{name:"loading"}} />    
           <Itemcard  Product={{name:"loading"}} />    
           <Itemcard  Product={{name:"loading"}} /> 
           <Itemcard  Product={{name:"loading"}} /> 
           <Itemcard  Product={{name:"loading"}} /> 
           <Itemcard  Product={{name:"loading"}} />         
          
          </>
        ) : (
          // Render actual data when loading is done
          products.map((item)=> ( <Itemcard  key={item.id} Product={item} /> ))
        )}
            </div>

            </center>

        </section>
     );
}
 
export default Ssec2;