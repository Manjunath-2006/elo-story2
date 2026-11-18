import React, { useState, useEffect, useRef } from 'react';
import { SLIDES } from './data/slidesData';
import { EloCanvas3D } from './components/EloCanvas3D';
import { PresentationHUD } from './components/PresentationHUD';
import { PresentationView } from './components/PresentationView';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [expression, setExpression] = useState('happy');
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [isRobotPaused, setIsRobotPaused] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const eloCanvasRef = useRef(null);

  const currentSlide = SLIDES[currentSlideIndex] || SLIDES[0];

  // Update robot expression when slide changes
  useEffect(() => {
    setSelectedHotspot(null);
    if (currentSlide.defaultExpression) {
      setExpression(currentSlide.defaultExpression);
    }
  }, [currentSlideIndex]);

  // Keyboard navigation for presentation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(e.target.tagName.toLowerCase())) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(SLIDES.length - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsAutoPlay((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  // Auto-play timer (8 seconds per slide)
  useEffect(() => {
    let timer = null;
    if (isAutoPlay) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev >= SLIDES.length - 1) {
            setIsAutoPlay(false);
            return prev;
          }
          return prev + 1;
        });
      }, 8000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlay]);

  const handleNextSlide = () => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleJumpToSlide = (idx) => {
    if (idx >= 0 && idx < SLIDES.length) {
      setCurrentSlideIndex(idx);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Touch swipe support for tablet / phone presentation
  const touchStartXRef = useRef(0);
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX < -50) {
      handleNextSlide();
    } else if (deltaX > 50) {
      handlePrevSlide();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen text-[#F5F3ED] bg-[#08090C] overflow-hidden select-none"
    >
      {/* 1. Subtle Film Atmosphere */}
      <div className="fixed inset-0 pointer-events-none film-grain z-10 opacity-70" />

      {/* 2. Dedicated 3D visual column */}
      <EloCanvas3D
        ref={eloCanvasRef}
        currentSlideIndex={currentSlideIndex}
        expression={expression}
        selectedHotspot={selectedHotspot}
        isRobotPaused={isRobotPaused}
      />
      <div className="visual-stage-caption" aria-hidden="true">
        <span className="visual-stage-caption__dot" />
        ELO <span className="visual-stage-caption__divider">/</span> Prototype view
      </div>

      {/* 3. Minimalist Presentation HUD */}
      <PresentationHUD
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDES.length}
        currentSlideTitle={currentSlide.title}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        onJumpToSlide={handleJumpToSlide}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={() => setIsAutoPlay(!isAutoPlay)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* 4. Presentation Slide View */}
      <PresentationView
        currentSlideIndex={currentSlideIndex}
        onNextSlide={handleNextSlide}
        selectedHotspot={selectedHotspot}
        onSelectHotspot={(spot) => setSelectedHotspot(spot)}
        isRobotPaused={isRobotPaused}
        onToggleRobotPause={() => setIsRobotPaused(!isRobotPaused)}
        onExpressionTrigger={(exp) => setExpression(exp)}
      />
    </div>
  );
}
