import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10" id="ubicacion">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-pure-white mb-4">El Santuario</h2>
          <div className="w-24 h-[1px] bg-gold mb-12" />
          
          <p className="text-matte-silver font-sans text-lg mb-12 leading-relaxed">
            Ubicado en el corazón de Polanco, nuestro espacio está diseñado para ofrecer una desconexión total del mundo exterior. Un refugio donde el tiempo se detiene y el arte de la barbería cobra vida.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#222] bg-charcoal flex items-center justify-center shrink-0 group-hover:border-gold transition-colors duration-500">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-pure-white font-serif text-xl mb-2">Dirección</h4>
                <p className="text-matte-silver font-sans">Av. Presidente Masaryk 123<br/>Polanco, Miguel Hidalgo<br/>11560 Ciudad de México, CDMX</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#222] bg-charcoal flex items-center justify-center shrink-0 group-hover:border-gold transition-colors duration-500">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-pure-white font-serif text-xl mb-2">Horario de Atención</h4>
                <p className="text-matte-silver font-sans">Lunes - Sábado: 10:00 AM - 9:00 PM<br/>Domingo: Solo con reserva VIP</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full h-[500px] rounded-2xl overflow-hidden relative group border border-[#222] hover:border-gold/50 transition-colors duration-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.53959705226!2d-99.19248868466248!3d19.43228898688451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2020153831821%3A0x6291a9244242607!2sAv.%20Pdte.%20Masaryk%20123%2C%20Polanco%2C%20Polanco%20V%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1645480000000!5m2!1sen!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%) hue-rotate(180deg)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
