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
    <Layout title="Blog" description={description}>
      <main>
        <Image
          src={land}
          alt=""
          height="500"
          placeholder="blur"
        />
      </main>
      <footer></footer>
    </Layout>
  );
}
