import { Link } from "react-router-dom";

function Insights() {
  return (
    <main className="page">
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
            </div>
          </section>
    </main>
  );
}

export default Insights;