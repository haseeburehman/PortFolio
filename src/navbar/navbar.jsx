import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { GoProjectSymlink } from "react-icons/go";
import {  FaCog, FaPhoneAlt, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollTop = useRef(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 55; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop.current) {
        setShowNav(false); // Scrolling down
      } else {
        setShowNav(true); // Scrolling up
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
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
        <button className="value" onClick={() => scrollToSection("about-me")}>
          <FaInfoCircle size={17} />
          About Me
        </button>
        <button className="value" onClick={() => scrollToSection("projects")}>
          <GoProjectSymlink size={17} />
          Projects
        </button>
        <button className="value" onClick={() => scrollToSection("services")}>
          <FaCog size={17} />
          Services
        </button>
        <button className="value" onClick={() => scrollToSection("contact")}>
          <FaPhoneAlt size={17} />
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavBar;
