import { useContext, useEffect, useState } from "react";
import Layout from "../shared/Layout";

import ProductsItems from "../shared/ProductsItems";
import ProductContext from "../context/ProductProvider";

function Kids() {
    const { Products } = useContext(ProductContext);
   const [kidsProducts, setKidsProducts] = useState([]);

  useEffect(() => {
    const found = Products?.filter((item) => item.category === "kids");
    if (found) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setKidsProducts(found);
    }
  }, [Products]);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold text-lg">Kids</p>
        <ProductsItems Products={kidsProducts} /> 
        
      </div>
    </Layout>
  );
}

export default Kids;
