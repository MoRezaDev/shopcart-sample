import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

//import styles module....
import styles from "./Navbar.module.css";

import BurgerMenu from "./BurgerMenu";

// import context....
import { cartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(cartContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = () => {
    setIsExpanded(true);
  };

  const collapseHandler = () => {
    setIsExpanded(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <BurgerMenu
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          collapseHandler={collapseHandler}
        />
        <div onClick={expandHandler} className={styles.burgerMenuDiv}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2>Shopping Center</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <Link to="/shopcart" className={styles.cartLink}>
          <FiShoppingCart size={30} color="red" />
          <span>{state.itemsCounter}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
