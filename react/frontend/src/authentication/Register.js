import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import background from "./images/background.jpg";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
  body {
    font-family: 'Notable', sans-serif;
  }
`;

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
  };

  return (
    <div styles={{ backgroundImage: `url(${background})` }}>
      <div
        className="form"
        style={{
          textAlign: "center",
          background: "black",
          //   backgroundImage: `https://i.ytimg.com/vi/lJ3jbXYY-98/maxresdefault.jpg`,
          height: "620px",
          width: "100%"
        }}
      >
        <div className="register-text">
          <Title> Register </Title>
          <GlobalStyles />
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={event => handleSubmit(event, userInfo)}>
          <Label> Username </Label>
          <input
            className="regInput"
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={event => handleChange(event)}
          />
          <br />
          {/* <label style={{ textAlign: "center", margin: "8px" }}>Password</label> */}
          <Label> Password </Label>
          <input
            className="regInput"
            type="password"
            name="password1"
            placeholder="Enter Password"
            onChange={event => handleChange(event)}
          />
          <br />
          <Label> Confirm Password </Label>
          <input
            className="regInput"
            type="password"
            name="password2"
            placeholder="Retype Password"
            onChange={event => handleChange(event)}
          />
          <br />
          <div className="regButton" style={{ marginTop: "10px" }}>
            <button style={{ color: "lime", backgroundColor: "grey" }}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: lime;
  margin-top: 0px;
  padding-top: 50px;
  font-family: "Press Start 2P", cursive;
  padding-bottom: 80px;
`;
const Label = styled.h1`
  font-size: 1em;
  text-align: center;
  color: white;
  padding-top: 10px;
  font-family: "Press Start 2P", cursive;
`;
