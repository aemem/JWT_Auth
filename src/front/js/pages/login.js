import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const history = useHistory();

  const sendUserInfo = async () => {
    if (user.email != null && user.email.trim() != "" && user.password != null && user.password.trim() != "") {
      setError(null);
      const response = await fetch("https://3001-4geeksacade-reactflaskh-qrqdo8dn5m3.ws-eu47.gitpod.io/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();

      if(data.logged == false){
        setError("Wrong Info")
      }
      else if(data.logged == true){
        localStorage.setItem("token", data.token)
        history.push("/private")
      }
    } 
    else {
      setError("Wrong Info");
      
    }
  }

  return (
    <div className="container">
      {username}
      <div className="row">
        <h1>Log In</h1>
        <label htmlFor="email">email</label>
        <input id="email" className="col-3" onChange={(e) => {setUser({ ...user, email: e.target.value });}}></input>
        <label htmlFor="password">password</label>
        <input id="password" className="col-3" onChange={(e) => {setUser({ ...user, password: e.target.value });}}></input>
      </div>
      <button className="btn btn-small btn-success mt-3" onClick={() => {sendUserInfo()}}>Log In</button>
      {error != null ? <h3 className="text-danger">{error}</h3> : null}
    </div>
  );
};
