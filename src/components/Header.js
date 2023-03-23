import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <h1>Uber</h1>
      </div>
      <div className="menu-right">
        <ul>
          <li>
            <a href="./">Company</a>
          </li>
          <li>
            <a href="./">Safety</a>
          </li>
          <li>
            <a href="./">Help</a>
          </li>
        </ul>
      </div>
      <div className="menu-left">
        <ul>
          <li>
            <a href="./">EN</a>
          </li>
          <li>
            <a href="./">Products</a>
          </li>
          <li>
            <a href="./">Login</a>
          </li>
          <li>
            <a href="./" className="sign-up">Signup</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
