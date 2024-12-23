import "../css/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Nav className="navBar">
      <div className="navbar-brandd">
        <Link to="/">Movies</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/fovarites">Favorites</Link>
      </div>
    </Nav>
  );
}

export default NavBar;
