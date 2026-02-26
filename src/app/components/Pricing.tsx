import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Check, X, Lock, ChevronDown, ChevronUp, Sparkles, ArrowRight, Rocket, Zap } from 'lucide-react';

const BOOKING_URL = 'https://developermdandak.zohobookings.in/#/278759000000906422';

const tiers = [
  {
    name: 'Starter',
    price: '₹1,00,000',
    period: '/mo',
    bestFor: 'Small teams (1–10 users)',
    popular: false,
    accent: '#4f46e5',
    features: [
      'Deployment on your AWS/Azure/GCP',
      'Core ATS features',
      'AI CV scoring & matching',
      'Up to 5 active jobs',
      'Basic reports & analytics',
      'Email support (24–48hr response)',
      'Monthly maintenance & updates',
    ],
    infra: ['Cloud: ~₹3,000–5,000/mo', 'AI API: ~₹1,000–3,000/mo'],
    setupFee: '₹50,000 one-time',
    cta: 'Schedule Deployment Call',
  },
  {
    name: 'Professional',
    price: '₹1,50,000',
    period: '/mo',
    bestFor: 'Growing teams (11–50 users)',
    popular: true,
    accent: '#7c3aed',
    features: [
      'Everything in Starter, plus:',
      'AI Job Description Generator',
      'AI Interview Recording & Summaries',
      'Up to 20 active jobs',
      'Advanced reports & pipeline analytics',
      '300+ job board integrations',
      'Priority support (email + chat, 12hr)',
      'Bi-weekly check-ins',
    ],
    infra: ['Cloud: ~₹8,000–12,000/mo', 'AI API: ~₹3,000–6,000/mo'],
    setupFee: '₹1,00,000 one-time',
    cta: 'Schedule Deployment Call',
  },
  {
    name: 'Enterprise',
    price: '₹2,00,000+',
    period: '/mo',
    bestFor: 'Large companies & agencies (51+ users)',
    popular: false,
    accent: '#2563eb',
    features: [
      'Everything in Professional, plus:',
      'White-label branding',
      'Custom feature development',
      'API access & webhooks',
      'Unlimited active jobs & users',
      'Multi-brand/multi-client support',
      'Dedicated account manager',
      '99.9% SLA guarantee',
      '24/7 priority support',
    ],
    infra: ['Cloud: ~₹15,000–30,000/mo', 'AI API: ~₹8,000–15,000/mo'],
    setupFee: 'Custom (₹2,00,000–5,00,000)',
    cta: 'Contact Sales',
  },
];

const comparison = [
  { feature: 'Users', starter: '1–10', professional: '11–50', enterprise: 'Unlimited' },
  { feature: 'Active Jobs', starter: '5', professional: '20', enterprise: 'Unlimited' },
  { feature: 'AI CV Scoring', starter: true, professional: true, enterprise: true },
  { feature: 'AI JD Generator', starter: false, professional: true, enterprise: true },
  { feature: 'Interview Recording', starter: false, professional: true, enterprise: true },
  { feature: 'Job Board Integrations', starter: '50+', professional: '300+', enterprise: '300+' },
  { feature: 'Reports', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
  { feature: 'Support', starter: 'Email', professional: 'Email + Chat', enterprise: '24/7 Dedicated' },
  { feature: 'White-label', starter: false, professional: false, enterprise: true },
  { feature: 'API Access', starter: false, professional: false, enterprise: true },
  { feature: 'Custom Features', starter: false, professional: false, enterprise: true },
];

const saasFeatures = [
  'Instant signup, no deployment needed',
  'All infrastructure & AI credits included in one price',
  'Pay per user or per job (flexible billing)',
  '14-day free trial',
  'Start hiring in 5 minutes',
];

function Val({ v, accent }: { v: boolean | string; accent: string }) {
  if (typeof v === 'boolean')
    return v
      ? <Check className="w-5 h-5 mx-auto" style={{ color: accent }} />
      : <X className="w-5 h-5 mx-auto text-zinc-300" />;
  return <span className="text-zinc-700 text-sm">{v}</span>;
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState<'managed' | 'saas'>('managed');
  const [showComparison, setShowComparison] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="pricing" className="relative py-28 px-6 lg:px-8 overflow-hidden" style={{ background: '#fafafa' }}>
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(0,0,0,0.04) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl">
          <div className="tag-pill mb-6">
            <span className="accent-dot" />
            Pricing
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            Transparent pricing,{' '}
            <span className="text-gradient">zero surprises.</span>
          </h2>
          <p className="mt-5 text-lg font-light" style={{ color: '#6b7280' }}>
            Deployed on your cloud. Priced per team size. Full control stays with you.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex items-center gap-3 mb-12 flex-wrap">
          <button onClick={() => setActiveTab('managed')}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: activeTab === 'managed' ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : '#ffffff',
              color: activeTab === 'managed' ? '#ffffff' : '#6b7280',
              boxShadow: activeTab === 'managed' ? '0 4px 16px rgba(124,58,237,0.3)' : '0 0 0 1px rgba(0,0,0,0.08)',
            }}>
            Managed Cloud Deployment
          </button>
          <button onClick={() => setActiveTab('saas')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: activeTab === 'saas' ? 'linear-gradient(135deg,#0f172a,#1e293b)' : '#ffffff',
              color: activeTab === 'saas' ? '#ffffff' : '#6b7280',
              boxShadow: activeTab === 'saas' ? '0 4px 16px rgba(0,0,0,0.25)' : '0 0 0 1px rgba(0,0,0,0.08)',
            }}>
            {activeTab !== 'saas' && <Lock className="w-3.5 h-3.5" />}
            SaaS Cloud (Coming Soon)
          </button>
        </div>

        <AnimatePresence mode="wait">
          {/* ---- MANAGED CLOUD TAB ---- */}
          {activeTab === 'managed' && (
            <motion.div key="managed"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>

              {/* Cards grid */}
              <div className="grid lg:grid-cols-3 gap-6 mb-16">
                {tiers.map((tier, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, boxShadow: `0 0 0 1px ${tier.accent}25, 0 20px 60px rgba(0,0,0,0.1)` }}
                    className={`relative rounded-3xl p-8 flex flex-col ${tier.popular ? 'lg:-mt-4 lg:mb-0' : ''}`}
                    style={{
                      background: tier.popular ? `linear-gradient(160deg,${tier.accent}10 0%,#ffffff 40%)` : '#ffffff',
                      boxShadow: tier.popular
                        ? `0 0 0 1.5px ${tier.accent}30, 0 8px 40px rgba(0,0,0,0.08)`
                        : '0 0 0 1px rgba(0,0,0,0.07),0 4px 24px rgba(0,0,0,0.05)',
                      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                    }}>

                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                      style={{ background: `linear-gradient(90deg,${tier.accent},${tier.accent}55)` }} />

                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                        style={{ background: `linear-gradient(135deg,${tier.accent},${tier.accent}cc)` }}>
                        <Sparkles className="w-3 h-3" />⭐ Most Popular
                      </div>
                    )}

                    <h3 className="text-xl font-bold mb-1" style={{ color: '#0a0a0a' }}>{tier.name}</h3>
                    <p className="text-xs font-medium mb-5" style={{ color: '#9ca3af' }}>{tier.bestFor}</p>

                    <div className="mb-6">
                      <span className="text-4xl font-black tracking-tight" style={{ color: '#0a0a0a' }}>{tier.price}</span>
                      {tier.period && <span className="text-sm ml-1.5 font-medium text-zinc-500">{tier.period}</span>}
                    </div>

                    <ul className="space-y-2.5 mb-7 flex-1">
                      {tier.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />
                          <span className="text-sm font-light" style={{ color: '#374151' }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-2xl p-4 mb-6"
                      style={{ background: '#f8f8fb', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2.5" style={{ color: '#9ca3af' }}>Infrastructure Costs (Separate)</p>
                      <ul className="space-y-1.5">
                        {tier.infra.map((c, ci) => (
                          <li key={ci} className="text-xs font-light flex items-start gap-2" style={{ color: '#6b7280' }}>
                            <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: tier.accent }} />{c}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 text-xs font-semibold" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', color: '#374151' }}>
                        Setup Fee: {tier.setupFee}
                      </div>
                    </div>

                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: tier.popular ? `linear-gradient(135deg,${tier.accent},${tier.accent}cc)` : '#ffffff',
                        color: tier.popular ? '#ffffff' : tier.accent,
                        border: tier.popular ? 'none' : `1.5px solid ${tier.accent}30`,
                        boxShadow: tier.popular ? `0 6px 24px ${tier.accent}35` : '0 0 0 1px rgba(0,0,0,0.07)',
                      }}>
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Comparison */}
              <div className="text-center">
                <motion.button onClick={() => setShowComparison(!showComparison)}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold"
                  style={{ background: '#ffffff', color: '#374151', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  Compare All Features {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </motion.button>

                <AnimatePresence>
                  {showComparison && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-8 rounded-3xl overflow-hidden text-left"
                      style={{ background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,0.07),0 8px 40px rgba(0,0,0,0.06)' }}>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                              {['Feature', 'Starter', 'Professional', 'Enterprise'].map((h, hi) => (
                                <th key={hi} className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider"
                                  style={{ color: hi === 2 ? '#7c3aed' : '#9ca3af', background: hi === 2 ? 'rgba(124,58,237,0.04)' : '#ffffff' }}>
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {comparison.map((row, ri) => (
                              <tr key={ri} className="hover:bg-zinc-50 transition-colors"
                                style={{ borderBottom: ri < comparison.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                                <td className="px-6 py-4 text-sm font-medium" style={{ color: '#374151' }}>{row.feature}</td>
                                <td className="px-6 py-4 text-center"><Val v={row.starter} accent="#4f46e5" /></td>
                                <td className="px-6 py-4 text-center" style={{ background: 'rgba(124,58,237,0.03)' }}><Val v={row.professional} accent="#7c3aed" /></td>
                                <td className="px-6 py-4 text-center"><Val v={row.enterprise} accent="#2563eb" /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ---- SAAS CLOUD TAB ---- */}
          {activeTab === 'saas' && (
            <motion.div key="saas"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>

              {/* Section headline */}
              <div className="text-center mb-14">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0a0a0a' }}>
                  Fully Managed SaaS —{' '}
                  <span style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Coming Q3 2026
                  </span>
                </h3>
                <p className="text-lg font-light max-w-lg mx-auto" style={{ color: '#6b7280' }}>
                  We handle infrastructure, credits, and billing. You just log in and hire.
                </p>
              </div>

              {/* Single centered card */}
              <div className="max-w-md mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl p-10 text-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(160deg,rgba(124,58,237,0.06),rgba(79,70,229,0.04),#ffffff)',
                    boxShadow: '0 0 0 1.5px rgba(124,58,237,0.15),0 16px 60px rgba(124,58,237,0.1)',
                    opacity: 0.92,
                  }}>

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                    style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5,#2563eb)' }} />

                  {/* Badges */}
                  <div className="flex items-center justify-center gap-3 mb-7">
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-white"
                      style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)' }}>
                      <Rocket className="w-4 h-4" />
                      🚀 SaaS Cloud
                    </div>
                    <div className="px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-amber-700"
                      style={{ background: '#fef3c7', border: '1px solid #fcd34d' }}>
                      Coming Soon
                    </div>
                  </div>

                  {/* Price */}
                  <p className="text-sm font-black uppercase tracking-[0.15em] mb-3" style={{ color: '#9ca3af' }}>Starting at</p>
                  <div className="mb-2">
                    <span className="text-5xl font-black tracking-tight" style={{ color: '#0a0a0a' }}>₹999</span>
                    <span className="text-base ml-2 font-medium text-zinc-500">/user/month</span>
                  </div>
                  <p className="text-xs mb-8" style={{ color: '#9ca3af' }}>Final pricing TBD · All infrastructure included</p>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-10 text-left">
                    {saasFeatures.map((f, i) => (
                      <motion.li key={i}
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                        className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold"
                          style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>✓</div>
                        <span className="text-sm font-light" style={{ color: '#374151' }}>{f}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Waitlist email form */}
                  {!submitted ? (
                    <div className="space-y-3">
                      <p className="text-sm font-semibold mb-4" style={{ color: '#374151' }}>
                        Join Early Access Waitlist
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                          style={{ background: '#f4f4f7', border: '1px solid rgba(0,0,0,0.09)', color: '#0a0a0a' }}
                        />
                        <motion.button
                          onClick={() => { if (email.includes('@')) setSubmitted(true); }}
                          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                          className="px-5 py-3 rounded-xl text-sm font-bold text-white"
                          style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 4px 16px rgba(124,58,237,0.35)' }}>
                          Join Waitlist
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      className="py-4 px-6 rounded-2xl"
                      style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.2)' }}>
                      <div className="text-2xl mb-1">🎉</div>
                      <p className="text-sm font-bold" style={{ color: '#7c3aed' }}>You're on the list!</p>
                      <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>We'll notify you when SaaS Cloud launches.</p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
