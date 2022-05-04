import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Login } from "./login";
import { Signup } from "./signup";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <h1>HOME</h1>
      <Link to={"/signup"}>
        <button className="btn btn-primary">Sign Up</button>
      </Link>
      <Link to={"/login"}>
        <button className="btn btn-success">Log In</button>
      </Link>
    </div>
  );
};
