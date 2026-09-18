import siteConfig from '../siteConfig.json';
import Image from 'next/image';
import { useState } from 'react';
import land from '../public/me2.jpg';
import land2 from '../public/me3.jpg';
import land3 from '../public/me4.webp';
import land4 from '../public/me5.jpg';
import land5 from '../public/me6.webp';
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

const photos = [
  { src: land, caption: 'Beijing, 1965 - Marc Riboud' },
  { src: land4, caption: 'Harvest, 1957 - Marc Riboud' },
  { src: land2, caption: 'From the Car, 1966 - Joel Meyerowitz' },
  { src: land3, caption: 'Backs of two ladies, facing Central Park West, 1984 - Frank Horvat' },
  { src: land5, caption: "Lover's Lane at the New Jersey Docks, 1983 - Thomas Hoepker" },
];

export default function Home({ allPostsData, description, words }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <Layout title="dani" description={description}>
      <main>
        <div className="carousel">
          <button className="arrow left" onClick={prev} aria-label="Previous">&lt;</button>
          <div className="photo">
            {photos.map((photo, i) => (
              <Image
                key={i}
                src={photo.src}
                alt=""
                placeholder="blur"
                priority={i === 0}
                style={{ width: '100%', height: 'auto', display: i === index ? 'block' : 'none', filter: 'grayscale(15%)' }}
              />
            ))}
          </div>
          <button className="arrow right" onClick={next} aria-label="Next">&gt;</button>
        </div>
        <p className="caption">{photos[index].caption}</p>
      </main>
      <footer></footer>
      <style jsx>{`
        .carousel {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
        }
        .photo {
          flex: 1;
          min-width: 0;
        }
        .arrow {
          background: none;
          border: none;
          font-size: 1.1em;
          color: var(--light-text);
          cursor: pointer;
          padding: 8px;
          line-height: 1;
          flex-shrink: 0;
          transition: color 0.15s ease;
        }
        .arrow:hover {
          color: var(--link);
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
