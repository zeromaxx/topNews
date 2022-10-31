import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <NavLink to="/">
          <h1>
            <span>Top</span> News
          </h1>
        </NavLink>
        <ul>
          <li>
            <NavLink
              activestyle={{ color: "#0074d9" }}
              style={({ isActive }) => ({
                color: isActive ? "#0074d9" : "black",
              })}
              to="/health"
            >
              Υγεία
            </NavLink>
          </li>
          <li>
            <NavLink
              activestyle={{ color: "#0074d9" }}
              style={({ isActive }) => ({
                color: isActive ? "#0074d9" : "black",
              })}
              to="/technology"
            >
              Τεχνολογία
            </NavLink>
          </li>
          <li>
            <NavLink
              activestyle={{ color: "#0074d9" }}
              style={({ isActive }) => ({
                color: isActive ? "#0074d9" : "black",
              })}
              activeclassname="activeLink"
              to="/search"
            >
              Αναζήτηση Ειδήσεων
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
