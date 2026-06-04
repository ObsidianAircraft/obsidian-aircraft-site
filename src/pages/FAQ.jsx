function FAQ() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Obsidian Aircraft</title>
      </Helmet>
      <main className="faq-page">
        <section className="faq-hero">
          <p className="page-kicker">FAQ</p>

          <h1>Frequently Asked Questions</h1>

          <p>
            Early answers about Obsidian Aircraft, the O₂ and O₄ platforms, and
            the current stage of development.
          </p>
        </section>

        <section className="faq-list">
          <article className="faq-item">
            <h2>Is Obsidian Aircraft selling aircraft today?</h2>
            <p>
              No. Obsidian Aircraft is currently in the design and development
              stage. Aircraft kits, pricing, delivery dates, and reservations have
              not been announced.
            </p>
          </article>

          <article className="faq-item">
            <h2>What aircraft is Obsidian developing?</h2>
            <p>
              Obsidian is developing a family of modern composite aircraft
              platforms, beginning with the O₂ two-seat platform and the O₄
              four-seat platform.
            </p>
          </article>

          <article className="faq-item">
            <h2>What makes the Obsidian platform different?</h2>
            <p>
              The platform is being developed around shared architecture, composite
              construction, modern powerplant integration, and long-term
              upgradeability rather than isolated one-off aircraft designs.
            </p>
          </article>

          <article className="faq-item">
            <h2>Will the aircraft be kit-built?</h2>
            <p>
              The current vision is a modern kit aircraft approach with
              factory-finished major composite structures, allowing the builder to
              focus more on systems, avionics, interior, and final assembly.
            </p>
          </article>

          <article className="faq-item">
            <h2>Will pricing be announced soon?</h2>
            <p>
              Not yet. Pricing will depend on engineering validation, manufacturing
              strategy, kit contents, supplier costs, and future production plans.
            </p>
          </article>

          <article className="faq-item">
            <h2>Can I reserve an aircraft?</h2>
            <p>
              Not at this time. Obsidian is not accepting aircraft deposits or
              reservations. Interested visitors can join the Flight Deck for future
              updates.
            </p>
          </article>

          <article className="faq-item">
            <h2>Where is Obsidian Aircraft located?</h2>
            <p>
              Obsidian Aircraft LLC is based in Vancouver, Washington.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default FAQ;