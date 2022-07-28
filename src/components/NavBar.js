import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "Calc(25% - 36px)",
  padding: "12px",
  margin: "0 6px 6px",
  backgroundColor: "salmon",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink 
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          backgroundColor: "black",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          backgroundColor: "black",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          backgroundColor: "black",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
          backgroundColor: "black",
        }}
      >
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
