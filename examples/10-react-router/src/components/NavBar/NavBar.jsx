import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <a href="/" className="navbar-brand">
        Movies
      </a>

      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a href="/now-playing" className="nav-link">
            Now Playing
          </a>
        </li>
        <li className="nav-item">
          <a href="/theatres" className="nav-link">
            Theatres
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
