import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {Button} from "../Home/Button"; 




const AddEvent =({ events, addEvent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const checkEventUserExists = events.filter((event) =>
    //   event.email === email ? event : null
    // );
    // const checkEventNameExists = events.filter((event) =>
    //   event.name === name ? event : null
    // );

    if (!email || !name || !description) {
      return toast.warning("Please fill in all fields!!");
    }
    // if (checkEventUserExists.length > 0 && checkEventNameExists.length > 0) {
    //   return toast.error("This event already exists!!");
    // }

    const data = {
      id: events.length > 0 ? events[events.length - 1].id + 1 : 0,
      email,
      name,
      description,
    };

    addEvent(data);
    toast.success("Event added successfully!!");
    navigate("/events");
  };

  return (
    <div className="container-fluid">
      <h1 className="title-addevent">Add Event</h1>
      <div className="addevent-row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form className = "form-start" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Event Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <Button
                  className='btns'
                  buttonStyle='btn--addevent'
                  buttonSize='btn--middle'
                  onClick={() => handleSubmit()}
                  
                >
                  Add Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state,
});
const mapDispatchToProps = (dispatch) => ({
  addEvent: (data) => {
    dispatch({ type: "ADD_EVENT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);