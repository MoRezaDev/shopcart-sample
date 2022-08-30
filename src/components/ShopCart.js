import React, { useContext } from "react";
import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

import styles from "./ShopCart.module.css";

import { cartContext } from "../context/CartContextProvider";
import Cart from "./shared/Cart";

const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.shopCartContainer}>
      {state.selectedItems.length === 0 && state.checkout === true && (
        <div className={styles.checkOut}>
          <div>
            <BsBagCheck color="green" size={30} />
            <h2>Thanks so much for shopping with us</h2>
          </div>
          <div>
            <Link
              className={styles.backToShop}
              onClick={() => dispatch({ type: "CLEAR" })}
              to="/products"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      )}
      {state.selectedItems.length === 0 && state.checkout === false && (
        <div className={styles.emptyShopCart}>
          <h1>ShopCart is Empty</h1>
          <div className={styles.emptylineSeperator}></div>
          <Link
            className={styles.backToShop}
            onClick={() => dispatch({ type: "CLEAR" })}
            to="/products"
          >
            Back to Shop
          </Link>
        </div>
      )}
      <div className={styles.shopCartContents}>
        <div className={styles.cartsContainer}>
          {state.selectedItems.length > 0 &&
            state.selectedItems.map((item) => (
              <Cart
                state={state}
                data={item}
                key={item.id}
                dispatch={dispatch}
              />
            ))}
        </div>
        {state.selectedItems.length > 0 && (
          <div className={styles.checkOutClearContainer}>
            <h2>{`Total items: ${state.itemsCounter}`}</h2>
            <h2>{`Total payments: $${state.total.toFixed(2)}`}</h2>
            <div className={styles.checkOutClearcontainerButtons}>
              <span onClick={() => dispatch({ type: "CLEAR" })}>CLEAR</span>
              <span onClick={() => dispatch({ type: "CHECKOUT" })}>
                CHECKOUT
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
