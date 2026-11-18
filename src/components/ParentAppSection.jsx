import React, { useState } from 'react';
import { PARENT_APP_DATA } from '../data/researchData';
import { Smartphone, Users, Video, Square, Play, ShieldAlert, Wifi, BatteryMedium, Sparkles } from 'lucide-react';

export const ParentAppSection = ({ isRobotPaused, onToggleRobotPause }) => {
  const [selectedChild, setSelectedChild] = useState('c1');
  const [isStreaming, setIsStreaming] = useState(true);

  const activeChildObj = PARENT_APP_DATA.childrenList.find(c => c.id === selectedChild);

  return (
    <section
      id="parent-app"
      className="min-h-screen relative flex items-center justify-start py-28 px-6 sm:px-12 md:px-20 z-20 pointer-events-none"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pointer-events-auto">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F5B700] uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5 text-[#F5B700]" />
            <span>Parent Control Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
            Parent Oversight, Uncompromised Safety
          </h2>

          <p className="text-sm sm:text-base text-[#C5CAD6] font-sans leading-relaxed">
            The ELO companion robot is designed with a focused parent application. Parents maintain complete control without requiring their child to touch or stare at a smartphone.
          </p>

          {/* Core App Feature Checklist */}
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md space-y-1">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-[#F5B700]" />
                <span>1. Child Target Selection</span>
              </div>
              <p className="text-xs text-[#8B94A7]">
                Parent selects which child ELO should visually track and accompany as they play in the home.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md space-y-1">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-[#00F0FF]" />
                <span>2. Live Camera Streaming</span>
              </div>
              <p className="text-xs text-[#8B94A7]">
                Stream discreet live video of the child playing safely from the other room or while finishing work calls.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md space-y-1">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Square className="w-4 h-4 text-red-400" />
                <span>3. Instant Remote Robot Stop / Pause</span>
              </div>
              <p className="text-xs text-[#8B94A7]">
                One-tap hardware override instantly freezes robot movement and navigation anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Right Floating Smartphone Mockup (Beside ELO in 3D Space) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[340px] rounded-[44px] p-3 bg-gradient-to-b from-[#2a2d36] via-[#15171d] to-[#0d0e12] border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative">
            {/* Screen Enclosure */}
            <div className="w-full rounded-[36px] bg-[#090A0F] border border-white/10 overflow-hidden flex flex-col justify-between p-4 space-y-4">
              {/* Smartphone Status Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8B94A7] px-2 pt-1 border-b border-white/10 pb-2">
                <span className="font-bold text-white">ELO PARENT</span>
                <div className="flex items-center gap-2">
                  <Wifi className="w-3 h-3 text-[#00F0FF]" />
                  <BatteryMedium className="w-3.5 h-3.5 text-white" />
                  <span>92%</span>
                </div>
              </div>

              {/* 1. Select Child to Follow */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8B94A7] flex items-center justify-between">
                  <span>Select Child ELO Follows:</span>
                  <span className="text-[#F5B700]">Active Selection</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {PARENT_APP_DATA.childrenList.map((c) => {
                    const isCurrent = selectedChild === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelectedChild(c.id)}
                        className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-[#F5B700]/20 border-[#F5B700] text-white shadow-[0_0_15px_rgba(245,183,0,0.3)]'
                            : 'bg-white/5 border-white/10 text-[#8B94A7] hover:text-white'
                        }`}
                      >
                        <div className="font-bold text-xs">{c.name}</div>
                        <div className="text-[10px] text-[#8B94A7]">{c.age}</div>
                        <div className="text-[9px] font-mono mt-1 text-[#00F0FF]">
                          {isCurrent ? '● Tracking' : 'Standby'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Live Camera Stream Mockup with Required Notice */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#8B94A7] uppercase tracking-wider">Robot Camera Stream:</span>
                  <span className="flex items-center gap-1 text-red-400 font-bold animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    LIVE
                  </span>
                </div>

                <div className="w-full h-36 rounded-2xl bg-[#12141a] border border-white/10 relative overflow-hidden flex flex-col justify-between p-2.5">
                  {/* Subtle Camera Feed Simulation Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                  {/* Corner Target Reticle */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/80">
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10">
                      FOV 95° // {activeChildObj.name} in View
                    </span>
                    <span className="text-[#00F0FF] font-bold">1080p 30fps</span>
                  </div>

                  {/* Simulated Child Playroom Silhouette View */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="text-center space-y-1">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#00F0FF] mx-auto animate-spin-slow flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#00F0FF]" />
                      </div>
                      <div className="text-[10px] font-mono text-[#00F0FF]">
                        Tracking: {activeChildObj.name}
                      </div>
                    </div>
                  </div>

                  {/* Required Legal / Prototype Disclaimer Badge */}
                  <div className="relative z-10 p-1.5 rounded-lg bg-black/80 border border-amber-500/30 text-[9px] font-mono text-[#F5B700] text-center leading-tight">
                    {PARENT_APP_DATA.cameraDisclaimer}
                  </div>
                </div>
              </div>

              {/* 3. Stop / Pause Functionality */}
              <div className="space-y-2 pt-1 border-t border-white/10">
                <button
                  onClick={onToggleRobotPause}
                  className={`w-full py-3 px-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isRobotPaused
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                      : 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                  }`}
                >
                  {isRobotPaused ? (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Resume ELO Robot</span>
                    </>
                  ) : (
                    <>
                      <Square className="w-4 h-4 fill-current" />
                      <span>Instant Emergency Stop</span>
                    </>
                  )}
                </button>

                <div className="text-[10px] font-mono text-[#8B94A7] text-center">
                  Robot Status:{' '}
                  <span className={isRobotPaused ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                    {isRobotPaused ? 'STOPPED (PAUSED)' : 'ACTIVE & FOLLOWING'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
