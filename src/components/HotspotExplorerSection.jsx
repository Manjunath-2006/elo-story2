import React from 'react';
import { HOTSPOTS_DATA } from '../data/researchData';
import { Eye, Camera, Mic, Disc3, Radio, Power, Sparkles, CheckCircle2 } from 'lucide-react';

export const HotspotExplorerSection = ({ selectedHotspot, onSelectHotspot }) => {
  const getIcon = (id) => {
    switch (id) {
      case 'display': return Eye;
      case 'camera': return Camera;
      case 'mic-speaker': return Mic;
      case 'sensors': return Radio;
      case 'wheels': return Disc3;
      case 'switch': return Power;
      default: return Sparkles;
    }
  };

  return (
    <section
      id="hotspots"
      className="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 md:px-20 z-20 pointer-events-none"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto">
        {/* Left Console Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F5B700] uppercase tracking-wider">
            <Disc3 className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Hardware Architecture & Inspection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white leading-tight">
            Physical Prototype Anatomy
          </h2>

          <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
            Select any subsystem to inspect the actual hardware components built into the physical ELO prototype. The 3D camera will zoom and pan to the exact physical assembly.
          </p>

          {/* Component Selector Buttons */}
          <div className="space-y-2 pt-2">
            {HOTSPOTS_DATA.map((spot) => {
              const Icon = getIcon(spot.id);
              const isSelected = selectedHotspot?.id === spot.id;

              return (
                <button
                  key={spot.id}
                  onClick={() => onSelectHotspot(spot)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#F5B700] text-[#090A0F] border-[#F5B700] shadow-[0_0_25px_rgba(245,183,0,0.35)] scale-[1.02]'
                      : 'bg-[#0E1015]/80 hover:bg-[#161822] text-white border-white/10 hover:border-white/25 backdrop-blur-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isSelected ? 'bg-[#090A0F] text-[#F5B700]' : 'bg-white/5 text-[#F5B700] group-hover:bg-[#F5B700]/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-editorial">{spot.title}</div>
                      <div className={`text-[11px] font-sans ${isSelected ? 'text-[#090A0F]/80' : 'text-[#8B94A7]'}`}>
                        {spot.subtitle}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-[#090A0F]/15 font-bold' : 'text-[#8B94A7]'
                    }`}
                  >
                    {isSelected ? 'Focused' : 'Inspect'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Card (When Hotspot Selected) */}
        <div className="lg:col-span-4 lg:col-start-9 space-y-4">
          {selectedHotspot ? (
            <div className="p-6 rounded-3xl bg-[#0E1015]/90 border border-[#F5B700]/40 backdrop-blur-xl shadow-2xl space-y-4 animate-fade-in">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase text-[#F5B700] tracking-wider font-semibold">
                  Component Telemetry
                </span>
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              </div>

              <h3 className="text-xl font-bold font-editorial text-white">
                {selectedHotspot.title}
              </h3>

              <div className="text-xs font-mono text-[#F5B700]">
                {selectedHotspot.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-[#C5CAD6] leading-relaxed">
                {selectedHotspot.description}
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#8B94A7] font-mono">
                <span>Verified on Prototype</span>
                <span className="text-[#00F0FF] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Calibrated
                </span>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-3xl bg-[#0E1015]/60 border border-white/10 backdrop-blur-md text-center space-y-2">
              <div className="text-sm font-mono text-[#8B94A7]">
                Click any 3D hotspot or sidebar component to zoom camera and view hardware specifications.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
