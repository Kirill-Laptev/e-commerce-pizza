const SET_SORT_BY = 'SET_SORT_BY';

const initialState = {
    sortBy: 'rating'
}

const filter = (state = initialState, action) => {
    switch(action.type) {
        case SET_SORT_BY:
        return {
            ...state,
            sortBy: action.name
        }

        default:
            return state;
    }
}

export const setSortBy = (name) => {
    return {type: SET_SORT_BY, name}
}

export default filter;