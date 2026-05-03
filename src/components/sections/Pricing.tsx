import { motion } from "motion/react";
import { Check } from "lucide-react";
import { CTAButton } from "../shared/CTAButton";
import { Badge } from "../shared/Badge";

export function Pricing() {
  const features = [
    "Acesso vitalício",
    "15 agentes especializados",
    "Todos os bônus incluídos",
    "Atualizações gratuitas",
    "Garantia de 7 dias"
  ];

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-4">Oportunidade Única</Badge>
          <p className="text-xl md:text-3xl text-text-muted italic mb-4 max-w-2xl mx-auto leading-relaxed">
            "Uma agência de conteúdo cobra entre R$1.500 e R$3.000 por mês."
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-20 bg-surface rounded-[2.5rem] border border-primary/30 shadow-[0_0_50px_rgba(0,255,136,0.1)] text-center relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <span className="px-6 py-2 bg-primary text-background font-black uppercase text-sm rounded-full tracking-widest shadow-lg">
              Oferta Especial de Lançamento
            </span>
          </div>

          <div className="mb-12">
            <h3 className="text-6xl md:text-8xl font-black text-primary mb-4 tracking-tighter">
              12x de R$30,78
            </h3>
            <p className="text-2xl md:text-3xl text-text-muted">
              ou R$297 à vista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-12 max-w-2xl mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-medium text-text">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={4} />
                </div>
                {feature}
              </div>
            ))}
          </div>

          <CTAButton size="xl" className="w-full" glow>
            QUERO MEU SISTEMA AGORA — 12x de R$30,78
          </CTAButton>

          <p className="mt-8 text-text-subtle font-medium">
            Sem mensalidade. Sem renovação. Sem pegadinha.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
