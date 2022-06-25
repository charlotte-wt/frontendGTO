import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {Button} from "../Home/Button"; 
import { updateEvent, deleteEvent } from "../../actions/events";
import EventDataService from "../../services/eventService";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveEvents,
  findEventsByTitle,
} from "../../actions/events";
import "./Event.css";


const Event = ({events, deleteEvent}) => {
  

  // const [searchTitle, setSearchTitle] = useState("");

  const navigate = useNavigate();
  

  // const onChangeSearchTitle = e => {
  //   const searchTitle = e.target.value;
  //   setSearchTitle(searchTitle);
  // };

  // const findByTitle = () => {
  //   dispatch(findEventsByTitle(searchTitle));
  // };




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
                <th scope="col">Host Name</th>
                <th scope="col">Host Email</th>
                <th scope="col">Event Title</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 ? (
                events.map((event, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{event.username}</td>
                    <td>{event.email}</td>
                    <td>{event.title}</td>
                    <td>{event.description}</td>
                    <td>
                    <Button
                        className='btns'
                        buttonStyle='btn--pink'
                        buttonSize='btn--middle'
                        onClick={() => navigate(`/events/edit/${event.id}`)}
                        
                      >
                        Edit
                      </Button>  
                      </td>
                      <td>                    
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

const mapEventStateToProps = (eventState) => ({
    events: eventState.eventR,
});

const mapEventDispatchToProps = (dispatch) => ({
    deleteEvent: (id) => {
        dispatch({ type: "DELETE_EVENT", payload: id });
        dispatch(deleteEvent(id));
    },
});


export default connect(mapEventStateToProps, mapEventDispatchToProps)(Event);