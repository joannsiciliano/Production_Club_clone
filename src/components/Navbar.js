import React from "react";
import { NavLink } from "react-router-dom";
import PClogo from "../images/pclogo.png";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img
        src={PClogo}
        className="logo"
        alt="production club Home"
        title="Home"
      />
      <NavLink to="/" exact className="HomeButton">
        Home
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/downloads">Downloads</NavLink>
      <NavLink to="/careers">Careers</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <div className="Hamburger">
        <Hamburger color="white" rounded />
      </div>
    </nav>
  );
}
