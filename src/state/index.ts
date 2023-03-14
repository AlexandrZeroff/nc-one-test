import React from "react";
import { createStore } from "react-hooks-global-state";
import { Product } from "../types/types";

type Action =
  | { type: "addFavorite"; product: Product }
  | { type: "removeFavorite"; id: string };

type State = {
  favorites: Product[];
};



const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addFavorite":
      return {
        ...state,
        favorites: [...state.favorites, action.product],
      };
    case "removeFavorite":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite: Product) => favorite.id !== action.id
        ),
      };
    default:
      return state;
  }
};
const initialState = { favorites: [] };

export const addToFavorites = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  product: Product
) => {
  e.preventDefault();
  dispatch({
    type: "addFavorite",
    product: product,
  });
};

export const removeFromFavorites = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();
  dispatch({
    type: "removeFavorite",
    id: id,
  });
};

export const { dispatch, useStoreState } = createStore(reducer, initialState);
