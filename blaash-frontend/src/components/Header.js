// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1>Blaash App</h1>
      <nav>
        <ul style={navStyles}>
          <li>
            <Link to="/" style={linkStyles}>Home</Link>
          </li>
          <li>
            <Link to="/layout" style={linkStyles}>Layout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyles = {
  background: "#333",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
};

const navStyles = {
  listStyleType: "none",
  padding: "0",
};

const linkStyles = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
};

export default Header;
