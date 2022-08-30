import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentItems}>
          <h3>About Us</h3>
          <span>item1</span>
          <span>item2</span>
          <span>item3</span>
          <span>item4</span>
        </div>
        <div className={styles.footerContentItems}>
          <h3>Payment Products</h3>
          <span>item1</span>
          <span>item2</span>
          <span>item3</span>
          <span>item4</span>
        </div>
        <div className={styles.footerContentItems}>
          <h3>Let Us Help You</h3>
          <span>item1</span>
          <span>item2</span>
          <span>item3</span>
          <span>item4</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
