import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>MERN Full Stack Developer</h3>
              <p>
                I’m a passionate Full-Stack Web Developer with strong skills in JavaScript, React.js, Node.js, Express.js,
                 and MongoDB, along with a solid foundation in Java,Basic Python. I enjoy building scalable, 
                 user-friendly applications and solving complex problems with clean, efficient code.

                My expertise includes creating responsive frontends, robust backends,
                and REST APIs, as well as working with database design, authentication.
                
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li> */}
          
        </ul>
      </div>
    </section>
  );
};
