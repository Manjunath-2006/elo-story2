import React, { useState } from 'react';
import { PRODUCT_INFO, RESEARCH_PILLARS } from '../data/researchData';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowUp, ExternalLink, Image as ImageIcon, Sliders } from 'lucide-react';

export const FinalExperienceSection = ({ onScrollToTop, onResetView }) => {
  const [photoCompareSlider, setPhotoCompareSlider] = useState(50);
  const [showSources, setShowSources] = useState(false);

  return (
    <footer
      id="final"
      className="min-h-screen relative flex flex-col justify-between py-24 px-6 sm:px-12 md:px-20 z-20 pointer-events-none"
    >
      <div className="w-full max-w-5xl mx-auto space-y-12 pointer-events-auto">
        {/* Closing Headline Hierarchy */}
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1015]/80 border border-[#F5B700]/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B700]" />
            <span className="text-xs font-mono tracking-widest text-[#F5B700] uppercase font-semibold">
              The ELO Vision // Screen-Free Companion
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-editorial tracking-tight text-white leading-tight">
            {PRODUCT_INFO.closingStatement}
          </h2>

          <p className="text-2xl sm:text-3xl font-display font-medium text-[#F5B700] text-glow-yellow">
            {PRODUCT_INFO.closingSubtext}
          </p>

          <p className="text-sm sm:text-base text-[#C5CAD6] max-w-2xl mx-auto leading-relaxed">
            By shifting from continuous visual glass consumption to voice-first reciprocal conversation, ELO accompanies young children at home without isolating them from their family or their physical world.
          </p>
        </div>

        {/* Prototype Photo Crossfade Slider (Validating 100% Fidelity to the Reference Photo) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0E1015]/85 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#F5B700]" />
              <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                Prototype Verification // Physical Hardware Reference
              </span>
            </div>
            <span className="text-xs font-mono text-[#8B94A7]">
              Compare 3D Model with Reference Photograph
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Actual Reference Prototype Photo */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-black relative group">
              <img
                src="/prototype.jpg"
                alt="Actual ELO Prototype Reference Photograph"
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] font-mono text-[#F5B700] font-semibold">
                Actual Physical Prototype
              </div>
            </div>

            {/* Design & Proportional Alignment Summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-editorial text-white">
                Fidelity to the Physical Identity
              </h3>
              <ul className="space-y-2 text-xs text-[#C5CAD6]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                  <span><strong>Black Rectangular Chassis:</strong> Faithful proportions with matte industrial finish and edge seam detail.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                  <span><strong>Four Yellow Hubs & Treaded Tires:</strong> Signature 5-spoke yellow wheels with knobby rubber treads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                  <span><strong>Hardware Openings:</strong> Center camera aperture, dual ultrasonic sensor cylinders, side red rocker power switch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                  <span><strong>Tilted Screen Enclosure:</strong> Grey printed enclosure tilted ~15° for child eye-level interaction with 4 corner socket bolts.</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onResetView}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sliders className="w-3.5 h-3.5 text-[#F5B700]" />
                  <span>Reset 3D Inspection Angle</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Boundaries Disclaimer (Mandatory Requirement) */}
        <div className="p-5 rounded-2xl bg-amber-950/20 border border-[#F5B700]/30 text-xs text-[#E8E5DF] flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#F5B700] block uppercase tracking-wider">
              Essential Product Boundary Notice
            </span>
            <p className="leading-relaxed">
              {PRODUCT_INFO.disclaimer}
            </p>
          </div>
        </div>

        {/* Research Sources Drawer Button & Content */}
        <div className="space-y-4">
          <button
            onClick={() => setShowSources(!showSources)}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#0E1015]/80 hover:bg-[#161822] border border-white/10 text-xs font-mono text-white flex items-center justify-between transition-all cursor-pointer"
          >
            <span>Verified Research Citations & Sources (7 Pillars)</span>
            <span className="text-[#F5B700]">{showSources ? '− Collapse' : '+ Expand All'}</span>
          </button>

          {showSources && (
            <div className="p-6 rounded-3xl bg-[#0E1015]/90 border border-white/10 backdrop-blur-md space-y-4 text-xs animate-fade-in">
              {RESEARCH_PILLARS.map((p, i) => (
                <div key={p.id} className="border-b border-white/10 pb-3 last:border-none space-y-1">
                  <div className="text-[#F5B700] font-mono font-bold text-[11px]">{p.badge}</div>
                  <div className="text-white font-semibold">{p.headline}</div>
                  <div className="text-[#8B94A7]">{p.source}</div>
                  <div className="pt-1 flex flex-wrap gap-2">
                    {p.urls ? (
                      p.urls.map((u, j) => (
                        <a key={j} href={u} target="_blank" rel="noreferrer" className="text-[#00F0FF] hover:underline flex items-center gap-1 font-mono text-[10px]">
                          <span>Link {j + 1}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ))
                    ) : p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer" className="text-[#00F0FF] hover:underline flex items-center gap-1 font-mono text-[10px]">
                        <span>Primary Research URL</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8B94A7] pt-12 border-t border-white/10 pointer-events-auto gap-4">
        <div>
          <span>© 2026 ELO Robotics</span> • <span>Child Companion Robot Prototype Experience</span>
        </div>

        <button
          onClick={onScrollToTop}
          className="flex items-center gap-2 text-white hover:text-[#F5B700] transition-colors cursor-pointer"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-4 h-4 text-[#F5B700]" />
        </button>
      </div>
    </footer>
  );
};
