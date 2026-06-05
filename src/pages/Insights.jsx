import { Link } from "react-router-dom";

function Insights() {
  return (
    <main className="page">
      <h1>Insights</h1>

      <div className="article-list">
        <Link to="/insights/modular-aircraft-architecture">
          Why Modular Aircraft Architecture Matters
        </Link>
      </div>
    </main>
  );
}

export default Insights;