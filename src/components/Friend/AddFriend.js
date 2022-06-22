import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {Button} from "../Home/Button"; 

import "./Friend.css"


const AddFriend =({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkUsernameExists = contacts.filter((contact) =>
      contact.name === name ? contact : null
    );

    if (!email || !name ) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkUsernameExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
    };

    addContact(data);
    toast.success("Friend added successfully!!");
    navigate("/friends");
  };

  return (
    <div className="container-fluid">
      <h1 className="title-addfriend">Add Friend</h1>
      <div className="addfriend-row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form className = "form-start" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
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
              <Button
                  className='btns'
                  buttonStyle='btn--addfriend'
                  buttonSize='btn--middle'
                  onClick={() => handleSubmit()}
                  
                >
                  Add Friend
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);