import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulamos un tiempo de carga elegante
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isLoaded && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-10">
            {/* Elegant Barber Pole */}
            <div className="relative w-8 h-40 rounded-full border border-gold/30 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-[#111]">
              {/* Rotating Stripes */}
              <motion.div 
                className="absolute inset-0 w-full h-[200%]"
                style={{
                  background: 'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(212,175,55,0.6) 12px, rgba(212,175,55,0.6) 24px)'
                }}
                animate={{ y: ['-50%', '0%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
              {/* Glass/Shine overlay for 3D cylinder effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2" />
            </div>
            
            {/* Loading Text */}
            <motion.div 
              className="flex flex-col items-center gap-3"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <span className="text-gold font-serif text-2xl tracking-[0.3em] uppercase ml-2">
                Sanctuary
              </span>
              <span className="text-matte-silver font-sans text-xs tracking-widest uppercase">
                Preparando la experiencia...
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
