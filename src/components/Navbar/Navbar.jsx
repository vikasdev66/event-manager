import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">
          <Link to="/">Event Manager</Link>
        </h1>

        <div className={isToggle ? "menu" : "menu hide-menu"}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Events
          </Link>
          <Link
            to="/create-event"
            className={location.pathname === "/create-event" ? "active" : ""}
          >
            Create Event
          </Link>
          <Link
            to="/community"
            className={location.pathname === "/community" ? "active" : ""}
          >
            Community
          </Link>
        </div>

        <button className="menu-icon" onClick={handleToggle}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
