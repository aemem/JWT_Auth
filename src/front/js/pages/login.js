import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Log In</h1>
        <label htmlFor="email">email</label>
        <input id="email" className="col-3"></input>
        <label htmlFor="password">password</label>
        <input id="password" className="col-3"></input>
      </div>
      <button className="btn btn-small btn-success mt-3" onClick={() => {}}>
        Log In
      </button>
      <div className="row text-center mt-3">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};
