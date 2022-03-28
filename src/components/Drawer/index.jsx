import CardItem from './CardItem'
import styles from './Drawer.module.scss'

const Drawer = ({ items = [], onClose, removeInCart }) => {
  const removeItem = (obj) => {
    removeInCart(obj)
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className={styles.removeBtn + ' cu-p'}
            src="img/cart/btn-remove.svg"
            alt="close"
            onClick={onClose}
          />
        </h2>
        <div className={styles.items}>
          {items.map((item) => (
            <CardItem
              key={item.id}
              img={item.image}
              price={item.price}
              name={item.name}
              removeItem={() => removeItem(item)}
            />
          ))}
        </div>
        <div className={styles.cartTotlBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.greenButton}>
            Оформить заказ <img src="img/cart/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Drawer
