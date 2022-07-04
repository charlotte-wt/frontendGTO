import React from "react";
import AuthService from "../../services/auth.service";
import "./profile.css";
import { PersonCircle } from 'react-bootstrap-icons';
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (


    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Current Profile Details</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <p>Username: {currentUser.username}</p>
        <p>Email: {currentUser.email}</p>
        <strong>Authorities:</strong>
        <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>


        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
                <PersonCircle className = "settingsPPIcon"/>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>

  );
};
export default Profile;