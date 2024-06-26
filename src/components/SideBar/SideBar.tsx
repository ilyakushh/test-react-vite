import styles from "./SideBar.module.scss";
import close from "../../assets/Close.svg";
import { linkIcons, navMenu } from "../../data/constants";

type SideBarProps = {
  isOpen: boolean;
  toggleSideBar: () => void;
};

const SideBar = ({ isOpen, toggleSideBar }: SideBarProps) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleSideBar();
    }
  };
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
              <li key={item.id} onClick={() => handleScroll(item.id)}>
                {item.text}
              </li>
            ))}
          </ul>
          <div className={styles.socialNetworks}>
            {linkIcons.map((item, id) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <img src={item.image} alt="Github" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
