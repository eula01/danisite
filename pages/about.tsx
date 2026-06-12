import Layout from "../components/layout";

export default function About() {
  return (
    <Layout title="About" description="About me">
      <main>
        <div>
          <p>Things I'm thinking about:</p>
          <ul style={{ listStyleType: "disc", color: "inherit" }}>
            <li>
              The financialisation of compute. Do reservations become futures? Do those
              derivatives stabilize the AI buildout or just add leverage? Does inference ever become a tradable commodity?
            </li>
            <li>Helium-3</li>
            <li>Energy infrastructure. Very bullish on nuclear.</li>
            <li>
              How technology compresses cash cycles in trade commodity finance
            </li>
            <li>
              Rollups in traditional industries, keeping back office thin with technology, and going wide in distribution
            </li>
          </ul>
          <p style={{ marginTop: "2em" }}>
            Day to day: structured trade finance and derivatives at a metals
            house. Also built our in-house CTRM.
          </p>
          <p>Background across insurance, energy infrastructure, commodities.</p>
          <p style={{ marginTop: "2em" }}>UWC South East Asia & Warwick Alumni.</p>
        </div>
      </main>
    </Layout>
  );
}
