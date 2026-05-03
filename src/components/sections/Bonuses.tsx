import { motion } from "motion/react";
import { Badge } from "../shared/Badge";
import { Gift } from "lucide-react";

export function Bonuses() {
  const bonuses = [
    {
      title: "Banco de Ideias por Nicho (R$47)",
      desc: "50 ideias de conteúdo prontas para cada um dos 15 nichos.",
      badge: "BÔNUS 1"
    },
    {
      title: "Templates Validados (R$67)",
      desc: "Modelos de carrossel, Reels e Stories que já geraram engajamento.",
      badge: "BÔNUS 2"
    },
    {
      title: "Comunidade Exclusiva C.I.A (R$97)",
      desc: "Grupo fechado onde membros compartilham resultados.",
      badge: "BÔNUS 3"
    },
    {
      title: "Atualizações Vitalícias (Inestimável)",
      desc: "Toda atualização de agente, novo nicho ou nova funcionalidade sem pagar nada a mais.",
      badge: "BÔNUS 4"
    }
  ];

  return (
    <section className="py-24 bg-surface-elevated relative overflow-hidden">
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Além do sistema C.I.A, você recebe:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface rounded-2xl border-l-4 border-gold border-r border-t border-b border-border shadow-xl relative group"
            >
              <div className="absolute top-4 right-4">
                <Badge variant="gold">{bonus.badge}</Badge>
              </div>
              <h3 className="text-xl font-bold mb-3 pr-20">{bonus.title}</h3>
              <p className="text-text-muted leading-relaxed">{bonus.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-background/50 border border-gold/30 rounded-3xl max-w-2xl mx-auto text-center backdrop-blur-md"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center">
              <Gift size={32} />
            </div>
          </div>
          
          <div className="space-y-4 font-display font-medium text-xl uppercase tracking-tighter">
            <div className="flex justify-between items-center text-text-subtle">
              <span>Valor dos bônus:</span>
              <span className="line-through decoration-danger">R$211</span>
            </div>
            <div className="flex justify-between items-center text-text-subtle">
              <span>Valor do C.I.A:</span>
              <span className="line-through decoration-danger">R$497</span>
            </div>
            <div className="flex justify-between items-center text-text-muted pt-4">
              <span>Total real:</span>
              <span>R$708</span>
            </div>
            <div className="h-px bg-gold/20 my-4" />
            <div className="flex justify-between items-center text-3xl md:text-5xl font-black text-gold">
              <span>Você paga:</span>
              <span>apenas R$297</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
