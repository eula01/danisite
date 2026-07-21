import Layout from "../components/layout";

export default function Research() {
  return (
    <Layout title="Research" description="Research">
      <main>
        <div>
          <p><strong>ESG ratings are mostly noise.</strong></p>
          <p>
            In 2022, $2.5tn was invested in ESG funds on the assumption that the ratings capture something real. I tested this using an instrumental variable approach — treating competing agencies' scores as instruments for each other — to separate signal from noise.
          </p>
          <p>
            More than 50% of the aggregate ESG score is noise. For environmental ratings it's over 85%. Most ESG-driven investment decisions are made on noise, not signal. This has since become more widely acknowledged. It wasn't the consensus in 2022.
          </p>
          <hr />
          <p style={{ color: "var(--light-text)", fontSize: "0.9em" }}>
            Awarded the Department of Economics Examiners' Prize for Best Dissertation — University of Warwick, 2023. Recommended for publication by the Department of Economics.
          </p>
          <p>
            <a href="/dissertation.pdf" download>Download PDF ↓</a>
          </p>
          <iframe
            src="/dissertation.pdf"
            width="100%"
            height="900px"
            style={{ border: "none", marginTop: "8px" }}
          />
        </div>
      </main>
    </Layout>
  );
}
