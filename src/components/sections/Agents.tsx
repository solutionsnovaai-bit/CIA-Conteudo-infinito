import React from "react";
import { AgentCard } from "../shared/AgentCard";
import { motion } from "motion/react";
import { Badge } from "../shared/Badge";

const niches = [
  { name: "Advogados", icon: "⚖️" },
  { name: "Dentistas", icon: "🦷" },
  { name: "Corretores de imóveis", icon: "🏠" },
  { name: "Personal trainers", icon: "💪" },
  { name: "Clínicas de estética", icon: "✨" },
  { name: "Contadores", icon: "📊" },
  { name: "Psicólogos", icon: "🧠" },
  { name: "Restaurantes e delivery", icon: "🍕" },
  { name: "Arquitetos", icon: "📐" },
  { name: "Empresas de reforma", icon: "🛠️" },
  { name: "Nutricionistas", icon: "🥗" },
  { name: "Barbearias", icon: "💈" },
  { name: "Médicos", icon: "🩺" },
  { name: "Gestores de tráfego", icon: "📈" },
  { name: "Infoprodutores e coaches", icon: "🚀" }
];

export function Agents() {
  return (
    <section className="py-24 bg-background relative overflow-hidden dot-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">Especialistas Treinados</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Você terá um agente especializado para:
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {niches.map((niche, i) => (
            <AgentCard 
              key={i}
              name={niche.name}
              icon={niche.icon}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
