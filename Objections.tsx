import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Eu não sei criar conteúdo",
    a: "O agente cria. Você só aprova."
  },
  {
    q: "Eu não tenho experiência com IA",
    a: "Se você sabe digitar, você sabe usar o C.I.A."
  },
  {
    q: "Eu nunca tive clientes",
    a: "Com 15 nichos mapeados, basta chegar em um empresário local e mostrar o que você faz."
  },
  {
    q: "Já tentei e não funcionou",
    a: "Você não tinha o sistema certo. Prompt solto não é sistema. C.I.A é sistema."
  },
  {
    q: "E se não funcionar pra mim?",
    a: "Você tem 7 dias de garantia total. Zero risco."
  }
];

export function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-surface-elevated transition-colors"
              >
                <span className="text-xl font-bold">{faq.q}</span>
                <div className="shrink-0 text-primary">
                  {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-lg text-text-muted">
                  <p>{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
