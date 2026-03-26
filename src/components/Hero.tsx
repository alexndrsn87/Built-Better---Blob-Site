import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[1.1] mb-6">
          Websites, <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-yellow via-pink to-yellow bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            without the headache.
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-shell/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          No hidden fees. No tech jargon. Just a great website that works for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-yellow text-navy font-bold text-lg px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(255,235,15,0.3)] hover:shadow-[0_8px_30px_rgb(255,235,15,0.5)] transition-shadow"
          >
            Get your £49 prototype
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto glass-panel text-white font-bold text-lg px-8 py-4 rounded-full"
          >
            See what it costs
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
