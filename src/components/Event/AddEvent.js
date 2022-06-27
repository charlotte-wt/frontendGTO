import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../../actions/events";
import { useNavigate } from "react-router-dom";
import { Button } from "../Home/Button";
import "./Event.css";

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
  const navigate = useNavigate();

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
          username: data.username,
          email: data.email,
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
        <div className="container-submitted">
          <br></br>
          <h4>You submitted successfully!</h4>
          <Button
            className='btn btn-success'
            buttonStyle='btn--addevent'
            buttonSize='btn--middle'
            onClick={newEvent}

          >
            Add More Events
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--pink'
            buttonSize='btn--middle'
            onClick={() => navigate(`/events`)}

          >
            Go Back To Events
          </Button>
        </div>
      ) : (
        <div>
          <div className="container-fluid">
            <br></br>
            <h1 className="title-addevent">Add Event</h1>
            <br></br>
            <div className="addevent-row">
              <div className="col-md-6 p-5 mx-auto shadow">

                <div className="form-group">
                  <input
                    className="form-control"
                    id="username"
                    required
                    type="text"
                    placeholder="Host Name"
                    name="username"
                    value={event.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                    placeholder="Email"
                    name="email"
                    value={event.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="title"
                    required
                    placeholder="Event Title"
                    name="title"
                    value={event.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="description"
                    required
                    placeholder="Description"
                    name="description"
                    value={event.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between my-2">
                  <Button
                    className='btn btn-success'
                    buttonStyle='btn--addevent'
                    buttonSize='btn--middle'
                    onClick={saveEvent}

                  >
                    Add Event
                  </Button>
                  <Button
                    className='btns'
                    buttonStyle='btn--pink'
                    buttonSize='btn--middle'
                    onClick={() => navigate(`/events`)}

                  >
                    Go Back
                  </Button>
                </div>

              </div>
            </div>
          </div>



        </div>
      )}
    </div>
  );
};

export default AddEvent;