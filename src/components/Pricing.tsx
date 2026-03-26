import { motion } from 'motion/react';
import { Check, Heart, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-32 px-4 bg-shell text-navy rounded-[48px] mx-4 my-12 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Simple, honest pricing</h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto font-medium">
            We don't do hidden fees. And if you pay for a year upfront, we'll take £100 off your setup cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Quest */}
          <motion.div
            whileHover={{ scale: 1.02, y: -10 }}
            className="bg-white p-10 rounded-[40px] shadow-xl border-4 border-transparent hover:border-pink/20 transition-colors flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-display font-bold mb-2">The essentials</h3>
              <p className="text-navy/60 font-medium">Everything you need to get started, fully managed by us.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-black">£499</span>
                <span className="text-navy/60 font-medium">setup</span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold">+ £30</span>
                <span className="text-navy/60 font-medium">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {['A custom 5-page design', 'Works perfectly on mobiles', 'Fast hosting included', 'Basic setup for Google (SEO)', 'Monthly updates to keep things fresh'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="bg-pink/10 p-1 rounded-full text-pink">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-navy text-white font-bold py-4 rounded-full text-lg"
            >
              Start with a prototype
            </motion.button>
          </motion.div>

          {/* Power-Up */}
          <motion.div
            whileHover={{ scale: 1.02, y: -10 }}
            className="bg-navy text-white p-10 rounded-[40px] shadow-2xl relative flex flex-col"
          >
            <div className="absolute -top-5 right-8 bg-yellow text-navy font-bold px-4 py-2 rounded-full text-sm flex items-center gap-1 shadow-lg">
              <Zap className="w-4 h-4" /> Most popular
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-display font-bold mb-2">The step up</h3>
              <p className="text-white/60 font-medium">For businesses that need a bit more space to grow.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-black text-yellow">£899</span>
                <span className="text-white/60 font-medium">setup</span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold">+ £60</span>
                <span className="text-white/60 font-medium">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {['Up to 15 pages', 'Edit the site yourself (CMS)', 'Advanced setup for Google (SEO)', 'Priority support when you need us', 'A dashboard to track visitors', 'Ready for online selling'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="bg-yellow/20 p-1 rounded-full text-yellow">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow text-navy font-bold py-4 rounded-full text-lg shadow-[0_4px_14px_0_rgba(255,235,15,0.39)]"
            >
              Start with a prototype
            </motion.button>
          </motion.div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-pink/10 border border-pink/20 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="bg-pink text-white p-3 rounded-2xl shrink-0">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg">A discount for heroes</h4>
            <p className="text-navy/70 font-medium">We give 15% off setup costs for NHS, Social Care, and Armed Forces staff. Thanks for everything you do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
