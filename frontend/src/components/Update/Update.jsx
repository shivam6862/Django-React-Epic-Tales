import React, { useEffect, useRef } from "react";
import classes from "./Update.module.css";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";

const Update = (props) => {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const EpicsData = {
      epicsTitle: enteredTitle,
      epicsImage: enteredImage,
      Address: enteredAddress,
      Description: enteredDescription,
    };
    const pk = props.id;
    fetch(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/epics/${pk}`, {
      method: "PUT",
      body: JSON.stringify(EpicsData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      navigate("/");
    });
  }
  useEffect(() => {
    titleInputRef.current.value = props.title;
    imageInputRef.current.value = props.image;
    addressInputRef.current.value = props.address;
    descriptionInputRef.current.value = props.description;
  }, []);
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">epics Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">epics Image</label>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="8"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Update</button>
        </div>
      </form>
    </Card>
  );
};

export default Update;
