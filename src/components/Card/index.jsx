import styles from './Card.module.scss'
import { useState } from 'react'

const Card = ({ id, name, price, image, onClickFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    onPlus({ id, name, price, image })
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="img/heart.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={`/img/${isAdded ? 'btn-checked.svg' : 'addToCart.svg'}`}
          alt="Plus"
        />
      </div>
    </div>
  )
}
export default Card
