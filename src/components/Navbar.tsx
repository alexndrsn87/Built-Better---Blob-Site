import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [overLight, setOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricing = document.getElementById('pricing');
      if (!pricing) return;
      const { top, bottom } = pricing.getBoundingClientRect();
      // Navbar sits ~40px from top + ~56px height = bottom edge ~96px
      setOverLight(top < 96 && bottom > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const panelClass = overLight ? 'glass-panel-light' : 'glass-panel';
  const textClass = overLight ? 'text-navy' : 'text-white';
  const linkClass = `${textClass} hover:text-yellow transition-colors`;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl ${panelClass} rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Built Better Logo" className="w-10 h-10 rounded-xl shadow-sm" />
        <span className={`font-display font-bold text-xl tracking-tight ${textClass} transition-colors duration-300`}>Built Better</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-base">
        <a href="#how-it-works" className={linkClass}>How we work</a>
        <a href="#pricing" className={linkClass}>What it costs</a>
        <a href="#terms" className={linkClass}>The small print</a>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow text-navy font-bold px-6 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(255,235,15,0.39)] hover:shadow-[0_6px_20px_rgba(255,235,15,0.23)] transition-shadow"
      >
        Try a prototype
      </motion.button>
    </motion.nav>
  );
}
