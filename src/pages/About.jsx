import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { trackAboutPageView } from "../lib/analytics";

function About() {
  useEffect (() => {
    trackAboutPageView();
  });
  
  return (
    <>
      <Helmet>
        <title>About Obsidian Aircraft</title>
        <meta
          name="description"
          content="Learn about Obsidian Aircraft, our mission, and our vision for future-proof aircraft design."
        />
      </Helmet>
      <main className="about-page">
        <section className="about-hero">
          <p className="page-kicker">About Obsidian Aircraft</p>

          <h1>A New Aircraft Company Built Around a Better Platform</h1>

          <p>
            Obsidian Aircraft is developing a modern composite aircraft platform
            focused on efficient construction, thoughtful engineering, and
            long-term upgradeability.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>

          <p>
            Obsidian exists to make modern personal aviation more approachable
            without giving up capability, performance, or future growth. The goal
            is to create aircraft platforms that are easier to build, easier to
            evolve, and more useful across a wide range of flying missions.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Obsidian</h2>

          <p>
            Many aircraft designs force major decisions early. Fixed gear versus
            retractable gear, two-seat versus four-seat utility, and engine
            choices often become locked into separate designs. Obsidian is being
            developed around the opposite idea: a shared platform philosophy where
            major systems, construction methods, and upgrade paths are considered
            from the beginning.
          </p>
        </section>

        <section className="about-section about-grid">
          <div>
            <h2>Based in Vancouver, Washington</h2>

            <p>
              Obsidian Aircraft LLC is based in Vancouver, Washington, with a
              vision shaped by experimental aviation, sport pilot accessibility,
              modern manufacturing, and the changing aircraft market under MOSAIC.
            </p>
          </div>

          <div>
            <h2>Built for the Long Term</h2>

            <p>
              The Obsidian platform is being designed for more than one aircraft.
              The long-term vision includes two-seat, four-seat, utility,
              training, touring, and future high-performance variants built from a
              common architectural philosophy.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;