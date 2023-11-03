import React, { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorrite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoritesMealIds((prevFavIds) => [...prevFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesMealIds((prevFavIds) =>
      prevFavIds.filter((favId) => favId !== id)
    );
  };

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
