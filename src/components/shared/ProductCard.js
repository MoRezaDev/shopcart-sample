import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";

//import styles....
import styles from "./ProductCard.module.css";

//importing some functions helper.....
import { shorten, isInCart, quantityCount } from "../../helper/functions";

//import context....
import { cartContext } from "../../context/CartContextProvider";

const ProductCard = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);
  const { title, image, price } = productData;
  return (
    <div className={styles.productCardContainer}>
      <img src={image} alt="img" />
      <h3>{title && shorten(title)}</h3>
      <div className={styles.priceDetailsContent}>
        <span>${price}</span>
        <Link to={`/products/${productData.id}`}>Details</Link>
      </div>
      <div className={styles.buttonsContainer}>
        {isInCart(state, productData.id) ? (
          <button
            className={styles.increaseButton}
            onClick={() => dispatch({ type: "INCREASE", payload: productData })}
          >
            +
          </button>
        ) : (
          <span
            className={styles.addToCarDSpan}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to cart
          </span>
        )}
        {quantityCount(state, productData.id) > 1 && (
          <button
            className={styles.decreaseButton}
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </button>
        )}
        {quantityCount(state, productData.id) === 1 && (
          <IoTrashOutline
            size={20}
            cursor="pointer"
            color="red"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          />
        )}
      </div>
    </div>
  );
};
export default ProductCard;
