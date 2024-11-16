import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kavya Bijja</h1>
        <p className={styles.description}>
          I'm a Cloud Data Engineer with 1.5+ years of experience using Google cloud platform servies, Python and
          SQL. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:kavyabijja12@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Kavya1.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <img
        src={getImageUrl("hero/Kavya1.jpeg")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles.circleImg}`}
        /> */}

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero




