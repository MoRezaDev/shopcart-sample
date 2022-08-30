import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

import styles from "./Cart.module.css";

const quantityCalculate = (price, quantity) => {
  const result = price * quantity;
  return result;
};

const Cart = ({ data, dispatch, state }) => {
  const removeClickHandler = () => {
    dispatch({ type: "REMOVE_ITEM", payload: data });
  };
  return (
    <div className={styles.cartContainer}>
      <img src={data.image} alt="img" />
      <div className={styles.quantityContainer}>
        <div>
          <span
            style={data.quantity === 1 ? { opacity: ".3" } : null}
            onClick={
              data.quantity > 1
                ? () => dispatch({ type: "DECREASE", payload: data })
                : null
            }
          >
            -
          </span>
        </div>
        <span>{data.quantity}</span>
        <div>
          <span onClick={() => dispatch({ type: "INCREASE", payload: data })}>
            +
          </span>
        </div>
      </div>
      <span className={styles.spanQuantity}>
        ${quantityCalculate(data.price, data.quantity)}
      </span>
      <div>
        <CgClose onClick={removeClickHandler} cursor="pointer" />
      </div>
    </div>
  );
};

export default Cart;
