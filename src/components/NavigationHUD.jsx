import React, { useState, useEffect } from 'react';
import { PRODUCT_INFO } from '../data/researchData';
import { Eye, RotateCw, Sparkles, Shield, ChevronRight, Menu, X, Pause, Play } from 'lucide-react';

export const NavigationHUD = ({
  currentChapter,
  onNavigate,
  expression,
  onExpressionChange,
  isInspecting,
  onToggleInspect,
  isRobotPaused,
  onToggleRobotPause
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Studio' },
    { id: 'research-workforce', label: 'Research' },
    { id: 'reveal', label: 'Reveal' },
    { id: 'hotspots', label: 'Hardware' },
    { id: 'action-dialogue', label: 'In Action' },
    { id: 'parent-app', label: 'Parent App' },
    { id: 'final', label: 'Vision' },
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) onNavigate(id);
  };

  return (
    <>
      {/* Floating Top Navigation HUD */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[94%] max-w-5xl pointer-events-auto ${
          scrolled
            ? 'py-2 px-4 rounded-full bg-[#0E1015]/85 border border-white/15 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
            : 'py-2.5 px-4 rounded-full bg-[#0E1015]/50 border border-white/10 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-lg bg-black border border-white/20 flex items-center justify-center p-1 relative overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
              <div className="absolute right-1 w-1 h-1 rounded-full bg-white" />
            </div>
            <span className="font-editorial font-bold text-white tracking-widest text-sm">
              ELO
            </span>
          </button>

          {/* Desktop Chapter Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-xs font-mono">
            {navItems.map((item) => {
              const isActive =
                currentChapter === item.id ||
                (item.id === 'research-workforce' && currentChapter.startsWith('research-'));

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F5B700] text-[#090A0F] font-bold shadow-[0_0_15px_rgba(245,183,0,0.3)]'
                      : 'text-[#C5CAD6] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Quick Interactive Toolset */}
          <div className="flex items-center gap-2">
            {/* Quick 360 Orbit Toggle */}
            <button
              onClick={onToggleInspect}
              title="Toggle 360 Inspection Orbit"
              className={`p-2 rounded-full border text-xs transition-all cursor-pointer ${
                isInspecting
                  ? 'bg-[#F5B700] text-[#090A0F] border-[#F5B700] shadow-[0_0_15px_rgba(245,183,0,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isInspecting ? 'animate-spin' : ''}`} />
            </button>

            {/* Quick Robot Pause Indicator */}
            <button
              onClick={onToggleRobotPause}
              title={isRobotPaused ? 'Resume Robot' : 'Stop Robot'}
              className={`px-2.5 py-1 rounded-full border text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                isRobotPaused
                  ? 'bg-red-500/20 text-red-400 border-red-500/40 font-bold'
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isRobotPaused ? 'bg-red-500' : 'bg-emerald-400'} animate-ping`} />
              <span className="hidden sm:inline">{isRobotPaused ? 'Paused' : 'Active'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090A0F]/95 backdrop-blur-2xl flex flex-col justify-center px-8 space-y-6 md:hidden">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#F5B700] tracking-widest">
              Navigation Chapters
            </span>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left py-2.5 text-xl font-editorial font-bold text-white hover:text-[#F5B700] flex items-center justify-between border-b border-white/10"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#8B94A7]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="text-xs font-mono text-[#8B94A7]">Quick Mood:</div>
            <div className="grid grid-cols-4 gap-2">
              {['happy', 'curious', 'listening', 'thinking'].map((exp) => (
                <button
                  key={exp}
                  onClick={() => {
                    onExpressionChange(exp);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 rounded-xl text-xs font-mono uppercase border ${
                    expression === exp
                      ? 'bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF]'
                      : 'bg-white/5 text-[#8B94A7] border-white/10'
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
