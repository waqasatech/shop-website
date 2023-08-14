import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/shirts">Shirts</Link>
          </li>
          <li className="nav-item">
            <Link to="/pants">Pants</Link>
          </li>
          <li className="nav-item">
            <Link to="/shoes">Shoes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
