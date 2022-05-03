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
      <Link to={"/signup"}>
        <button>Sign Up</button>
      </Link>
      <Link to={"/login"}>
        <button>Log In</button>
      </Link>
    </div>
  );
};
