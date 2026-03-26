import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl glass-panel rounded-full px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Built Better Logo" className="w-10 h-10 rounded-xl shadow-sm" />
        <span className="font-display font-bold text-xl tracking-tight">Built Better</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <a href="#how-it-works" className="hover:text-yellow transition-colors">How we work</a>
        <a href="#pricing" className="hover:text-yellow transition-colors">What it costs</a>
        <a href="#terms" className="hover:text-yellow transition-colors">The small print</a>
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
