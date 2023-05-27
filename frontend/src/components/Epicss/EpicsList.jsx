import EpicsItem from "./EpicsItem";
import classes from "./EpicsList.module.css";
import React from "react";
const EpicsList = (props) => {
  return (
    <div className={classes.list}>
      {props.Epics.map((epics) => (
        <EpicsItem
          key={epics.id}
          id={epics.id}
          image={epics.epicsImage}
          title={epics.epicsTitle}
          address={epics.Address}
          description={epics.Description}
        />
      ))}
    </div>
  );
};

export default EpicsList;
