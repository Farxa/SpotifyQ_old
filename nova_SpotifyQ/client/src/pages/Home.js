import React from "react";
import Login from "../components/Login";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="center-div">
      {props.code ? (
        <div>
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}
