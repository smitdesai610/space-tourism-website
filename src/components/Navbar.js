import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/scss/navigation.scss";
import Logo from "../assets/shared/logo.svg";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
    console.log(menu ? "menu closed" : "menu opened");
  };

  return (
    <header className="navbar">
      <div className="logo-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/home"
              activeClassName="active-link"
              className="nav-item"
            >
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              activeClassName="active-link"
              className="nav-item"
            >
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              activeClassName="active-link"
              className="nav-item"
            >
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              activeClassName="active-link"
              className="nav-item"
            >
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="hamburger">
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>

      {/* Render MobileNavigation when menu is open */}
      {menu && <MobileNavigation closeMenu={toggleMenu} />}
    </header>
  );
}

export default Navbar;
