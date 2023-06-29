import {RectangleIcon} from "public/icons";

import styles from './index.module.scss'

const DetailedGamePage = () => {
  return (
    <div className={styles.game_container} id="about_us">
      <video autoPlay muted loop className={styles.projectsBg}>
        <source src="animations/ourProjectsBg.mp4" type="video/mp4" />
      </video>
      <div className={styles.__container}>
        <div className={styles.game_body}>
          <div className={styles.game_content}>
            <h2 className={styles.game_title}>Game Name</h2>
            <span>
              <img src={RectangleIcon.src} alt="share" className={styles.game_shape_img} />
            </span>
            <div className={styles.game_text}>
              We are a rapidly growing mobile GayDev studio, driven by our
              passion for creating exceptional gaming experiences. With a team
              of talented and dedicated individuals, we strive to push the
              boundaries of mobile gaming and deliver captivating adventures
              that resonate with players. Join us on our exciting journey as we
              bring to life innovative concepts and redefine the way people
              engage with mobile games.
            </div>
          </div>
          <div className={styles.shape}>
            <img src={RectangleIcon.src} alt="share" className={styles.game_img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedGamePage;
