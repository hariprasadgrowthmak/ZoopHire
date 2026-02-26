import { motion } from 'motion/react';
import { ArrowRight, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const BOOKING_URL = 'https://developermdandak.zohobookings.in/#/278759000000906422';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#platform' },
      { label: 'Integrations', href: '#' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Updates', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For HR Teams', href: '#solutions' },
      { label: 'For Agencies', href: '#solutions' },
      { label: 'For Colleges', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'API Docs', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
];

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10 px-6 lg:px-8"
      style={{ background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.07)' }}>

      {/* Very subtle violet tint gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(124,58,237,0.25),rgba(79,70,229,0.15),transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top row — logo + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-14"
          style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>

          {/* Logo + tagline */}
          <div>
            <img
              src="/zoophire-logo.png"
              alt="ZoopHire"
              style={{
                width: '160px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
            <p className="text-sm font-light max-w-xs leading-relaxed" style={{ color: '#9ca3af' }}>
              The new standard in AI-powered recruitment. Built for scale, designed for speed.
            </p>
          </div>

          {/* CTA + social row */}
          <div className="flex flex-col items-start md:items-end gap-5">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(124,58,237,0.35)' }}
              whileTap={{ scale: 0.97 }}
              href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 6px 24px rgba(124,58,237,0.3)' }}>
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href}
                  whileHover={{ scale: 1.1, background: 'rgba(124,58,237,0.08)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ color: '#9ca3af', border: '1px solid rgba(0,0,0,0.08)' }}
                  aria-label={label}>
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14"
          style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          {columns.map((col, ci) => (
            <motion.div key={ci}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: ci * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <h4 className="text-xs font-black uppercase tracking-[0.15em] mb-5" style={{ color: '#374151' }}>{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, li) => (
                  <motion.li key={li} whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                    <a href={link.href}
                      className="text-sm font-light transition-colors duration-200 hover:text-zinc-900"
                      style={{ color: '#6b7280' }}>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10 text-sm">
          <p style={{ color: '#9ca3af' }}>© 2026 ZoopHire. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a key={link} href="#"
                className="transition-colors duration-200 hover:text-zinc-700"
                style={{ color: '#9ca3af' }}>
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
