import { motion } from "motion/react";
import { CTAButton } from "../shared/CTAButton";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-48 bg-background relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-8xl font-black mb-20 tracking-tighter uppercase leading-[0.9]"
        >
          Você tem duas escolhas agora:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
          {/* Escolha 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface rounded-3xl border border-border flex flex-col justify-between"
          >
            <p className="text-2xl font-medium text-text-muted leading-relaxed">
              Fechar essa página, continuar travando no 'o que postar hoje' e ver seus concorrentes crescendo.
            </p>
            <div className="mt-8 border-t border-border pt-6 text-text-subtle font-mono text-sm uppercase">
              Permanecer no mesmo lugar
            </div>
          </motion.div>

          {/* Escolha 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface-elevated rounded-3xl border border-primary/50 flex flex-col justify-between shadow-[0_0_40px_rgba(0,255,136,0.15)] ring-1 ring-primary/30"
          >
            <p className="text-2xl font-bold text-text leading-relaxed">
              Investir R$297 — menos que um jantar em família — e ter nas mãos um sistema que cria conteúdo profissional para qualquer nicho, qualquer dia.
            </p>
            <div className="mt-8 border-t border-primary/30 pt-6 text-primary font-mono text-sm uppercase flex items-center justify-between">
              Evoluir agora
              <CheckCircle2 size={18} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <CTAButton size="xl" className="w-full md:w-auto px-12" glow>
            QUERO MEU SISTEMA AGORA — 12x de R$30,78
          </CTAButton>
          <p className="text-text-muted font-medium">
            Acesso imediato após o pagamento. Garantia de 7 dias — risco zero. Bônus incluídos até o fim desta página.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
