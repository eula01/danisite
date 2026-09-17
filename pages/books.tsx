import Layout from "../components/layout";

export default function Books() {
  return (
    <Layout title="Books" description="Recommended books">
      <main>
        <div>
          <p>Recommendations</p>
          <ul>
            <li>Fooled by Randomness</li>
            <li>A Picture of Dorian Gray</li>
            <li>Zero to One</li>
            <li>The Rise and Decline of Nations</li>
            <li>The World for Sale</li>
            <li>Love's Executioner</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
