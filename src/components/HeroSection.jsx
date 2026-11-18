import React from 'react';
import { PRODUCT_INFO } from '../data/researchData';
import { RotateCw, Sparkles, Smile, HelpCircle, Mic, Brain, ArrowDown } from 'lucide-react';

export const HeroSection = ({
  expression,
  onExpressionChange,
  onExploreClick,
  isInspecting,
  onToggleInspect
}) => {
  const expressions = [
    { id: 'happy', label: 'Happy', icon: Smile, color: '#00F0FF' },
    { id: 'curious', label: 'Curious', icon: HelpCircle, color: '#F5B700' },
    { id: 'listening', label: 'Listening', icon: Mic, color: '#38BDF8' },
    { id: 'thinking', label: 'Thinking', icon: Brain, color: '#A78BFA' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-between p-6 sm:p-12 md:p-16 z-20 pointer-events-none"
    >
      {/* Top Luxury Header Bar */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F5B700] shadow-[0_0_15px_#F5B700] animate-pulse" />
          <span className="text-sm font-mono font-bold tracking-widest text-[#F5F3EF] uppercase">
            {PRODUCT_INFO.name} // 3D IMMERSIVE
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#F5B700]">
            {PRODUCT_INFO.targetAge}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-[#C5CAD6]">
          <span className="hidden md:inline-block">{PRODUCT_INFO.category}</span>
          <button
            onClick={onToggleInspect}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all duration-300 ${
              isInspecting
                ? 'bg-[#F5B700] text-[#090A0F] border-[#F5B700] font-semibold shadow-[0_0_20px_rgba(245,183,0,0.4)]'
                : 'bg-white/5 hover:bg-white/10 border-white/15 text-[#F5F3EF]'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isInspecting ? 'animate-spin' : ''}`} />
            <span>{isInspecting ? 'Inspecting 360°' : 'Rotate Robot'}</span>
          </button>
        </div>
      </div>

      {/* Center Cinematic Editorial Hierarchy */}
      <div className="w-full max-w-4xl mx-auto my-auto py-10 space-y-6 pointer-events-auto">
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1015]/80 border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#F5B700]" />
          <span className="text-xs font-mono tracking-wider text-[#E8E5DF] uppercase">
            Child Companion Robotics Experience
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-editorial tracking-tight text-white leading-[1.02]">
          {PRODUCT_INFO.tagline}
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#E8E5DF]/90 font-sans font-light max-w-2xl leading-relaxed">
          {PRODUCT_INFO.supportingText}
        </p>

        {/* Expression State Engine & Interaction Bar */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md">
            <span className="text-xs font-mono text-[#8B94A7] uppercase tracking-wider pl-1 pr-2">
              Eyes:
            </span>
            <div className="flex items-center gap-1.5">
              {expressions.map((exp) => {
                const Icon = exp.icon;
                const isActive = expression === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => onExpressionChange(exp.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                      isActive
                        ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.3)] font-semibold'
                        : 'text-[#C5CAD6] hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: isActive ? '#00F0FF' : exp.color }} />
                    <span className="capitalize">{exp.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-xs font-mono text-[#8B94A7] flex items-center gap-2 px-3 py-2">
            <RotateCw className="w-3.5 h-3.5 text-[#F5B700] animate-spin-slow" />
            <span>Drag anywhere to rotate 360°</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-[#8B94A7] pointer-events-auto">
        <button
          onClick={onExploreClick}
          className="flex items-center gap-2.5 text-[#F5F3EF] hover:text-[#F5B700] transition-colors group cursor-pointer"
        >
          <span>Scroll to enter the research story</span>
          <ArrowDown className="w-4 h-4 text-[#F5B700] group-hover:translate-y-1 transition-transform" />
        </button>

        <span className="hidden sm:inline text-[11px] text-[#8B94A7]">
          Research-grounded // Built for Children 4–8 Years
        </span>
      </div>
    </section>
  );
};
