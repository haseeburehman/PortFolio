import React from "react";
import styles from "./aboutme.module.css";

const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1>About Me</h1>
        <h3>
          Transforming ideas into stunning, user-friendly digital experiences—let’s build something amazing together!
        </h3>
        <p>
          I’m Haseeb Ur Rehman, a Front-End Web Developer with hands-on experience in crafting responsive websites using HTML, CSS, JavaScript, React and Bootstrap. I’ve interned with 128 Technology and Zekab, where I developed impactful projects like "Chalo Parho Pakistan" and a Litmos.com clone. My passion lies in creating intuitive user interfaces and enhancing user experiences through innovative design.
          <span className={styles.span}> For more information about me,</span>
          <a
            href="\Resume.pdf" // Path to your resume file
            download="Haseeb ur Rehman.pdf" // Filename for the downloaded file
            className={styles.btnwrapper}
          >
            <button className={styles.downloadButton}>
              <div className={styles.docs}>
                <svg
                  className={styles.svg}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeWidth={2}
                  stroke="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line y2="13" x2="8" y1="13" x1="16" />
                  <line y2="17" x2="8" y1="17" x1="16" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>{" "}
                Resume
              </div>
              <div className={styles.download}>
                <svg
                  className={styles.svg}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeWidth={2}
                  stroke="currentColor"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line y2="3" x2="12" y1="15" x1="12" />
                </svg>
              </div>
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
