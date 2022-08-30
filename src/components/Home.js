import React, { useContext } from "react";
import { Link } from "react-router-dom";

//import styles....
import styles from "./Home.module.css";

import HomeCart from "./shared/HomeCart";
import SearchBar from "./SearchBar";

//import context....
import { productContext } from "../context/ProductContextProvider";

const Home = () => {
  const products = useContext(productContext);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.vitrinContainer}>
        <div className={styles.vitrinContents}>
          <Link to="/products">
            <h3>See all products</h3>
          </Link>
          <h1>Most popular</h1>
        </div>
        <div className={styles.searchContainer}>
          <SearchBar products={products} />
        </div>
      </div>
      <div className={styles.homeCartsContainer}>
        {products &&
          products
            .slice(0, 6)
            .map((item) => <HomeCart key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default Home;
