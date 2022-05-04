import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [user, setUser] = useState({});

  const sendUserInfo = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-qrqdo8dn5m3.ws-eu43.gitpod.io/api/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Sign Up</h1>
        <label htmlFor="email">email</label>
        <input
          id="email"
          className="col-3"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        ></input>
        <label htmlFor="password">password</label>
        <input
          id="password"
          className="col-3"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        ></input>
      </div>
      <button
        className="btn btn-small btn-primary mt-3"
        onClick={() => {
          sendUserInfo();
        }}
      >
        Sign Up
      </button>
      <div className="row text-center mt-3">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};
