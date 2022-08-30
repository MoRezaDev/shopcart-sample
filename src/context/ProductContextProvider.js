import React, { useState, useEffect } from "react";

//import API....
import { getProducts } from "../api";

export const productContext = React.createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };
    fetchApi();
  }, []);
  return (
    <productContext.Provider value={products}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
