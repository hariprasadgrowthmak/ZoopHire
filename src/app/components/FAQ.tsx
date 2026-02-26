import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What's the difference between Managed Cloud and SaaS Cloud?",
    a: "Managed Cloud: We deploy ZoopHire on your AWS/Azure/GCP. You own your data, pay for your infrastructure separately, and we charge a monthly management fee. SaaS Cloud (Coming Soon): We host everything — one all-inclusive price per user/job.",
  },
  {
    q: 'Why choose Managed Cloud over waiting for SaaS?',
    a: 'Full data ownership & control (critical for compliance). Customizable deployment tailored to your infra. Available now — and often more cost-effective for large teams (51+ users).',
  },
  {
    q: 'What are the typical monthly infrastructure costs?',
    a: 'Starter (1-10 users): ₹3,000–5,000/month cloud + ₹1,000–3,000/month AI. Professional (11-50): ₹8,000–12,000/month + ₹3,000–6,000/month AI. Enterprise (51+): ₹15,000–30,000/month + ₹8,000–15,000/month AI.',
  },
  {
    q: 'What happens if I want to upgrade from Starter to Professional?',
    a: 'Simple. We enable additional features in your deployment. Your monthly management fee adjusts, and we estimate any change in infrastructure/AI costs.',
  },
  {
    q: 'Can I switch to SaaS Cloud when it launches?',
    a: "Absolutely. We'll migrate your data at no additional cost if you prefer the fully managed model.",
  },
  {
    q: "What's included in the setup fee?",
    a: 'Infrastructure deployment & configuration. Team onboarding & training (2–4 sessions). Data migration. Custom integrations setup. First month of priority support.',
  },
  {
    q: 'Do you support AWS, Azure, and Google Cloud?',
    a: "Yes, all three. We deploy on whichever cloud provider you're already using.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 px-6 lg:px-8 overflow-hidden" style={{ background: '#faf8ff' }}>
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right,rgba(124,58,237,0.05),transparent 70%)' }} />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16">
          <div className="tag-pill mb-6">
            <span className="accent-dot" />
            FAQ
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]" style={{ color: '#0a0a0a' }}>
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-5 text-lg font-light" style={{ color: '#6b7280' }}>
            Everything you need to know about the product and billing.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}>
                <motion.div
                  animate={{
                    boxShadow: isOpen
                      ? '0 0 0 1px rgba(124,58,237,0.18), 0 8px 32px rgba(124,58,237,0.08)'
                      : '0 0 0 1px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden"
                  style={{ background: '#ffffff' }}>

                  <button onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
                    <span className="text-base font-semibold transition-colors duration-200"
                      style={{ color: isOpen ? '#7c3aed' : '#0a0a0a' }}>
                      {f.q}
                    </span>
                    <motion.div
                      animate={{ background: isOpen ? '#7c3aed' : '#f4f4f7', rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <Plus className="w-4 h-4" style={{ color: isOpen ? '#ffffff' : '#6b7280' }} />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}>
                    <div className="px-6 pb-6">
                      <div className="h-px mb-5" style={{ background: 'rgba(0,0,0,0.07)' }} />
                      <p className="text-base font-light leading-relaxed" style={{ color: '#525252' }}>{f.a}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}