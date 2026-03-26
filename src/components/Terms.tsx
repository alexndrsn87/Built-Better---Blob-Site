import { motion } from 'motion/react';
import { Key, Timer, Receipt, Wrench } from 'lucide-react';

export default function Terms() {
  const terms = [
    {
      icon: <Key className="w-6 h-6" />,
      title: "Who owns what",
      desc: "You're paying for our time to design the prototype. We keep the keys until you pay for the full site."
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "When it expires",
      desc: "The link to your prototype will automatically turn off after exactly one week (168 hours)."
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      title: "Your £49 credit",
      desc: "The £49 is a non-refundable deposit. But if you go ahead with the full site, we'll deduct it from your final bill."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "No tweaks just yet",
      desc: "The prototype is to show you our vision. We'll do all the fine-tuning and changes during the main build."
    }
  ];

  return (
    <section id="terms" className="relative z-10 py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The small print</h2>
          <p className="text-xl text-shell/80">
            Clear, honest rules for your £49 prototype. We don't like surprises either.
          </p>
        </div>

        <div className="glass-panel-dark rounded-[40px] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {terms.map((term, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1 bg-white/10 p-3 rounded-2xl h-fit text-blue shrink-0">
                  {term.icon}
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">{term.title}</h4>
                  <p className="text-shell/70 leading-relaxed">{term.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
