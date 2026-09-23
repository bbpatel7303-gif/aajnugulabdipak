import React from 'react';
import { Printer, Download, Settings, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

export type ViewTab = 'both' | 'rose' | 'deepak';

interface CardToolbarProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  onPrint: () => void;
  onDownload: () => void;
  onOpenSettings: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

export const CardToolbar: React.FC<CardToolbarProps> = ({
  activeTab,
  setActiveTab,
  onPrint,
  onDownload,
  onOpenSettings,
  onToggleFullscreen,
  isFullscreen,
}) => {
  return (
    <div className="no-print w-full max-w-5xl mx-auto mb-6 px-4 font-gujarati">
      <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 sm:p-3 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-full shadow-lg border border-amber-200/80">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-amber-100/60 rounded-xl sm:rounded-full">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg sm:rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'both'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-amber-950 hover:bg-amber-200/60'
            }`}
          >
            બંને કાર્ડ સાથે
          </button>
          <button
            onClick={() => setActiveTab('rose')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
              activeTab === 'rose'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-rose-950 hover:bg-rose-200/60'
            }`}
          >
            <span>🌹</span>
            <span>આજનું ગુલાબ</span>
          </button>
          <button
            onClick={() => setActiveTab('deepak')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
              activeTab === 'deepak'
                ? 'bg-amber-700 text-white shadow-sm'
                : 'text-amber-950 hover:bg-amber-200/60'
            }`}
          >
            <span>🪔</span>
            <span>આજનો દીપક</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Print Button */}
          <button
            onClick={onPrint}
            title="પ્રિન્ટ કરો (A4 / Card)"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl sm:rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-all border border-slate-300"
          >
            <Printer className="w-4 h-4 text-slate-700" />
            <span className="hidden sm:inline">પ્રિન્ટ</span>
          </button>

          {/* Download Image Button */}
          <button
            onClick={onDownload}
            title="કાર્ડ ફોટો ડાઉનલોડ કરો (PNG)"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl sm:rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold transition-all border border-emerald-300"
          >
            <Download className="w-4 h-4 text-emerald-700" />
            <span className="hidden sm:inline">ડાઉનલોડ</span>
          </button>

          {/* Fullscreen / Smartboard Mode */}
          <button
            onClick={onToggleFullscreen}
            title="પ્રાર્થના સભા / પ્રોજેક્ટર સ્ક્રીન મોડ"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl sm:rounded-full bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold transition-all border border-purple-300"
          >
            <Maximize2 className="w-4 h-4 text-purple-700" />
            <span className="hidden md:inline">સ્માર્ટબોર્ડ મોડ</span>
          </button>

          {/* Edit / Settings Button */}
          <button
            onClick={onOpenSettings}
            title="લખાણ અને ફોટો બદલો"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
          >
            <Settings className="w-4 h-4" />
            <span>એડિટ / વિકલ્પો</span>
          </button>
        </div>
      </div>
    </div>
  );
};
