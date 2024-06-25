import styles from "./Header.module.scss";
import burgerMenu from "../../assets/Hamburger.svg";
import { linkIcons } from "../../data/constants";

type HeaderProps = {
  toggleSideBar: () => void;
};

const Header = ({ toggleSideBar }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrapper} container`}>
        <div className={styles.banner}>
          <p>Меня зовут Александра Смит</p>
          <h2>Я web-разработчик из города Москва</h2>
          <div className={styles.buttons}>
            <button>Портфолио</button>
            <button>Про меня</button>
          </div>
        </div>
      </div>
      <button className={styles.menu} onClick={toggleSideBar}>
        <img src={burgerMenu} alt="menu" />
      </button>
      <div className={styles.links}>
        <p>Социальные сети</p>
        <div className={styles.line}></div>
        <div className={styles.icons}>
          {linkIcons.map((icon, id) => (
            <a key={id}>
              <img src={icon} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
