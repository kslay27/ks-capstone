import {useState} from "react";
import logo from "../images/Logo.svg"
import hamburgerIcon from "../images/icon _hamburger menu.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu =() => {
    setMenuOpen(!menuOpen);
  }

  return (
      <nav className="">
        <a href="/">
          <img src={logo} alt="logo"/>
        </a>
        {/* Mobile Bars */}
        <div>
          <img src={hamburgerIcon} alt="hamburgerIcon"/>
        </div>

        {/* Nav Menu */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Reservations</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>

        </ul>
      </nav>
  );
}

export default Nav;
