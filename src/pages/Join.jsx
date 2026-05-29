function Join() {
  return (
    <main className="join-page">
      <section className="join-hero">
        <p className="page-kicker">Join the Flight Deck</p>

        <h1>Follow the Development of Obsidian Aircraft</h1>

        <p>
          Get future updates, aircraft announcements, development milestones,
          and behind-the-scenes progress from Obsidian Aircraft.
        </p>
      </section>

      <section className="join-card">
        <h2>Stay Connected</h2>

        <p>
          Obsidian is not accepting aircraft reservations or deposits at this
          time. The Flight Deck is simply a way to follow development and receive
          future updates.
        </p>

        <form className="join-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <button type="submit">Join the Flight Deck</button>
        </form>
      </section>
    </main>
  );
}

export default Join;