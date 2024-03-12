import {useState} from "react";
import logo from "../images/Logo.svg"
import hamburgerIcon from "../images/icon _hamburger menu.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu =() => {
    setMenuOpen(!menuOpen);
  }

  return (
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className="logo">
          <img src={logo} alt="logo"/>
        </a>
        {/* Mobile Bars */}
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={hamburgerIcon} alt="hamburgerIcon"/>
        </div>

        {/* Nav Menu */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/booking">Reservations</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>

        </ul>
      </nav>
  );
}

export default Nav;
