import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <header className="Navbar-header">
        <p className="text-3xl font-bold underline">Hello nav</p>
        <ul>
          <li>
            <Link to="/places">Places</Link>
          </li>
          <li>
            <Link to="/">Homepage</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
