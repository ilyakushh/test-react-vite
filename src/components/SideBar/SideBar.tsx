import styles from "./SideBar.module.scss";
import close from "../../assets/Close.svg";
import { linkIcons, navMenu } from "../../data/constants";

type SideBarProps = {
  isOpen: boolean;
  toggleSideBar: () => void;
};
const SideBar = ({ isOpen, toggleSideBar }: SideBarProps) => {
  return (
    <>
      <div
        className={
          isOpen ? `${styles.active} ${styles.overlay}` : styles.overlay
        }
      ></div>
      <div
        className={
          isOpen ? `${styles.active} ${styles.sidebar}` : styles.sidebar
        }
      >
        <nav className={styles.nav}>
          <img src={close} alt="close" onClick={toggleSideBar} />
          <ul className={styles.list}>
            {navMenu.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className={styles.socilNetworks}>
            {linkIcons.map((item, id) => (
              <img src={item} alt="Github" key={id} />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
