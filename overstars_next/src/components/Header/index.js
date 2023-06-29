import styles from "./index.module.scss";
import clsx from "clsx";

import { useCallback, useEffect, useState } from "react";
import { LogoIcon } from "../../../public/icons";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onNavMenuOpen = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeBurgerOnResize = useCallback((windowObject) => {
    if (windowObject.innerWidth > 768) {
      setIsBurgerOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => closeBurgerOnResize(window));
    return window.removeEventListener("resize", () =>
      closeBurgerOnResize(window)
    );
  }, []);

  return (
    <header className={styles.header__container} id="header">
      <nav className={clsx(styles.navContainer)}>
        <a href="#header" className={styles.logo}>
          <img src={LogoIcon.src} alt="logo" />
        </a>
        <ul
          className={clsx(
            styles.navList,
            isBurgerOpen && styles.openedMobileNavbar
          )}
        >
          <li className={styles.navItem}>
            <a href="#games" className={styles.navLink}>
              Games
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#career" className={styles.navLink}>
              Career
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about_us" className={styles.navLink}>
              About us
            </a>
          </li>
          <li className={clsx(styles.navItem, styles.contact)}>
            <a href="/" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
        <button className={styles.contactButton}>Contact</button>
        <div
          onClick={onNavMenuOpen}
          className={clsx(
            styles.mobileBurgerButton,
            isBurgerOpen && styles.toggle
          )}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
