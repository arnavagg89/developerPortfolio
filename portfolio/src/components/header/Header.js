import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import ThemeContext from "../../context/ThemeContext";

function Header() {
  const {isDark} = React.useContext(ThemeContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="header-name"> Arnav Aggarwal </span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={(isDark ? "dark-menu" : "") + "menu"}>
            <li>
              <a href="#about">About Me</a>
            </li>
          
            <li>
              <a href="#education">Education</a>
            </li>

            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
                <a href="#contact">Contact Me</a>
            </li>
          
            <li>
                <a> <ThemeSwitch /> </a>
            </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
