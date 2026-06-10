import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


function Home() {
  return (
    <>
      <Helmet>
        <title>Obsidian Aircraft | Future-Proof Composite Aircraft Architecture</title>
        <meta
          name="description"
          content="Obsidian Aircraft is developing a future-proof composite aircraft platform designed around efficiency, upgradeability, and modern propulsion systems."
        />
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

            
          <section className="home-insights">
            <h2>Latest Insights</h2>

            <div className="insights-grid">
              <Link 
                to="/insights/modular-aircraft-architecture" 
                className="insight-card"
              >
                <p className="insight-label">INSIGHTS • VOL 1 • ISSUE 1</p>

                <h3>Why Modular Aircraft Architecture Matters</h3>

                <p>
                  Most aircraft are designed as individual products. We believe the future 
                  belongs to adaptable platforms that support multiple missions, evolving 
                  technologies, and long-term value.
                </p>

                <span className="insight-read-more">Read Article →</span>
              </Link>

              <Link 
                to="/insights/what-mosaic-means" 
                className="insight-card"
              >
                <p className="insight-label">SUMMER 2026 • OBSIDIAN INSIGHTS • VOLUME 1 • ISSUE 2</p>

                <h3>What MOSAIC Means for the Future of U.S. Aviation</h3>

                <p>
                  On July 24, 2026, the FAA's Modernization of Special Airworthiness Certification 
                  initiative, commonly known as MOSAIC, will take effect. The changes represent the 
                  most significant update to light aircraft regulations since the creation of the 
                  Sport Pilot and Light Sport Aircraft categories.
                </p>

                <span className="insight-read-more">Read Article →</span>
              </Link>
            </div>
          </section>
        </main>
      </>
  );
}

export default Home;