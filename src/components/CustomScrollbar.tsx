import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth, premium motion for the thumb and effects.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const top = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const y = useTransform(smoothProgress, [0, 1], ['0%', '-100%']);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.18, 0.95]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.45, 0.85, 0.45]);
  const beamHeight = useTransform(smoothProgress, [0, 1], ['24%', '70%']);
  const beamOpacity = useTransform(smoothProgress, [0, 1], [0.3, 0.85]);
  const accentRotate = useTransform(smoothProgress, [0, 1], ['0deg', '240deg']);

  return (
    <div className="fixed left-4 top-24 bottom-24 w-8 z-50 pointer-events-none hidden md:block">
      {/* Subtle track */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 bg-white/10 rounded-full" />
      
      {/* Lusion-inspired vertical energy beam that grows as you scroll */}
      <motion.div
        style={{ height: beamHeight, opacity: beamOpacity }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[2px] bg-gradient-to-t from-yellow via-pink to-blue rounded-full shadow-[0_0_18px_rgba(218,65,103,0.45)]"
      />

      {/* Blurred depth glow behind thumb */}
      <motion.div
        style={{ top, y, scale: glowScale, opacity: glowOpacity }}
        className="absolute left-1/2 -translate-x-1/2 w-10 h-20 rounded-full bg-gradient-to-b from-yellow via-pink to-blue blur-[11px]"
      />

      {/* Perfect-shape thumb with rotating spectral accent */}
      <motion.div
        style={{ top, y }}
        className="absolute left-0 w-8 h-20 rounded-full bg-gradient-to-b from-yellow via-pink to-blue shadow-[0_0_24px_rgba(218,65,103,0.6),0_0_8px_rgba(255,235,15,0.4)]"
      >
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute inset-[3px] rounded-full border border-white/40"
        />
        <div className="absolute inset-[8px] rounded-full bg-white/20 backdrop-blur-sm" />
      </motion.div>

      {/* Tiny indicator node riding above the thumb */}
      <motion.div
        style={{ top, y }}
        className="absolute left-1/2 -translate-x-1/2 -mt-2 w-3 h-3 rounded-full bg-yellow shadow-[0_0_12px_rgba(255,235,15,0.9)]"
      />
    </div>
  );
}
