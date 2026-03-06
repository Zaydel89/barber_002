import { motion } from 'motion/react';
import { useState } from 'react';

const generateDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push(date);
  }
  return days;
};

const timeSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "03:30 PM", "05:00 PM", "07:00 PM"];

export default function Booking() {
  const days = generateDays();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10" id="reservas">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-pure-white mb-4">Reserva tu Espacio</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Calendar */}
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-gold mb-8">Selecciona un Día</h3>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
            {days.map((date, idx) => {
              const isSelected = selectedDate === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => { setSelectedDate(idx); setSelectedTime(null); }}
                  className={`relative p-4 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 overflow-hidden group ${isSelected ? 'border-gold bg-gold/10' : 'border-[#222] bg-charcoal hover:border-gold/50'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <span className={`text-xs font-sans mb-1 ${isSelected ? 'text-gold' : 'text-matte-silver group-hover:text-pure-white'}`}>
                    {dayNames[date.getDay()]}
                  </span>
                  <span className={`text-2xl font-serif ${isSelected ? 'text-pure-white' : 'text-pure-white'}`}>
                    {date.getDate()}
                  </span>
                  {isSelected && (
                    <motion.div layoutId="activeDay" className="absolute inset-0 border-2 border-gold rounded-xl pointer-events-none" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-gold mb-8">Horarios Disponibles</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {timeSlots.map((time, idx) => {
              const isSelected = selectedTime === time;
              return (
                <motion.button
                  key={idx}
                  onClick={() => selectedDate !== null && setSelectedTime(time)}
                  disabled={selectedDate === null}
                  className={`relative py-4 rounded-full border text-sm font-sans tracking-widest transition-all duration-300 ${selectedDate === null ? 'opacity-30 cursor-not-allowed border-[#222] text-matte-silver' : isSelected ? 'border-gold bg-gold text-obsidian font-bold' : 'border-[#222] bg-charcoal text-pure-white hover:border-gold hover:text-gold'}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {time}
                </motion.button>
              );
            })}
          </div>

          {/* Confirm Button */}
          <motion.div 
            className="mt-12 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedTime ? 1 : 0 }}
          >
            <button className="magnetic group relative px-12 py-5 bg-gold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] text-obsidian font-bold tracking-widest uppercase text-sm">
              <span className="relative z-10">Confirmar Reserva</span>
              <div className="absolute inset-0 bg-pure-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
