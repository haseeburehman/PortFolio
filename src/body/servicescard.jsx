import React from "react";
import styles from "./servicescard.module.css"; // Import the CSS module

const SearvicesCard = () => {
  return (
    
    <div className={styles.card}>
      <p>
       
        <span> <h2>Front-End Development</h2>
        I specialize in creating visually appealing and responsive websites using HTML, CSS, JavaScript, and modern frameworks like Bootstrap. Whether you need a complete website overhaul or a new feature implemented, I focus on delivering user-friendly interfaces that enhance the overall user experience.</span>
      </p>
      <p>
        <span><h2>UI/UX Design</h2>
        Passionate about designing intuitive user interfaces , I offer services to improve the look and functionality of your digital products. From wireframes to high-fidelity designs, I ensure that every design element aligns with your brand and user needs, making your website or application beautiful and easy to use.</span>
      </p>
    </div>
  );
};

export default SearvicesCard;
