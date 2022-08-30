import React from "react";
import { useParams } from "react-router-dom";

import styles from "./Details.module.css";

import { productContext } from "../../context/ProductContextProvider";

import { isInCart } from "../../helper/functions";

//import Context....
import { cartContext } from "../../context/CartContextProvider";

const Details = () => {
  const { state, dispatch } = React.useContext(cartContext);

  const products = React.useContext(productContext);
  const index = useParams();
  if (products) {
    const newIndex = index.id - 1;

    const clickHandler = () => {
      if (isInCart(state, products[newIndex].id)) {
        alert("Item is already exist in Shop cart");
      } else {
        dispatch({ type: "ADD_ITEM", payload: products[newIndex] });
      }
    };
    return (
      <div className={styles.detailsContainer}>
        <div className={styles.detailsContent}>
          <img src={products[newIndex].image} />
          <div className={styles.detailsDescriptions}>
            <h3>{products[newIndex].title}</h3>
            <p>{products[newIndex].description}</p>
            <span>${products[newIndex].price}</span>
            <div>
              <h4>Category: {products[newIndex].category}</h4>
              <span onClick={clickHandler}>Add to Card</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
