import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
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
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="regInput"
            type="text"
            name="username"
            label="User Name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          <input
            className="regInput"
            type="password"
            name="password"
            label="Password"
            onChange={event => handleChange(event)}
          />
        </label>
        <div className="regButton">
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}
