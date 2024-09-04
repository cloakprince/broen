import React from "react";

import '../index.css';

const Header: React.FC = () => {
  return (
    <header className="header">
        <div className="logo font">
             <h1><a href="/">BROEN-LAB</a></h1>
        </div>
        <nav className="nav-links">
            <ul>
                <li><a href="/products">Products</a></li>
                <li><a href="/Solutions">Solutions</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className="search-bar">
            <input type="text" placeholder="Search..."/>
        </div>
    </header>
  );
};

export default Header;