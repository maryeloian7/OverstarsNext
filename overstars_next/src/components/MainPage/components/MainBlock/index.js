import React from 'react';

import styles from "./index.module.scss";

const TITLE_TEXT = 'OVERSTARS GAMES'

const MainBlock = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{TITLE_TEXT}</h1>
            <div className={styles.earth}></div>
        </div>
    )
}

export default MainBlock;