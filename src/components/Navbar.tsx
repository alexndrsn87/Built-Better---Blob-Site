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
  const linkClass = `${textClass} hover:text-yellow transition-colors whitespace-nowrap`;

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
      className="fixed top-6 left-1/2 z-50 flex w-[92%] max-w-5xl -translate-x-1/2 flex-wrap items-center justify-between gap-3 rounded-full px-4 py-3 sm:px-6 sm:py-4 md:flex-nowrap"
    >
      <a href="#home" className="flex shrink-0 items-center gap-3">
        <img src="/logo.png" alt="" className="h-9 w-9 rounded-xl shadow-sm sm:h-10 sm:w-10" />
        <span className={`font-display text-lg font-bold tracking-tight sm:text-xl ${textClass} transition-colors duration-300`}>
          Built Better
        </span>
      </a>

      <div className="order-3 flex w-full items-center justify-center gap-4 text-sm font-medium md:order-none md:w-auto md:gap-8 md:text-base">
        <a href="#home" className={linkClass}>
          Home
        </a>
        <a href="#what-we-do" className={linkClass}>
          What we do
        </a>
        <a href="#pricing" className={linkClass}>
          Pricing
        </a>
      </div>

      <motion.button
        type="button"
        onClick={() => onRequestPrototype?.()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="shrink-0 rounded-full bg-yellow px-4 py-2 text-sm font-bold text-navy shadow-[0_4px_14px_0_rgba(255,235,15,0.39)] transition-shadow hover:shadow-[0_6px_20px_rgba(255,235,15,0.23)] sm:px-6 sm:py-2.5 sm:text-base"
      >
        Try a prototype
      </motion.button>
    </motion.nav>
  );
}
