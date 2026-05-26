import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <h1 className="hero-title">
          Future-Proof Composite Aircraft Architecture
        </h1>

        <div className="hero-aircraft-wrap">
          <img
            src="/images/aircraft/O4_transparent_background.png"
            alt="Obsidian O4 concept aircraft"
            className="hero-aircraft"
          />
        </div>

        <p className="hero-description">
          Modern composite aircraft designed around efficiency, upgradeability,
          and a faster path from workshop to runway.
        </p>

        <div className="hero-buttons">
          <Link to="/aircraft" className="hero-button hero-button-primary">
            Explore the Aircraft
          </Link>

          <Link to="/join" className="hero-button hero-button-secondary">
            Join the Flight Deck
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;