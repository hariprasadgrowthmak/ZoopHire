import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'ZoopHire cut our time-to-hire from 45 days to 12. The AI screening alone saves our HR team 20+ hours every week. This is the only ATS that actually thinks the way recruiters do.',
    author: 'Sarah J.',
    role: 'CHRO, TechCorp',
    avatar: 'SJ',
    color: '#7c3aed',
    metric: { n: '73%', label: 'faster hiring' },
  },
  {
    quote: 'We manage 14 enterprise clients from one dashboard now. ZoopHire\'s agency features are genuinely built for how placement firms operate — not an afterthought.',
    author: 'Rajesh M.',
    role: 'Director, ApexAgencies',
    avatar: 'RM',
    color: '#4f46e5',
    metric: { n: '40%', label: 'less admin time' },
  },
  {
    quote: 'The candidate pipeline view transformed how our team communicates. Hiring managers stopped emailing us for updates — everything is visible, structured, and real-time.',
    author: 'Elena T.',
    role: 'VP Talent, GlobalBank',
    avatar: 'ET',
    color: '#2563eb',
    metric: { n: '98%', label: 'team adoption' },
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bg1Y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative py-28 px-6 lg:px-8 overflow-hidden" style={{ background: '#f8f8fb' }}>
      {/* Very subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.02) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

      {/* Parallax tint blob */}
      <motion.div style={{ y: bg1Y, background: 'radial-gradient(ellipse,rgba(124,58,237,0.06),transparent 70%)' }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-xl">
          <div className="tag-pill mb-6">
            <span className="accent-dot" />
            Social Proof
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            The ROI is Real.{' '}
            <em className="not-italic text-gradient">Hear from our Partners.</em>
          </h2>
          <p className="mt-5 text-lg font-light" style={{ color: '#6b7280' }}>
            From fast-growing startups to enterprise HR and recruitment agencies — ZoopHire delivers measurable results.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: `0 0 0 1px ${t.color}18, 0 20px 60px rgba(0,0,0,0.09)` }}
              className="group relative rounded-3xl p-8 flex flex-col"
              style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,0.07),0 4px 24px rgba(0,0,0,0.05)', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>

              {/* Coloured top accent */}
              <motion.div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg,${t.color},${t.color}55)` }} />

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6 self-start"
                style={{ background: `${t.color}0d`, color: t.color, border: `1px solid ${t.color}20` }}>
                <span className="text-base font-black">{t.metric.n}</span> {t.metric.label}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, si) => (
                  <motion.div key={si}
                    initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12 + si * 0.04, type: 'spring', stiffness: 500, damping: 22 }}>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base font-light leading-relaxed flex-1 mb-7" style={{ color: '#374151' }}>
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${t.color},${t.color}88)` }}>{t.avatar}</div>
                <div>
                  <div className="text-sm font-bold" style={{ color: '#0a0a0a' }}>{t.author}</div>
                  <div className="text-xs" style={{ color: '#9ca3af' }}>{t.role}</div>
                </div>
                <div className="ml-auto">
                  <Quote className="w-4 h-4 opacity-15" style={{ color: t.color }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
