import { educationData, experienceData } from "../../data/constants";
import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <p>Опыт</p>
      <h3>Чем я буду полезна</h3>
      <div className={styles.wrapper}>
        <div className={styles.work}>
          <h4>Образование</h4>
          <div className={styles.items}>
            {educationData.map((item) => (
              <div className={styles.item} key={item.title}>
                <div className={styles.header}>
                  <div className={styles.icon}>
                    <img src={item.image} alt="University" />
                  </div>
                  <div className={styles.details}>
                    <h5>{item.title}</h5>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.work}>
          <h4>Опыт работы</h4>
          <div className={styles.items}>
            {experienceData.map((item) => (
              <div className={styles.item} key={item.title}>
                <div className={styles.header}>
                  <div className={styles.icon}>
                    <img src={item.image} alt="University" />
                  </div>
                  <div className={styles.details}>
                    <h5>{item.title}</h5>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
