import styles from './index.module.scss'
import clsx from "clsx";



import { useState } from "react";
import { LogoIcon } from '../../../public/icons';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onNavMenuOpen = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  return (
    <header className={styles.header__container} id="header">
      <nav className={clsx(styles.nav, styles.__containerH)}>
        <div className={clsx(styles.fix, styles.app__header)}>
          <a href="#header" className={styles.logo}>
            <img src={LogoIcon.src} alt="logo" />
          </a>
          <div className={styles.item}>
            <ul className={clsx(styles.nav__menu, isBurgerOpen && styles.nav__active)}>
              <li className={styles.nav__item}>
                <a href="#games" className={styles.nav__link}>
                  Games
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="#career" className={styles.nav__link}>
                  Career
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="#about_us" className={styles.nav__link}>
                  About us
                </a>
              </li>
              <li className={clsx(styles.nav__item, styles.contact)}>
                <a href="/" className={styles.nav__link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button className={styles.btn__header}>Contact</button>
          <div onClick={onNavMenuOpen} className={clsx(styles.nav__toggler, isBurgerOpen && styles.toggle)}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </nav> 
      <div className={styles.background2}>

      <div className={styles.background}>
       <h1 className={styles.title__header}>OVERSTARS GAMES</h1>
      </div>
        </div>    

</header>
  );

};

export default Header;
