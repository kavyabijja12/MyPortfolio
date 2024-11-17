import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img
            src={getImageUrl("about/cloudIcon.png")}
            alt="Cloud icon"
            className={styles.aboutIcon}
            style={{ width: '100px', height: 'auto' ,padding: '10px'}}
            />
            <div className={styles.aboutItemText}>
            <h3>Cloud Engineering</h3>
            <p>
                Experienced in building scalable data pipelines and optimizing cloud-native solutions using AWS, GCP, and Databricks.
            </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dataIcon.png")} alt="Data icon" 
            style={{ width: '90px', height: 'auto' ,padding: '10px'}}/>
            <div className={styles.aboutItemText}>
            <h3>Data Engineering</h3>
            <p>
                Expertise in developing ETL pipelines, automating data workflows, and leveraging tools like Apache Spark for big data processing.
            </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudarIcon.png")} alt="DevOps icon" 
            style={{ width: '90px', height: 'auto' ,padding: '10px'}}/>
            <div className={styles.aboutItemText}>
            <h3>DevOps & Cloud Architecture</h3>
            <p>
                Hands-on experience in deploying web applications as containers, implementing CI/CD pipelines, and optimizing infrastructure efficiency.
            </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/MLIcon.png")} alt="ML icon" 
            style={{ width: '90px', height: 'auto' ,padding: '10px'}}/>
            <div className={styles.aboutItemText}>
            <h3>Machine Learning & Analytics</h3>
            <p>
                Proficient in developing data models, performing advanced analytics with BI tools, and enabling real-time business intelligence reporting.
            </p>
            </div>
        </li>
        </ul>
      </div>
    </section>
  );
};
