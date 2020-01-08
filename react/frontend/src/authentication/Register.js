import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const handleChange = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, userInfo) => {
    event.preventDefault();
    console.log(userInfo);
    axios
      .post("http://localhost:8000/api/registration/", userInfo)
      .then(response => {
        console.log(response.data);
        props.history.push("/login");
      })
      .catch(error => {
        console.error(error);
      });
    // setUserInfo({
    //   username: "",
    //   password1: "",
    //   password2: ""
    // });
  };

  return (
    <div className="form">
      <div className="register-text">
        <h1>Register</h1>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={event => handleSubmit(event, userInfo)}>
        <label style={{ textAlign: "left" }}>Username</label>
        <input
          className="regInput"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={event => handleChange(event)}
        />
        <label style={{ textAlign: "left" }}>Password</label>
        <input
          className="regInput"
          type="password"
          name="password1"
          placeholder="Enter Password"
          onChange={event => handleChange(event)}
        />
        <label style={{ textAlign: "left" }}>Confirm Password</label>
        <input
          className="regInput"
          type="password"
          name="password2"
          placeholder="Retype Password"
          onChange={event => handleChange(event)}
        />
        <div className="regButton">
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}
