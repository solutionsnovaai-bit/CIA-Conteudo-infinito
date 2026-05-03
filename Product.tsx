import { motion } from "motion/react";
import { Badge } from "../shared/Badge";
import { CheckCircle2, Cpu, Zap, Target } from "lucide-react";

export function Product() {
  const features = [
    { icon: Cpu, text: "Personalidade própria" },
    { icon: Target, text: "Estratégia por nicho" },
    { icon: Zap, text: "Pronto para postar" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Badge variant="accent">Apresentando</Badge>
          <h2 className="text-5xl md:text-7xl font-black text-text mt-6 mb-6 tracking-tighter">
            C.I.A — Conteúdo Infinito com IA
          </h2>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Um sistema de 15 agentes de IA, cada um treinado para falar a língua de um nicho específico
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 bg-surface-elevated rounded-full border border-primary/20 flex items-center gap-2 text-primary font-bold shadow-[0_0_15px_rgba(0,255,136,0.05)]"
            >
              <feature.icon size={20} />
              {feature.text}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-surface rounded-3xl border border-border max-w-4xl mx-auto shadow-2xl relative group"
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
            <CheckCircle2 size={24} />
          </div>
          
          <p className="text-lg md:text-2xl text-text leading-relaxed text-left">
            Não são prompts soltos que você copia e cola. São <span className="text-primary font-bold">agentes com personalidade</span>, estratégia e linguagem própria — como se você tivesse uma equipe de criação trabalhando para você 24 horas por dia, sem salário, sem reclamação, sem feriado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
