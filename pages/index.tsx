import siteConfig from '../siteConfig.json';
import Image from 'next/image';
import land from '../public/me2.jpg';
import Layout from '../components/layout';

import { getSortedPostsData, getPostData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const words = allPostsData.reduce(
    (count, current) =>
      count + getPostData(current.id).content.split(' ').length,
    0
  );
  return {
    props: {
      allPostsData,
      description: siteConfig.SITE_DESC,
      words,
    },
  };
}

export default function Home({ allPostsData, description, words }) {
  return (
    <Layout title="dani" description={description}>
      <main>
        <div className="photo">
          <Image
            src={land}
            alt=""
            placeholder="blur"
            fill
            className="photo-img"
          />
        </div>
        <p className="caption">Beijing, 1965 - Marc Riboud</p>
      </main>
      <footer></footer>
      <style jsx>{`
        .photo {
          position: relative;
          width: 100%;
          height: 420px;
          margin-top: 16px;
        }
        .photo-img {
          object-fit: cover;
          filter: grayscale(15%);
        }
        .caption {
          font-size: 0.75em;
          color: var(--light-text);
          margin-top: 8px;
          margin-bottom: 0;
          text-align: center;
          font-style: italic;
        }
      `}</style>
    </Layout>
  );
}
