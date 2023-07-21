
import styles from './index.module.scss'


const CareerCard = (props) => {
  console.log(props)
  return (
    <div className={styles.card__container}>
      <div className={styles.card_bloc}>
        <div className={styles.card__img}>
          <img src={props.img} alt="vacation" className={styles.card__imga}/>
        </div>
        <div className={styles.card_title}>{props.title}</div>
        <div className={styles.card_text}>
          <ul className={styles.card_list}>
            <li className={styles.card_points}>{props.text1}</li>
            <li className={styles.card_points}>{props.text2}</li>
            <li className={styles.card_points}>{props.text4}</li>
            <li className={styles.card_points}>{props.text5}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;