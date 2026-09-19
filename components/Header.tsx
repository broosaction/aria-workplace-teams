import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="header-inner" aria-label="Primary navigation">
        <Link href="/" className="brand-lockup" aria-label="Aria Workplace Teams home">
          <BrandMark size={40} />
          <span className="brand-copy">
            <span className="brand-name">Aria Workplace</span>
            <span className="brand-badge">Teams</span>
          </span>
        </Link>
        <div className="header-links">
          <Link href="/">Showcase</Link>
          <Link href="/publish">Submit a team</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
