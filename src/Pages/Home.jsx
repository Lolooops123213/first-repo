import globalStyles from '../index.module.scss'
import Card from '../components/Card'

const Home = ({
  Items,
  searchValue,
  onChangeSearchValue,
  onAddToFavorite,
  onAddToCart,
}) => {
  return (
    <div className={globalStyles.content + ' p-40'}>
      <div className="mb-40 d-flex align-center justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className={globalStyles.searchBlock + ' d-flex'}>
          <img src="/img/search.svg" alt="search" />
          <input placeholder="Поиск..." onChange={onChangeSearchValue} />
        </div>
      </div>
      <div className={globalStyles.content__cards + ' d-flex'}>
        {Items.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()),
        ).map((item) => (
          <Card
            key={item.id}
            onFavorite={(obj) => {
              onAddToFavorite(obj)
            }}
            onPlus={(obj) => {
              onAddToCart(obj)
            }}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
export default Home
