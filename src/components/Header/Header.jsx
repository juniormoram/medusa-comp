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
            <a href="/">Inicio</a>
          </li>
          <li>
            <Link
              to="/product-detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              Productos
            </Link>
          </li>
          <li>
            <a href="/cart">Carrito (0)</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
