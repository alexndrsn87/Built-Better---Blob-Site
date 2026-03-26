import { motion } from 'motion/react';
import { Clock, MousePointerClick, PiggyBank } from 'lucide-react';

export default function Sandbox() {
  const cards = [
    {
      icon: <Clock className="w-8 h-8 text-pink" />,
      title: "Ready in 24 hours",
      desc: "We'll build a custom, interactive mockup of your homepage in just one day."
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-blue" />,
      title: "7 days to test it out",
      desc: "We keep the link live for a week. Take your time to click around, show your team, and sleep on it."
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-yellow" />,
      title: "Get your £49 back as credit",
      desc: "If you love the prototype and want the full site, we'll take the £49 off your final bill."
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Try before you buy</h2>
          <p className="text-xl text-shell/80 max-w-2xl mx-auto">
            For £49, we'll build a working mockup of your homepage. There's no commitment to buy the full site.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="glass-panel p-8 rounded-[32px] flex flex-col items-start text-left"
            >
              <div className="glass-panel-dark p-4 rounded-2xl mb-6">
                {card.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{card.title}</h3>
              <p className="text-shell/80 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
