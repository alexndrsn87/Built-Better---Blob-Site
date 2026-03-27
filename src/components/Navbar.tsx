import { motion } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

type NavbarProps = {
  onRequestPrototype?: () => void;
};

export default function Navbar({ onRequestPrototype }: NavbarProps) {
  const { pathname } = useLocation();
  const overLight = pathname === '/pricing';

  const textClass = overLight ? 'text-navy' : 'text-white';

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
        boxShadow:
          '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.06)',
      };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'transition-colors whitespace-nowrap rounded-full px-1 py-0.5 text-base sm:text-lg md:text-[1.15rem]',
      overLight ? 'text-navy' : 'text-white',
      isActive ? (overLight ? 'font-semibold text-pink' : 'text-yellow') : '',
      !isActive && (overLight ? 'hover:text-navy/80' : 'hover:text-yellow'),
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={glassStyle}
      className="fixed top-7 left-1/2 z-50 flex w-[94%] max-w-6xl -translate-x-1/2 flex-wrap items-center justify-between gap-3 rounded-full px-5 py-3.5 sm:px-7 sm:py-4 md:flex-nowrap"
    >
      <Link to="/" className="flex shrink-0 items-center gap-3">
        <img src="/logo.png" alt="" className="h-9 w-9 rounded-xl shadow-sm sm:h-10 sm:w-10" />
        <span
          className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${textClass} transition-colors duration-300`}
        >
          Built Better
        </span>
      </Link>

      <div className="order-3 flex w-full items-center justify-center gap-6 font-medium md:order-none md:w-auto md:gap-11">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/what-we-do" className={navLinkClass}>
          What we do
        </NavLink>
        <NavLink to="/pricing" className={navLinkClass}>
          Pricing
        </NavLink>
      </div>

      <motion.button
        type="button"
        onClick={() => onRequestPrototype?.()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="shrink-0 rounded-full bg-yellow px-4 py-2 text-base font-bold text-navy shadow-[0_4px_14px_0_rgba(255,235,15,0.39)] transition-shadow hover:shadow-[0_6px_20px_rgba(255,235,15,0.23)] sm:px-6 sm:py-2.5 sm:text-lg"
      >
        £49 prototype
      </motion.button>
    </motion.nav>
  );
}
