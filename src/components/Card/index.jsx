import styles from './Card.module.scss'
import globalStyles from '../../index.module.scss'

console.log(globalStyles)

const Card = ({ name, price, image, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/heart.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className={globalStyles.button} onClick={onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  )
}
export default Card
