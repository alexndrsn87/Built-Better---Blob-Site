import { motion } from 'motion/react';
import { Sparkles, Shield, MessageCircle, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: {
    ring: string;
    glow: string;
    icon: string;
  };
};

const pillars: Pillar[] = [
  {
    icon: Sparkles,
    title: 'The £49 Prototype',
    body:
      '£49 / 24-hour turnaround. We build a custom interactive homepage blueprint in 24 hours. Link expires in 7 days. Custom Design (No Templates), Interactive Preview, and £49 deducted from setup fee if you proceed.',
    accent: {
      ring: 'from-yellow/35 via-yellow/10 to-transparent',
      glow: 'shadow-[0_0_32px_rgba(255,235,15,0.12)]',
      icon: 'text-yellow',
    },
  },
  {
    icon: Shield,
    title: 'Total Management',
    body:
      'We handle hosting, SSL, and security. You never have to touch a server.',
    accent: {
      ring: 'from-blue/40 via-blue/15 to-transparent',
      glow: 'shadow-[0_0_28px_rgba(25,123,189,0.2)]',
      icon: 'text-blue',
    },
  },
  {
    icon: MessageCircle,
    title: 'Unlimited Content Updates',
    body:
      'Need to change a menu, price, or photo? Just WhatsApp us. It’s included in your monthly plan.',
    accent: {
      ring: 'from-pink/40 via-pink/12 to-transparent',
      glow: 'shadow-[0_0_28px_rgba(218,65,103,0.15)]',
      icon: 'text-pink',
    },
  },
  {
    icon: MapPin,
    title: 'Local SEO Power',
    body:
      'We optimise your site so local customers find you on Google, not your competitors.',
    accent: {
      ring: 'from-shell/50 via-shell/15 to-transparent',
      glow: 'shadow-[0_0_28px_rgba(255,217,206,0.12)]',
      icon: 'text-shell',
    },
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative z-10 scroll-mt-28 px-4 py-16 md:scroll-mt-32 md:py-24">
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
            A done-for-you partner for local businesses — we save you time so you can run the shop, not the
            website.
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
              className={`glass-panel flex flex-col rounded-[32px] p-8 text-left ${pillar.accent.glow} transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]`}
            >
              <div className="mb-6">
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br p-[1px] ${pillar.accent.ring}`}
                >
                  <div className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-[15px] bg-navy/75 ring-1 ring-white/10 backdrop-blur-sm">
                    <pillar.icon
                      className={`h-7 w-7 ${pillar.accent.icon}`}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                </div>
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
