import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/" exact className="HomeButton">
        Home
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/downloads">Downloads</NavLink>
      <NavLink to="/careers">Careers</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <p></p>
    </nav>
  );
}
