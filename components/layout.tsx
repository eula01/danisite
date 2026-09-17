import siteConfig from '../siteConfig.json';

import Head from 'next/head';
import Link from 'next/link';

import Nav from './nav';
import codeTheme from './codeTheme';

export default function Layout({ children, title, description }) {
  return (
    <div className="container">

      <Head>
        <script
          data-goatcounter={`https://${siteConfig.GOAT_COUNTER}.goatcounter.com/count`}
          async
          src="//gc.zgo.at/count.js"
        />

        <title>
          {title} — {siteConfig.AUTHOR_NAME}
        </title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content={`@${siteConfig.AUTHOR_TWITTER}`}
        />
        <meta
          property="twitter:creator"
          content={`@${siteConfig.AUTHOR_TWITTER}`}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <div>{children}</div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Unbounded:wght@900&family=Inter:wght@400;500&family=Outfit:wght@300;400&display=swap');

        :root {
          --text: #111111;
          --input-background: #fff;
          --link: #C8102E;
          --link-hover: #9e0d24;
          --light-text: #6b6b6b;
          --border: #e0e0e0;
          --button: #C8102E;
          --button-text: #fff;
          --font-serif: 'Playfair Display', Georgia, serif;
        }

        .light-1 {
          color: var(--light-text);
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: -0.01em;
          background: #fff;
        }

        .container {
          display: block;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 32px;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 48px;
        }


        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(--font-serif);
          font-weight: 400;
          letter-spacing: -0.3px;
          padding-top: 16px;
          padding-bottom: 8px;
        }

        p {
          margin-bottom: 24px;
          line-height: 26px;
          color: var(--text);
        }

        pre,
        code {
          font-family: 'Roboto Mono', monospace;
          font-size: 14px;
        }

        code {
          background-color: ${codeTheme.plain.backgroundColor};
          padding: 2px;
        }

        hr {
          border: none;
          border-top: 1px solid var(--border);
          margin-top: 48px;
          margin-bottom: 48px;
        }

        div[class*='language-'],
        div[class*='language-'] {
          line-height: 24px;
          padding-top: 8px;
          padding-left: 8px;
          padding-right: 8px;
          padding-bottom: 16px;
          overflow: overlay;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: var(--link);
          text-decoration: none;
        }

        a:hover {
          color: var(--link-hover);
          text-decoration: underline;
        }

        ul {
          list-style-type: disc;
        }

        li {
          padding-bottom: 6px;
          line-height: 26px;
        }

        blockquote {
          margin-left: 0;
          border-left: 2px solid var(--link);
          padding-left: 20px;
        }

        blockquote > p {
          color: var(--light-text);
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
