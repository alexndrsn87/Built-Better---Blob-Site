export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-12 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <img src="/logo.png" alt="" className="mb-6 h-16 w-16 rounded-2xl shadow-lg" />
        <h2 className="mb-2 font-display text-2xl font-bold">Built Better</h2>
        <p className="mb-4 max-w-md text-shell/60">
          Professional sites for local businesses — built for you, managed by us. Save time; skip the tech
          jargon.
        </p>
        <p className="mb-8 max-w-lg text-sm text-shell/50">
          15% off setup for NHS, Blue Light, and Armed Forces. £49 test-site mockup — credited to your sign-up
          if you go ahead.
        </p>
        <p className="text-sm text-shell/40">© {new Date().getFullYear()} Built Better. All rights reserved.</p>
      </div>
    </footer>
  );
}
