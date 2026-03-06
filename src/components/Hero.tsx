import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';

function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="magnetic group relative px-8 py-4 bg-transparent border border-gold/30 rounded-full overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
    >
      <div className="absolute inset-0 bg-gold/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
      <span className="relative z-10 text-pure-white font-sans uppercase tracking-widest text-sm font-medium group-hover:text-gold transition-colors duration-300">
        {children}
      </span>
    </motion.button>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xOffset = (clientX / innerWidth - 0.5) * 40;
    const yOffset = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(-xOffset);
    mouseY.set(-yOffset);
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <motion.div 
          className="absolute inset-[-5%] w-[110%] h-[110%]"
          style={{ x: mouseX, y: mouseY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian z-10" />
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Barbershop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 flex flex-col items-center"
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <motion.p 
          className="text-gold font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          The Gentleman's Sanctuary
        </motion.p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-12 shimmer-text">
          Maestría en cada detalle
        </h1>
        
        <MagneticButton>
          Reserva Privada
        </MagneticButton>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-matte-silver text-xs uppercase tracking-widest font-sans">Descubre</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent origin-top animate-pulse" />
      </motion.div>
    </section>
  );
}
