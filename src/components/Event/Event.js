import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { updateEvent, deleteEvent } from "../../actions/events";
import EventDataService from "../../services/eventService";

const Event = (props) => {
  const initialEventState = {
    id: null,
    username: "",
    email: "", 
    title: "",
    description: "",
    published: false
  };
  const [currentEvent, setCurrentEvent] = useState(initialEventState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  let {event_id} = useParams();

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
    getEvent(event_id);
  }, [event_id]);

  const handleInputChange = event_change => {
    const { name, value } = event_change.target;
    setCurrentEvent({ ...currentEvent, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentEvent.id,
      username: currentEvent.username,
      email: currentEvent.email, 
      title: currentEvent.title,
      description: currentEvent.description,
      published: status
    };

    dispatch(updateEvent(currentEvent.id, data))
      .then(response => {
        console.log(response);

        setCurrentEvent({ ...currentEvent, published: status });
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
    dispatch(deleteEvent(currentEvent.id))
      .then(() => {
        props.history.push("/events");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEvent ? (
        <div className="edit-form">
          <h4>Event</h4>
          <form>
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
              {currentEvent.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentEvent.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publish
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
          <p>{message}</p>
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