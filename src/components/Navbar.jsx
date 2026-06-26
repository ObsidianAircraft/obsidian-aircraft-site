import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { trackFlightDeckClick, trackNavigationClick } from "../lib/analytics";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleMobileNavClick = (destination) => {
    trackNavigationClick(destination, "mobile_menu");
    closeMenu();
  }

  const handleFlightDeckNavClick = () => {
    trackNavigationClick("flight_deck", "navbar");
    trackFlightDeckClick("navbar");
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={() => trackNavigationClick("home","navbar")}>
          <img
            src="/images/Obsidian_Logo_White.svg"
            alt="Obsidian Aircraft"
            className="navbar-logo-image"
          />
        </Link>

        <nav className="navbar-links">
          <Link to="/aircraft" onClick={() => trackNavigationClick("aircraft","navbar")}>Aircraft</Link>
          <Link to="/development" onClick={() => trackNavigationClick("development","navbar")}>Development</Link>
          <div className="obsidian-insights">
            <Link to="/insights" onClick={() => trackNavigationClick("insights","navbar")}>OBSIDIAN INSIGHTS</Link>
          </div>
          <Link to="/about" onClick={() => trackNavigationClick("about","navbar")}>About</Link>
          <Link to="/faq" onClick={() => trackNavigationClick("faq","navbar")}>FAQ</Link>
          <a href="https://merch.obsidianaircraft.com" target="_blank" rel="noreferrer" onClick={() => trackNavigationClick("merch","navbar")}>Merch</a>
        </nav>

        <Link 
          to="/join" 
          className="navbar-button"
          onClick={() => handleFlightDeckNavClick}
        >
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
            <NavLink to="/aircraft" onClick={() => handleMobileNavClick("aircraft")}>Aircraft</NavLink>
            <NavLink to="/development" onClick={() => handleMobileNavClick("development")}>Development</NavLink>
            <div className="obsidian-insights">
              <NavLink to="/insights" onClick={() => handleMobileNavClick("insights")}>OBSIDIAN INSIGHTS</NavLink>
            </div>
            <NavLink to="/about" onClick={() => handleMobileNavClick("about")}>About</NavLink>
            <NavLink to="/faq" onClick={() => handleMobileNavClick("faq")}>FAQ</NavLink>
            <a href="https://merch.obsidianaircraft.com" target="_blank" rel="noreferrer" onClick={() => handleMobileNavClick("merch")}>Merch</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;