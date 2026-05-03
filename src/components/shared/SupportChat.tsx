import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, User, ChevronRight, GripHorizontal, Mail } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useDragControls } from "motion/react";

const SUPPORT_EMAIL = "suporte@conteudoinfinito.com.br";

const PREDEFINED_QUESTIONS = [
  { q: "Como funciona o C.I.A?", a: "O C.I.A é um sistema de 15 agentes de IA treinados especificamente para nichos como advocacia, odontologia, estética e muito mais. Você entra com uma ideia de 10 segundos e recebe posts, roteiros e anúncios prontos para postar — em menos de 3 minutos." },
  { q: "Preciso pagar alguma IA?", a: "Não! O sistema foi desenhado para funcionar 100% com as versões gratuitas do ChatGPT, Gemini e Copilot. Sem mensalidade, sem assinatura extra." },
  { q: "Tenho garantia?", a: "Sim — 7 dias de garantia incondicional. Acesse tudo, teste no seu nicho ou no de um cliente. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas, sem formulário, sem burocracia." },
  { q: "Como recebo o acesso?", a: "O acesso é imediato após a confirmação do pagamento pelo Kiwify. Você receberá um e-mail com todas as instruções para começar a usar em minutos." },
];

const SYSTEM_PROMPT = `Você é o assistente virtual do C.I.A — Conteúdo Infinito com IA, um sistema de 15 agentes de IA para criação de conteúdo estratégico para nichos como advocacia, dentistas, corretores, personal trainers, clínicas de estética, contadores, psicólogos, restaurantes, arquitetos, empresas de reforma, nutricionistas, barbearias, médicos, gestores de tráfego e infoprodutores.

Seu papel é responder dúvidas de potenciais clientes de forma direta, calorosa e persuasiva — como um consultor de vendas experiente, não um robô.

Informações-chave do produto:
- Preço: 12x de R$30,78 ou R$297 à vista
- Garantia: 7 dias incondicional, 100% do dinheiro de volta
- Acesso: imediato após pagamento via Kiwify
- Ferramentas: funciona com ChatGPT, Gemini e Copilot gratuitos
- Bônus incluídos: Banco de Ideias por Nicho, Templates Validados, Comunidade Exclusiva, Atualizações Vitalícias
- Valor total dos bônus: R$211 — incluídos sem custo adicional

Regras importantes:
1. Responda SEMPRE em português do Brasil
2. Seja direto e objetivo — respostas curtas e úteis (máx 3 parágrafos)
3. Se a pergunta for muito fora do escopo do produto (assuntos pessoais, outros produtos, política, etc.), redirecione gentilmente para o produto
4. Após 4 ou 5 trocas de mensagens, caso a conversa não esteja avançando para uma decisão de compra, sugira gentilmente que o usuário entre em contato por e-mail para um atendimento mais personalizado
5. NUNCA invente preços, prazos ou funcionalidades que não foram mencionados acima
6. Tom: confiante, acolhedor, profissional mas sem ser formal demais`;

type Message = { role: "bot" | "user"; content: string };

async function callAI(messages: Message[], newUserMessage: string): Promise<string> {
  const history = messages
    .filter(m => m.role === "user" || m.role === "bot")
    .map(m => ({
      role: m.role === "bot" ? "assistant" : "user",
      content: m.content,
    }));

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: [...history, { role: "user", content: newUserMessage }],
    }),
  });

  if (!response.ok) throw new Error("API error");
  const data = await response.json();
  return data.content?.[0]?.text ?? "Não consegui processar sua mensagem. Tente novamente.";
}

function shouldEscalate(messages: Message[]): boolean {
  const userMessages = messages.filter(m => m.role === "user").length;
  return userMessages >= 5;
}

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useDragControls();
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Olá! Sou o assistente do C.I.A. Tire suas dúvidas sobre o sistema ou clique em uma das perguntas abaixo 👇" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isEscalated, setIsEscalated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const addBotMessage = (content: string) => {
    setMessages(prev => [...prev, { role: "bot", content }]);
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setIsTyping(true);

    // Check escalation threshold BEFORE calling AI
    if (shouldEscalate(updatedMessages) && !isEscalated) {
      setIsEscalated(true);
      await new Promise(r => setTimeout(r, 1000));
      setIsTyping(false);
      addBotMessage(
        `Adorei conversar com você! Para um atendimento mais completo e personalizado, nossa equipe está pronta para te ajudar por e-mail. É o jeito mais rápido de tirar todas as suas dúvidas antes de garantir o acesso 😊\n\n📧 ${SUPPORT_EMAIL}`
      );
      return;
    }

    try {
      const reply = await callAI(messages, text.trim());
      setIsTyping(false);
      addBotMessage(reply);
    } catch {
      setIsTyping(false);
      addBotMessage("Ops, tive um problema técnico aqui. Tente novamente ou entre em contato pelo e-mail: " + SUPPORT_EMAIL);
    }
  };

  const handleQuestionClick = (question: string, answer: string) => {
    const userMsg: Message = { role: "user", content: question };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(answer);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-[100] w-14 h-14 rounded-full bg-primary text-background flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)] md:bottom-8 md:right-8 transition-shadow hover:shadow-primary/50"
        aria-label="Abrir chat de suporte"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            drag
            dragControls={controls}
            dragListener={false}
            dragConstraints={{ top: -500, left: -600, right: 0, bottom: 0 }}
            className="fixed bottom-40 right-4 z-[100] w-[350px] max-w-[calc(100vw-32px)] h-[520px] max-h-[75vh] bg-surface rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden touch-none md:bottom-24 md:right-8"
          >
            {/* Header */}
            <div
              onPointerDown={(e) => controls.start(e)}
              className="p-4 bg-primary text-background flex items-center justify-between cursor-grab active:cursor-grabbing shrink-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Suporte C.I.A</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold flex items-center gap-1">
                    <GripHorizontal size={10} /> Arraste para mover
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Fechar chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "bot" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex gap-2 max-w-[85%]",
                    msg.role === "bot" ? "mr-auto" : "ml-auto flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1",
                    msg.role === "bot" ? "bg-surface-elevated text-primary" : "bg-primary text-background"
                  )}>
                    {msg.role === "bot" ? <Bot size={13} /> : <User size={13} />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                    msg.role === "bot"
                      ? "bg-surface-elevated text-text rounded-tl-none"
                      : "bg-primary/20 text-text border border-primary/20 rounded-tr-none text-right"
                  )}>
                    {msg.content}
                    {/* Email link highlight */}
                    {msg.content.includes(SUPPORT_EMAIL) && (
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="mt-2 flex items-center gap-2 text-primary font-bold hover:underline text-xs"
                      >
                        <Mail size={12} /> {SUPPORT_EMAIL}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-2 mr-auto">
                  <div className="w-7 h-7 rounded-full bg-surface-elevated text-primary flex items-center justify-center mt-1">
                    <Bot size={13} />
                  </div>
                  <div className="bg-surface-elevated p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Quick questions — only show if not escalated and few messages */}
              {messages.length < 5 && !isEscalated && (
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Dúvidas frequentes:</p>
                  <div className="flex flex-col gap-2">
                    {PREDEFINED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuestionClick(q.q, q.a)}
                        className="text-left text-xs p-2 bg-surface-elevated hover:bg-primary/10 border border-border rounded-lg transition-colors flex items-center justify-between group"
                      >
                        <span>{q.q}</span>
                        <ChevronRight size={13} className="text-text-subtle group-hover:text-primary transition-colors shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Escalated: show email CTA */}
              {isEscalated && (
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3 bg-primary text-background font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Mail size={15} /> Enviar e-mail agora
                </a>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-surface-elevated flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isEscalated ? "Atendimento encerrado por aqui 😊" : "Digite sua dúvida..."}
                disabled={isTyping || isEscalated}
                className="flex-1 bg-surface border border-border rounded-full px-4 py-2 text-xs focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSend(inputValue)}
                disabled={isTyping || isEscalated || !inputValue.trim()}
                className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                aria-label="Enviar mensagem"
              >
                <Send size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
