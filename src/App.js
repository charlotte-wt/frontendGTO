import './App.css';
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Friend from "./components/Friend/Friend";
import AddFriend from "./components/Friend/AddFriend";
import Event from "./components/Event/Event";
import EventList from "./components/Event/EventList";
import AddEvent from "./components/Event/AddEvent";
import Content from "./components/Content/Content";
// import Blogs from "./components/Blog/Blogs";
import Blog from "./components/Blog/Blog";
import AuthService from './services/auth.service';
import EventBus from "./common/EventBus";
import BoardUser from "./components/BoardUser";

import "./components/NavBar/NavBar";

function App() {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">
          GIRLSTIMEONLINE
        </Link>
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/blogs"} className="nav-link">
                Blog
              </Link>
            </li>


          {/* {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )} */}
{/* 
          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )} */}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
            
          )}

          {currentUser && (
             <li className="nav-item">
             <Link to={"/events"} className="nav-link">
               Events
             </Link>
           </li>
            
          )}

          
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/friends"} className="nav-link">
                Friends
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

        <Routes>
          <Route path="/user" element={<BoardUser/>} />
          {/* <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} /> */}


            <Route path="/" element={<Home/>} />
            <Route exact path="/blogs" element={<Blog />} />
   
            <Route exact path ="/login" element = {<Login/>}/>
            <Route exact path ="/register" element = {<Register/>}/>
            <Route exact path ="/profile" element = {<Profile/>}/>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/friends" element={<Friend/>} />
            <Route exact path="/friends/add" element={<AddFriend />} />
            <Route exact path="/events" element={<EventList />} />
            <Route exact path="/events/add" element={<AddEvent />} />
            <Route exact path="/events/:id" element={<Event />} />
            <Route path="/content/technology" element={<Content />} />
            <Route path="/content/accountancy" element={<Content />} />
            <Route path="/content/startup" element={<Content />} />
            <Route path="/content/investmentbanking" element={<Content />} />
            <Route path="/content/engineering" element={<Content />} />         
        </Routes>
     

    </div>
    );
}

export default App;
