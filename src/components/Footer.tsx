import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-12 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <Link to="/" className="mb-6 inline-block">
          <img src="/logo.png" alt="" className="h-16 w-16 rounded-2xl shadow-lg" />
        </Link>
        <h2 className="mb-2 font-display text-2xl font-bold">Built Better</h2>
        <p className="mb-6 max-w-md text-shell/60">
          Professional sites for local businesses — built for you, managed by us. Save time; skip the tech
          jargon.
        </p>
        <nav className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-shell/80">
          <Link to="/" className="transition-colors hover:text-yellow">
            Home
          </Link>
          <Link to="/what-we-do" className="transition-colors hover:text-yellow">
            What we do
          </Link>
          <Link to="/pricing" className="transition-colors hover:text-yellow">
            Pricing
          </Link>
        </nav>
        <p className="mb-8 max-w-lg text-sm text-shell/50">
          15% off setup for NHS, Blue Light, and Armed Forces. The £49 Prototype — £49 off your setup if you
          proceed.
        </p>
        <p className="text-sm text-shell/40">© {new Date().getFullYear()} Built Better. All rights reserved.</p>
      </div>
    </footer>
  );
}
