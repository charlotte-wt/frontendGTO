import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveEvents,
  findEventsByTitle,
  deleteAllEvents,
} from "../../actions/events";
import { Link } from "react-router-dom";

const EventsList = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const events = useSelector(state => state.eventR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveEvents());
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentEvent(null);
    setCurrentIndex(-1);
  };

  const setActiveEvent = (event, index) => {
    setCurrentEvent(event);
    setCurrentIndex(index);
  };

  const removeAllEvents = () => {
    dispatch(deleteAllEvents())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findEventsByTitle(searchTitle));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Events List</h4>

        <ul className="list-group">
          {events &&
            events.map((event, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEvent(event, index)}
                key={index}
              >
                {event.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEvents}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentEvent ? (
          <div>
            <h4>Event</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentEvent.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentEvent.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentEvent.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/events/" + currentEvent.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Event...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsList;