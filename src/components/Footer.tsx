export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-white/10 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <img src="/logo.png" alt="Built Better Logo" className="w-16 h-16 rounded-2xl shadow-lg mb-6" />
        <h2 className="text-2xl font-display font-bold mb-2">Built Better</h2>
        <p className="text-shell/60 mb-8">Websites, without the headache. No hidden fees. No tech jargon.</p>
        <p className="text-shell/40 text-sm">© {new Date().getFullYear()} Built Better Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
