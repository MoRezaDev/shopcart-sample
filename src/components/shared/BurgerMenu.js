import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ isExpanded, collapseHandler }) => {
  const [ref, isClickedOutSide] = useClickOutside();
  useEffect(() => {
    if (isClickedOutSide) collapseHandler();
  }, [isClickedOutSide]);
  return (
    <motion.div
      className={
        isExpanded
          ? `${styles.burgerMenuContainer} ${styles.activeBurger}`
          : `${styles.burgerMenuContainer}`
      }
      ref={ref}
    >
      <div>
        <h2>Shopping Cart</h2>
        <AiOutlineClose onClick={collapseHandler} size={25} />
      </div>

      <div className={styles.lineSeperator}></div>

      <ul>
        <li>
          <Link onClick={collapseHandler} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={collapseHandler} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link onClick={collapseHandler} to="/contactus">
            Contact Us
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default BurgerMenu;
