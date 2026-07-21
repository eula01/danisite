import siteConfig from "../siteConfig.json";

import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              Daniela Dobrinov
            </Link>
          </li>
          <div className="spacer" />
          <li>
            <Link href="/about" legacyBehavior>
              About
            </Link>
          </li>
          <div className="spacer" />
          <li>
            <Link href="/links" legacyBehavior>
              Links
            </Link>
          </li>
          <div className="" />
          <li>
            <Link href="/books" legacyBehavior>
              Books
            </Link>
          </li>
          <div className="" />
          <li>
            <Link href="/research" legacyBehavior>
              Research
            </Link>
          </li>
          <div className="spacer" />
          <div className="spacer" />

          <li>
            <a
              href={`https://www.linkedin.com/in/${siteConfig.AUTHOR_LINKEDIN}`}
              target="_blank"
            >
              LinkedIn &#x2197;
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        ul {
          list-style: none;
        }
        li {
          padding-right: 10px;
        }
        .spacer {
          margin-top: 20px;
        }
        .nav {
          text-align: left;
          font-size: 1.2em;
          height: 10em;
          line-height: 140%;
          position: -webkit-sticky;
          position: sticky;
          top: 0;
        }
      `}</style>
    </div>
  );
}
