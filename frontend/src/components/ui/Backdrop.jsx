import React from "react";
import classes from "./Backdrop.module.css";
const Backdrop = ({ onClick }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClick}></div>
    </div>
  );
};

export default Backdrop;
