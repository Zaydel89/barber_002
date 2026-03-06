import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

const works = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504703395950-b89145a5425b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={containerRef} className="h-[300vh] relative z-10 bg-obsidian">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-4 md:px-12 mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-pure-white mb-4">El Arte</h2>
          <div className="w-24 h-[1px] bg-gold" />
        </div>

        <div className="relative h-[50vh] md:h-[60vh] flex items-center">
          <motion.div 
            className="flex gap-8 px-4 md:px-12 absolute left-0"
            style={{ x }}
          >
            {works.map((src, idx) => (
              <motion.div
                key={idx}
                className="relative w-[80vw] md:w-[45vw] h-[50vh] md:h-[60vh] shrink-0 overflow-hidden rounded-xl cursor-none"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.img
                  src={src}
                  alt={`Work ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  animate={{
                    filter: hoveredIndex === idx ? 'grayscale(0%)' : 'grayscale(100%)',
                    scale: hoveredIndex === idx ? 1.15 : 1,
                    opacity: hoveredIndex !== null && hoveredIndex !== idx ? 0.3 : 1
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-gold font-serif text-2xl">Estudio {idx + 1}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
