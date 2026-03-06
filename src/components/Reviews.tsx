import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  { 
    name: "Alejandro M.", 
    date: "Hace 2 semanas", 
    text: "La mejor experiencia de grooming en la ciudad. El trato VIP es inigualable y el whisky de cortesía es un toque espectacular." 
  },
  { 
    name: "Carlos R.", 
    date: "Hace 1 mes", 
    text: "Profesionalismo puro. El corte imperial vale cada centavo. El ambiente te hace sentir en un club privado exclusivo." 
  },
  { 
    name: "Diego V.", 
    date: "Hace 2 meses", 
    text: "Desde que entras hasta que sales, el servicio es impecable. El afeitado clásico con toallas calientes es un ritual obligatorio." 
  }
];

export default function Reviews() {
  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-pure-white mb-4">Voces de la Élite</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
        
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-serif text-pure-white">4.9</span>
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>
          <span className="text-matte-silver font-sans text-sm tracking-widest uppercase">Reseñas en Google Maps</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-charcoal p-8 rounded-2xl border border-[#222] hover:border-gold/30 transition-colors duration-500 flex flex-col h-full cursor-none group"
          >
            <div className="flex text-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-matte-silver font-sans mb-8 italic leading-relaxed flex-grow">"{review.text}"</p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#333]">
              <span className="text-pure-white font-serif text-lg">{review.name}</span>
              <span className="text-[#666] text-xs font-sans uppercase tracking-wider">{review.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
