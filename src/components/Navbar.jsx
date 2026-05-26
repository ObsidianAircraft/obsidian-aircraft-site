import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <img
            src="/images/Obsidian_Logo_White.svg"
            alt="Obsidian Aircraft"
            className="navbar-logo-image"
          />
        </Link>

        <nav className="navbar-links">
          <Link to="/aircraft">Aircraft</Link>
          <Link to="/development">Development</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </nav>

          <Link to="/join" className="navbar-button">
            Join the Flight Deck
          </Link>

      </div>
    </header>
  );
}

export default Navbar;