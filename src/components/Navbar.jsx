import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="/about">À propos</Link>
          </li>
            <Link to="/" className="navbar__logo">
                <img src={logo} alt="Logo" />
            </Link>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;