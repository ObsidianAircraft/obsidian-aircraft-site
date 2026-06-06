import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Obsidian Aircraft</h3>

          <p>
            Future-Proof Composite Aircraft Architecture
          </p>
        </div>

        <nav className="footer-links">
          <NavLink to="/aircraft">Aircraft</NavLink>
          <NavLink to="/development">Development</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </nav>

        <div className="footer-bottom">
          <p>© 2026 Obsidian Aircraft LLC</p>
          <p>Vancouver, Washington</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;