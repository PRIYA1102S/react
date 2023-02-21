import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
      <>
      <div className="navbar">
        <div>
            <a className="logo" href="/">
                <img src="/kabadi__techno__logo.6c4c85c9.png" alt=""/>
            </a>
            <ul className="navlist">
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#joinus">JOIN US</a>
                </li>
                <li>
                    <a href="#sell">SELL</a>
                </li>
                <li>
                    <a href="#faq">FAQ</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
                <li className="navitem active__navlink">
                    <a href="#signin">SIGN IN<span className="sr-only"></span></a>
                </li>
            </ul>
          
          <div className="hamburger-menu">
             <a href="#hamburgermenu">
                <GiHamburgerMenu />
             </a>
          </div>

        </div>
    </div>
      </>
    );
};

export default Navbar;