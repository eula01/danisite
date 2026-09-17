import siteConfig from "../siteConfig.json";
import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="nav">
        <Link href="/" className="site-name">Daniela Dobrinov</Link>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/links">Links</Link></li>
          <li><Link href="/books">Books</Link></li>
          <li><Link href="/research">Research</Link></li>
          <li>
            <a
              href={`https://www.linkedin.com/in/${siteConfig.AUTHOR_LINKEDIN}`}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn &#x2197;
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          border-bottom: 1px solid var(--border);
          margin-bottom: 32px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .nav {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        .site-name {
          font-family: 'Inter', sans-serif;
          font-size: 0.95em;
          color: var(--text);
          text-decoration: none;
        }
        .site-name:hover {
          color: var(--link);
          text-decoration: none;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 28px;
          align-items: baseline;
        }
        li {
          padding: 0;
        }
      `}</style>
    </header>
  );
}
