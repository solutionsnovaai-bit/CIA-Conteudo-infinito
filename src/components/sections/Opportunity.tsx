import { motion } from "motion/react";
import { CounterUp } from "../shared/CounterUp";
import { Briefcase, TrendingUp } from "lucide-react";

export function Opportunity() {
  const calculations = [
    { clients: 10, value: 300, total: 3000 },
    { clients: 20, value: 300, total: 6000 },
    { clients: 30, value: 300, total: 9000 },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Você pode usar o C.I.A de duas formas:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Forma 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface-elevated rounded-3xl border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-6">
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Forma 1 — Para o seu negócio</h3>
            <p className="text-text-muted text-lg leading-relaxed">
              Economize horas do seu dia e milhares de reais em agências. Tenha um conteúdo de altíssimo nível que atrai clientes reais 24h por dia.
            </p>
          </motion.div>

          {/* Forma 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface-elevated rounded-3xl border border-primary/30 relative"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-primary text-background text-xs font-black uppercase rounded-full">Altamente Lucrativo</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Forma 2 — Para ganhar dinheiro</h3>
            <div className="space-y-4">
              {calculations.map((calc, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-background/50 rounded-xl border border-border gap-2">
                  <span className="text-text-muted text-sm sm:text-base">{calc.clients} clientes × R${calc.value} =</span>
                  <CounterUp 
                    end={calc.total} 
                    prefix="R$ " 
                    suffix="/mês" 
                    className="text-xl font-black text-primary"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-xl text-text font-medium leading-relaxed">
            Sem equipe. Sem escritório. Sem ferramentas pagas. <br className="hidden md:block" />
            <span className="text-primary font-bold">Só você, o celular e o C.I.A.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
