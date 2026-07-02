import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { trackInsightsView } from "../lib/analytics";

function WhyCompositeConstruction() {
  useEffect(() => {
    trackInsightsView(1,5);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Why We Chose Composite Construction | Obsidian Aircraft</title>

        <meta
          name="description"
          content="Learn why Obsidian Aircraft chose composite construction for weather resistance, aerodynamic efficiency, weight management, and long-term platform development."
        />
      </Helmet>

      <main className="article-page">
        <h1>Why We Chose Composite Construction</h1>

        <p className="article-date">
          Summer 2026 • Obsidian Insights • Volume 1 • Issue 5
        </p>

        <p>
          When people ask why Obsidian Aircraft chose composite construction,
          they often expect the answer to begin with aerodynamics or weight
          savings.
        </p>

        <p>
          Those are certainly important advantages, but they were not the
          starting point.
        </p>

        <p>Our decision began with a practical question:</p>

        <p>
          <strong>
            How should an aircraft be designed if its owner cannot get a hangar?
          </strong>
        </p>

        <p>
          In much of the Pacific Northwest, hangar space is scarce and
          expensive. Waiting lists at many airports stretch for years, leaving
          aircraft owners with little choice but to tie their airplanes down
          outdoors. Those aircraft endure months of rain, moisture, temperature
          swings, and the occasional snowstorm before they ever leave the
          ground.
        </p>

        <p>
          When we began evaluating construction materials, we wanted an aircraft
          that could better withstand those conditions while remaining
          affordable, efficient, and adaptable for decades to come.
        </p>

        <p>That led us to composites.</p>

        <h2>Designing for the Real World</h2>

        <p>
          Aircraft ownership is about far more than flying.
        </p>

        <p>
          Where an airplane is stored, how it is maintained, and how it ages
          over time all influence the ownership experience. An aircraft that
          spends much of its life outdoors faces very different environmental
          challenges than one kept in a climate-controlled hangar.
        </p>

        <p>
          Traditional aluminum aircraft require ongoing vigilance against
          corrosion, particularly in damp environments. Fabric-covered aircraft
          have served aviation exceptionally well for generations, but the
          fabric itself has a finite service life and eventually requires
          replacement. Wood, while still an outstanding structural material in
          many applications, demands careful protection from moisture throughout
          its life.
        </p>

        <p>
          Composite structures present a different set of characteristics.
        </p>

        <p>
          Properly manufactured composite airframes do not corrode in the way
          aluminum structures do, and unlike fabric-covered aircraft, they do
          not require periodic recovering. Modern paint systems protect the
          underlying composite from ultraviolet exposure while providing
          durable, long-term environmental protection.
        </p>

        <p>
          No aircraft is maintenance-free, regardless of the material from which
          it is built. However, for owners who may not have the luxury of
          permanent hangar space, composite construction offers meaningful
          advantages.
        </p>

        <h2>Shaping the Aircraft We Envisioned</h2>

        <p>
          Our decision was not based solely on durability.
        </p>

        <p>
          Composite construction also allows engineers to create smooth, highly
          optimized aerodynamic surfaces that would be far more difficult to
          manufacture using traditional sheet-metal techniques.
        </p>

        <p>
          Rather than assembling an airframe from hundreds of individual skins,
          ribs, brackets, and fasteners, large composite components can be
          molded into complex shapes with excellent surface quality and
          repeatability.
        </p>

        <p>
          Those smoother surfaces can reduce drag, while integrated structures
          may reduce part count and simplify assembly.
        </p>

        <p>
          For an aircraft intended to be efficient enough for Sport Pilot
          operations while remaining capable of growing into larger two- and
          four-seat configurations, every opportunity to improve aerodynamic
          efficiency and manage structural weight matters.
        </p>

        <p>
          Composite construction provides designers with additional freedom to
          pursue those goals.
        </p>

        <h2>Supporting a Platform, Not Just an Airplane</h2>

        <p>
          Throughout this series, we have discussed the idea of designing a
          platform rather than a single aircraft.
        </p>

        <p>
          That philosophy extends to manufacturing.
        </p>

        <p>
          Composite tooling represents a significant investment. Developing
          molds, fixtures, and production processes requires substantial upfront
          effort compared to many traditional construction methods.
        </p>

        <p>
          For a single aircraft model, that investment may be difficult to
          justify.
        </p>

        <p>
          For a family of aircraft sharing common structures and manufacturing
          methods, the equation changes considerably.
        </p>

        <p>
          The same tooling, manufacturing knowledge, and engineering experience
          can support multiple aircraft over many years. Improvements made
          during one program can often benefit every aircraft built upon the
          same platform.
        </p>

        <p>
          That efficiency aligns directly with our long-term vision for
          Obsidian Aircraft.
        </p>

        <h2>Looking Ahead</h2>

        <p>
          General aviation is entering a period of rapid change.
        </p>

        <p>
          Modern avionics continue to evolve. Engine technology is advancing
          quickly. Alternative fuels, hybrid propulsion, and new manufacturing
          methods are reshaping what future aircraft may become.
        </p>

        <p>
          The structures we build today should be capable of supporting those
          technologies tomorrow.
        </p>

        <p>
          Composite construction provides flexibility—not only in how an
          aircraft is manufactured, but also in how it can evolve over its
          operational life. Combined with a modular architecture, it creates a
          foundation that can adapt as technology and customer needs continue to
          change.
        </p>

        <h2>The Obsidian Perspective</h2>

        <p>
          We did not choose composite construction simply because it is modern.
        </p>

        <p>
          We chose it because it supports the type of aircraft we want to build
          and the type of company we want to become.
        </p>

        <p>
          Our goal is to create weather-resistant aircraft that owners can
          confidently operate even when hangar space is limited. We want to
          design efficient airplanes with clean aerodynamic shapes, carefully
          managed weight, and manufacturing methods capable of supporting both
          Sport Pilot-eligible two-seat aircraft and future four-seat
          derivatives.
        </p>

        <p>
          Most importantly, we are not designing a single airplane.
        </p>

        <p>
          We are building a platform intended to evolve for decades.
        </p>

        <p>
          For us, composite construction is not just a material choice. It is
          one of the foundational decisions that makes that vision possible.
        </p>
      </main>
    </>
  );
}

export default WhyCompositeConstruction;
