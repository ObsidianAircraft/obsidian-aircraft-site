import { Link } from "react-router-dom";

function Insights() {
  return (
    <main className="page">
      <section className="home-insights">
            <h2>Obsidian Insights</h2>
            <div className="home-subheader">
              Aviation, engineering, and aircraft development insights from Obsidian Aircraft
            </div>

            <div className="insights-grid">
              <Link 
                to="/insights/modular-aircraft-architecture" 
                className="insight-card"
              >
                <p className="insight-label">SUMMER 2026 • OBSIDIAN INSIGHTS • VOLUME 1 • ISSUE 1</p>

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
  );
}

export default Insights;