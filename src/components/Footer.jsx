import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaThreads } from "react-icons/fa6";

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
          <div className="obsidian-insights">
          <NavLink to="/insights">OBSIDIAN INSIGHTS</NavLink>
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on Facebook"
          >
            <FaFacebook />
          </a>
          
          <a
            href="https://x.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on X"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://instagram.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.threads.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on Threads"
          >
            <FaThreads />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Obsidian Aircraft LLC</p>
          <p>Vancouver, Washington</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;