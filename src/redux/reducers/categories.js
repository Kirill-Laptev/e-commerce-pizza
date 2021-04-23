const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

const initialState = {
    categoryActiveIndex: null
}

const categories = (state = initialState, action) => {
    switch(action.type){
        case SET_ACTIVE_CATEGORY: 
        return {
            ...state,
            categoryActiveIndex: action.index
        }
        default:
            return state;
    }
}

export const setActiveCategory = (index) => {
    return {type: SET_ACTIVE_CATEGORY, index}
}

export default categories;