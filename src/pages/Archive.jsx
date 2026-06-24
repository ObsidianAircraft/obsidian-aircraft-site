import { Link } from "react-router-dom";

function Archive() {
  return (
    <main className="page">
      <section className="home-insights">
            <h2>Obsidian Insights</h2>
            <div className="home-subheader">
              Archive
            </div>
            
            <section className="archive-content">

            
                <div className="archive-header">
                    Summer 2026 • Volume 1
                </div>


                <div className="archive-list">
                    <Link
                    to="/insights/modular-aircraft-architecture"
                    className="archive-list-link"
                    >
                        Issue 1 • Why Modular Aircraft Architecture Matters
                    </Link>
                    
                    <Link 
                    to="/insights/what-mosaic-means"
                    className="archive-list-link"
                    >
                    Issue 2 • What MOSAIC Means for the Future of U.S. Aviation
                    </Link>
                    
                    <Link
                    to="/insights/why-upgradeability-matters"
                    className="archive-list-link"
                    >
                        Issue 3 • Why Upgradeability Matters in Aircraft Design
                    </Link>

                    <Link
                    to="/insights/fixed-vs-retractable"
                    className="archive-list-link"
                    >
                        Issue 4 • Fixed Gear vs Retractable Gear: Beyond Cruise Speed
                    </Link>
                </div>
                
                <div className="archive-header">
                    
                </div>
                <div className="archive-list">

                </div>
            </section>
          </section>
    </main>
  );
}

export default Archive;