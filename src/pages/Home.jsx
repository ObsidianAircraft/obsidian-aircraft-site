import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


function Home() {
  return (
    <>
      <Helmet>
        <title>Obsidian Aircraft | Future-Proof Composite Aircraft Architecture</title>
      </Helmet>
        <main className="home-page">
          <section className="home-hero">
            <h1 className="hero-title">
              <span className="hero-kicker">
                FUTURE-PROOF COMPOSITE
              </span>
              <br />
              AIRCRAFT ARCHITECTURE
            </h1>

            <div className="hero-aircraft-wrap">
              <img
                src="/images/aircraft/O4_transparent_background.png"
                alt="Obsidian O4 concept aircraft"
                className="hero-aircraft"
              />
            </div>

            <p className="hero-description">
              A future-proof aircraft platform engineered around common structures, modern powerplants, and rapid build times.
            </p>
    {/* 
            <div className="hero-buttons">
              <Link to="/aircraft" className="hero-button hero-button-primary">
                Explore the Aircraft
              </Link>

              <Link to="/join" className="hero-button hero-button-secondary">
                Join the Flight Deck
              </Link>
            </div>
          
    */}   
          </section>   
          <section className="home-explore">
            <h2>Explore Obsidian</h2>

            <div className="explore-grid">

              <Link to="/aircraft" className="explore-card">
                <h3>Aircraft</h3>
                <p>
                  Discover the O₂ and O₄ platform family and the
                  design philosophy behind them.
                </p>
              </Link>

              <Link to="/development" className="explore-card">
                <h3>Development</h3>
                <p>
                  Follow engineering progress, milestones, and
                  platform validation efforts.
                </p>
              </Link>

              <Link to="/join" className="explore-card">
                <h3>Join the Flight Deck</h3>
                <p>
                  Receive updates, announcements, and future
                  development news.
                </p>
              </Link>

            </div>
          </section>
        </main>
    </>
  );
}

export default Home;