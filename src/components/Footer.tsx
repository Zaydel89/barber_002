import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const links = [
    { name: "Servicios", href: "#servicios" },
    { name: "El Arte", href: "#portafolio" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Reservas", href: "#reservas" }
  ];

  const socials = [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" }
  ];

  return (
    <footer className="relative bg-obsidian pt-24 pb-8 px-4 md:px-12 overflow-hidden z-10 border-t border-[#111]" id="contacto">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contact & Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-pure-white font-serif text-3xl mb-8">The Gentleman's Sanctuary</h3>
            <p className="text-matte-silver font-sans mb-4 text-lg">Av. Presidente Masaryk 123<br/>Polanco, CDMX 11560</p>
            <a href="mailto:concierge@gentlemansanctuary.com" className="text-gold font-sans hover:text-pure-white transition-colors block mb-2 text-lg">concierge@gentlemansanctuary.com</a>
            <a href="tel:+525512345678" className="text-gold font-sans hover:text-pure-white transition-colors block text-lg">+52 55 1234 5678</a>
          </div>

          <div>
            <h4 className="text-matte-silver font-sans text-sm tracking-widest uppercase mb-8">Navegación</h4>
            <ul className="space-y-4">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-pure-white hover:text-gold font-serif text-xl transition-colors flex items-center group w-fit">
                    <span className="w-0 h-[1px] bg-gold mr-0 group-hover:w-4 group-hover:mr-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-matte-silver font-sans text-sm tracking-widest uppercase mb-8">Redes Sociales</h4>
            <ul className="space-y-4">
              {socials.map((social, idx) => (
                <li key={idx}>
                  <a href={social.href} className="text-pure-white hover:text-gold font-serif text-xl transition-colors flex items-center justify-between group border-b border-[#222] pb-2 hover:border-gold">
                    {social.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center border-t border-[#222] pt-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-matte-silver text-xs font-sans uppercase tracking-widest mb-8">
            <p>© 2026 Sanctuary. Todos los derechos reservados.</p>
            <p className="mt-4 md:mt-0">Diseñado para la élite en CDMX.</p>
          </div>
          
          {/* Massive Text Watermark */}
          <motion.div 
            className="w-full overflow-hidden flex justify-center pointer-events-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-[14vw] font-serif leading-none text-pure-white/[0.02] uppercase tracking-tighter select-none">
              Sanctuary
            </h1>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
