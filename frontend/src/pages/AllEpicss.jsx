import React, { useState, useEffect } from "react";
import classes from "./Pages.module.css";
import EpicsList from "../components/Epicss/EpicsList";

const AllEpicssPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEpics, setLoadedEpics] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/epics/`)
      .then((response) => {
        return response.json();
      })
      .then((Epics) => {
        setIsLoading(false);
        setLoadedEpics(Epics);
      });
  }, []);

  return (
    <section>
      {isLoading && <p className={classes.loading}>Loading....</p>}
      {!isLoading && (
        <>
          <h1 className={classes.heading}>All epics</h1>
          <EpicsList Epics={loadedEpics} />
        </>
      )}
    </section>
  );
};

export default AllEpicssPage;
