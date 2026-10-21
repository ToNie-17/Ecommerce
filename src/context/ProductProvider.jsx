import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [num, setNum] = useState(6);
  const [Products, setProducts] = useState([]);

  const HandleGetProduct = async () => {
    try {
      const res = await fetch("http://localhost:8000/products", {
        method: "GET",
      });
      const data = await res.json();

      if (res?.ok) {
        console.log("data:", data);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    HandleGetProduct();
  }, []);

  useEffect(() => {
    console.log("context:", Products);
  }, [Products]);

  
  
  return (
    <ProductContext.Provider value={{
       num,
       setNum,
       Products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;

export { ProductProvider };