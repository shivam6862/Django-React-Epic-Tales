import React from "react";
import { useContext } from "react";
import classes from "./Pages.module.css";
import FavoritesContext from "../store/favorites-context";
import EpicsList from "../components/Epicss/EpicsList";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1 className={classes.heading}>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p className={classes.adding}>
          You got no favorites yet. Start adding some ?
        </p>
      ) : (
        <EpicsList Epics={favoritesCtx.favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;
