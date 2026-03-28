import Layout from "../components/layout";

export default function About() {
  return (
    <Layout title="About" description="About me">
      <main>
        <div>
          <p>
            I'm currently interested in metals trading, derivatives, capital
            markets, energy transition, and emerging markets.
          </p>
          <p>
            Derivatives & Capital Markets at{" "}
            <a href="https://metycle.com" target="_blank">
              <em>METYCLE</em>
            </a>
            . Managing exposure across physical metals and LME derivatives,
            hedging to control basis risk and P&L volatility, and structuring
            credit facilities to scale trading capacity.
          </p>
          <p>Previously:</p>
          <ul style={{ listStyleType: "disc", color: "inherit" }}>
            <li>
              Markets & Operations at a precious metals trading startup (grew
              revenue to $75M)
            </li>
            <li>
              Chief of Staff (Hire 1) at <em>Juniper</em> (acquired) —
              engineered real-time risk engine, secured FCA Sandbox approval
            </li>
            <li>
              Associate at{" "}
              <a href="https://www.shiftcleanenergy.com/" target="_blank">
                <em>Shift Clean Energy</em>
              </a>
            </li>
            <li>
              Visiting Associate at{" "}
              <a href="https://www.arisaig.com/" target="_blank">
                <em>Arisaig Partners</em>
              </a>
            </li>
          </ul>
          <p style={{ marginTop: "2em" }}>
            PPE (Economics Major) from Warwick, First Class — Department of
            Economics Examiners' Prize for Best Dissertation. IB from UWC South
            East Asia.
          </p>
          <p style={{ marginTop: "2em" }}>
            Reach out on LinkedIn.
          </p>
        </div>
      </main>
    </Layout>
  );
}
