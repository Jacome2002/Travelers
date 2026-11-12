import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { INITIAL_CHAT_MESSAGES, CONCIERGE_DATA } from '../data/mockData';
import { X, Send, Phone, MessageSquare, CheckCheck, Sparkles, HelpCircle } from 'lucide-react';

interface ConciergeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCallConcierge: () => void;
}

export const ConciergeChatModal: React.FC<ConciergeChatModalProps> = ({
  isOpen,
  onClose,
  onCallConcierge,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const smartQuestions = [
    '¿La van cuenta con sillas infantiles para Mateo y Sofía?',
    '¿Hay opciones de menú sin mariscos para Andrea?',
    '¿A qué hora exacta nos recoge Carlos en el hotel?',
    '¿Qué pasa si mañana el clima sigue restringido?',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Contextual intelligent responses from Valentina
    setTimeout(() => {
      let replyText = '¡Claro que sí, Camilo! Con mucho gusto lo resuelvo de inmediato para que tú y tu familia disfruten sin ninguna preocupación.';

      const lower = text.toLowerCase();
      if (lower.includes('silla') || lower.includes('niño') || lower.includes('mateo') || lower.includes('sofía')) {
        replyText = '¡Totalmente, Camilo! Carlos ya tiene instalada una silla de retención infantil booster para Mateo (5 años) y asiento ergonómico para Sofía en la Mercedes Sprinter. Además tenemos jugos fríos y libros de colorear con mapas de piratas.';
      } else if (lower.includes('marisco') || lower.includes('menú') || lower.includes('andrea') || lower.includes('comida') || lower.includes('vegetar')) {
        replyText = '¡Descuida! Ya di aviso al chef de El Boliche / Casa San Agustín. Andrea tendrá opciones deliciosas de pesca blanca fresca o lomo a la parrilla con ensaladas caribeñas libres de crustáceos y mariscos.';
      } else if (lower.includes('hora') || lower.includes('recoge') || lower.includes('carlos') || lower.includes('hotel')) {
        replyText = 'Carlos Mendoza está programado para recogerlos a las 09:15 AM en el lobby de Hotel Las Américas. Te enviará un timbre cuando la van esté estacionada frente a la puerta principal.';
      } else if (lower.includes('mañana') || lower.includes('clima') || lower.includes('reembolso') || lower.includes('garantía')) {
        replyText = 'Nuestra Garantía 100% te cubre por completo: si mañana Capitanía sigue restringiendo zarpes marítimos, puedes elegir otro plan terrestre VIP o solicitar la devolución íntegra del 100% de tu dinero a tu tarjeta, sin ninguna penalidad ni trámite engorroso.';
      }

      const conciergeMsg: ChatMessage = {
        id: `con-${Date.now()}`,
        sender: 'concierge',
        text: replyText,
        timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, conciergeMsg]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 bg-[#0F172A] text-white flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={CONCIERGE_DATA.avatar}
                alt={CONCIERGE_DATA.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#85f8c4]"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-[#0F172A] rounded-full" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5 leading-tight">
                {CONCIERGE_DATA.name}
                <span className="text-[10px] font-semibold text-[#85f8c4] bg-white/10 px-1.5 py-0.5 rounded">
                  VIP
                </span>
              </h4>
              <p className="text-[11px] text-[#bec6e0] leading-none mt-0.5">
                Concierge Personal asignada a tu familia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onCallConcierge}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#85f8c4] flex items-center justify-center transition-colors"
              title="Llamada telefónica"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8f9ff]">
          <div className="text-center my-1">
            <span className="text-[11px] font-semibold text-[#64748B] bg-white px-3 py-1 rounded-full border border-[#e2e8f0]">
              Canal prioritario · Tiempo de respuesta promedio: &lt;1 min
            </span>
          </div>

          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    isUser
                      ? 'bg-[#0F172A] text-white rounded-tr-xs'
                      : 'bg-white text-[#0F172A] border border-[#e2e8f0] rounded-tl-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-[#64748B] mt-1 px-1 flex items-center gap-1">
                  {msg.timestamp}
                  {isUser && <CheckCheck className="w-3 h-3 text-[#059669]" />}
                </span>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-1.5 bg-white text-[#64748B] border border-[#e2e8f0] px-3 py-2 rounded-2xl w-fit text-xs">
              <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full animate-bounce [animation-delay:0.4s]" />
              <span className="ml-1 text-[11px] font-medium">Valentina está respondiendo...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Smart Question Chips */}
        <div className="p-2.5 bg-white border-t border-[#e2e8f0] overflow-x-auto flex items-center gap-2">
          {smartQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] font-medium text-[#0F172A] bg-[#f8f9ff] hover:bg-[#eff4ff] border border-[#d3e4fe] px-2.5 py-1.5 rounded-xl whitespace-nowrap transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-[#e2e8f0] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu mensaje a Valentina..."
            className="flex-1 bg-[#f8f9ff] border border-[#cbd5e1] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0F172A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0F172A]/20"
          />

          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="w-10 h-10 rounded-xl bg-[#0F172A] disabled:opacity-40 text-white flex items-center justify-center hover:bg-[#1e293b] active:scale-95 transition-all shrink-0"
          >
            <Send className="w-4 h-4 text-[#85f8c4]" />
          </button>
        </div>
      </div>
    </div>
  );
};
