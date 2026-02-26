import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';

const brands = [
  'Infosys', 'Wipro', 'HDFC Bank', 'Swiggy', 'Razorpay', 'Zomato',
  'Juspay', 'Naukri', 'MakeMyTrip', 'Freshworks',
];

function MarqueeRow({ dir = 1, speed = 40 }: { dir?: number; speed?: number }) {
  const repeated = [...brands, ...brands, ...brands];
  const duration = (brands.length * speed) / 10;

  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right,#ffffff,transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left,#ffffff,transparent)' }} />
      <motion.div
        animate={{ x: dir > 0 ? [0, '-33.33%'] : ['-33.33%', 0] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-4 py-2"
      >
        {repeated.map((brand, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-full flex-shrink-0 select-none"
            style={{ background: '#f4f4f6', border: '1px solid rgba(0,0,0,0.07)' }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white uppercase flex-shrink-0"
              style={{ background: `hsl(${(i * 47) % 360},65%,52%)` }}>
              {brand[0]}
            </div>
            <span className="text-sm font-semibold text-zinc-600 whitespace-nowrap">{brand}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 overflow-hidden" style={{ background: '#ffffff' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10">
        <p className="text-xs font-black uppercase tracking-[0.15em] whitespace-nowrap" style={{ color: '#9ca3af' }}>
          Trusted by 1,000+ companies across India
        </p>
      </motion.div>
      <div>
        <MarqueeRow dir={1} speed={40} />
      </div>
    </section>
  );
}
