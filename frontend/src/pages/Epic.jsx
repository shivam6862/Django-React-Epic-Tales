import React, { useState, useEffect } from "react";
import classes from "./Pages.module.css";
import { useParams } from "react-router-dom";
import EpicsItem from "../components/Epicss/EpicsItem";

const EpicPage = () => {
  const params = useParams();
  const { pk } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEpic, setLoadedEpic] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/epics/${pk}`)
      .then((response) => {
        return response.json();
      })
      .then((Epic) => {
        setIsLoading(false);
        setLoadedEpic(Epic);
      });
  }, []);

  return (
    <section>
      {isLoading && <p className={classes.loading}>Loading....</p>}
      {!isLoading && (
        <>
          <h1 className={classes.heading}>epics {loadedEpic.id}</h1>
          <EpicsItem
            id={loadedEpic.id}
            title={loadedEpic.epicsTitle}
            description={loadedEpic.Description}
            image={loadedEpic.epicsImage}
            address={loadedEpic.Address}
          />
        </>
      )}
    </section>
  );
};

export default EpicPage;
