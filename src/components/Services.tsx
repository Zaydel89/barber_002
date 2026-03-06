import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Scissors, Droplet, Wind, Coffee, Sparkles, Crown, UserCheck, Flame } from 'lucide-react';
import { useRef } from 'react';
import type { MouseEvent } from 'react';

const services = [
  {
    icon: Scissors,
    title: "Corte Imperial",
    price: "$120",
    desc: "Asesoramiento visagista, corte de precisión con tijera japonesa y lavado spa con aromaterapia.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
  },
  {
    icon: Droplet,
    title: "Afeitado Clásico",
    price: "$85",
    desc: "Ritual de toallas calientes, navaja tradicional, aceites esenciales y masaje facial relajante.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    icon: Wind,
    title: "Tratamiento Capilar",
    price: "$150",
    desc: "Restauración profunda con ozonoterapia, mascarillas de oro de 24k y masaje craneal.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    icon: Coffee,
    title: "Experiencia VIP",
    price: "$250",
    desc: "Corte, afeitado, limpieza facial, degustación de whisky premium y puros seleccionados.",
    image: "https://images.unsplash.com/photo-1527015661330-ee12eb42a201?q=80&w=2000&auto=format&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Camuflaje de Canas",
    price: "$95",
    desc: "Tinte semi-permanente de aspecto natural que disimula las canas sin efecto raíz.",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2000&auto=format&fit=crop"
  },
  {
    icon: Crown,
    title: "Diseño de Barba",
    price: "$70",
    desc: "Esculpido milimétrico, perfilado con navaja y tratamiento de hidratación profunda.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    icon: UserCheck,
    title: "Limpieza Facial Black",
    price: "$110",
    desc: "Exfoliación con carbón activado, extracción de impurezas y mascarilla tensora fría.",
    image: "https://images.unsplash.com/photo-1512608488880-36a8ce41005a?q=80&w=2000&auto=format&fit=crop"
  },
  {
    icon: Flame,
    title: "Terapia de Fuego",
    price: "$180",
    desc: "Técnica ancestral para sellar puntas y estimular el folículo con calor controlado.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop"
  }
];

function ServiceCard({ service, index }: { service: any, index: number, key?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    const width = rect.width;
    const height = rect.height;
    const mouseXRel = e.clientX - rect.left;
    const mouseYRel = e.clientY - rect.top;
    const xPct = mouseXRel / width - 0.5;
    const yPct = mouseYRel / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative bg-charcoal rounded-2xl p-8 border border-[#222] overflow-hidden cursor-none"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/40" />
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full">
        <service.icon className="w-12 h-12 text-gold mb-6 stroke-[1.5]" />
        <h3 className="text-2xl font-serif text-pure-white mb-2">{service.title}</h3>
        <p className="text-gold font-sans text-xl mb-6">{service.price}</p>
        
        <div className="mt-auto overflow-hidden">
          <p className="text-matte-silver font-sans text-sm leading-relaxed translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-pure-white mb-4">Servicios de Autor</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1000px]">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} index={idx} />
        ))}
      </div>
    </section>
  );
}
