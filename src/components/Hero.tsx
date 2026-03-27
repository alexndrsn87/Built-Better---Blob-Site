import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Check } from 'lucide-react';

type HeroProps = {
  onRequestPrototype?: () => void;
};

export default function Hero({ onRequestPrototype }: HeroProps) {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[90vh] scroll-mt-28 flex-col items-center justify-center px-5 pb-20 pt-44 text-center sm:scroll-mt-32 sm:px-8 sm:pb-24 sm:pt-48 md:px-10 md:pt-52 lg:px-12 lg:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        className="mx-auto w-full max-w-5xl"
      >
        <h1 className="mb-8 font-display text-6xl font-black leading-[1.12] tracking-tighter md:mb-10 md:text-8xl">
          Websites,{' '}
          <span className="inline-block whitespace-nowrap animate-gradient bg-gradient-to-r from-yellow via-pink to-yellow bg-[length:200%_auto] bg-clip-text text-transparent">
            without the headache.
          </span>
        </h1>
        <p className="mx-auto mb-5 max-w-3xl text-xl font-medium leading-relaxed text-shell/90 md:mb-6 md:text-2xl">
          No hidden fees. No tech jargon. Just a great website that works for your business.
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-base font-medium leading-relaxed text-shell/75 md:mb-12 md:text-lg">
          Professional websites for local businesses and tradies — built for you, managed by us.
        </p>

        <div className="mx-auto mb-8 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-sm font-medium text-shell/90 md:mb-10 md:gap-4 md:text-base">
          <span className="glass-panel rounded-full px-5 py-2.5">No technical skills required</span>
          <span className="glass-panel rounded-full px-5 py-2.5">Fixed monthly costs</span>
        </div>

        <div className="mx-auto mb-10 max-w-3xl rounded-[28px] border border-yellow/25 bg-yellow/10 px-6 py-7 text-left text-sm leading-relaxed text-shell/95 shadow-[0_0_40px_rgba(255,235,15,0.08)] md:mb-12 md:px-8 md:py-8 md:text-base">
          <p className="font-display text-lg font-bold text-yellow md:text-xl">The £49 Prototype</p>
          <p className="mt-2 font-display text-2xl font-black text-white md:text-3xl">
            £49{' '}
            <span className="text-base font-semibold text-shell/80 md:text-lg">/ 24-hour turnaround</span>
          </p>
          <p className="mt-3 text-shell/90">
            We build a custom interactive homepage blueprint in 24 hours. Link expires in 7 days.
          </p>
          <ul className="mt-5 space-y-3 text-shell/90">
            {[
              'Custom Design (No Templates)',
              'Interactive Preview',
              '£49 deducted from setup fee if you proceed',
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow" strokeWidth={2.5} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRequestPrototype}
            className="mt-6 w-full rounded-full bg-yellow px-6 py-3.5 text-center text-base font-bold text-navy shadow-[0_4px_14px_0_rgba(255,235,15,0.39)] sm:py-4 sm:text-lg"
          >
            Get the £49 prototype
          </motion.button>
        </div>

        <p className="mx-auto mb-12 max-w-2xl text-sm font-medium leading-relaxed text-shell/80 md:mb-14 md:text-base">
          <span className="text-shell/95">15% off setup</span> for NHS staff, Blue Light Card holders, and Armed
          Forces personnel — thank you for what you do.
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              to="/pricing"
              className="block w-full rounded-full bg-yellow px-10 py-4 text-center text-lg font-bold text-navy shadow-[0_8px_30px_rgb(255,235,15,0.3)] transition-shadow hover:shadow-[0_8px_30px_rgb(255,235,15,0.5)]"
            >
              See packages
            </Link>
          </motion.div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRequestPrototype}
            className="glass-panel w-full rounded-full px-10 py-4 text-lg font-bold text-white sm:w-auto"
          >
            Get the £49 prototype
          </motion.button>
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center md:mt-16"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.45 }}
        >
          <Link
            to="/what-we-do"
            className="text-xs font-medium uppercase tracking-[0.2em] text-shell/75 transition-colors hover:text-yellow md:text-sm"
          >
            What we do
          </Link>
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
