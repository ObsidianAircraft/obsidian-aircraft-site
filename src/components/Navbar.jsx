import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          <Link to="/insights">Insights</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <a href="https://merch.obsidianaircraft.com" target="_blank" rel="noreferrer">Merch</a>
        </nav>

        <Link to="/join" className="navbar-button">
        Join the Flight Deck
        </Link>

        <button
            className = "hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
            <NavLink to="/aircraft" onClick={closeMenu}>Aircraft</NavLink>
            <NavLink to="/development" onClick={closeMenu}>Development</NavLink>
            <NavLink to="/insights" onClick={closeMenu}>Insights</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>
            <a href="https://merch.obsidianaircraft.com" target="_blank" rel="noreferrer" onClick={closeMenu}>Merch</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;