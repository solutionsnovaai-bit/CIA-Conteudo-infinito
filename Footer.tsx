import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-display font-black text-text mb-2 tracking-tighter">
              C.I.A <span className="text-primary">—</span> Conteúdo Infinito com IA
            </h2>
            <p className="text-text-subtle text-sm">
              © 2025 C.I.A — Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-text-subtle max-w-3xl mx-auto leading-relaxed">
            A aplicação da inteligência artificial pode variar conforme o uso individual. Este site não é afiliado ao Meta (Facebook/Instagram), Google ou TikTok. Os resultados podem variar e dependem do seu esforço e aplicação do sistema.
          </p>
        </div>
      </div>
    </footer>
  );
}
