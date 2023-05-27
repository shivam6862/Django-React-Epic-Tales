import { useContext } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>India's greatest epics</div>
      <div className={classes.right}>
        <NavLink to="/">All epics</NavLink>
        <NavLink to="/new-Epics">New epics</NavLink>
        <NavLink to="/favorites">
          My Favorites epics
          <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
        </NavLink>
      </div>
    </header>
  );
};

export default MainNavigation;
