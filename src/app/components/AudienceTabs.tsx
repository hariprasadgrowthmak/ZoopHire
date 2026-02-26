import { motion } from 'motion/react';
import { Building, Briefcase, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  {
    id: 'enterprise',
    label: 'In-House HR',
    icon: Building,
    color: '#4f46e5',
    colorPale: 'rgba(79,70,229,0.07)',
    badge: 'Enterprise Focus',
    heading: 'For In-House HR & Enterprise',
    body: 'Align your hiring managers, standardize your interview process, and get a single source of truth. Manage internal employee referrals and multi-brand career pages from one dashboard.',
    items: [
      'Centralized hiring workflows across all departments',
      'Employee referral tracking and management',
      'Multi-brand career pages with unified backend',
      'Compliance and audit-ready reporting',
    ],
  },
  {
    id: 'agencies',
    label: 'Agencies',
    icon: Briefcase,
    color: '#7c3aed',
    colorPale: 'rgba(124,58,237,0.07)',
    badge: 'Agency Operations',
    heading: 'For Recruitment Agencies',
    body: 'Manage multiple clients with ease. Leverage 300+ job board integrations (LinkedIn, Naukri, Indeed), build massive passive talent pools, and track your team\'s specific sourcing metrics.',
    items: [
      'Multi-client management with separate pipelines',
      '300+ job board integrations (LinkedIn, Naukri, Indeed)',
      'Passive talent pool database management',
      'Team performance and sourcing metrics tracking',
    ],
  },
];

export function AudienceTabs() {
  const [active, setActive] = useState('enterprise');
  const tab = tabs.find(t => t.id === active)!;

  return (
    <section id="solutions" className="py-28 px-6 lg:px-8" style={{ background: '#faf8ff' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl">
          <div className="tag-pill mb-6">
            <span className="accent-dot" />
            Built For You
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            Built for the{' '}
            <span className="text-gradient">complexities</span>{' '}
            of modern teams
          </h2>
        </motion.div>

        {/* Custom tab selector */}
        <div className="flex gap-2 p-1.5 rounded-2xl w-fit mb-12"
          style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.06)' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: active === t.id ? '#ffffff' : 'transparent',
                color: active === t.id ? t.color : '#6b7280',
                boxShadow: active === t.id ? '0 1px 4px rgba(0,0,0,0.08),0 2px 8px rgba(0,0,0,0.05)' : 'none',
              }}>
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div key={active}
          initial={{ opacity: 0, y: 16, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,0.07),0 8px 40px rgba(0,0,0,0.06)', border: 'none' }}>

          {/* Accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
            style={{ background: `linear-gradient(90deg,${tab.color},${tab.color}88)` }} />
          {/* Subtle corner glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle,${tab.color}18,transparent)` }} />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: `${tab.color}0e`, color: tab.color, border: `1px solid ${tab.color}20` }}>
                <tab.icon className="w-3.5 h-3.5" />
                {tab.badge}
              </div>
              <h3 className="text-3xl font-bold mb-5" style={{ color: '#0a0a0a' }}>{tab.heading}</h3>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: '#6b7280' }}>{tab.body}</p>
              <ul className="space-y-3.5">
                {tab.items.map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: tab.color }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#374151' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — visual mock */}
            <div className="rounded-2xl p-8 min-h-[300px] flex flex-col justify-center items-center gap-4 relative"
              style={{ background: '#f8f7ff', border: '1px solid rgba(0,0,0,0.06)' }}>
              {[1, 2, 3].map((_, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,0.06),0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div className="w-9 h-9 rounded-full flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${tab.color}40,${tab.color}20)` }} />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 rounded-full" style={{ background: 'rgba(0,0,0,0.08)', width: `${60 + i * 15}%` }} />
                    <div className="h-2 rounded-full" style={{ background: 'rgba(0,0,0,0.05)', width: `${45 + i * 10}%` }} />
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: tab.color }}>✓</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
