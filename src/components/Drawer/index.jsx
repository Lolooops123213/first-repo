import CardItem from './CardItem'
import styles from './Drawer.module.scss'

const Drawer = ({ items = [], onClose, onRemoveItem }) => {
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

        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((item) => (
                <CardItem
                  key={item.id}
                  id={item.id}
                  img={item.image}
                  price={item.price}
                  name={item.name}
                  onRemoveItem={onRemoveItem}
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
          </>
        ) : (
          <div
            className={`${styles.cartEmpty} d-flex align-center justify-center flex-column flex`}
          >
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className={`${styles.greenButton}`}>
              <img src="/img/cart/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Drawer
