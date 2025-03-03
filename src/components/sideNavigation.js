import React from "react";
import "../styles/side.css";
import { Link, useNavigate } from "react-router-dom";
const SideNavigation = ({ isOpen, toggleNavigation }) => {
  const navigate = useNavigate();

  return (
    <nav id="side-navigation" className={isOpen ? "open" : "closed"}>
      <button id="toggle-button" onClick={toggleNavigation}>
        <span className="hamburger-icon">
          <span className="hamburger-icon-bar"></span>
          <span className="hamburger-icon-bar"></span>
          <span className="hamburger-icon-bar"></span>
        </span>
      </button>
      <ul className="side-container" >
      <li>
          <Link className="side-label" to="/">Home</Link>
        </li>
        <li>
          <Link className="side-label" to="/">Countdown</Link>
        </li>
        <li>
        <Link className="side-label" to="/todo">Todo-List</Link>
        </li>
        <li>
        <Link className="side-label" to="/gallery">Gallery</Link>
        </li>
        <li>
        <Link className="side-label" to="/location">Location</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
