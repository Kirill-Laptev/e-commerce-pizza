const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const ADD_ONE_ITEM = 'ADD_ONE_ITEM';
const REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM';

const initialState = {
    items: {},
    productsAdded: 0,
    totalProductsSum: 0
}

const getTotalPrice = (arr) => {
    return arr.reduce((sum, obj) => obj.price + sum, 0);
} 

const cart = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
        
        const currentProductItems = 
        !state.items[action.payload.id]
        ? [action.payload] 
        : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currentProductItems,
                totalPrice: getTotalPrice(currentProductItems)
            }
        }

            return {
                ...state,
                items: newItems,
                productsAdded: state.productsAdded + 1,
                totalProductsSum: state.totalProductsSum + action.payload.price    
            }
        

        case CLEAR_CART: 
            return {
                ...state,
                items: {},
                productsAdded: 0,
                totalProductsSum: 0
            }

        
        case REMOVE_CART_ITEM:

        const copyItems = {
            ...state.items
        }
        
        const itemTotalPrice = copyItems[action.id].totalPrice
        const itemTotalCount = copyItems[action.id].items.length
        delete copyItems[action.id]

            return {
                ...state,
                items: copyItems,
                totalProductsSum: state.totalProductsSum - itemTotalPrice,
                productsAdded: state.productsAdded - itemTotalCount
            }
        

        case ADD_ONE_ITEM:
        
        // Добавляем любой элемент из массива items, для увеличения
        const arrWithAddedItem = [...state.items[action.id].items, state.items[action.id].items[0]];
        const priceAddedItem = state.items[action.id].items[0].price;
            
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {  
                        items: arrWithAddedItem,
                        totalPrice: getTotalPrice(arrWithAddedItem)
                    }
                },
                productsAdded: state.productsAdded + 1,
                totalProductsSum: state.totalProductsSum + priceAddedItem
            }

        case REMOVE_ONE_ITEM: 
        // Если массив больше 1, то возможно удаление элемента массива, иначе возвращается массив с единственным значением
        const oldItems = state.items[action.id].items;
        const arrWithRemovedItem = oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems;
        const currentProductsAdded = state.items[action.id].items.length > 1 ? state.productsAdded - 1 : state.productsAdded;
        const currentProductsSum = state.items[action.id].items.length > 1 
        ? state.totalProductsSum - arrWithRemovedItem[0].price 
        : state.totalProductsSum;

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {  
                        items: arrWithRemovedItem,
                        totalPrice: getTotalPrice(arrWithRemovedItem)
                    }
                },
                productsAdded: currentProductsAdded,
                totalProductsSum: currentProductsSum
            }
            
        default:
            return state
    }
}

export const addProductToCart = (payload) =>{
    return {type: ADD_PRODUCT_TO_CART, payload}
}

export const clearCart = () => {
    return {type: CLEAR_CART}
}

export const removeCartItem = (id) => {
    return {type: REMOVE_CART_ITEM, id}
}

export const addOneItem = (id) => {
    return {type: ADD_ONE_ITEM, id}
}

export const removeOneItem = (id) => {
    return {type: REMOVE_ONE_ITEM, id}
}

export default cart;