import { motion } from 'motion/react';
import { Sparkles, Shield, MessageCircle, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Sparkles,
    title: 'The £49 Prototype',
    body:
      '£49 / 24-hour turnaround. We build a custom interactive homepage blueprint in 24 hours. Link expires in 7 days. Custom Design (No Templates), Interactive Preview, and £49 deducted from setup fee if you proceed.',
  },
  {
    icon: Shield,
    title: 'Total Management',
    body:
      'We handle hosting, SSL, and security. You never have to touch a server.',
  },
  {
    icon: MessageCircle,
    title: 'Unlimited Content Updates',
    body:
      'Need to change a menu, price, or photo? Just WhatsApp us. It’s included in your monthly plan.',
  },
  {
    icon: MapPin,
    title: 'Local SEO Power',
    body:
      'We optimise your site so local customers find you on Google, not your competitors.',
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 scroll-mt-28 px-4 py-20 md:scroll-mt-32 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            We Build, Manage, and Grow Your Online Presence.
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-shell/85 md:text-xl">
            A done-for-you partner for local businesses — we save you time so you can run the shop,
            not the website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="glass-panel flex flex-col rounded-[32px] p-8 text-left"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-navy/40 p-4 text-yellow">
                <pillar.icon className="h-8 w-8" strokeWidth={1.75} />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-white md:text-2xl">{pillar.title}</h3>
              <p className="flex-1 text-base leading-relaxed text-shell/80">{pillar.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
