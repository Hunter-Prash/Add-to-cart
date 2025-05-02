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
      {
        
      }

    </>
  )
}

export default App
