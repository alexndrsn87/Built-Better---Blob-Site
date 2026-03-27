import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

type HeroProps = {
  onRequestPrototype?: () => void;
};

export default function Hero({ onRequestPrototype }: HeroProps) {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[88vh] scroll-mt-28 flex-col items-center justify-center px-4 pb-14 pt-40 text-center sm:scroll-mt-32 sm:pt-44 md:pt-48 md:pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mb-6 font-display text-4xl font-black leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Professional websites for{' '}
          <span className="animate-gradient bg-gradient-to-r from-yellow via-pink to-yellow bg-[length:200%_auto] bg-clip-text text-transparent">
            local businesses & tradies.
          </span>
          <br />
          <span className="text-shell/95">Built for you, managed by us.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg font-medium leading-relaxed text-shell/90 md:text-xl">
          No tech stress. One predictable monthly cost. We handle the updates — you focus on customers.
        </p>

        <div className="mx-auto mb-10 flex max-w-xl flex-wrap items-center justify-center gap-3 text-sm font-medium text-shell/90 md:text-base">
          <span className="glass-panel rounded-full px-4 py-2">No technical skills required</span>
          <span className="glass-panel rounded-full px-4 py-2">Fixed monthly costs</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full bg-yellow px-8 py-4 text-lg font-bold text-navy shadow-[0_8px_30px_rgb(255,235,15,0.3)] transition-shadow hover:shadow-[0_8px_30px_rgb(255,235,15,0.5)] sm:w-auto"
          >
            See your demo
          </motion.a>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRequestPrototype}
            className="glass-panel w-full rounded-full px-8 py-4 text-lg font-bold text-white sm:w-auto"
          >
            Get in touch
          </motion.button>
        </div>

        <motion.div
          className="mt-10 flex flex-col items-center md:mt-12"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.45 }}
        >
          <a
            href="#what-we-do"
            className="text-xs font-medium uppercase tracking-[0.2em] text-shell/75 md:text-sm"
          >
            Scroll down
          </a>
          <div className="mt-3 flex flex-col items-center gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.35, 1, 0.35], y: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              >
                <ChevronDown
                  className="h-5 w-5 text-yellow/90 md:h-6 md:w-6"
                  strokeWidth={2.25}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
