import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h4>MedusaComp</h4>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/home">
              <i class="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link to="/product-detail">
              <i class="fa-solid fa-shirt"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
