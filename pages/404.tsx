import comeback from '../public/404.gif';

import Layout from '../components/layout';
import Image from "next/legacy/image";

export default function Custom404() {
  return (
    <Layout title="404" description="">
      <h1>404</h1>
      <div>lost?</div>
      <Image src={comeback} />
    </Layout>
  );
}
