import styles from "./index.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.about_container} id="about_us">
      <div className={styles.__container}>
        <div className={styles.about_body}>
          <div className={styles.about_content}>
            <h2 className={styles.about_title}>About us</h2>
            <div className={styles.about_text}>
              We are a rapidly growing mobile GayDev studio, driven by our
              passion for creating exceptional gaming experiences. With a team
              of talented and dedicated individuals, we strive to push the
              boundaries of mobile gaming and deliver captivating adventures
              that resonate with players. Join us on our exciting journey as we
              bring to life innovative concepts and redefine the way people
              engage with mobile games.
            </div>
            <div className={styles.animation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
