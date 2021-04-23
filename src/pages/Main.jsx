import React, { useEffect } from 'react';
import { Categories, SortPopup, BlockItem, PreloaderProducts } from '../components'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/reducers/categories'
import { fetchProducts } from '../redux/reducers/product-card';
import { setSortBy } from '../redux/reducers/filter';
import { addProductToCart } from '../redux/reducers/cart';


const Main = () => {
  const dispatch = useDispatch()
  const {productItems, isLoaded} = useSelector(({productCard}) => productCard)
  const categoryActiveIndex = useSelector(({categories}) => categories.categoryActiveIndex)
  const sortBy = useSelector(({filter}) => filter.sortBy)
  const productsAddedToCart = useSelector(({cart}) => cart.items)

  useEffect(() => {
    dispatch(fetchProducts(categoryActiveIndex, sortBy))
  }, [categoryActiveIndex, sortBy]) 

  const categoryItems = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    {name: 'популярности', type : 'rating'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'}
  ];

  const onCategoryClick = (index) => {
    dispatch(setActiveCategory(index))
  }

  const onFilterClick = (type) => {
    dispatch(setSortBy(type))
}

  const onAddProduct = (obj) => {
    dispatch(addProductToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryItems}
          onCategoryClick={onCategoryClick}
          categoryActiveIndex={categoryActiveIndex}
        />
        <div>
          <SortPopup 
          items={sortItems}
          sortBy={sortBy}
          onFilterClick={onFilterClick} />
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? 
        productItems.map((obj) => {
          return <BlockItem onAddProduct={onAddProduct}
          addedProductCount={productsAddedToCart[obj.id] && productsAddedToCart[obj.id].items.length}
           key={obj.id} 
           {...obj}/>
        }) 
        : Array(9).fill(0).map((_, index) => {
          return <PreloaderProducts key={index} />
        })}
      </div>
    </div>
  );
};


export default Main;
