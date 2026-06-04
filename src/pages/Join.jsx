import { useState } from "react";

function Join() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ status, setStatus ] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("Submitting...");

    try {
      const response = await fetch("/api/join-flight-deck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus(data.message || "Welcome aboard.");
        setName("");
        setEmail("");
      } else {
        setStatus(data.message || "Unable to submit. Please try again.");
      }
    } catch (error) {
      setStatus("Unable to submit. Please try again.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Join the Flight Deck | Obsidian Aircraft</title>
      </Helmet>
      <main className="join-page">
        <section className="join-hero">
          <p className="page-kicker">The Flight Deck</p>

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

          <form className="join-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <button type="submit">Join the Flight Deck</button>
            {status && (
              <p className="join-status">
                {status}
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Join;