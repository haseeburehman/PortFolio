import React from "react";
import styles from "./header.module.css"; 
import Image from "./image"; 
import TextCard from "./textcard"; 

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcard}>
        <TextCard /> 
      </div>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          <div className={`${styles.cell} ${styles.d0}`} />
          <div className={`${styles.cell} ${styles.d1}`} />
          <div className={`${styles.cell} ${styles.d2}`} />
          <div className={`${styles.cell} ${styles.d1}`} />
          <div className={`${styles.cell} ${styles.d2}`} />
          <div className={`${styles.cell} ${styles.d2}`} />
          <div className={`${styles.cell} ${styles.d3}`} />
          <div className={`${styles.cell} ${styles.d3}`} />
          <div className={`${styles.cell} ${styles.d4}`} />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Image /> 
      </div>
    </div>
  );
};

export default Header;
