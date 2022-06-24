import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import {Button} from "../Home/Button"; 

const EditEvent = ({ events, updateEvent }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentEvent = events.find(
    (event) => event.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentEvent.username);
    setEmail(currentEvent.email);
    setTitle(currentEvent.title);
    setDescription(currentEvent.description);
  }, [currentEvent]);

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const checkEventUserExists = events.filter((event) =>
    //   event.email === email && event.id !== currentEvent.id
    //   ? event : null
    // );
    // const checkEventNameExists = events.filter((event) =>
    //   event.name === name && event.id !== currentEvent.id
    //   ? event : null
    // );

    // const checkEventDescriptionExists = events.filter((event) =>
    //   event.description === description &&  event.id !== currentEvent.id
    //   ? event : null
    // );

    if (!email || !username || !description) {
      return toast.warning("Please fill in all fields!!");
    }
    // if (checkEventUserExists.length > 0 && checkEventNameExists.length > 0) {
    //   return toast.error("This event already exists!!");
    // }


  
  

    const data = {
      id: currentEvent.id,
      email,
      username,
      description,
    };

    updateEvent(data);
    toast.success("Event updated successfully!!");
    navigate("/events");
  };

  return (
    <div className="container-fluid">
      <div className="edit-event-row">
        <div className="col-md-6 mx-auto shadow p-5">
          {currentEvent ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={username}
                  placeholder={"Host Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Host Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={title}
                  placeholder={"Title"}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={description}
                  placeholder={"Description"}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Event
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/events")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Event Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (eventState) => ({
  events: eventState.eventR,
});
const mapDispatchToProps = (dispatch) => ({
  updateEvent: (data) => {
    dispatch({ type: "UPDATE_EVENT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);