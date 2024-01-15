import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-[10px]">
      <div className="flex items-center">
        <div className="mr-[10px]">
          <div className="flex items-center px-3">
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "#313539" }}
              size="2x"
            />
            <span className="ml-2 mt-[5px] font-bold text-[20px]">Tracker</span>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button
          type="button"
          className="px-3 py-2 rounded-lg mx-3 hover:bg-blue-200 transition-all duration-300 ease-in-out transform hover:scale-95 font-semibold text-[19px]"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
