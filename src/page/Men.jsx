import Layout from "../shared/Layout";
import { useContext, useEffect, useState } from "react";

import ProductsItems from "../shared/ProductsItems"; 
import ProductContext from "../context/ProductProvider";


function Men() {
  const { Products } = useContext(ProductContext);
  const [menProducts, setMenProducts] = useState([]);
  useEffect(() => {
    const found = Products?.filter((item) => item.category === "men");
    if(found){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenProducts(found);
    }
  }, [Products]);
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold text-lg">Men</p>
        <ProductsItems Products={menProducts} /> 
        
      </div>
    </Layout>
  );
}

export default Men;
