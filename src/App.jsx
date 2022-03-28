import { useEffect, useState } from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

import globalStyles from './index.module.scss'

const App = () => {
  const [CartOpened, setCartOpened] = useState(false)
  const [Items, setItems] = useState([])
  const [CartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch('https://624181da19f609879247b3a0.mockapi.io/Items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj])
  }

  const removeInCart = (obj) => {
    console.log(obj)
    setCartItems((prev) => [...prev.filter((item) => item.id != obj.id)])
  }

  return (
    <div className={globalStyles.wrapper + ' clear'}>
      {CartOpened && (
        <Drawer
          items={CartItems}
          onClose={() => setCartOpened(false)}
          removeInCart={(obj) => removeInCart(obj)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className={globalStyles.content + ' p-40'}>
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className={globalStyles.searchBlock + ' d-flex'}>
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className={globalStyles.content__cards + ' d-flex'}>
          {Items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onClickFavorite={() => {
                console.log('Favorite')
              }}
              onPlus={(obj) => {
                onAddToCart(obj)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
