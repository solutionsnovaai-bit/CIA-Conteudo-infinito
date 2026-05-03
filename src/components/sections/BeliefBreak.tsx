import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function BeliefBreak() {
  const misconceptions = [
    "Criatividade",
    "Copywriting",
    "Experiência em marketing",
    "Dinheiro para contratar"
  ];

  return (
    <section className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-muted">
          A maioria das pessoas acredita que criar conteúdo bom exige:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {misconceptions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-surface rounded-xl border border-border group"
            >
              <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center text-danger group-hover:scale-110 transition-transform">
                <X size={24} />
              </div>
              <span className="text-xl font-medium text-text-muted line-through decoration-danger/50 underline-offset-4">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <h3 className="text-4xl md:text-6xl font-black text-text-subtle uppercase italic tracking-widest">
            Isso era verdade em 2021.
          </h3>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="pt-8">
            <p className="text-2xl md:text-3xl font-medium text-text mb-4 leading-tight">
              Hoje, a IA faz o trabalho pesado.
            </p>
            <p className="text-3xl md:text-5xl font-black text-primary">
              O segredo não é a ferramenta — é saber dar a ordem certa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
