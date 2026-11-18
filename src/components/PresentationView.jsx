import React, { useState } from 'react';
import { SLIDES } from '../data/slidesData';
import { HOTSPOTS_DATA, RESEARCH_PILLARS, PRODUCT_INFO } from '../data/researchData';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Video, Square, Play, Wifi, BatteryMedium, Users, ExternalLink } from 'lucide-react';

export const PresentationView = ({
  currentSlideIndex,
  onNextSlide,
  selectedHotspot,
  onSelectHotspot,
  isRobotPaused,
  onToggleRobotPause,
  onExpressionTrigger
}) => {
  const slide = SLIDES[currentSlideIndex];
  const [activeDialogueTab, setActiveDialogueTab] = useState('curiosity'); // 'curiosity' or 'safety'
  const [selectedChild, setSelectedChild] = useState('Aarav');
  const [showSourcesModal, setShowSourcesModal] = useState(false);

  return (
    <div className="presentation-view-shell relative z-20 min-h-screen flex items-center justify-start p-6 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
      {/* Copy stays in its own column while the 3D model anchors the right side. */}
      <div className="presentation-view-content w-full max-w-7xl mx-auto flex flex-col justify-center min-h-[75vh]">

        {/* ======================================================== */}
        {/* SLIDE 01: PRODUCT HERO */}
        {/* ======================================================== */}
        {slide.id === 'hero' && (
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // Target Age: 4–8 Years
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-editorial tracking-tight text-white leading-[1.05]">
                {slide.headline}
              </h1>
            </div>

            <p className="text-lg sm:text-2xl text-[#C5CAD6] font-sans font-light leading-relaxed max-w-2xl">
              {slide.subheadline}
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onNextSlide}
                className="px-6 py-3 rounded-full bg-[#F5B700] text-[#090A0F] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#FFC72C] transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(245,183,0,0.35)] cursor-pointer"
              >
                <span>Begin Presentation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#8E95A5] hidden sm:inline">
                Or press Space / Arrow keys
              </span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 02: SOCIOECONOMIC REALITY (PLFS 2025) */}
        {/* ======================================================== */}
        {slide.id === 'workforce' && (
          <div className="max-w-2xl space-y-8 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 02
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
                {slide.subheadline}
              </p>
            </div>

            {/* Clean Typographic Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1 border-l-2 border-[#F5B700] pl-4">
                <div className="text-4xl sm:text-5xl font-black font-editorial text-white tracking-tight">
                  {slide.statPrimary}
                </div>
                <div className="text-xs text-[#8E95A5] leading-snug">
                  {slide.statPrimaryLabel}
                </div>
              </div>

              <div className="space-y-1 border-l-2 border-white/20 pl-4">
                <div className="text-4xl sm:text-5xl font-black font-editorial text-white tracking-tight">
                  {slide.statSecondary}
                </div>
                <div className="text-xs text-[#8E95A5] leading-snug">
                  {slide.statSecondaryLabel}
                </div>
              </div>

              <div className="space-y-1 border-l-2 border-white/20 pl-4">
                <div className="text-4xl sm:text-5xl font-black font-editorial text-white tracking-tight">
                  {slide.statTertiary}
                </div>
                <div className="text-xs text-[#8E95A5] leading-snug">
                  {slide.statTertiaryLabel}
                </div>
              </div>
            </div>

            {/* Precision Footnote */}
            <div className="pt-2 space-y-1 text-xs text-[#8E95A5] font-sans border-t border-white/10">
              <p className="text-[#C5CAD6]">{slide.footnote}</p>
              <p className="font-mono text-[11px]">Source: {slide.source}</p>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 03: UNPAID DOMESTIC & CAREGIVING DISPARITY */}
        {/* ======================================================== */}
        {slide.id === 'time-use' && (
          <div className="max-w-2xl space-y-8 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 03
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
                {slide.subheadline}
              </p>
            </div>

            {/* Clean Graphical Contrast */}
            <div className="space-y-6 pt-2">
              {/* Women Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-white font-medium">{slide.womenLabel}</span>
                  <span className="font-mono font-bold text-[#F5B700] text-lg">341 min</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F5B700] rounded-full w-full" />
                </div>
              </div>

              {/* Men Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-[#8E95A5] font-medium">{slide.menLabel}</span>
                  <span className="font-mono font-bold text-white text-lg">42 min</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white/40 rounded-full"
                    style={{ width: `${(slide.menTime / slide.womenTime) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#8E95A5] font-mono border-t border-white/10">
              Source: {slide.source}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 04: CHILDREN'S SCREEN EXPOSURE & DEVELOPMENT */}
        {/* ======================================================== */}
        {slide.id === 'screen-exposure' && (
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 04
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
                {slide.subheadline}
              </p>
            </div>

            {/* 3 Metric Columns */}
            <div className="grid grid-cols-3 gap-4 pt-1">
              <div className="space-y-1 border-l-2 border-[#00F0FF] pl-3">
                <div className="text-3xl sm:text-4xl font-black font-editorial text-white">
                  {slide.stat1}
                </div>
                <div className="text-[11px] text-[#8E95A5] leading-snug">
                  {slide.stat1Label}
                </div>
              </div>

              <div className="space-y-1 border-l-2 border-red-400 pl-3">
                <div className="text-3xl sm:text-4xl font-black font-editorial text-white">
                  {slide.stat2}
                </div>
                <div className="text-[11px] text-[#8E95A5] leading-snug">
                  {slide.stat2Label}
                </div>
              </div>

              <div className="space-y-1 border-l-2 border-white/20 pl-3">
                <div className="text-3xl sm:text-4xl font-black font-editorial text-white">
                  {slide.stat3}
                </div>
                <div className="text-[11px] text-[#8E95A5] leading-snug">
                  {slide.stat3Label}
                </div>
              </div>
            </div>

            {/* Synthesized Evidence Points */}
            <div className="space-y-2 pt-2 text-xs text-[#C5CAD6] font-sans border-t border-white/10">
              <p className="leading-relaxed">
                <strong className="text-[#F5B700] font-semibold">WHO Benchmark: </strong>
                {slide.whoBenchmark}
              </p>
              <p className="leading-relaxed">
                <strong className="text-[#00F0FF] font-semibold">Developmental Evidence: </strong>
                {slide.jamaNote}
              </p>
              <p className="text-[11px] text-[#8E95A5] pt-1 font-mono">
                {slide.sampleNotice}
              </p>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 05: CHILDCARE ACCESSIBILITY & COSTS */}
        {/* ======================================================== */}
        {slide.id === 'childcare-gap' && (
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 05
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
                {slide.subheadline}
              </p>
            </div>

            {/* Urban Macro Deficit */}
            <div className="grid grid-cols-2 gap-6 pt-1">
              <div className="space-y-1 border-l-2 border-[#F5B700] pl-4">
                <div className="text-4xl sm:text-5xl font-black font-editorial text-white">
                  {slide.demandMetric}
                </div>
                <div className="text-xs text-[#8E95A5]">
                  {slide.demandLabel}
                </div>
              </div>

              <div className="space-y-1 border-l-2 border-white/20 pl-4">
                <div className="text-4xl sm:text-5xl font-black font-editorial text-white">
                  {slide.supplyMetric}
                </div>
                <div className="text-xs text-[#8E95A5]">
                  {slide.supplyLabel}
                </div>
              </div>
            </div>

            {/* Coimbatore Fee Examples */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs font-sans">
              <div className="font-mono text-[#F5B700] uppercase font-semibold tracking-wider text-[11px]">
                {slide.localTitle}
              </div>
              <div className="space-y-1 text-[#C5CAD6]">
                <p>• {slide.costExample1}</p>
                <p>• {slide.costExample2}</p>
              </div>
              <p className="text-[11px] text-[#8E95A5] pt-1">
                {slide.costNote}
              </p>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 06: PRODUCT REVEAL */}
        {/* ======================================================== */}
        {slide.id === 'reveal' && (
          <div className="max-w-2xl space-y-8 animate-fade-in">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 06
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
            </div>

            <p className="text-base sm:text-xl text-[#C5CAD6] font-sans font-light leading-relaxed">
              {slide.subheadline}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-white/10">
              {slide.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#F5F3ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onNextSlide}
                className="px-6 py-3 rounded-full bg-[#F5B700] text-[#090A0F] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#FFC72C] transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(245,183,0,0.3)]"
              >
                <span>Explore Prototype Anatomy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 07: PHYSICAL PROTOTYPE ANATOMY */}
        {/* ======================================================== */}
        {slide.id === 'hardware' && (
          <div className="max-w-xl space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 07
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
              <p className="text-xs sm:text-sm text-[#8E95A5]">
                Click any subsystem to command the 3D camera to focus on that physical hardware assembly.
              </p>
            </div>

            {/* Minimalist Subsystem Buttons */}
            <div className="space-y-2">
              {slide.subsystems.map((sub) => {
                const isSelected = selectedHotspot?.id === sub.id;
                const spotObj = HOTSPOTS_DATA.find(h => h.id === sub.id);

                return (
                  <button
                    key={sub.id}
                    onClick={() => onSelectHotspot(spotObj)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#F5B700] text-[#090A0F] border-[#F5B700] shadow-[0_0_20px_rgba(245,183,0,0.35)] font-bold'
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold">{sub.label}</div>
                      <div className={`text-xs mt-0.5 ${isSelected ? 'text-[#090A0F]/80' : 'text-[#8E95A5]'}`}>
                        {sub.desc}
                      </div>
                    </div>
                    <span className={`text-xs font-mono ml-3 shrink-0 ${isSelected ? 'font-bold' : 'text-[#8E95A5]'}`}>
                      {isSelected ? 'Focused' : 'Zoom →'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 08: LIVE CONVERSATION & SAFETY FILTER */}
        {/* ======================================================== */}
        {slide.id === 'dialogue' && (
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 08
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
              <p className="text-sm text-[#C5CAD6] leading-relaxed">
                {slide.subheadline}
              </p>
            </div>

            {/* Clean Tab Switcher for the 2 Scenarios */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  setActiveDialogueTab('curiosity');
                  onExpressionTrigger('curious');
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                  activeDialogueTab === 'curiosity'
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF] font-semibold'
                    : 'bg-white/5 text-[#8E95A5] border-white/10'
                }`}
              >
                1. Scientific Curiosity Scenario
              </button>

              <button
                onClick={() => {
                  setActiveDialogueTab('safety');
                  onExpressionTrigger('listening');
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                  activeDialogueTab === 'safety'
                    ? 'bg-[#F5B700]/20 text-[#F5B700] border-[#F5B700] font-semibold'
                    : 'bg-white/5 text-[#8E95A5] border-white/10'
                }`}
              >
                2. Safety Filter Redirection Scenario
              </button>
            </div>

            {/* Conversation Dialog Presentation Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#8E95A5]">
                  Child Asks (Spoken Aloud):
                </span>
                <div className="text-lg font-medium text-white">
                  "{activeDialogueTab === 'curiosity' ? slide.childQueryA : slide.childQueryB}"
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className={`text-[11px] font-mono uppercase ${activeDialogueTab === 'curiosity' ? 'text-[#00F0FF]' : 'text-[#F5B700]'}`}>
                  ELO Spoken Response (via Speaker):
                </span>
                <div className="text-sm sm:text-base text-[#F5F3ED] leading-relaxed">
                  "{activeDialogueTab === 'curiosity' ? slide.eloAnswerA : slide.eloAnswerB}"
                </div>
              </div>

              {activeDialogueTab === 'safety' && (
                <div className="p-3 rounded-lg bg-amber-500/10 border border-[#F5B700]/30 text-xs text-[#E8E5DF] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F5B700] shrink-0" />
                  <span>{slide.filterNote}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 09: PARENT APPLICATION */}
        {/* ======================================================== */}
        {slide.id === 'parent-app' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                  {slide.tag} // 09
                </span>
                <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white leading-tight">
                  {slide.headline}
                </h2>
                <p className="text-sm text-[#C5CAD6] leading-relaxed">
                  {slide.subheadline}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {slide.features.map((f, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-sm font-semibold text-white">{f.title}</div>
                    <div className="text-xs text-[#8E95A5]">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Clean Phone Silhouette */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-72 rounded-[36px] p-3 bg-[#161820] border-2 border-white/20 shadow-2xl space-y-4">
                {/* Phone Header */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8E95A5] px-2 pt-1 border-b border-white/10 pb-2">
                  <span className="font-bold text-white">ELO PARENT</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3 h-3 text-[#00F0FF]" />
                    <span>92%</span>
                  </div>
                </div>

                {/* 1. Select Child to Follow */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-[#8E95A5] uppercase">Target Child:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {['Aarav', 'Ananya'].map((name) => (
                      <button
                        key={name}
                        onClick={() => setSelectedChild(name)}
                        className={`p-2 rounded-xl text-left border text-xs cursor-pointer ${
                          selectedChild === name
                            ? 'bg-[#F5B700]/20 border-[#F5B700] text-white font-bold'
                            : 'bg-white/5 border-white/10 text-[#8E95A5]'
                        }`}
                      >
                        <div>{name}</div>
                        <div className="text-[9px] text-[#00F0FF]">
                          {selectedChild === name ? '● Following' : 'Standby'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Simulated Camera Stream */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-[#8E95A5] uppercase">Camera Stream:</span>
                    <span className="text-red-400 font-bold">● LIVE</span>
                  </div>
                  <div className="w-full h-24 rounded-xl bg-black border border-white/10 flex flex-col justify-between p-2">
                    <div className="text-[9px] font-mono text-[#00F0FF]">
                      Optical Tracking: {selectedChild}
                    </div>
                    <div className="text-[8px] font-mono text-[#F5B700] text-center bg-black/70 p-1 rounded">
                      Simulated stream for prototype demo
                    </div>
                  </div>
                </div>

                {/* 3. Stop / Pause Toggle */}
                <div className="pt-1">
                  <button
                    onClick={onToggleRobotPause}
                    className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                      isRobotPaused
                        ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                        : 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    }`}
                  >
                    {isRobotPaused ? 'Resume Robot' : 'Instant Stop'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 10: VISION & VERIFICATION */}
        {/* ======================================================== */}
        {slide.id === 'vision' && (
          <div className="max-w-4xl space-y-8 animate-fade-in text-center sm:text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
                {slide.tag} // 10
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
              <p className="text-xl sm:text-2xl font-editorial text-[#F5B700]">
                {slide.closingBrand}
              </p>
              <p className="text-sm text-[#C5CAD6] max-w-2xl leading-relaxed">
                {slide.subheadline}
              </p>
            </div>

            {/* Prototype Reference Photo Comparison */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-left grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 rounded-xl overflow-hidden border border-white/20 bg-black">
                <img
                  src="/prototype.jpg"
                  alt="Actual Prototype Reference"
                  className="w-full h-40 object-cover object-center"
                />
              </div>
              <div className="sm:col-span-8 space-y-2 text-xs text-[#C5CAD6]">
                <div className="font-bold text-white text-sm">
                  Physical Prototype Fidelity Verification
                </div>
                <p>
                  Built with exact proportional geometry from the physical prototype: black rectangular chassis, signature yellow 5-spoke wheels, ultrasonic distance sensors, and tilted grey display enclosure.
                </p>
                <div className="text-[11px] font-mono text-[#F5B700] pt-1">
                  100% Proportions & Physical Identity Preserved
                </div>
              </div>
            </div>

            {/* Responsible Supervision Disclaimer */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-[#F5B700]/30 text-xs text-[#E8E5DF] flex items-start gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#F5B700] block uppercase tracking-wider text-[11px]">
                  Complementary Companion Boundary Notice
                </span>
                <p className="leading-relaxed mt-0.5">
                  {slide.disclaimer}
                </p>
              </div>
            </div>

            {/* Research Sources Modal Button */}
            <div className="pt-1 flex items-center justify-between text-xs font-mono text-[#8E95A5]">
              <button
                onClick={() => setShowSourcesModal(true)}
                className="text-[#F5B700] hover:underline cursor-pointer"
              >
                View 7 Primary Research Citations →
              </button>
              <span>© 2026 ELO Robotics</span>
            </div>
          </div>
        )}

      </div>

      {/* Sources Modal */}
      {showSourcesModal && (
        <div className="fixed inset-0 z-50 pointer-events-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="w-full max-w-2xl bg-[#12141A] border border-white/20 rounded-2xl p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="font-bold text-white font-editorial text-lg">Verified Primary Sources</h3>
              <button
                onClick={() => setShowSourcesModal(false)}
                className="text-xs font-mono text-[#8E95A5] hover:text-white cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <div className="space-y-3 text-xs text-[#C5CAD6]">
              {RESEARCH_PILLARS.map((p) => (
                <div key={p.id} className="border-b border-white/5 pb-2">
                  <div className="text-[#F5B700] font-mono text-[11px] font-semibold">{p.badge}</div>
                  <div className="text-white font-medium">{p.headline}</div>
                  <div className="text-[#8E95A5] text-[11px]">{p.source}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
