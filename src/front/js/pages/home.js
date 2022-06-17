import React from "react";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <div className="text-center">
      <h1>HOME</h1>

      {localStorage.getItem("token") ? (
        <div className="text-center">
          <h1>Hello!</h1>
          
            <button className="btn btn-warning" onClick={()=>{history.push("/private")}}>Private</button>
          
        </div>
      ) : (
        <div className="text-center">
          
        </div>
      )}
    </div>
  );
};
