import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../../actions/events";

const AddEvent = () => {
  const initialEventState = {
    id: null,
    username: "",
    email: "",
    title: "",
    description: "",
    published: false
  };
  const [event, setEvent] = useState(initialEventState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event_change => {
    const { name, value } = event_change.target;
    // console.log({ ...event, [name]: value });
    setEvent({ ...event, [name]: value });
  };

  const saveEvent = () => {
    const { username, email, title, description } = event;


    dispatch(createEvent(username, email, title, description))
      .then(data => {
       
        setEvent({
          id: data.id,
          username:data.username,
          email:data.email,
          title: data.title,
          description: data.description,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEvent = () => {
    setEvent(initialEventState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEvent}>
            Add
          </button>
        </div>
      ) : (
        <div>
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              value={event.username}
              onChange={handleInputChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Host Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={event.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={event.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>


          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={event.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveEvent} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEvent;