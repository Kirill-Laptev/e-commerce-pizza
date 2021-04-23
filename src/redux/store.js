import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import productCard from './reducers/product-card'
import categories from './reducers/categories'
import filter from './reducers/filter'
import cart from './reducers/cart'
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    productCard,
    categories,
    filter,
    cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store;