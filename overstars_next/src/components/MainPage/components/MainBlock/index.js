import React from "react";

import styles from "./index.module.scss";

const TITLE_TEXT = "OVERSTARS GAMES";

const MainBlock = () => {
  return (
    <div className={styles.root}>
      <video autoPlay muted loop className={styles.starsBackground}>
        <source src="animations/Mask.mp4" type="video/mp4" />
      </video>
      <h1 className={styles.title}>{TITLE_TEXT}</h1>
      <div className={styles.earthWrapper}>
      <video autoPlay muted loop className={styles.earth}>
        <source src="animations/earth.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  );
};

export default MainBlock;
