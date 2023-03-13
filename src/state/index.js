import { createStore } from 'react-hooks-global-state';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addFavorite': return {
            ...state, favorites:
                [
                    ...state.favorites,
                    action.product
                ]
        };
        case 'removeFavorite':
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.id !== action.id)
            };
        default: return state;
    }
};
const initialState = { favorites: [] };

export const addToFavorites = (e, product) => {
    e.preventDefault();
    dispatch({
        type: "addFavorite",
        product: product,
    });
}

export const removeFromFavorites = (e, id) => {
    e.preventDefault();
    dispatch({
        type: "removeFavorite",
        id: id
    })
};


export const { dispatch, useStoreState } = createStore(reducer, initialState);