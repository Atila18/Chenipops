import { Link } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>
          © {new Date().getFullYear()} Chenipops
        </p>

        <div className="footer-links">
          <Link to="/contact">Contact</Link>
          <span>✿</span>
          <Link to="/services">Nos créations</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;