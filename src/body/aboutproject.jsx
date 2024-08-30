import React from "react";
import styles from "./aboutproject.module.css";

const AboutProject = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1>Latest Projects</h1>
        <h2>Take A Look at My Recent Projects</h2>
        <p>
          Welcome to my portfolio! Here, you'll find examples of my work in
          website development. Each website is professionally designed to meet
          client expectations and is fully responsive across all devices—mobile
          phones, tablets, and laptops. All websites are SEO optimized for
          better search engine rankings.
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
