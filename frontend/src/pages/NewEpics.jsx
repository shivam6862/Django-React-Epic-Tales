import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Pages.module.css";
import NewEpicsForm from "../components/Epicss/NewEpicsForm";

const NewEpicsPage = () => {
  const navigate = useNavigate();
  function addEpicsHandler(EpicsData) {
    console.log(EpicsData);
    fetch(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/epics/`, {
      method: "POST",
      body: JSON.stringify(EpicsData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1 className={classes.new}>Add New epics</h1>
      <NewEpicsForm onAddEpics={addEpicsHandler} />
    </section>
  );
};

export default NewEpicsPage;
