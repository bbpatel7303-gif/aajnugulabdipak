import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { CardRose, CardStudentData } from './CardRose';
import { CardDeepak } from './CardDeepak';

interface FullscreenPresentationProps {
  isOpen: boolean;
  onClose: () => void;
  schoolName: string;
  roseTitle: string;
  deepakTitle: string;
  roseVariant: 'rose-classic' | 'rose-dewy' | 'rose-golden';
  deepakVariant: 'deepak-brass' | 'deepak-radiant' | 'deepak-clay';
  roseCustomUrl?: string;
  deepakCustomUrl?: string;
  roseStudentData: CardStudentData;
  deepakStudentData: CardStudentData;
}

export const FullscreenPresentation: React.FC<FullscreenPresentationProps> = ({
  isOpen,
  onClose,
  schoolName,
  roseTitle,
  deepakTitle,
  roseVariant,
  deepakVariant,
  roseCustomUrl,
  deepakCustomUrl,
  roseStudentData,
  deepakStudentData,
}) => {
  const [currentSlide, setCurrentSlide] = useState<'both' | 'rose' | 'deepak'>('both');
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => (prev === 'rose' ? 'deepak' : prev === 'deepak' ? 'both' : 'rose'));
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev === 'both' ? 'deepak' : prev === 'deepak' ? 'rose' : 'both'));
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Auto cycle effect
  useEffect(() => {
    if (!autoPlay || !isOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 'rose' ? 'deepak' : 'rose'));
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-stone-950/95 p-4 sm:p-6 overflow-hidden">
      {/* Top Floating Controls */}
      <div className="w-full flex items-center justify-between text-white/90 font-gujarati max-w-6xl z-20">
        <div className="flex items-center gap-3">
          <span className="text-sm sm:text-base font-bold text-amber-300">
            {schoolName} • પ્રાર્થના સભા પ્રદર્શન
          </span>
          <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1 text-xs">
            <button
              onClick={() => setCurrentSlide('both')}
              className={`px-2.5 py-0.5 rounded-full transition-colors ${
                currentSlide === 'both' ? 'bg-amber-500 text-white font-bold' : 'hover:bg-white/10'
              }`}
            >
              બંને
            </button>
            <button
              onClick={() => setCurrentSlide('rose')}
              className={`px-2.5 py-0.5 rounded-full transition-colors ${
                currentSlide === 'rose' ? 'bg-rose-600 text-white font-bold' : 'hover:bg-white/10'
              }`}
            >
              ગુલાબ
            </button>
            <button
              onClick={() => setCurrentSlide('deepak')}
              className={`px-2.5 py-0.5 rounded-full transition-colors ${
                currentSlide === 'deepak' ? 'bg-amber-600 text-white font-bold' : 'hover:bg-white/10'
              }`}
            >
              દીપક
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoPlay((prev) => !prev)}
            className={`p-2 rounded-full border transition-all ${
              autoPlay
                ? 'bg-amber-500 border-amber-400 text-stone-900 font-bold'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
            title={autoPlay ? 'ઓટો-સ્લાઇડ અટકાવો' : 'ઓટો-સ્લાઇડ શરૂ કરો'}
          >
            {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
            title="બંધ કરો (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Presentation Stage */}
      <div className="flex-1 w-full max-w-6xl flex items-center justify-center py-4 my-auto overflow-y-auto">
        {currentSlide === 'both' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full max-w-5xl items-center justify-center animate-fadeIn">
            <CardRose
              schoolName={schoolName}
              title={roseTitle}
              imageVariant={roseVariant}
              customImageUrl={roseCustomUrl}
              studentData={roseStudentData}
              cardId="fs-card-rose"
            />
            <CardDeepak
              schoolName={schoolName}
              title={deepakTitle}
              imageVariant={deepakVariant}
              customImageUrl={deepakCustomUrl}
              studentData={deepakStudentData}
              cardId="fs-card-deepak"
            />
          </div>
        ) : currentSlide === 'rose' ? (
          <div className="w-full max-w-md animate-fadeIn">
            <CardRose
              schoolName={schoolName}
              title={roseTitle}
              imageVariant={roseVariant}
              customImageUrl={roseCustomUrl}
              studentData={roseStudentData}
              cardId="fs-card-rose"
            />
          </div>
        ) : (
          <div className="w-full max-w-md animate-fadeIn">
            <CardDeepak
              schoolName={schoolName}
              title={deepakTitle}
              imageVariant={deepakVariant}
              customImageUrl={deepakCustomUrl}
              studentData={deepakStudentData}
              cardId="fs-card-deepak"
            />
          </div>
        )}
      </div>

      {/* Bottom Navigation Chevrons */}
      <div className="w-full max-w-md flex items-center justify-between text-white/70 py-2 z-20">
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 'both' ? 'deepak' : prev === 'deepak' ? 'rose' : 'both'
            )
          }
          className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-1 text-xs"
        >
          <ChevronLeft className="w-5 h-5" /> પાછળ
        </button>
        <span className="text-xs font-gujarati opacity-60">
          કીબોર્ડ એરો કી અથવા સ્પેસબાર વડે સ્લાઇડ બદલો
        </span>
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 'rose' ? 'deepak' : prev === 'deepak' ? 'both' : 'rose'
            )
          }
          className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-1 text-xs"
        >
          આગળ <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
