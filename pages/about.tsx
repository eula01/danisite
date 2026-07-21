import Layout from "../components/layout";

export default function About() {
  return (
    <Layout title="About" description="About me">
      <main>
        <div>
          <p>Things I'm thinking about:</p>
          <ul style={{ listStyleType: "disc", color: "inherit" }}>
            <li>The financialisation of compute</li>
            <li>Helium-3</li>
            <li>Energy infrastructure. Very bullish on nuclear.</li>
            <li>
              How technology compresses cash cycles in trade commodity finance
            </li>
            <li>
              Rollups in traditional industries, keeping back office thin with technology and going wide in distribution
            </li>
          </ul>
          <p style={{ marginTop: "2em" }}>
            Current: Structured trade finance and derivatives at a metals house. Also built a full CTRM in-house with Claude.
          </p>
          <p>Prev: Insurtech startup (hire 1, acq.), energy infrastructure, commodities, Warwick uni, UWC Singapore</p>
        </div>
      </main>
    </Layout>
  );
}
