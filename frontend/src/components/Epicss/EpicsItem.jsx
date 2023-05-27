import React, { useState } from "react";
import { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./EpicsItem.module.css";
import { useLocation } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import Update from "../Update/Update";
import Backdrop from "../ui/Backdrop";

const EpicsItem = (props) => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  const [isUpdate, setIsUpdate] = useState(false);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        epicsTitle: props.title,
        Description: props.description,
        epicsImage: props.image,
        Address: props.address,
      });
    }
  };
  const DeleteHandler = (pk) => {
    fetch(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/epics/${pk}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      navigate("/");
    });
  };
  const UpdateHandler = (pk) => {
    setIsUpdate(true);
  };
  const onClickBackdrop = () => {
    setIsUpdate(false);
  };
  return (
    <div className={classes.item}>
      {isUpdate && (
        <>
          <Update
            id={props.id}
            title={props.title}
            description={props.description}
            image={props.image}
            address={props.address}
          />
          <Backdrop onClick={onClickBackdrop} />
        </>
      )}
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.buttons}>
          {params.pk == undefined ? (
            <div className={classes.actions}>
              <button onClick={toggleFavoriteStatusHandler}>
                {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
              </button>
            </div>
          ) : (
            <div className={classes.actions}>
              <button
                onClick={() => {
                  UpdateHandler(props.id);
                }}
              >
                Update
              </button>
            </div>
          )}
          {location.pathname != "/" ? (
            <></>
          ) : (
            <Link to={`/${props.id}`} className={classes.actions}>
              <button onClick={toggleFavoriteStatusHandler}>Read More</button>
            </Link>
          )}
          {params.pk == undefined ? (
            <></>
          ) : (
            <div className={classes.actions}>
              <button
                onClick={() => {
                  DeleteHandler(props.id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EpicsItem;
