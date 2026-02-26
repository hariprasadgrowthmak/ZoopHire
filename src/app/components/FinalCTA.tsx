import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://developermdandak.zohobookings.in/#/278759000000906422';

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#faf8ff 0%,#f3f0ff 50%,#faf8ff 100%)' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

      {/* Center orb — very faint violet on white */}
      <motion.div animate={{ opacity: [0.35, 0.6, 0.35] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.13),transparent 70%)' }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>

          <div className="tag-pill mb-8 mx-auto w-fit">
            <span className="accent-dot animate-pulse" />
            Get Started Today
          </div>

          <h2 className="font-serif mb-8" style={{ fontSize: 'clamp(38px,5.5vw,72px)', lineHeight: 1.03, color: '#0a0a0a' }}>
            Ready to transform{' '}
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '105%' }} whileInView={{ y: '0%' }}
                viewport={{ once: true }} transition={{ delay: 0.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-gradient">
                your hiring pipeline?
              </motion.span>
            </span>
          </h2>

          <p className="text-xl font-light mb-12" style={{ color: '#6b7280' }}>
            Join the smartest organizations using ZoopHire to find, interview, and hire top talent faster than ever before.
          </p>

          <motion.a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(124,58,237,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="group relative inline-flex items-center gap-2.5 px-10 py-5 rounded-full text-base font-bold text-white overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 8px 32px rgba(124,58,237,0.35)' }}>
            <motion.div animate={{ x: ['-100%', '250%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
              className="absolute inset-y-0 w-1/3 skew-x-12"
              style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)' }} />
            <span className="relative z-10">Book Your Personalized Demo</span>
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="relative z-10">
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 text-sm" style={{ color: '#9ca3af' }}>
            No credit card required · Setup takes less than 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
