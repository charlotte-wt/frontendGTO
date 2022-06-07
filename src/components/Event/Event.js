import React from "react";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {Button} from "../Home/Button"; 

import "./Event.css";


const Event = (events, deleteEvent) => {

    const navigate = useNavigate();

  return (
   
   <div className="event-container">
      <div className="event-row">
        <Button
          className='btns'
          buttonStyle='btn--addevent'
          buttonSize='btn--large'
          onClick={() => navigate("/events/add")}
        >
          Add Event
        </Button>
        <div className="col-md-10 mx-auto my-4">
          <table className="table">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Event Name</th>
                <th scope="col">Host Email</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 ? (
                events.map((event, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{event.name}</td>
                    <td>{event.email}</td>
                    <td>{event.description}</td>
                    <td>
                    <Link
                        to={`/edit/${event.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>                        
                      <Button
                        className='btns'
                        buttonStyle='btn--pink'
                        buttonSize='btn--middle'
                        onClick={() => deleteEvent(event.id)}
                        
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No events found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
   
  );
};

const mapStateToProps = (state) => ({
    events: state,
});

const mapDispatchToProps = (dispatch) => ({
    deleteEvent: (id) => {
        dispatch({ type: "DELETE_EVENT", payload: id });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);