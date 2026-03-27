import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

type PricingProps = {
  onRequestPrototype?: () => void;
};

const tiers = [
  {
    name: 'The Starter',
    setup: 299,
    monthly: 25,
    features: ['1-page pro site', 'Domain setup', 'Hosting included', 'WhatsApp support'],
    cta: 'Choose Starter',
    highlight: false,
  },
  {
    name: 'The Business',
    setup: 399,
    monthly: 35,
    features: [
      '4-page custom site',
      'Professional copy',
      'Domain management',
      'Unlimited content updates',
    ],
    cta: 'Choose Business',
    highlight: true,
  },
  {
    name: 'The Growth',
    setup: 599,
    monthly: 50,
    features: [
      'Everything in Business',
      'Google Business Profile setup',
      'Basic SEO pack',
      'Monthly performance reports',
    ],
    cta: 'Choose Growth',
    highlight: false,
  },
];

const addOns = [
  { label: 'Extra pages', price: '£49' },
  { label: 'Booking widgets', price: '£75' },
  { label: 'Monthly blog', price: '£60/mo' },
  { label: 'Social media graphics', price: '£75' },
];

export default function Pricing({ onRequestPrototype }: PricingProps) {
  return (
    <section
      id="pricing"
      className="relative z-10 mx-4 my-8 scroll-mt-28 rounded-[48px] bg-shell px-4 py-20 text-navy shadow-2xl md:scroll-mt-32 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-14">
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">Pricing</h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-navy/75 md:text-xl">
            Clear setup fees and simple monthly plans — so you always know what you&apos;re paying for.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`relative flex flex-col rounded-[40px] p-8 md:p-10 ${
                tier.highlight
                  ? 'glass-panel border-2 border-yellow text-white shadow-2xl'
                  : 'glass-panel-light shadow-xl'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-yellow px-4 py-1.5 text-sm font-bold text-navy shadow-lg">
                  <Zap className="h-4 w-4" /> Most popular
                </div>
              )}
              <div className={tier.highlight ? 'mt-2' : ''}>
                <h3 className="mb-2 font-display text-2xl font-bold md:text-3xl">{tier.name}</h3>
                <div className="mb-6 flex flex-wrap items-baseline gap-2">
                  <span className="font-display text-4xl font-black md:text-5xl">£{tier.setup}</span>
                  <span className="font-medium text-navy/60">setup</span>
                </div>
                <div className="mb-8 flex items-baseline gap-2">
                  <span className={`text-2xl font-bold ${tier.highlight ? 'text-yellow' : ''}`}>
                    + £{tier.monthly}
                  </span>
                  <span className={tier.highlight ? 'text-white/70' : 'text-navy/60'}>/month</span>
                </div>
              </div>
              <ul className="mb-10 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-medium">
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        tier.highlight ? 'bg-yellow/20 text-yellow' : 'bg-pink/10 text-pink'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className={tier.highlight ? 'text-white/95' : 'text-navy/85'}>{f}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onRequestPrototype?.()}
                className={
                  tier.highlight
                    ? 'w-full rounded-full bg-yellow py-4 text-lg font-bold text-navy shadow-[0_4px_14px_0_rgba(255,235,15,0.39)]'
                    : 'w-full rounded-full bg-navy py-4 text-lg font-bold text-white'
                }
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-light mx-auto mt-14 max-w-3xl rounded-3xl border border-pink/25 p-6 md:p-8"
        >
          <h3 className="mb-4 text-center font-display text-xl font-bold md:text-2xl">Add-ons</h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {addOns.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-navy/10 bg-white/40 px-4 py-3 text-left font-medium text-navy/90"
              >
                <span>{row.label}</span>
                <span className="shrink-0 font-display font-bold text-pink">{row.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
