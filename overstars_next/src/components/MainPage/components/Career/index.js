


import CareerCard from '../CareerCard';
import styles from './index.module.scss'


const Career = () => {
  return (
    <div className={styles.career__container} id="career">
      <div className={styles.body__container}>
        <h2 className={styles.career_title}>Career</h2>
        <div className={styles.cards__container}>
          <CareerCard
            img={'/images/Fire.png'}
            title="Junior Unity Developer"
            text1="Good understanding of game design and mechanics"
            text2="Bachelor's degree in BSUIR or BSU"
            text3="Gay Orientation"
            text4="Passion for gaming and staying  updated with industry trends"
            text5="Good communication  and teamwork abilities"
          />
          <CareerCard
            img={'/images/Hearth.png'}
            title="Junior Game Designer"
            text1="Good understanding of game design and mechanics"
            text2="Bachelor's degree in BSUIR or BSU"
            text3="Gay Orientation"
            text4="Passion for gaming and staying  updated with industry trends"
            text5="Good communication  and teamwork abilities"
          />
          <CareerCard
            img={'/images/User.png'}
            title="Trainee Cleaner (Trofim)"
            text1="Good understanding of game design and mechanics"
            text2="Bachelor's degree in BSUIR or BSU"
            text3="Gay Orientation"
            text4="Passion for gaming and staying  updated with industry trends"
            text5="Good communication  and teamwork abilities"
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
