import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackInsightsPageView } from "../lib/analytics";

function Insights() {
  useEffect(() => {
      trackInsightsPageView();
  }, []);

  return (
    <main className="page">
      <section className="home-insights">
            <h2>Obsidian Insights</h2>
            <div className="home-subheader">
              Aviation, engineering, and aircraft development insights from Obsidian Aircraft
            </div>

            <div className="insights-grid">
              <div className="insights-archive-link">
                <Link className="archive-link" to="/insights/archive">
                  Explore Previous Issues →
                </Link>
              </div>
              <Link 
                to="/insights/why-composite" 
                className="insight-card"
              >
                <p className="insight-label">SUMMER 2026 • OBSIDIAN INSIGHTS • VOLUME 1 • ISSUE 5</p>

                <h3>Why We Chose Composite Construction</h3>

                <p>
                  When people ask why Obsidian Aircraft chose composite construction,
                  they often expect the answer to begin with aerodynamics or weight
                  savings.
                </p>

                <span className="insight-read-more">Read Article →</span>
              </Link>
              
              <Link 
                to="/insights/fixed-vs-retractable" 
                className="insight-card"
              >
                <p className="insight-label">SUMMER 2026 • OBSIDIAN INSIGHTS • VOLUME 1 • ISSUE 4</p>

                <h3>Fixed Gear vs Retractable Gear: Beyond Cruise Speed</h3>

                <p>
                  The choice between fixed and retractable landing gear affects maintenance, 
                  operating costs, insurance, training requirements, system complexity, and 
                  even the long-term economics of aircraft ownership. As with many engineering 
                  decisions, the best solution depends on the mission the aircraft is intended to serve.
                </p>

                <span className="insight-read-more">Read Article →</span>
              </Link>

              <Link 
                to="/insights/why-upgradeability-matters" 
                className="insight-card"
              >
                <p className="insight-label">SUMMER 2026 • OBSIDIAN INSIGHTS • VOLUME 1 • ISSUE 3</p>

                <h3>Why Upgradeability Matters in Aircraft Design</h3>

                <p>
                  Although many training aircraft are decades old, few remain exactly as
                  they were when they left the factory. The lesson is straightforward: 
                  durability alone is not enough. Adaptability matters as well.
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
            </div>
          </section>
    </main>
  );
}

export default Insights;