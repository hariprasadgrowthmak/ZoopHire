import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BOOKING_URL = 'https://developermdandak.zohobookings.in/#/278759000000906422';
const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? '10px 0' : '20px 0',
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.04)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.a href="/"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src="/zoophire-logo.png"
              alt="ZoopHire"
              style={{
                width: '110px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </motion.a>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a key={i} href={link.href}
                whileHover={{ color: '#0a0a0a' }}
                className="text-sm font-medium transition-colors"
                style={{ color: '#6b7280' }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA + mobile */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 4px 14px rgba(124,58,237,0.35)' }}
            >
              Book a Demo
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl transition-colors"
              style={{ color: '#374151', background: 'rgba(0,0,0,0.04)' }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.06)' }}
              className="md:hidden mt-3 pt-4 pb-3 space-y-1"
            >
              {NAV_LINKS.map((link, i) => (
                <a key={i} href={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
                  onClick={() => setMobileOpen(false)}>{link.label}</a>
              ))}
              <div className="pt-2 px-2">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 rounded-2xl text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
                >Book a Demo</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
