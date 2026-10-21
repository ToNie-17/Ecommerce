import { useContext, useEffect, useState } from "react";
import Layout from "../shared/Layout";

import ProductsItems from "../shared/ProductsItems";
import ProductContext from "../context/ProductProvider";

function Women() {
  const { Products } = useContext(ProductContext);
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    const found = Products?.filter((item) => item.category === "women");
    if (found) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWomenProducts(found);
    }
  }, [Products]);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold text-lg">Women</p>
        <ProductsItems Products={womenProducts} />
      </div>
    </Layout>
  );
}

export default Women;
