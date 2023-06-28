import React, { useState, useEffect, useRef, useCallback } from "react";

import styles from "./index.module.scss";
import clsx from "clsx";
import GamesSlider from "../GameSlider";

const OurProjects = () => {
  const ref = useRef();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handlerMoveMouse = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    setCursorPosition({ x: e.clientX - rect.x, y: e.clientY - rect.y });
  });

  return (
    <div
      ref={ref}
      className={clsx(styles.projects, styles.container)}
      id="games"
      onMouseMove={handlerMoveMouse}
    >
      <div
        className={styles.cursor}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
      <div className={styles.project__bloc}>
        <div className={styles.__container}>
          <div className={styles.title__projects}>Our projects</div>
          <GamesSlider />
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
