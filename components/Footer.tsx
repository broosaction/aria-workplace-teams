import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>Portable AI teams. One Markdown file. Built for every agent product.</p>
      <div>
        <Link href="/methodology">How it works</Link>
        <a href="https://github.com/broosaction/aria-workplace-teams" target="_blank" rel="noreferrer">Source on GitHub</a>
        <a href="https://github.com/broosaction/aria-workplace-releases/releases" target="_blank" rel="noreferrer">Download Aria Workplace</a>
      </div>
    </footer>
  );
}
