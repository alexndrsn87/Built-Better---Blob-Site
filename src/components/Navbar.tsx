import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

type NavbarProps = {
  onRequestPrototype?: () => void;
};

export default function Navbar({ onRequestPrototype }: NavbarProps) {
  const [overLight, setOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricing = document.getElementById('pricing');
      if (!pricing) return;
      const { top, bottom } = pricing.getBoundingClientRect();
      setOverLight(top < 96 && bottom > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textClass = overLight ? 'text-navy' : 'text-white';
  const linkClass = `${textClass} hover:text-yellow transition-colors`;

  // The background blobs are already blur-[120px], so making the nav more transparent
  // lets those blurred colours bleed through — creating a genuine frosted-glass look
  // without relying on backdrop-filter across GPU compositor layer boundaries.
  const glassStyle = overLight
    ? {
        background: 'rgba(255, 217, 206, 0.22)',
        backdropFilter: 'blur(24px) saturate(200%)',
        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.55)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
      }
    : {
        background: 'rgba(9, 4, 70, 0.18)',
        backdropFilter: 'blur(24px) saturate(200%)',
        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.22)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.06)',
      };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={glassStyle}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full px-6 py-4 flex items-center justify-between"
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
        type="button"
        onClick={() => onRequestPrototype?.()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow text-navy font-bold px-6 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(255,235,15,0.39)] hover:shadow-[0_6px_20px_rgba(255,235,15,0.23)] transition-shadow"
      >
        Try a prototype
      </motion.button>
    </motion.nav>
  );
}
