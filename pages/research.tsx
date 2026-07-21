import Layout from "../components/layout";

export default function Research() {
  return (
    <Layout title="Research" description="Research">
      <main>
        <div>
          <p>
            <strong>Estimating ESG Scores Separately: How Does Noise in Each Pillar of ESG Ratings Affect the Sensitivity of Stock Returns to ESG Performance?</strong>
          </p>
          <p>
            Department of Economics Examiners' Prize for Best Dissertation — University of Warwick, 2023.
            Recommended for publication.
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
