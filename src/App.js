import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navigate} from "react-router-dom";
import styled from "styled-components";


import { AccountBox } from "./components/Login";
import Home from "./components/Home/Home";
import WithNav from "./components/NavBar/WithNav"
import WithoutNav from "./components/NavBar/WithoutNav"
import Friend from "./components/Friend/Friend";
import AddFriend from "./components/Friend/AddFriend";
import Event from "./components/Event/Event";
import AddEvent from "./components/Event/AddEvent";
import EditEvent from "./components/Event/EditEvent";
import Content from "./components/Content/Content";

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

    return (
        <Router>
            <Routes>
            <Route element={<WithNav />}>
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/friends" element={<Friend/>} />
                <Route exact path="/friends/add" element={<AddFriend />} />
                <Route exact path="/events" element={<Event />} />
                <Route exact path="/events/add" element={<AddEvent />} />
                <Route exact path="/events/edit/:id" element={<EditEvent />} />
                <Route path="/content/technology" element={<Content />} />
                <Route path="/content/accountancy" element={<Content />} />
                <Route path="/content/startup" element={<Content />} />
                <Route path="/content/investmentbanking" element={<Content />} />
                <Route path="/content/engineering" element={<Content />} />
            </Route>
            <Route element={<WithoutNav />}>
                <Route
                    path="/"
                    element={<Navigate to="/login" replace />}
                />
                    <Route exact path="/login" element={<AppContainer><AccountBox /></AppContainer>} /> 
            </Route>
                   
            </Routes>
        
        </Router>
    );
}

export default App;
