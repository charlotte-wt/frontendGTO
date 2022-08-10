import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import {
    retrieveEvents,
    findEventsByTitle,
    deleteAllEvents,
    updateEvent
} from "../../actions/events";
import { Link } from "react-router-dom";
import "./Event.css";
import { Button } from "../Home/Button";

const EventsList = () => {
    const [currentEvent, setCurrentEvent] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");


    const events = useSelector(state => state.eventR);
    const navigate = useNavigate();
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

            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByTitle = () => {
        refreshData();
        dispatch(findEventsByTitle(searchTitle));
    };

    const user = AuthService.getCurrentUser();

    // user id is null fetching it will get error
    // to check if person logged in is the blog poster 
    // only blog poster can edit / update their blog post

    var user_name = null;
    try {
        user_name = user.username;

    } catch (err) {

    }

    return (
        <div className="event-list-container">
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <Button
                                className='btns' 
                                buttonStyle='btn--pink'
                                buttonSize='btn--medium'
                                onClick={findByTitle}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className = "title-h4">Events List</h4>

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

                    <Button
                        className='btn btn-success'
                        buttonStyle='btn--addevent'
                        buttonSize='btn--large'
                        onClick={() => navigate("add")}

                    >
                        Add Event
                    </Button>
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
                                    <strong>Host Username:</strong>
                                </label>{" "}
                                {currentEvent.username}
                            </div>
                            <div>
                                <label>
                                    <strong>Host Contact:</strong>
                                </label>{" "}
                                {currentEvent.email}
                            </div>
                            <div>
                                <label>
                                    <strong>Status:</strong>
                                </label>{" "}
                                {currentEvent.status ? "Attending" : "Awaiting Attendance"}
                            </div>
                            {(currentEvent.username === user_name || user_name == "moderator") && (
                                <Link
                                    to={"/events/" + currentEvent.id}
                                    className="badge badge-warning mr-2"
                                >
                                    Edit
                                </Link>
                            )
                            }

                            {currentEvent.status ? (
                                <button
                                    className="badge badge-primary borderless"
                                    onClick={() => updateStatus(false)}
                                >
                                    Unattend
                                </button>
                            ) : (
                                <button
                                    className="badge badge-primary "
                                    onClick={() => updateStatus(true)}
                                >
                                    Attend
                                </button>
                            )}
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Event...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventsList;