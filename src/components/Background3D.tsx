import { useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';

export default function Background3D() {
  const mouseX = useMotionValue(0.5); // normalised 0–1
  const mouseY = useMotionValue(0.5);
  const { scrollY } = useScroll();

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // Map normalised mouse position to a gentle pixel offset
  const particleX = useTransform(smoothX, [0, 1], [-28, 28]);

  // Combine mouse Y offset + scroll parallax into a single Y value
  const particleY = useTransform(
    [smoothY, scrollY],
    ([my, sy]: number[]) => (my - 0.5) * 40 + sy * -0.03
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
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 2, // 2px to 5px
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.35 + 0.2, // 0.2 to 0.55
      xOffset: (Math.random() - 0.5) * 100,
      yOffset: (Math.random() - 0.5) * 100,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-navy">
      {/* Soft Pink Blob */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-pink/20 blur-[120px]"
      />

      {/* Soft Yellow Blob */}
      <motion.div
        animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0], scale: [1, 1.5, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-yellow/10 blur-[120px]"
      />

      {/* Soft Blue Blob */}
      <motion.div
        animate={{ x: [0, 50, -100, 0], y: [0, -50, 100, 0], scale: [1, 1.1, 1.3, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[50%] w-[45vw] h-[45vw] rounded-full bg-blue/15 blur-[120px]"
      />

      {/* Soft Shell Blob */}
      <motion.div
        animate={{ x: [0, -80, 80, 0], y: [0, 80, -80, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-shell/10 blur-[100px]"
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
              opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
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
    </div>
  );
}
