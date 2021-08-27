import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PClogo from "../images/pclogo.png";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  // const handleToggle = (e) => {
  //   e.preventDefault();
  //   setOpen(!isOpen);
  // };
  return (
    <nav className="Navbar">
      <img
        src={PClogo}
        className="logo"
        alt="production club Home"
        title="Home"
      />
      {/* <div className={`Links${isOpen} ? '-is-open' : '-closed' `}> */}
      <div className="Links">
        <NavLink to="/" exact className="NavButton">
          Home
        </NavLink>
        <NavLink to="/projects" className="NavButton">
          Projects
        </NavLink>
        <NavLink to="/team" className="NavButton">
          Team
        </NavLink>
        <NavLink to="/downloads" className="NavButton">
          Downloads
        </NavLink>
        <NavLink to="/careers" className="NavButton">
          Careers
        </NavLink>
        <NavLink to="/shop" className="NavButton">
          Shop
        </NavLink>
        <NavLink to="/contact" className="NavButton">
          Contact
        </NavLink>
      </div>
      <div className="Hamburger">
        <Hamburger
          color="white"
          rounded
          easing="ease-in-out"
          toggled={isOpen}
          toggle={setOpen}
          // onClick={(e) => handleToggle()}
        />
      </div>
    </nav>
  );
}
