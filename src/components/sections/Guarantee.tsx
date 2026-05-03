import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" 
            />
            <ShieldCheck size={100} className="text-primary relative z-10" strokeWidth={1} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-8"
        >
          🛡️ Garantia Incondicional de 7 Dias
        </motion.h2>

        <div className="space-y-6 text-xl text-text-muted leading-relaxed">
          <p>
            Acesse tudo. Use os agentes. Entre na comunidade. Teste no seu nicho ou no de um cliente.
          </p>
          <p className="text-2xl md:text-3xl font-black text-text py-4">
            Se em 7 dias você não ver valor — devolvemos 100% do seu dinheiro.
          </p>
          <p>
            Sem formulário. Sem explicação. Sem burocracia. <span className="text-primary font-bold">O risco é todo nosso.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
