import { motion, useScroll, useTransform, useSpring } from 'motion/react';

/** Electrons orbiting the scroll track (atom-style). */
function OrbitElectrons() {
  const orbitR = 24;
  const orbitOuter = 32;
  const colors = [
    'bg-yellow shadow-[0_0_14px_rgba(255,235,15,0.95)]',
    'bg-pink shadow-[0_0_14px_rgba(218,65,103,0.9)]',
    'bg-blue shadow-[0_0_12px_rgba(25,123,189,0.95)]',
  ];
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-2 bottom-2 flex items-center justify-center">
        <motion.div
          className="relative h-full w-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 120, 240].map((deg, i) => (
            <div
              key={deg}
              className="absolute left-1/2 top-1/2 h-2.5 w-2.5"
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-${orbitR}px)`,
              }}
            >
              <div className={`h-full w-full rounded-full ${colors[i % colors.length]}`} />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-2 bottom-2 flex items-center justify-center">
        <motion.div
          className="relative h-full w-12"
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          {[60, 180, 300].map((deg, i) => (
            <div
              key={deg}
              className="absolute left-1/2 top-1/2 h-2 w-2"
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-${orbitOuter}px)`,
              }}
            >
              <div
                className={`h-full w-full rounded-full ${
                  i === 1
                    ? 'bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.85)]'
                    : 'bg-yellow/85 shadow-[0_0_10px_rgba(255,235,15,0.65)]'
                }`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const top = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const y = useTransform(smoothProgress, [0, 1], ['0%', '-100%']);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.18, 0.95]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.45, 0.85, 0.45]);
  const beamHeight = useTransform(smoothProgress, [0, 1], ['24%', '70%']);
  const beamOpacity = useTransform(smoothProgress, [0, 1], [0.3, 0.85]);
  const accentRotate = useTransform(smoothProgress, [0, 1], ['0deg', '240deg']);

  return (
    <div className="pointer-events-none fixed left-3 top-24 bottom-24 z-50 hidden w-14 md:block">
      {/* Atom orbits around the track */}
      <div className="absolute inset-0">
        <OrbitElectrons />
      </div>

      {/* Track */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 rounded-full bg-white/10" />

      <motion.div
        style={{ height: beamHeight, opacity: beamOpacity }}
        className="absolute bottom-0 left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-t from-yellow via-pink to-blue shadow-[0_0_18px_rgba(218,65,103,0.45)]"
      />

      <motion.div
        style={{ top, y, scale: glowScale, opacity: glowOpacity }}
        className="absolute left-1/2 h-20 w-10 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow via-pink to-blue blur-[11px]"
      />

      <motion.div
        style={{ top, y }}
        className="absolute left-2 h-20 w-8 rounded-full bg-gradient-to-b from-yellow via-pink to-blue shadow-[0_0_24px_rgba(218,65,103,0.6),0_0_8px_rgba(255,235,15,0.4)]"
      >
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute inset-[3px] rounded-full border border-white/40"
        />
        <div className="absolute inset-[8px] rounded-full bg-white/20 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        style={{ top, y }}
        className="absolute left-1/2 -mt-2 h-3 w-3 -translate-x-1/2 rounded-full bg-yellow shadow-[0_0_12px_rgba(255,235,15,0.9)]"
      />
    </div>
  );
}
