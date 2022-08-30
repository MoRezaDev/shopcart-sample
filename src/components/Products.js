import React, { useContext } from "react";

// import styless.....
import styles from "./Products.module.css";

import ProductCard from "./shared/ProductCard";
import { productContext } from "../context/ProductContextProvider";
const Products = () => {
  const products = useContext(productContext);
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsMain}>
        {products.length === 0 && <h1>Loading....</h1>}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
