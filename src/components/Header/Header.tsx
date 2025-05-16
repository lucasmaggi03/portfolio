import React, { useState } from "react";
import "./Header.css";

import logo from "../../../public/svg-logo.svg";

const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lucasmaggi03@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="logo">
            <img src={logo} alt="Logo" />
          </li>
          <li className="nav-item">
            <a href="#about" data-text="About Me">
              <span>About Me</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#techs" data-text="Techs">
              <span>Techs</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" data-text="Projects">
              <span>Projects</span>
            </a>
          </li>
          <li
            className="email-btn"
            onClick={handleCopyEmail}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`email-text ${
                hovering ? "scroll-up" : "scroll-down"
              }`}
              data-text={copied ? "✔ Copied" : "Copy this email"}
            >
              <span>lucasmaggi03@gmail.com</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
