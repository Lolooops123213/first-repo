import styles from './CardItem.module.scss'

const CardItem = ({ id, img, price, name, onRemoveItem }) => {
  return (
    <div className={styles.cartItem + ' d-flex align-center mb-20'}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={styles.cartItemImg}
      ></div>
      <div className="mr-20 flex">
        <p className="mb-5">{name}</p>
        <b>{price} руб.</b>
      </div>
      <img
        className={styles.removeBtn}
        src="img/cart/btn-remove.svg"
        alt="Remove"
        onClick={() => {
          onRemoveItem(id)
        }}
      />
    </div>
  )
}
export default CardItem
