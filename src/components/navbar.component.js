import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <NavLink to="/" className="navbar-brand">
        ExerTracker
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink to="/" exact className="nav-link">
              Exercises
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/create" className="nav-link">
              Create Exercise Log
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/user" className="nav-link">
              Create User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
