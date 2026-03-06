import { motion } from 'motion/react';

const carouselImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532710093739-9470acff878b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504703395950-b89145a5425b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598524374912-6b0b0ab452fa?q=80&w=800&auto=format&fit=crop"
];

export default function InfiniteCarousel() {
  // Duplicamos el array para crear el efecto de loop infinito sin cortes
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <section className="py-20 relative z-10 bg-obsidian overflow-hidden border-t border-[#111]">
      <div className="mb-12 text-center px-4">
        <motion.h3 
          className="text-gold font-serif text-2xl md:text-3xl italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          La atmósfera del santuario
        </motion.h3>
      </div>

      {/* Contenedor con máscara de gradiente para difuminar los bordes */}
      <div 
        className="relative w-full overflow-hidden flex"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* Usamos Framer Motion para la animación continua. pr-6 compensa el gap final para un loop perfecto */}
        <motion.div 
          className="flex gap-6 w-max cursor-none pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {duplicatedImages.map((src, idx) => (
            <div 
              key={idx} 
              className="w-[280px] h-[350px] md:w-[350px] md:h-[450px] shrink-0 rounded-xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt={`Barbershop atmosphere ${idx}`} 
                className="w-full h-full object-cover filter grayscale-[80%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
