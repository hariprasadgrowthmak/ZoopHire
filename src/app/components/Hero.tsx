import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { useState, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const BOOKING_URL = 'https://developermdandak.zohobookings.in/#/278759000000906422';

/* Animated counter */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  return (
    <span ref={r => {
      (ref as any).current = r;
      if (r && !started.current) {
        const io = new IntersectionObserver(([e]) => {
          if (!e.isIntersecting) return;
          started.current = true;
          let t: number | null = null;
          const dur = 2000;
          const step = (ts: number) => {
            if (!t) t = ts;
            const p = Math.min((ts - t) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            r.textContent = Math.floor(ease * to) + suffix;
            if (p < 1) requestAnimationFrame(step);
            else r.textContent = to + suffix;
          };
          requestAnimationFrame(step);
        }, { threshold: 0.5 });
        io.observe(r);
      }
    }}>0{suffix}</span>
  );
}

/* Premium floating UI card */
function FloatCard({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}
      style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.08), 0 32px 64px rgba(0,0,0,0.06)', ...style }}>
      {children}
    </div>
  );
}

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '18%']), { stiffness: 60, damping: 20 });
  const textOp = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), { stiffness: 60, damping: 20 });
  const cardY1 = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '10%']), { stiffness: 40, damping: 15 });
  const cardY2 = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '20%']), { stiffness: 40, damping: 15 });

  return (
    <>
      <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden flex flex-col"
        style={{ background: 'linear-gradient(160deg,#faf8ff 0%,#ffffff 50%,#f8f9ff 100%)' }}>

        {/* Ambient radial glows (very subtle — luxury feel) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={{ opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full"
            style={{ width: 900, height: 700, background: 'radial-gradient(ellipse,rgba(124,58,237,0.07) 0%,transparent 70%)', top: -260, left: -200 }} />
          <motion.div animate={{ opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute rounded-full"
            style={{ width: 700, height: 600, background: 'radial-gradient(ellipse,rgba(79,70,229,0.06) 0%,transparent 70%)', top: -100, right: -80 }} />
          {/* Dot grid */}
          <div className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(circle,rgba(0,0,0,0.055) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>

        {/* Main layout */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center pt-28 pb-20">

          {/* Left — editorial text */}
          <motion.div style={{ y: textY, opacity: textOp }}>
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="tag-pill mb-10"
            >
              <span className="accent-dot animate-pulse" />
              ✨ The New Standard in Enterprise Recruitment
            </motion.div>

            {/* Headline */}
            <h1 className="font-serif mb-7" style={{ fontSize: 'clamp(38px,5.2vw,70px)', lineHeight: 1.05, color: '#0a0a0a' }}>
              {['Stop Managing Tools.', 'Start Hiring Talent.'].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span className="inline-block"
                    initial={{ y: '108%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.14, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}>
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span className="inline-block text-gradient"
                  initial={{ y: '108%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ delay: 0.53, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}>
                  Find. Hire. Win.
                </motion.span>
              </span>
            </h1>

            {/* Sub */}
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.9 }}
              className="text-lg font-light leading-relaxed mb-10 max-w-md"
              style={{ color: '#6b7280' }}>
              The end-to-end recruitment platform that gives your team a single, structured pipeline — from headcount requisition to signed offer. Say goodbye to messy spreadsheets and disconnected portals.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="flex flex-wrap gap-3 mb-14">
              <motion.a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(124,58,237,0.45)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="group relative flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 6px 24px rgba(124,58,237,0.35)' }}
              >
                {/* shine */}
                <motion.div animate={{ x: ['-100%', '240%'] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.5 }}
                  className="absolute inset-y-0 w-1/3 skew-x-12"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)' }} />
                <span className="relative z-10">Book a Personalized Demo</span>
                <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="relative z-10">
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>

              <motion.button onClick={() => setVideoOpen(true)}
                whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="flex items-center gap-3 px-6 py-4 rounded-full text-sm font-semibold"
                style={{ color: '#374151', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <Play className="w-3 h-3 ml-0.5 fill-violet-600 text-violet-600" />
                </span>
                Watch the 3-Minute Product Tour
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.7 }}
              className="flex items-center gap-8 pt-6"
              style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
              {[
                { n: 1000, s: '+', label: 'Companies' },
                { n: 40, s: '%', label: 'Faster Hiring' },
                { n: 98, s: '%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-2xl font-black tracking-tight text-gradient">
                    <Counter to={stat.n} suffix={stat.s} />
                  </div>
                  <div className="text-xs font-medium mt-0.5" style={{ color: '#9ca3af' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — floating UI cards */}
          <div className="relative hidden lg:block h-[660px]">

            {/* Card 1 — Pipeline */}
            <motion.div style={{ y: cardY1 }}
              initial={{ opacity: 0, x: 40, scale: 0.93 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.65, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 w-72 animate-float-soft"
            >
              <FloatCard>
                <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5,#2563eb)' }} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Pipeline Overview</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-green-600">LIVE</span>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: 'Applied', n: 248, w: 100, c: '#7c3aed' },
                      { label: 'Screened', n: 86, w: 35, c: '#4f46e5' },
                      { label: 'Interview', n: 31, w: 13, c: '#2563eb' },
                      { label: 'Offer', n: 12, w: 5, c: '#059669' },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="text-[11px] font-medium text-zinc-500 w-16 flex-shrink-0">{s.label}</div>
                        <div className="flex-1 h-1.5 rounded-full bg-zinc-100">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${s.w}%` }}
                            transition={{ delay: 1.3 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full" style={{ background: s.c }} />
                        </div>
                        <div className="text-[11px] font-black text-zinc-800 w-6 text-right">{s.n}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FloatCard>
            </motion.div>

            {/* Card 2 — AI Match */}
            <motion.div style={{ y: cardY2 }}
              initial={{ opacity: 0, x: -20, scale: 0.93 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.85, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-6 right-0 w-60"
            >
              <FloatCard>
                <div className="p-5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">AI Match Score</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-xs text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>PS</div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900">Priya Sharma</div>
                      <div className="text-[11px] text-zinc-500">Sr. Frontend Engineer</div>
                    </div>
                  </div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <svg viewBox="0 0 80 50" className="w-full">
                      <path d="M 5 45 A 38 38 0 0 1 75 45" fill="none" stroke="#f3f4f6" strokeWidth="6" strokeLinecap="round" />
                      <motion.path d="M 5 45 A 38 38 0 0 1 75 45" fill="none" stroke="url(#hg)" strokeWidth="6" strokeLinecap="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 0.94 }}
                        transition={{ delay: 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }} />
                      <defs>
                        <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-end justify-center pb-1">
                      <span className="text-2xl font-black text-zinc-900">94%</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: 'rgba(5,150,105,0.08)', color: '#059669' }}>
                      ✓ Strong Match
                    </span>
                  </div>
                </div>
              </FloatCard>
            </motion.div>

            {/* Card 3 — Interviews */}
            <motion.div style={{ y: cardY1 }}
              initial={{ opacity: 0, y: 30, scale: 0.93 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.05, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[230px] left-6 right-6"
            >
              <FloatCard>
                <div className="px-5 py-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Today's Interviews</div>
                  <div className="space-y-2">
                    {[
                      { name: 'Rohit Kumar', role: 'Backend Engineer', time: '10:30 AM', color: '#4f46e5', ini: 'RK' },
                      { name: 'Meera Patel', role: 'Product Manager', time: '2:00 PM', color: '#7c3aed', ini: 'MP' },
                      { name: 'Arjun Singh', role: 'DevOps Lead', time: '4:30 PM', color: '#059669', ini: 'AS' },
                    ].map((item, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                        style={{ background: '#f9fafb', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
                          style={{ background: item.color }}>{item.ini}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-zinc-800">{item.name}</div>
                          <div className="text-[10px] text-zinc-500">{item.role}</div>
                        </div>
                        <div className="text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0"
                          style={{ background: 'rgba(124,58,237,0.08)', color: '#6d28d9' }}>{item.time}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FloatCard>
            </motion.div>

            {/* Card 4 — Hiring velocity bars */}
            <motion.div style={{ y: cardY2 }}
              initial={{ opacity: 0, x: 20, scale: 0.93 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1.25, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 right-0 w-56"
            >
              <FloatCard>
                <div className="p-5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Hiring Velocity</div>
                  <div className="flex items-end gap-1 h-14">
                    {[35, 52, 42, 70, 50, 85, 60, 95, 70, 100].map((h, i) => (
                      <motion.div key={i}
                        initial={{ height: 0 }} animate={{ height: `${h}%` }}
                        transition={{ delay: 1.7 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 rounded-t-sm"
                        style={{ background: h > 75 ? 'linear-gradient(to top,#7c3aed,#a78bfa)' : '#e9d5ff' }} />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400">10 weeks</span>
                    <span className="text-[10px] font-bold text-green-600">↑ 38%</span>
                  </div>
                </div>
              </FloatCard>
            </motion.div>

            {/* Floating pill — offer accepted */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-12 left-0 flex items-center gap-2 px-4 py-2.5 rounded-full"
              style={{ background: '#ffffff', border: '1px solid rgba(5,150,105,0.15)', boxShadow: '0 4px 16px rgba(5,150,105,0.12)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-bold text-green-700">Offer accepted · Anjali K. ✓</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom brand logos strip */}
        <div className="relative z-10 border-t border-zinc-100 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 opacity-40">
            {['Infosys', 'Wipro', 'HDFC Bank', 'Swiggy', 'Razorpay', 'Zomato'].map((b, i) => (
              <span key={i} className="text-sm font-bold text-zinc-500 tracking-wider uppercase">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Video lightbox */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}>
            <motion.div
              initial={{ scale: 0.85, y: 44 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.15),0 48px 100px rgba(0,0,0,0.6)' }}>
              <div className="aspect-video">
                <iframe className="w-full h-full"
                  src="https://www.youtube.com/embed/cyi5dCUt1DI?si=kXLra1S77aX_4PO1&autoplay=1"
                  title="ZoopHire walkthrough" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <button onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold text-white"
                style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
