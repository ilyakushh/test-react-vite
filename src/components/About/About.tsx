import { skillsData } from "../../data/constants";
import Photo from "../../assets/Photo.jpg";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <img src={Photo} alt="Photo" />
      <div className={styles.content}>
        <p>Про меня</p>
        <h3>Меня зовут Александра</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className={styles.skills}>
          {skillsData.map((item) => (
            <div className={styles.skill} key={item.name}>
              <div className={styles.circle}>
                <img src={item.image} alt={item.alt} />
              </div>
              <div className={styles.description}>
                <h5>{item.name}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
