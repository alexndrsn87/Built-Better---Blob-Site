import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll();
  
  // Add a spring to make the scroll movement feel juicy and smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  // Map the scroll progress to the top position of our blob
  // By moving top from 0% to 100% and translating Y from 0% to -100%, 
  // it perfectly stays within the bounds of the track.
  const top = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const y = useTransform(smoothProgress, [0, 1], ['0%', '-100%']);

  return (
    <div className="fixed left-4 top-24 bottom-24 w-8 z-50 pointer-events-none hidden md:block">
      {/* Subtle track */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 bg-white/10 rounded-full" />
      
      {/* Juicy Blob Thumb */}
      <motion.div
        style={{ top, y }}
        className="absolute left-0 w-8 h-20 bg-gradient-to-b from-yellow via-pink to-blue shadow-[0_0_20px_rgba(218,65,103,0.5)]"
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "50% 50% 40% 60% / 50% 60% 40% 50%",
            "40% 60% 70% 30% / 40% 50% 60% 50%"
          ]
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
}
