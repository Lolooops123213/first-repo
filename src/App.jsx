import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

import globalStyles from './index.module.scss'
console.log(globalStyles)
const arr = [
  {
    id: 1,
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999',
    image: '/img/sneakers/1.jpg',
  },
  {
    id: 2,
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999',
    image: '/img/sneakers/2.jpg',
  },
  {
    id: 3,
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '2 999',
    image: '/img/sneakers/3.jpg',
  },
  {
    id: 4,
    name: 'Мужские Кроссовки Under Armour Curry 8',
    price: '14 499',
    image: '/img/sneakers/4.jpg',
  },
  {
    id: 5,
    name: 'Мужские Кроссовки Nike Kyrie 7',
    price: '11 232',
    image: '/img/sneakers/5.jpg',
  },
  {
    id: 6,
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: '5 330',
    image: '/img/sneakers/6.jpg',
  },
]

const App = () => {
  return (
    <div className={globalStyles.wrapper + ' clear'}>
      <Drawer />
      <Header />
      <div className={globalStyles.content + ' p-40'}>
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className={globalStyles.searchBlock + ' d-flex'}>
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className={globalStyles.content__cards + ' d-flex'}>
          {arr.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onClick={() => {
                console.log(item)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
