import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json"; // Importing skills data
import history from "../../data/history.json"; // Importing work history data
import { getImageUrl } from "../../utils"; // Helper function for image handling

// Recommendations data with LinkedIn URL for each person
const recommendations = [
  {
    name: "Harshavardhan J B",
    imageSrc: "skills/rec1.jpeg",  // Replace with the actual image path
    recommendation: `Kavya was part of Google Center of Excellence, I was fortunate to have Kavya as part of my team, she showed remarkable technical expertise in building LTIMs flagship accelerators in Data and Analytics. Her best work was her contribution in building a cross platform data lineage solution from scratch, which is now one of the sought out solutions by LTIM customers. In addition to her technical skills she took ownership in metoring her peers and colleagues. She is a go-getter, professional, confident, skillful and I am sure she will be an asset to any company she works with.`,
    linkedinUrl: "https://www.linkedin.com/in/harshavardhan-j-b-79815610/",
  },
  {
    name: "Mansi Sawant",
    imageSrc: "skills/rec2.jpeg",  // Replace with the actual image path
    recommendation: `Kavya worked as my junior in the GCP COE team at LTIMindtree. During this time, I witnessed her exceptional ability to adapt to new technologies and learn quickly when faced with new requirements. She consistently demonstrated exceptional proactiveness and problem-solving skills. Her ability to anticipate challenges and deliver effective solutions showcased her strong analytical and critical-thinking capabilities. Kavya's enthusiasm and proactive approach made her a valuable team member and will undoubtedly be a great asset to any organization.`,
    linkedinUrl: "https://www.linkedin.com/in/mansi-sawant-99047b167/",
  },
  {
    name: "Chiranjeevi V",
    imageSrc: "skills/rec3.jpeg",  // Replace with the actual image path
    recommendation: `Kavya has been an integral part of the Google Cloud Platform Centre of Excellence within our Data Engineering and Analytics team, consistently demonstrating her expertise and dedication. She has played a significant role in the development and enhancement of data migration accelerators, lineage tools, and cloud-native solutions. Her ability to tackle complex challenges with innovative problem-solving skills has been a key driver for the success of our projects. `,
    linkedinUrl: "https://www.linkedin.com/in/chiranjeevi-v-8bb0609/",
  },
  {
    name: "Hareendran V R",
    imageSrc: "skills/rec4.jpeg",  // Replace with the actual image path
    recommendation: `I had the pleasure of working with Kavya as a fellow data engineer while at the GCP-COE under LTIMindtree. She was an exceptional problem solver with in-depth knowledge of cloud-based web app development, particularly on the backend side. Her efforts were instrumental in the development of our database-lineage crawler and the modernization accelerator. Kavya's innovative ideas helped the team redesign the architecture of our apps from monolithic to microservices.`,
    linkedinUrl: "https://www.linkedin.com/in/hareendranvr/",
  },
  // Add more recommendations as needed
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* LinkedIn Recommendations Slider */}
      <div className={styles.recommendations}>
      <h2 className={styles.title}>What My Peers Say About Me!</h2>
      <div className={styles.recommendationSlider}>
        {recommendations.map((rec, index) => (
          <div key={index} className={styles.recommendationItem}>
            <div className={styles.recommendationHeader}>
              <a
                href={rec.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.recommendationImageLink}
              >
                <div className={styles.recommendationImageWrapper}>
                  <img
                    src={getImageUrl(rec.imageSrc)}
                    alt={`${rec.name}'s Photo`}
                    className={styles.recommendationImage}
                  />
                </div>
              </a>
              <a
                href={rec.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.recommendationNameLink}
              >
                <h4 className={styles.recommendationAuthor}>{rec.name}</h4>
              </a>
            </div>
            
            <div className={styles.recommendationTextWrapper}>
              <p className={styles.recommendationText}>{rec.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



    </section>
  );
};
