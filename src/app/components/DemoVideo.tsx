import { motion } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';

const YOUTUBE_ID = 'cyi5dCUt1DI';
const THUMB = '/video-thumb.jpg';   // local thumbnail (Zoophire AI Recruitment.jpg)

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative py-28 px-6 lg:px-8 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.022) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl">
          <div className="tag-pill mb-6">
            <span className="accent-dot animate-pulse" />
            Product Tour
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            See ZoopHire{' '}
            <em className="not-italic text-gradient">in Action.</em>
          </h2>
          <p className="mt-5 text-lg font-light" style={{ color: '#6b7280' }}>
            Watch how a placement head goes from job creation to offer rollout in under 3 minutes.
          </p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.08),0 24px 80px rgba(0,0,0,0.12)' }}>

          <div className="aspect-video bg-zinc-900 relative">
            {!playing ? (
              <>
                {/* Actual YouTube thumbnail */}
                <img
                  src={THUMB}
                  alt="ZoopHire — AI Just Fixed Hiring"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.15) 60%,transparent 100%)' }} />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button onClick={() => setPlaying(true)}
                    whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                    className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                      className="absolute w-28 h-28 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.25)' }} />
                    {/* White button with violet icon */}
                    <div className="relative w-[76px] h-[76px] rounded-full flex items-center justify-center"
                      style={{ background: '#ffffff', boxShadow: '0 8px 32px rgba(0,0,0,0.45)' }}>
                      <Play className="w-8 h-8 ml-1.5 fill-violet-600 text-violet-600" />
                    </div>
                  </motion.button>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-6 left-6">
                  <div className="text-white font-bold text-lg drop-shadow">ZoopHire Full Walkthrough</div>
                  <div className="text-sm mt-0.5 drop-shadow" style={{ color: 'rgba(255,255,255,0.65)' }}>3 min · From job creation to offer rollout</div>
                </div>
              </>
            ) : (
              <iframe className="w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="ZoopHire Product Walkthrough" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            )}
          </div>
        </motion.div>

        {/* Below video link */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-8 text-sm" style={{ color: '#9ca3af' }}>
          Don't want to watch?{' '}
          <a href="https://developermdandak.zohobookings.in/#/278759000000906422" target="_blank" rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-violet-600 transition-colors"
            style={{ color: '#7c3aed' }}>Book a live walkthrough →</a>
        </motion.p>
      </div>
    </section>
  );
}
