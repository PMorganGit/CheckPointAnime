import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="all_nav">
      <Link to="/categories">
        <img className="nav_img_logo" src="/assets/images/logo.png" alt="logo" />
      </Link>
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Nav;
