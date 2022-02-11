import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="center-div">
    This is the home page 🏠
      {props.code ? (
        <div>
          <Link to="/queue">
            <button>Dashboard</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button>Login with Spotify</button>
          </Link>
        </div>
      )}
    </div>
  );
}
