import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { updateEvent, deleteEvent } from "../../actions/events";
import EventDataService from "../../services/eventService";
import "./Event.css";
import { Button } from "../Home/Button";

const Event = (props) => {
  const initialEventState = {
    id: null,
    username: "",
    email: "",
    title: "",
    description: "",
    status: false
  };
  const [currentEvent, setCurrentEvent] = useState(initialEventState);
  const [message, setMessage] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch();
  let { id } = useParams();

  const getEvent = id => {
    EventDataService.get(id)
      .then(response => {
        setCurrentEvent(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEvent(id);
  }, [id]);

  const handleInputChange = event_change => {
    const { name, value } = event_change.target;
    setCurrentEvent({ ...currentEvent, [name]: value });
  };

  const updateStatus = current_status => {
    const data = {
      id: currentEvent.id,
      username: currentEvent.username,
      email: currentEvent.email,
      title: currentEvent.title,
      description: currentEvent.description,
      status: current_status
    };

    dispatch(updateEvent(currentEvent.id, data))
      .then(response => {
        console.log(response);

        setCurrentEvent({ ...currentEvent, status: current_status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateEvent(currentEvent.id, currentEvent))
      .then(response => {
        console.log(response);

        setMessage("The event was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };






  const removeEvent = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      dispatch(deleteEvent(currentEvent.id))
        .then(() => {
          navigate("/events");
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      // do nothing
    }
  };


  return (
    <div>
      {currentEvent ? (
        <div className="container-fluid">
          <div className="col-md-6 p-5 mx-auto shadow">
            <h4 className="title-addevent">Event</h4>
            <form>

              <div className="form-group">
                <label htmlFor="username">Host Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={currentEvent.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Host Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={currentEvent.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={currentEvent.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={currentEvent.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentEvent.status ? "Attending" : "Awaiting Attendance"}
              </div>


            </form>

            {currentEvent.status ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updateStatus(false)}
              >
                Unattend
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updateStatus(true)}
              >
                Attend
              </button>
            )}

            <button className="badge badge-danger mr-2" onClick={removeEvent}>
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={updateContent}
            >
              Update
            </button>
            <div className="form-group d-flex align-items-center justify-content-between my-4">
              <Button
                className='btns'
                buttonStyle='btn--backevent'
                buttonSize='btn--middle'
                onClick={() => navigate(`/events`)}

              >
                Go Back To Events
              </Button>
            </div>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Event...</p>
        </div>
      )}
    </div>
  );
};

export default Event;