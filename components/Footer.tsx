import Link from "next/link";

import { asset } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        <img className="footer-mark" src={asset("/aria-icon.png")} alt="" width={18} height={18} />
        A Broos Action product. Portable AI teams in one Markdown file.
      </p>
      <div>
        <Link href="/methodology">How it works</Link>
        <a href="https://github.com/broosaction/aria-workplace-teams" target="_blank" rel="noreferrer">Source on GitHub</a>
        <a href="https://github.com/broosaction/aria-workplace-releases/releases" target="_blank" rel="noreferrer">Download Aria Workplace</a>
        <a href="https://broos.io" target="_blank" rel="noreferrer">broos.io</a>
      </div>
    </footer>
  );
}
