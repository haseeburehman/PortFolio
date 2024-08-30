import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { GoProjectSymlink } from "react-icons/go";
import {  FaCog, FaPhoneAlt, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  let lastScrollTop = 0;

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        setShowNav(false); // Scrolling down
      } else {
        setShowNav(true); // Scrolling up
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--show-nav",
      showNav ? "0" : "-100%"
    );
  }, [showNav]);

  return (
    <div className={`nav-container ${isOpen ? "open" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className={`menu ${isOpen ? "show" : ""}`}>
        <button className="value">
          <FaInfoCircle size={17} />
          About Me
        </button>
        <button className="value">
          <GoProjectSymlink size={17} />
          Projects
        </button>
        <button className="value">
          <FaCog size={17} />
          Services
        </button>
        <button className="value">
          <FaPhoneAlt size={17} />
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavBar;
