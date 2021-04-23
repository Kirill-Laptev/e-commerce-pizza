import * as axios from 'axios';

const SET_DATA_PRODUCTS = 'SET_DATA_PRODUCTS';
const SET_IS_LOADED = 'SET_IS_LOADED';

const initialState = {
    productItems: [], // Важно передавать пустой массив, иначе будет ошибка при первом рендере
    isLoaded: false
}

const productCard = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA_PRODUCTS: 
        return {
            ...state, 
            productItems: [...action.data]
        }

        case SET_IS_LOADED:
        return {
            ...state,
            isLoaded: action.value
        }

        default:
            return state;
    }
}

export const setDataProducts = (data) => {
    return {type: SET_DATA_PRODUCTS, data}
}

export const setIsLoaded = (value) => {
    return {type: SET_IS_LOADED, value}
}

export const fetchProducts = (category, sortBy) => {
  return (dispatch) => {
    dispatch(setIsLoaded(false));
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
    .then(({ data }) => {
      dispatch(setDataProducts(data));
      dispatch(setIsLoaded(true));
    })
  }
}

export default productCard;