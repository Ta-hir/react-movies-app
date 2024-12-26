import "../css/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          M<span className="brand-insert">OVI</span>ES
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/fovarites">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
