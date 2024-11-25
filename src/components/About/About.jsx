import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* Education Section */}
        <h2 className={styles.subtitle}>Education</h2>
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/ASULogo.png")}
              alt="ASU Logo"
              className={styles.educationIcon}
            />
            <div className={styles.educationText}>
              <h3>Master of Science, Information Technology</h3>
              <p>Arizona State University, Tempe, Arizona</p>
              <p>Expected January 2026 | 4.00/4.00 GPA</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/NITCalicutLogo.svg")}
              alt="NIT Calicut Logo"
              className={styles.educationIcon}
            />
            <div className={styles.educationText}>
              <h3>Bachelor of Technology</h3>
              <p>National Institute of Technology Calicut, Kozhikode, India</p>
              <p>Graduated June 2022 | 8.04/10 GPA</p>
            </div>
          </li>
        </ul>

        {/* Skills Section */}
        <h2 className={styles.subtitle}>Skills & Expertise</h2>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cloudIcon.png")}
              alt="Cloud icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Cloud Engineering</h3>
              <p>
                Experienced in building scalable data pipelines and optimizing
                cloud-native solutions using AWS, GCP, and Databricks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/dataIcon.png")}
              alt="Data icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Data Engineering</h3>
              <p>
                Expertise in developing ETL pipelines, automating data
                workflows, and leveraging tools like Apache Spark for big data
                processing.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cloudarIcon.png")}
              alt="DevOps icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>DevOps & Cloud Architecture</h3>
              <p>
                Hands-on experience in deploying web applications as containers,
                implementing CI/CD pipelines, and optimizing infrastructure
                efficiency.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
