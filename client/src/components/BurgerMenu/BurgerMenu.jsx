// BurgerMenu.jsx

import React, { useState, useEffect, useRef } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Gérer la fermeture du menu lorsque l'utilisateur clique en dehors de celui-ci
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={menuRef} className="burger-menu-container">
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger-menu-line"></div>
        <div className="burger-menu-line"></div>
        <div className="burger-menu-line"></div>
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        <Link to="/categories">
          <a>Catégories</a>
        </Link>
        <Link to="/categories/global">
          <a>Global</a>
        </Link>
        <Link to="/categories/fantasy">
          <a>Fantasy</a>
        </Link>
        <Link to="/categories/drama">
          <a>Drama</a>
        </Link>
        <Link to="/categories/romance">
          <a>Romance</a>
        </Link>
        <Link to="/categories/sport">
          <a>Sport</a>
        </Link>
        <Link to="/categories/comedy">
          <a>Comedy</a>
        </Link>
        <Link to="/categories/isekai">
          <a>Isekai</a>
        </Link>
        <Link to="/categories/sci-fi">
          <a>Science-Fiction</a>
        </Link>
        <Link to="/categories/slice-of-life">
          <a>Slice of Life</a>
        </Link>
        <Link to="/categories/film">
          <a>Film</a>
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
