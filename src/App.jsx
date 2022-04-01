import { useEffect, useState } from 'react'
import Drawer from './components/Drawer'
import Header from './components/Header'

import axios from 'axios'

import globalStyles from './index.module.scss'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './Pages/Favorites'
import { disableBodyScroll } from 'body-scroll-lock'
import { enableBodyScroll } from 'body-scroll-lock'

const App = () => {
  const [CartOpened, setCartOpened] = useState(false)
  const [Items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [CartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])

  CartOpened ? disableBodyScroll(document) : enableBodyScroll(document)

  useEffect(() => {
    axios.get('/Items').then((res) => {
      setItems(res.data)
    })

    axios.get('/cart').then((res) => {
      setCartItems(res.data)
    })
    axios.get('/Favorite').then((res) => {
      setFavorites(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`/Favorite/${obj.id}`)
      } else {
        const { data } = await axios.post('/Favorite', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
      console.error(error)
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={globalStyles.wrapper + ' clear'}>
      {CartOpened && (
        <Drawer
          items={CartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              Items={Items}
              searchValue={searchValue}
              onChangeSearchValue={onChangeSearchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          exact
          element={
            <Favorites Items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
