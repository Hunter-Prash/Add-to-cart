import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([]); // State to hold products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/products/get');
        console.log(data);
        setProducts(data); // Save the fetched products to state
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts(); // Call the async function
  }, []);


  return (
    <>
      <h1 className='font-bold'>Products</h1>
      <div className='flex gap-4 items-center justify-center'>
        {
          products.map((product, index) => (
            <div key={index} className='flex flex-col gap-2 items-center justify-center border p-4 rounded'>
              <h1>{product.name}</h1>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded'>Add to Cart</button>
            </div>
          ))
        }
      </div>
      

    </>
  )
}

export default App
