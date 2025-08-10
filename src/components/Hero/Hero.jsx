import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mayur Girase</h1>
        <p className={styles.description}>
       I’m a MERN Stack Web Developer with expertise in JavaScript frameworks like React.js and 
       a passion for building dynamic, responsive, and scalable web applications.
        </p>
        <a href="mailto:girasemayur50@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mayur_profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
