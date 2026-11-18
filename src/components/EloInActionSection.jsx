import React, { useState } from 'react';
import { CONVERSATION_EXAMPLES } from '../data/researchData';
import { MessageSquare, Volume2, ShieldCheck, Sparkles, Play, Send, AlertTriangle, RefreshCw } from 'lucide-react';

export const EloInActionSection = ({ onExpressionTrigger }) => {
  const [activeDialogueIndex, setActiveDialogueIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [customQuery, setCustomQuery] = useState('');
  const [customResponse, setCustomResponse] = useState(null);

  const activeDialogue = CONVERSATION_EXAMPLES[activeDialogueIndex];

  const handleSelectDialogue = (index) => {
    setActiveDialogueIndex(index);
    setCustomResponse(null);
    const d = CONVERSATION_EXAMPLES[index];
    if (onExpressionTrigger) {
      onExpressionTrigger(d.eloExpression);
      setTimeout(() => {
        onExpressionTrigger(d.nextExpression);
      }, 1600);
    }
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    const lower = customQuery.toLowerCase();
    const isRisky = lower.includes('stove') || lower.includes('fire') || lower.includes('knife') ||
      lower.includes('alone') || lower.includes('secret') || lower.includes('address') || lower.includes('key');

    if (isRisky) {
      if (onExpressionTrigger) onExpressionTrigger('listening');
      setCustomResponse({
        query: customQuery,
        response: "That's something very important to check with Mummy or Papa first! Let's stay safe together. Would you like to know how stars shine at night instead?",
        isSafety: true,
        tag: "Safety Filter Engaged // Boundary Guardrail"
      });
      setTimeout(() => {
        if (onExpressionTrigger) onExpressionTrigger('curious');
      }, 1400);
    } else {
      if (onExpressionTrigger) onExpressionTrigger('listening');
      setCustomResponse({
        query: customQuery,
        response: "That's such a curious thought! Everything in our world has a story. When we explore with open minds, we discover something exciting every single day!",
        isSafety: false,
        tag: "Child Spoken Dialogue // Active Discovery"
      });
      setTimeout(() => {
        if (onExpressionTrigger) onExpressionTrigger('happy');
      }, 1400);
    }
    setCustomQuery('');
  };

  return (
    <section
      id="action-dialogue"
      className="min-h-screen relative flex items-center justify-start py-28 px-6 sm:px-12 md:px-20 z-20 pointer-events-none"
    >
      <div className="w-full max-w-4xl space-y-8 pointer-events-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>Natural Spoken Interaction & Safety Guardrails</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
          How ELO Listens, Responds & Protects
        </h2>

        <p className="text-sm sm:text-lg text-[#C5CAD6] font-sans leading-relaxed max-w-2xl">
          Children experience ELO as an attentive, speaking presence. Rather than tapping glass screens, they ask questions aloud. ELO listens through its microphone, evaluates safety, and speaks back with age-appropriate curiosity.
        </p>

        {/* Preset Conversation Scenarios */}
        <div className="flex flex-wrap gap-2 pt-2">
          {CONVERSATION_EXAMPLES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => handleSelectDialogue(i)}
              className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                activeDialogueIndex === i && !customResponse
                  ? c.type === 'safety'
                    ? 'bg-amber-500/20 text-[#F5B700] border-[#F5B700] font-bold shadow-[0_0_20px_rgba(245,183,0,0.3)]'
                    : 'bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF] font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'bg-[#0E1015]/80 text-[#8B94A7] hover:text-white border-white/10'
              }`}
            >
              {c.type === 'safety' ? '⚠️ Safety Filter Test' : `Scenario 0${i + 1}: ${c.childQuery.slice(0, 24)}...`}
            </button>
          ))}
        </div>

        {/* Live Conversation Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0E1015]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
          {/* Header Status Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${activeDialogue.filterTriggered || customResponse?.isSafety ? 'bg-[#F5B700]' : 'bg-[#00F0FF]'} animate-ping`} />
              <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                {customResponse ? customResponse.tag : activeDialogue.filterStatus}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B94A7]">
              <Volume2 className="w-4 h-4 text-[#F5B700]" />
              <span>Voice-Only Mode (No Glass UI)</span>
            </div>
          </div>

          {/* Child Question Bubble */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-[#8B94A7] uppercase tracking-wider">
              Child Speaks (via ELO Microphone):
            </span>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-base sm:text-lg">
              "{customResponse ? customResponse.query : activeDialogue.childQuery}"
            </div>
          </div>

          {/* ELO Acoustic Response Bubble */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#00F0FF] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                ELO Spoken Response (via Speaker):
              </span>
              <span className="text-[11px] font-mono text-[#F5B700]">
                Eye state: {customResponse?.isSafety ? 'curious' : activeDialogue.nextExpression}
              </span>
            </div>
            <div
              className={`p-5 rounded-2xl border text-sm sm:text-base leading-relaxed ${
                activeDialogue.filterTriggered || customResponse?.isSafety
                  ? 'bg-amber-950/20 border-[#F5B700]/40 text-[#F5F3EF]'
                  : 'bg-cyan-950/20 border-[#00F0FF]/40 text-[#F5F3EF]'
              }`}
            >
              {customResponse ? customResponse.response : activeDialogue.eloResponse}
            </div>
          </div>

          {/* Pedagogical Safety Guardrail Detail */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#8B94A7] flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-semibold block mb-0.5">Developmental Context</span>
              {activeDialogue.pedagogicalValue}
            </div>
          </div>

          {/* Interactive Question Sandbox */}
          <form onSubmit={handleCustomSubmit} className="pt-2 flex items-center gap-2">
            <input
              type="text"
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder="Ask ELO anything (e.g. 'How do birds fly?' or 'Can I touch fire?')..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-[#8B94A7] text-xs font-sans focus:outline-none focus:border-[#F5B700]"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-[#F5B700] hover:bg-[#FFC72C] text-[#090A0F] font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Ask</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
