import { motion } from 'motion/react';
import { Brain, Clock, Building2, BarChart3, ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://developermdandak.zohobookings.in/#/278759000000906422';

export function Features() {
  return (
    <section id="platform" style={{ background: '#fafafa' }} className="py-28 px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.025) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-xl">
          <div className="tag-pill mb-6">
            <span className="accent-dot" />
            The Platform
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            Core <span className="text-gradient">Features</span>
          </h2>
          <p className="mt-5 text-lg font-light" style={{ color: '#6b7280' }}>
            One unified platform. Every workflow. Zero spreadsheets.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* Card 1 — AI Pipeline (2-cols) */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(124,58,237,0.12), 0 16px 48px rgba(0,0,0,0.1)' }}
            className="md:col-span-2 group relative rounded-3xl p-8 overflow-hidden cursor-pointer"
            style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.05)', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
            <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5,#2563eb)' }} />

            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(124,58,237,0.08)' }}>
              <Brain className="w-5 h-5 text-violet-600" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 mb-2">AI-Powered</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#0a0a0a' }}>Intelligent Candidate Pipeline</h3>
            <p className="text-base font-light leading-relaxed mb-7" style={{ color: '#6b7280' }}>
              Customize pipelines for any role. Our AI CV Review automatically scores candidates on 'Must-Have' and 'Nice-to-Have' criteria, turning 1,000 applicants into a <strong className="font-semibold text-zinc-800">top-10 shortlist instantly.</strong>
            </p>

            <div className="space-y-2.5">
              {[
                { label: 'Must-Have: React, Node.js', score: 98, color: '#7c3aed' },
                { label: 'Nice-to-Have: AWS, Docker', score: 85, color: '#4f46e5' },
                { label: 'Experience: 4–6 years', score: 92, color: '#2563eb' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <div className="flex-1 rounded-xl px-3 h-9 flex items-center text-sm font-medium"
                    style={{ background: '#f7f7fa', border: '1px solid rgba(0,0,0,0.05)', color: '#374151' }}>{item.label}</div>
                  <div className="w-14 h-9 rounded-xl flex items-center justify-center text-sm font-black"
                    style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}20` }}>{item.score}%</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">
              See AI scoring in action <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2 — Interview Hub (dark accent card) */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(79,70,229,0.25)' }}
            className="relative rounded-3xl p-8 overflow-hidden cursor-pointer"
            style={{ background: 'linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%)', boxShadow: '0 8px 32px rgba(79,70,229,0.2)', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-25"
              style={{ background: 'radial-gradient(circle,#a78bfa,transparent)' }} />

            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>No More Ping-Pong</div>
            <h3 className="text-xl font-bold text-white mb-3">Seamless Interview Hub</h3>
            <p className="text-base leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.7)' }}>
              No more email ping-pong. Utilize self-scheduling links, built-in AI Notetakers for Google Meet/Zoom, and centralized feedback scorecards.
            </p>
            <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div className="flex gap-1.5">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className="text-[9px] font-bold mb-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{d}</div>
                    <div className="rounded-lg h-8 flex items-center justify-center text-[10px] font-bold"
                      style={{ background: i === 2 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)', color: i === 2 ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                      {i === 2 ? '3 Int.' : '–'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Workforce Planning */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(6,182,212,0.15), 0 16px 48px rgba(0,0,0,0.1)' }}
            className="rounded-3xl p-8 overflow-hidden cursor-pointer"
            style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.05)', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
            <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg,#06b6d4,#3b82f6)' }} />

            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(6,182,212,0.07)' }}>
              <Building2 className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mb-2">Plan Ahead</div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>Strategic Workforce Planning</h3>
            <p className="text-sm font-light leading-relaxed mb-5" style={{ color: '#6b7280' }}>
              Align management and recruiters. Track headcount requisitions, approvals, and budget all in one secure module before a job is even published.
            </p>
            <div className="space-y-2">
              {[['Engineering', 12, '#06b6d4'], ['Design', 4, '#8b5cf6'], ['Marketing', 6, '#f59e0b']].map(([dept, n, c], i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-xs font-semibold text-zinc-500 w-20 flex-shrink-0">{dept}</div>
                  <div className="flex-1 h-1.5 rounded-full bg-zinc-100">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${(n as number) * 6}%` }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                      className="h-full rounded-full" style={{ background: c as string }} />
                  </div>
                  <div className="text-xs font-bold text-zinc-600">{n}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4 — Analytics (2-cols, light surface with violet undertone) */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(124,58,237,0.12), 0 16px 48px rgba(0,0,0,0.1)' }}
            className="md:col-span-2 group relative rounded-3xl p-8 overflow-hidden cursor-pointer"
            style={{ background: '#faf8ff', boxShadow: '0 0 0 1px rgba(124,58,237,0.08), 0 4px 24px rgba(0,0,0,0.04)', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>

            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.5),transparent)' }} />

            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(124,58,237,0.1)' }}>
              <BarChart3 className="w-5 h-5 text-violet-600" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 mb-2">Enterprise Analytics</div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>Deep-Dive Analytics</h3>
            <p className="text-base font-light leading-relaxed mb-7" style={{ color: '#6b7280' }}>
              Real-time visibility. Track offer-to-hire conversions, funnel drop-offs, and recruiter performance with export-ready, enterprise-grade reporting.
            </p>
            <div className="flex items-end gap-2 h-20">
              {[30, 52, 38, 70, 48, 84, 60, 95, 74, 100, 80, 66].map((h, j) => (
                <motion.div key={j} initial={{ height: 0 }} whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }} transition={{ delay: j * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 rounded-t-sm"
                  style={{ background: h > 80 ? 'linear-gradient(to top,#7c3aed,#a78bfa)' : h > 60 ? '#c4b5fd' : '#ede9fe' }} />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">
              View analytics dashboard <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.6 }}
          className="text-center mt-16">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 6px 24px rgba(124,58,237,0.3)' }}>
            See All Features <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
