import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "../assets/styles/scss/mobileNav.scss";

function MobileNavigation({ closeMenu }) {
  return (
    <div className="mobile-nav">
      <div className="closebtn" onClick={closeMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </div>
      <ul>
        <li>
          <NavLink
            to="/home"
            activeClassName="active-link"
            className="nav-item"
            onClick={closeMenu}
          >
            <span>00</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            activeClassName="active-link"
            className="nav-item"
            onClick={closeMenu}
          >
            <span>01</span> Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            activeClassName="active-link"
            className="nav-item"
            onClick={closeMenu}
          >
            <span>02</span> Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            activeClassName="active-link"
            className="nav-item"
            onClick={closeMenu}
          >
            <span>03</span> Technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavigation;
