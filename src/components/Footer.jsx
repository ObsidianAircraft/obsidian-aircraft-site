import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaThreads } from "react-icons/fa6";
import { trackNavigationClick, trackSocialClick } from "../lib/analytics";
import { track } from "@vercel/analytics";

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
          <NavLink to="/aircraft" onClick={() => trackNavigationClick("aircraft","footer")}>Aircraft</NavLink>
          <NavLink to="/development" onClick={() => trackNavigationClick("Development","footer")}>Development</NavLink>
          <div className="obsidian-insights">
          <NavLink to="/insights" onClick={() => trackNavigationClick("insights","footer")}>OBSIDIAN INSIGHTS</NavLink>
          </div>
          <NavLink to="/about" onClick={() => trackNavigationClick("about","footer")}>About</NavLink>
          <NavLink to="/faq" onClick={() => trackNavigationClick("faq","footer")}>FAQ</NavLink>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on Facebook"
            onClick={() => trackSocialClick("facebook")}
          >
            <FaFacebook />
          </a>
          
          <a
            href="https://x.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on X"
            onClick={() => trackSocialClick("x")}
          >
            <FaXTwitter />
          </a>

          <a
            href="https://instagram.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on Instagram"
            onClick={() => trackSocialClick("instagram")}
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on LinkedIn"
            onClick={() => trackSocialClick("linkedin")}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.threads.com/obsidianairllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian Aircraft on Threads"
            onClick={() => trackSocialClick("threads")}
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