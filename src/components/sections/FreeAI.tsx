import { motion } from "motion/react";
import { Check } from "lucide-react";

export function FreeAI() {
  const tools = [
    "ChatGPT ✓ Gratuito",
    "Gemini ✓ Gratuito",
    "Copilot ✓ Gratuito"
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-8"
        >
          Tudo isso funciona com IA gratuita.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 bg-surface-elevated rounded-full border border-primary/20 text-primary font-bold shadow-lg"
            >
              {tool}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xl text-text-muted leading-relaxed">
            Sem assinar nada. Sem gastar nada além do investimento no C.I.A.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-text">
            O segredo não é a ferramenta — é o sistema que você vai ter nas mãos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
