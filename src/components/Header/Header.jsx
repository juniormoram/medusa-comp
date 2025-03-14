import React from "react";
import './Header.css';

function Header(){
    return (
        <header className="header">
        <h2>Medusa Comp</h2>        
        <nav className="navigation">
            <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/products">Productos</a></li>
            <li><a href="/cart">Carrito (0)</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;