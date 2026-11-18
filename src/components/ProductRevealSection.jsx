import React from 'react';
import { PRODUCT_INFO } from '../data/researchData';
import { Sparkles, ArrowRight, Eye, Shield, Radio, Volume2 } from 'lucide-react';

export const ProductRevealSection = ({ onInspectClick, onDialogueClick }) => {
  return (
    <section
      id="reveal"
      className="min-h-screen relative flex items-center justify-start py-28 px-6 sm:px-12 md:px-20 z-20 pointer-events-none"
    >
      <div className="w-full max-w-4xl space-y-8 pointer-events-auto">
        {/* Cinematic Chapter Marker */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1015]/80 border border-[#F5B700]/40 backdrop-blur-md shadow-[0_0_20px_rgba(245,183,0,0.15)]">
          <Sparkles className="w-4 h-4 text-[#F5B700] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-bold">
            The Product Reveal // Voice-First Architecture
          </span>
        </div>

        {/* Master Query Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-editorial tracking-tight text-white leading-[1.08]">
          {PRODUCT_INFO.coreProposition}
        </h2>

        {/* Supporting Narrative */}
        <p className="text-lg sm:text-2xl text-[#E8E5DF]/90 font-sans font-light max-w-2xl leading-relaxed">
          Meet the actual <span className="text-[#F5B700] font-medium font-mono">ELO</span> physical prototype. An autonomous wheeled companion that replaces passive video consumption with warm spoken dialogue, expressive emotional feedback, and proactive parental peace of mind.
        </p>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl">
          <div className="p-4 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md space-y-2">
            <div className="flex items-center gap-2 text-[#00F0FF]">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-mono uppercase font-bold tracking-wider">Expressive Eyes</span>
            </div>
            <p className="text-xs text-[#8B94A7] leading-relaxed">
              No addictive touchscreen games. Communicates mood through animated eye emojis on an inset screen.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md space-y-2">
            <div className="flex items-center gap-2 text-[#F5B700]">
              <Volume2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase font-bold tracking-wider">Acoustic First</span>
            </div>
            <p className="text-xs text-[#8B94A7] leading-relaxed">
              Natural spoken questions and answers that keep children active and moving in the physical room.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-mono uppercase font-bold tracking-wider">Safety Filter</span>
            </div>
            <p className="text-xs text-[#8B94A7] leading-relaxed">
              Automated child guardrails filter every question, gently redirecting unsafe topics to parents.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={onInspectClick}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#F5B700] text-[#090A0F] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#FFC72C] transition-all shadow-[0_0_30px_rgba(245,183,0,0.4)] cursor-pointer"
          >
            <span>Inspect Hardware Hotspots</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onDialogueClick}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/15 transition-all cursor-pointer"
          >
            <span>See ELO in Action</span>
          </button>
        </div>
      </div>
    </section>
  );
};
