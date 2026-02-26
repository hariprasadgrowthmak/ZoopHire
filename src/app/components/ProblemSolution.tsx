import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const oldWay = [
  'Juggling 5 different tools for sourcing, tracking, and interviewing',
  'Manual resume screening taking hundreds of hours',
  'Zero visibility into interview feedback for management',
  'Offer decisions made with incomplete, scattered information',
  'Recruiters spending 80% of time on admin, not hiring',
];

const newWay = [
  'One unified ATS platform handling the entire lifecycle',
  'AI-powered CV scoring to surface top talent instantly',
  'Centralized reporting and automated interview workflows',
  'Full pipeline visibility from requisition to signed offer',
  'Recruiters focused on people, not spreadsheets',
];

export function ProblemSolution() {
  return (
    <section className="relative py-28 px-6 lg:px-8 overflow-hidden" style={{ background: '#fafafa' }}>
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(0,0,0,0.04) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-xl">
          <div className="tag-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
            The Problem
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            Campus & Corporate Hiring is Broken.{' '}
            <span className="text-gradient">We Fixed It.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Old Way */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-8"
            style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(239,68,68,0.1),0 4px 24px rgba(0,0,0,0.05)' }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <X className="w-4.5 h-4.5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: '#0a0a0a' }}>The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {oldWay.map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                  className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light leading-relaxed" style={{ color: '#525252' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ZoopHire Way */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-8"
            style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(124,58,237,0.12),0 4px 24px rgba(124,58,237,0.07)' }}>
            <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5,#2563eb)' }} />
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)' }}>
                <Check className="w-4.5 h-4.5 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: '#0a0a0a' }}>The ZoopHire Way</h3>
            </div>
            <ul className="space-y-4">
              {newWay.map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }}
                  className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light leading-relaxed" style={{ color: '#374141' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
