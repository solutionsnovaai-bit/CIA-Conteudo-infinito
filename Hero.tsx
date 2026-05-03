import { motion } from "motion/react";
import { AnimatedText } from "../shared/AnimatedText";
import { CTAButton } from "../shared/CTAButton";
import { Badge } from "../shared/Badge";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

import { Marquee } from "../shared/Marquee";

export function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const messages = [
    "Agente Advocacia... ONLINE",
    "Agente Estética... ONLINE",
    "Sistema C.I.A v2.0 carregado.",
  ];

  const socialProof = [
    "Mais de 1.450 empreendedores ja usam",
    "Agentes treinados com IA 100% gratuita",
    "Resultados em menos de 3 minutos",
    "Venda conteúdo para nichos locais",
    "C.I.A v2.0 - Sistema de Elite",
  ];

  useEffect(() => {
    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentMessage = messages[currentMessageIndex];
      
      if (!isDeleting) {
        setTerminalText(currentMessage.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentMessage.length) {
          setTimeout(() => { isDeleting = true; }, 1500);
        }
      } else {
        setTerminalText(currentMessage.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }
      }
      
      const speed = isDeleting ? 30 : 60;
      setTimeout(type, speed);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden gradient-mesh">
      {/* Background Layers */}
      <div className="absolute inset-0 intelligence-grid opacity-30 z-0" />
      <div className="grain-overlay z-[1]" />
      
      {/* Dynamic Light Beams */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[180px]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-accent/15 rounded-full blur-[180px]" 
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="primary" className="border-primary/40 bg-primary/5 px-4 py-2">
            C.I.A — Conteúdo Infinito com IA
          </Badge>
        </motion.div>

        <AnimatedText
          text="Enquanto você trava na tela em branco tentando pensar 'o que postar hoje'..."
          className="text-4xl md:text-8xl font-black text-text mb-8 leading-[0.95] md:leading-[0.9] max-w-5xl mx-auto tracking-tighter uppercase justify-center"
          stagger={0.03}
        />
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xl md:text-5xl font-bold text-primary mb-12 tracking-tight max-w-3xl mx-auto px-4"
        >
          Tem gente faturando de R$3.000 a R$9.000 por mês criando conteúdo pelo celular
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-xl mx-auto mb-12"
        >
          <div className="bg-surface border border-border rounded-xl p-4 flex items-center gap-4 shadow-2xl backdrop-blur-md">
            <div className="font-mono text-primary text-xs font-bold shrink-0">[TERMINAL]:</div>
            <div className="font-mono text-xs text-text text-left flex-1 h-4 flex items-center">
              {terminalText}
              <motion.div 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1.5 h-4 bg-primary ml-1" 
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          O primeiro sistema com <span className="text-text font-bold">15 agentes de IA</span> que criam posts, Reels e anúncios prontos para postar em minutos. 100% automático. 100% gratuito.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <CTAButton size="xl" href="#pricing" glow={false} className="w-full md:w-auto shadow-[0_0_40px_rgba(0,255,136,0.2)]">
              QUERO CONHECER O SISTEMA
            </CTAButton>
          </div>
          <p className="text-text-subtle text-xs uppercase tracking-[0.2em] font-bold">
            Acesso imediato · Garantia de 7 dias · Bônus incluídos
          </p>
        </motion.div>
      </div>
    </section>
    <Marquee items={socialProof} />
    </>
  );
}
