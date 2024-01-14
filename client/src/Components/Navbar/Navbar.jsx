import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container1">
        <div className="home">
          <div className="tracker-info">
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "#313539" }}
              size="2x"
            />
            <span className="tracker-text">Tracker</span>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button type="button" className="button">
          <div className="button-top">Login</div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
