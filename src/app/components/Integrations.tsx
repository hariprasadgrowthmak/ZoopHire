import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const integrations = [
  { name: 'LinkedIn', icon: '🔗', desc: 'Job sourcing', color: '#0A66C2' },
  { name: 'Google Meet', icon: '📹', desc: 'Video interviews', color: '#00897B' },
  { name: 'Zoom', icon: '💬', desc: 'Remote interviews', color: '#2D8CFF' },
  { name: 'Outlook', icon: '📧', desc: 'Email scheduling', color: '#0078D4' },
  { name: 'Naukri', icon: '💼', desc: 'Job board', color: '#4A90E2' },
  { name: 'Indeed', icon: '🔍', desc: 'Job board', color: '#2164f3' },
  { name: 'Workday', icon: '⚙️', desc: 'HRMS sync', color: '#c74534' },
  { name: 'Slack', icon: '💬', desc: 'Team alerts', color: '#4A154B' },
];

export function Integrations() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.9]);

  const blobStyle = { background: 'radial-gradient(ellipse,rgba(124,58,237,0.05),transparent 70%)' };

  return (
    <section ref={ref} className="relative py-28 px-6 lg:px-8 overflow-hidden" style={{ background: '#ffffff' }}>
      {/* subtle glow */}
      <motion.div style={{ scale: blobScale, ...blobStyle }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-xl">
          <div className="tag-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
            300+ Integrations
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            Connects with the tools{' '}
            <span className="text-gradient">you already rely on</span>
          </h2>
          <p className="mt-5 text-lg font-light" style={{ color: '#6b7280' }}>
            ZoopHire natively integrates with over 300 job boards, top-tier HRMS platforms, and your daily communication tools.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -7, boxShadow: `0 0 0 1px ${item.color}25, 0 12px 40px rgba(0,0,0,0.09)` }}
              className="group relative bg-white rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>

              {/* Hover tint */}
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.25 }}
                className="absolute inset-0 rounded-2xl"
                style={{ background: `${item.color}06` }} />

              <motion.div whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${item.color}0e` }}>
                {item.icon}
              </motion.div>
              <div className="relative z-10 text-center">
                <div className="text-sm font-bold text-zinc-800">{item.name}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{item.desc}</div>
              </div>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 28 }} whileHover={{ width: 44 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 h-0.5 rounded-full"
                style={{ background: item.color }} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="text-center mt-12">
          <span className="text-sm font-bold text-zinc-400 tracking-[0.18em] uppercase">+ 292 more integrations available</span>
        </motion.div>
      </div>
    </section>
  );
}
