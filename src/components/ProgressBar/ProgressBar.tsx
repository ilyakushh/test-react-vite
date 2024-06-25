import styles from "./ProgressBar.module.scss";

type SkillsProps = {
  percent: number;
};

const ProgressBar = ({ percent }: SkillsProps) => {
  return (
    <div className={styles.lineContainer}>
      <div className={styles.line} style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
