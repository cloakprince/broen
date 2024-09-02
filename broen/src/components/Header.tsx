import React from "react";

const Header: React.FC = () => {
  return (
    <header className="site-header">
        <h1 className="font color-red">BROEN-LAB</h1>
        <nav className="nav">
            <ul className="navUl">
                <li><a href="#">Products</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Why us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;