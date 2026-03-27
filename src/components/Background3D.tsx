import { useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';

export default function Background3D() {
  const mouseX = useMotionValue(0.5); // normalised 0–1
  const mouseY = useMotionValue(0.5);
  const { scrollY } = useScroll();

  const smoothX = useSpring(mouseX, { stiffness: 22, damping: 22, mass: 1.8 });
  const smoothY = useSpring(mouseY, { stiffness: 22, damping: 22, mass: 1.8 });

  // Map normalised mouse position to a gentle pixel offset
  const particleX = useTransform(smoothX, [0, 1], [-38, 38]);

  // Combine mouse Y offset + scroll parallax into a single Y value
  const particleY = useTransform(
    [smoothY, scrollY],
    ([my, sy]: number[]) => (my - 0.5) * 54 + sy * -0.03
  );
  const particleDepthX = useTransform(smoothX, [0, 1], [-64, 64]);
  const particleDepthY = useTransform(
    [smoothY, scrollY],
    ([my, sy]: number[]) => (my - 0.5) * 78 + sy * -0.04
  );

  const spotlightX = useTransform(smoothX, [0, 1], ['10%', '90%']);
  const spotlightY = useTransform(
    [smoothY, scrollY],
    ([my, sy]: number[]) => `${Math.max(8, Math.min(92, my * 100 - sy * 0.01))}%`
  );
  const spotlightGradient = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x} ${y}, rgba(255,255,255,0.10), rgba(255,255,255,0.035) 28%, rgba(10,4,70,0) 62%)`
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => {
    return Array.from({ length: 95 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3.6 + 1.4,
      duration: Math.random() * 46 + 40,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.32 + 0.14,
      xOffset: (Math.random() - 0.5) * 110,
      yOffset: (Math.random() - 0.5) * 110,
    }));
  }, []);

  const depthParticles = useMemo(() => {
    return Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 8 + 5,
      duration: Math.random() * 34 + 26,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.18 + 0.08,
      xOffset: (Math.random() - 0.5) * 140,
      yOffset: (Math.random() - 0.5) * 140,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-navy">
      {/* Soft Pink Blob */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-pink/20 blur-[120px]"
      />

      {/* Soft Yellow Blob */}
      <motion.div
        animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0], scale: [1, 1.5, 0.9, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-yellow/10 blur-[120px]"
      />

      {/* Soft Blue Blob */}
      <motion.div
        animate={{ x: [0, 50, -100, 0], y: [0, -50, 100, 0], scale: [1, 1.1, 1.3, 1] }}
        transition={{ duration: 44, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[50%] w-[45vw] h-[45vw] rounded-full bg-blue/15 blur-[120px]"
      />

      {/* Soft Shell Blob */}
      <motion.div
        animate={{ x: [0, -80, 80, 0], y: [0, 80, -80, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 56, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-shell/10 blur-[100px]"
      />

      {/* Aurora-style ribbon for richer depth motion */}
      <motion.div
        animate={{
          x: ['-15%', '8%', '-8%', '-15%'],
          y: ['0%', '-10%', '8%', '0%'],
          rotate: [0, 6, -5, 0],
          opacity: [0.45, 0.7, 0.52, 0.45],
        }}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-12%] left-[-18%] h-[62vh] w-[145vw] rounded-[48%] bg-gradient-to-r from-transparent via-yellow/12 to-pink/12 blur-[120px]"
      />

      {/* Dust Particles — react to mouse position and scroll */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ x: particleX, y: particleY }}
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{
              x: [0, p.xOffset, 0],
              y: [0, p.yOffset, 0],
              scale: [0.88, 1.08, 0.88],
              opacity: [p.opacity * 0.2, p.opacity, p.opacity * 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Larger glow motes in a deeper layer */}
      <motion.div className="absolute inset-0 z-[8]" style={{ x: particleDepthX, y: particleDepthY }}>
        {depthParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/80 blur-[1px]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{
              x: [0, p.xOffset, 0],
              y: [0, p.yOffset, 0],
              scale: [0.8, 1.35, 0.8],
              opacity: [p.opacity * 0.35, p.opacity, p.opacity * 0.35],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Lusion-inspired interactive light sweep */}
      <motion.div
        className="absolute inset-0 z-[9]"
        style={{ background: spotlightGradient }}
      />
    </div>
  );
}
