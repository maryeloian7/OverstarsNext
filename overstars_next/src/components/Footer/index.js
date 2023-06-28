
import { DiscordIcon, LogoIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from 'public/icons';
import styles from './index.module.scss'
import clsx from "clsx";


const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={clsx(styles.footer, styles.__container)}>
        <div className={styles.footer__content}>
          <a  href="#header" className={styles.footer__logo}>
            <img src={LogoIcon.src} alt="logo_f" />
          </a>
        </div>
        <div className={clsx(styles.social__footer, styles.__container)}>
          <div className={styles.social__text}>
            Copyright ⓒ 2023 Overstars All rights reserved.
          </div>
          <div className={styles.social}>
            <a href="https://www.instagram.com">
              <img src={TelegramIcon.src} alt="telegram" />
            </a>
            <a href="https://www.instagram.com">
              <img src={YoutubeIcon.src} alt="youtube" />
            </a>
            <a href="https://www.instagram.com">
              <img src={TwitterIcon.src} alt="twitter" />
            </a>
            <a href="https://www.instagram.com">
              <img src={DiscordIcon.src} alt="discord" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
