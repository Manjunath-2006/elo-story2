import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Play, Pause } from 'lucide-react';

export const PresentationHUD = ({
  currentSlideIndex,
  totalSlides,
  currentSlideTitle,
  onPrev,
  onNext,
  onJumpToSlide,
  isAutoPlay,
  onToggleAutoPlay,
  isFullscreen,
  onToggleFullscreen
}) => {
  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-5 flex items-center justify-between pointer-events-none">
        {/* Brand mark */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="w-6 h-6 rounded-md bg-[#12141A] border border-white/20 flex items-center justify-center p-1">
            <div className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
          </div>
          <span className="font-editorial font-bold text-white tracking-widest text-sm">
            ELO
          </span>
          <span className="text-[11px] font-mono text-[#8E95A5] pl-1 border-l border-white/10 hidden sm:inline">
            Child Companion Robot // Product Presentation
          </span>
        </div>

        {/* Top Controls */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Slide counter */}
          <div className="px-3 py-1 rounded-full bg-[#12141A]/90 border border-white/10 text-xs font-mono text-[#F5F3ED] flex items-center gap-2 backdrop-blur-md">
            <span className="text-[#F5B700] font-bold">
              {String(currentSlideIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[#8E95A5]">/</span>
            <span className="text-[#8E95A5]">{String(totalSlides).padStart(2, '0')}</span>
            <span className="text-[#8E95A5] hidden md:inline">• {currentSlideTitle}</span>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-full bg-[#12141A]/90 hover:bg-white/10 border border-white/10 text-[#F5F3ED] transition-colors cursor-pointer"
            title="Toggle Fullscreen (F)"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Bottom Presentation Scrubber & Controls */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
        {/* Progress Dots / Bar */}
        <div className="flex items-center gap-1.5 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => onJumpToSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                i === currentSlideIndex
                  ? 'w-8 bg-[#F5B700]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`Slide ${i + 1}`}
              aria-label={`Jump to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows & Auto-play */}
        <div className="flex items-center gap-2 pointer-events-auto bg-[#12141A]/90 border border-white/10 backdrop-blur-md rounded-full px-3 py-1.5 shadow-xl">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded-full text-[#F5F3ED] hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Previous (Left Arrow)"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleAutoPlay}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isAutoPlay ? 'text-[#F5B700] bg-[#F5B700]/15' : 'text-[#8E95A5] hover:text-[#F5F3ED]'
            }`}
            title={isAutoPlay ? 'Pause Auto-Play' : 'Play Auto-Play (8s)'}
            aria-label="Toggle Auto-Play"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-1.5 rounded-full text-[#F5F3ED] hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Next (Right Arrow / Space)"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="text-[11px] font-mono text-[#8E95A5] pl-2 border-l border-white/10 hidden lg:inline">
            Use <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">←</kbd> <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">→</kbd> or <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">Space</kbd>
          </div>
        </div>
      </footer>
    </>
  );
};
