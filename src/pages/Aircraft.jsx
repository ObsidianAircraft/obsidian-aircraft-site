function Aircraft() {
  return (
    <>
      <Helmet>
        <title>Aircraft Platform | Obsidian Aircraft</title>
        <meta
          name="description"
          content="Explore the Obsidian Aircraft platform, including modular two-seat and four-seat aircraft concepts built around a shared composite architecture."
        />
      </Helmet>
      <main className="aircraft-page">
        <section className="aircraft-hero">
          <p className="page-kicker">Aircraft Platforms</p>

          <h1>O₂ and O₄</h1>

          <p>
            Obsidian Aircraft is developing a family of modern composite aircraft
            built around shared architecture, efficient construction, and long term
            upgradeability.
          </p>
        </section>

        <section className="aircraft-platforms">
          <article className="aircraft-card">
            <img
              src="/images/aircraft/O2_transparent_background.png"
              alt="Obsidian O2 concept aircraft"
            />

            <div>
              <p className="aircraft-label">Two-Seat Platform</p>
              <h2>O₂</h2>
              <p>
                A light, efficient platform intended for training, touring, and 
                sport-pilot-focused flying.
              </p>
            </div>
          </article>

          <article className="aircraft-card">
            <img
              src="/images/aircraft/O4_transparent_background.png"
              alt="Obsidian O4 concept aircraft"
            />

            <div>
              <p className="aircraft-label">Four-Seat Platform</p>
              <h2>O₄</h2>
              <p>
                A larger platform intended for cross-country travel, utility, and
                future expansion into additional variants.
              </p>
            </div>
          </article>
        </section>

        <section className="aircraft-features">
          <h2>Platform Philosophy</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Shared Architecture</h3>
              <p>
                O₂ and O₄ are designed around common engineering principles,
                compatible systems, and a familiar builder experience.
              </p>
            </div>

            <div className="feature-card">
              <h3>Composite Construction</h3>
              <p>
                Molded composite structures are central to the airframe concept,
                supporting consistency, clean surfaces, and reduced structural
                fabrication by the builder.
              </p>
            </div>

            <div className="feature-card">
              <h3>Retract-Ready Design</h3>
              <p>
                The platform is being developed with future fixed and retractable
                gear paths considered from the beginning.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Aircraft;