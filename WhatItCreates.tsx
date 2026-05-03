import { motion } from "motion/react";
import { Layers, Video, BookOpen, Layout, DollarSign } from "lucide-react";

export function WhatItCreates() {
  const contentTypes = [
    {
      icon: Layers,
      title: "Carrosséis",
      description: "Que prendem atenção do primeiro ao último slide",
      color: "bg-primary/20 text-primary border-primary/20"
    },
    {
      icon: Video,
      title: "Roteiros de Reels",
      description: "Com gancho, desenvolvimento e CTA",
      color: "bg-accent/20 text-accent border-accent/20"
    },
    {
      icon: BookOpen,
      title: "Sequências de Stories",
      description: "Que criam curiosidade e levam para a ação",
      color: "bg-gold/20 text-gold border-gold/20"
    },
    {
      icon: Layout,
      title: "Posts de Feed",
      description: "Com copy, hashtags e chamada estratégica",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/20"
    },
    {
      icon: DollarSign,
      title: "Textos de Anúncio",
      description: "Prontos para rodar no Meta Ads",
      color: "bg-primary/20 text-primary border-primary/20"
    }
  ];

  return (
    <section className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Para cada nicho, o C.I.A entrega:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {contentTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border flex flex-col items-center text-center gap-4 h-full hover:bg-opacity-30 transition-all ${type.color}`}
            >
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                <type.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed font-medium">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
