import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

const pains = [
  "Você abre o Instagram e fica parado, sem saber o que postar.",
  "Você passa 2 horas criando um conteúdo que recebe 12 curtidas — sendo 8 de amigos.",
  "Você sabe que precisa postar com consistência, mas a vida real não deixa.",
  "Você vê concorrentes menores que você crescendo todo dia e pensa: 'o que eles sabem que eu não sei?'",
  "Ou talvez você queira ganhar dinheiro online, mas não tem produto, não tem audiência, não tem dinheiro para anunciar… E ninguém te ensinou que existia um caminho diferente."
];

export function Pain() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Você reconhece alguma dessas situações?
        </motion.h2>

        <div className="grid gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-surface-elevated rounded-xl border-l-4 border-danger flex items-start gap-4 shadow-xl"
            >
              <AlertCircle className="text-danger shrink-0 mt-1" size={20} />
              <p className="text-lg text-text leading-relaxed">
                {pain}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
