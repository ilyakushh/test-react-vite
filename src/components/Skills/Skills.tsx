import { abilities, skills } from "../../data/constants";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <p>Навыки</p>
      <h3>Что я использую в работе</h3>
      <div className={styles.items}>
        {skills.map((skill) => (
          <div className={styles.item} key={skill.title}>
            <div className={styles.icon}>
              <img src={skill.image} alt="HTML" />
            </div>
            <h5>{skill.title}</h5>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.stats}>
        {abilities.map((ability) => (
          <div className={styles.ability} key={ability.title}>
            <div className={styles.header}>
              <h5>{ability.title}</h5>
              <p>{`${ability.percent}%`}</p>
            </div>
            <ProgressBar percent={ability.percent} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
