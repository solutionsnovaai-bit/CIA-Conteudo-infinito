import { motion } from "motion/react";
import { TrendingDown } from "lucide-react";

export function Agitation() {
  return (
    <section className="py-24 bg-background border-y border-border relative overflow-hidden">
      {/* Decorative pulse background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-danger" 
        />
      </div>

      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="space-y-6 mb-16">
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
            Cada dia que passa sem conteúdo é um dia que <span className="text-text">seu concorrente aparece</span> no lugar que deveria ser seu.
          </p>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
            No Instagram. No TikTok. No LinkedIn. <span className="text-text font-bold italic">Na cabeça do seu cliente.</span>
          </p>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
            E o pior não é o post que você não fez hoje.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-black text-danger uppercase tracking-tighter mb-4">
            É o cliente que foi para o concorrente amanhã.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-danger/10 border border-danger/30 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 text-danger/20">
            <TrendingDown size={120} />
          </div>
          <p className="text-xl font-bold text-text mb-2 relative z-10">
            Sabe quanto custa uma agência?
          </p>
          <p className="text-3xl md:text-4xl font-black text-danger mb-4 relative z-10">
            R$1.500, R$2.000, R$3.000 por mês
          </p>
          <p className="text-text-muted relative z-10">
            — e ainda assim você fica na mão deles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
