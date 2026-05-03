import { motion } from "motion/react";
import { Brain, Edit3, Share2, Rocket } from "lucide-react";

export function Mechanism() {
  const cards = [
    {
      icon: Brain,
      title: "Cérebro Estrategista",
      description: "Define o objetivo do conteúdo (engajamento, autoridade ou venda)",
      color: "text-primary"
    },
    {
      icon: Edit3,
      title: "Cérebro Copywriter",
      description: "Escreve com gatilhos emocionais, CTA e linguagem do nicho",
      color: "text-accent"
    },
    {
      icon: Share2,
      title: "Cérebro de Distribuição",
      description: "Adapta o conteúdo para Instagram, TikTok, LinkedIn, Stories, Reels ou anúncio",
      color: "text-gold"
    }
  ];

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ⚙️ Por que o C.I.A é diferente de tudo que você já viu?
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            O mercado está cheio de 'prompts de IA' e 'ferramentas de conteúdo'. O problema deles: são genéricos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-surface-elevated rounded-3xl border border-border group hover:border-primary/50 transition-colors"
            >
              <div className={`w-16 h-16 rounded-2xl bg-background flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${card.color}`}>
                <card.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 bg-primary/10 border border-primary/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center shrink-0">
              <Rocket size={24} />
            </div>
            <p className="text-xl md:text-2xl font-bold text-text">
              Você entrega uma ideia de 10 segundos e recebe um conteúdo completo, estratégico e pronto — em menos de 3 minutos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
