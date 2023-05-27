import { createContext, useState } from "react";
import React from "react";
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteEpics) => {},
  removeFavorite: (EpicsId) => {},
  itemIsFavorite: (EpicsId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteEpics) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteEpics);
    });
  }

  function removeFavoriteHandler(EpicsId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((Epics) => Epics.id !== EpicsId);
    });
  }

  function itemIsFavoriteHandler(EpicsId) {
    return userFavorites.some((Epics) => Epics.id === EpicsId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
