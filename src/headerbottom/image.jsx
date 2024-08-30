import React from "react";
import styles from "./image.module.css"; // Import the CSS module
import myimg from '../images/myimg.jpg';

const Image = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <img className={styles.img} src={myimg} alt="" />
      </div>
    </div>
  );
};

export default Image;
