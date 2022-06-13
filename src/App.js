import './App.css';
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate, Link } from "react-router-dom";
import styled from "styled-components";


import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import WithNav from "./components/NavBar/WithNav"
import WithoutNav from "./components/NavBar/WithoutNav"
import Friend from "./components/Friend/Friend";
import AddFriend from "./components/Friend/AddFriend";
import Event from "./components/Event/Event";
import AddEvent from "./components/Event/AddEvent";
import EditEvent from "./components/Event/EditEvent";
import Content from "./components/Content/Content";

import { history } from "./helpers/History";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import EventBus from "./common/EventBus";

function App() {

    const AppContainer = styled.div`
        width: 100%;
        height: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);


    return (
        <Router history={history}>
           
        <nav className="navbar navbar-expand navbar-dark bg-dark">
                

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="nav-link" onClick={logOut}>
                        LogOut
                        </a>
                    </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                        Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                        Sign Up
                        </Link>
                    </li>
                    </div>
                )}
                </nav>
            
            
             <div className="container mt-3">
                <Route element={<WithNav />}>
                    <Route
                        path="/"
                        element={<Navigate to="/home" replace />}
                    />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/friends" element={<Friend />} />
                    <Route exact path="/friends/add" element={<AddFriend />} />
                    <Route exact path="/events" element={<Event />} />
                    <Route exact path="/events/add" element={<AddEvent />} />
                    <Route exact path="/events/edit/:id" element={<EditEvent />} />
                    <Route path="/content/technology" element={<Content />} />
                    <Route path="/content/accountancy" element={<Content />} />
                    <Route path="/content/startup" element={<Content />} />
                    <Route path="/content/investmentbanking" element={<Content />} />
                    <Route path="/content/engineering" element={<Content />} />
                    <Route exact path="/profile" element={<Profile/>} />
                </Route>
                <Route element={<WithoutNav />}>
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/signup" element={<Register/>} />
                </Route>
            </div>

        </Router>
    );
}

export default App;
