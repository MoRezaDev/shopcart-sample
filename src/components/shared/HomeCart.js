import React from "react";
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";

//import styles....
import styles from "./HomeCart.module.css";

//import Context....
import { cartContext } from "../../context/CartContextProvider";

//some functions...
import { shorten, isInCart } from "../../helper/functions";

const HomeCart = ({ data }) => {
  const { state, dispatch } = React.useContext(cartContext);
  const { image, price, title } = data;

  const clickHandler = () => {
    if (isInCart(state, data.id)) {
      alert("Item is already exist in Shop cart");
    } else {
      dispatch({ type: "ADD_ITEM", payload: data });
    }
  };
  return (
    <div className={styles.homeCartContainer}>
      <div className={styles.shopButton} onClick={clickHandler}>
        <FaShopify size={25} cursor="pointer" />
      </div>
      <img src={image} alt="img" />
      <div>
        <Link to={`/products/${data.id}`} style={{ textDecoration: "none" }}>
          <h3>{shorten(title)}</h3>
        </Link>
        <div>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCart;
