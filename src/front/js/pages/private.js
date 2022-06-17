import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Private = () => {
  const { actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    actions.verify();
  }, []);

  return (
    <div>
      <h1>PRIVATE</h1>

      <button
        className="btn btn-success"
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
    </div>
  );
};
