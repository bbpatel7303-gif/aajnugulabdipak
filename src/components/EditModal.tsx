import React, { useRef } from 'react';
import { X, Upload, RotateCcw, Sparkles } from 'lucide-react';
import { CardStudentData } from './CardRose';
import { ROSE_PRESETS, DEEPAK_PRESETS } from '../data/presetImages';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolName: string;
  setSchoolName: (name: string) => void;
  roseTitle: string;
  setRoseTitle: (title: string) => void;
  deepakTitle: string;
  setDeepakTitle: (title: string) => void;
  roseVariant: 'rose-classic' | 'rose-dewy' | 'rose-golden';
  setRoseVariant: (v: 'rose-classic' | 'rose-dewy' | 'rose-golden') => void;
  deepakVariant: 'deepak-brass' | 'deepak-radiant' | 'deepak-clay';
  setDeepakVariant: (v: 'deepak-brass' | 'deepak-radiant' | 'deepak-clay') => void;
  roseCustomUrl?: string;
  setRoseCustomUrl: (url?: string) => void;
  deepakCustomUrl?: string;
  setDeepakCustomUrl: (url?: string) => void;
  roseStudentData: CardStudentData;
  setRoseStudentData: React.Dispatch<React.SetStateAction<CardStudentData>>;
  deepakStudentData: CardStudentData;
  setDeepakStudentData: React.Dispatch<React.SetStateAction<CardStudentData>>;
  onResetDefaults: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  schoolName,
  setSchoolName,
  roseTitle,
  setRoseTitle,
  deepakTitle,
  setDeepakTitle,
  roseVariant,
  setRoseVariant,
  deepakVariant,
  setDeepakVariant,
  roseCustomUrl,
  setRoseCustomUrl,
  deepakCustomUrl,
  setDeepakCustomUrl,
  roseStudentData,
  setRoseStudentData,
  deepakStudentData,
  setDeepakStudentData,
  onResetDefaults,
}) => {
  const roseFileInputRef = useRef<HTMLInputElement>(null);
  const deepakFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setUrl: (url?: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto font-gujarati">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <h3 className="text-lg font-bold">કાર્ડ સેટિંગ્સ અને કસ્ટમાઇઝેશન</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
            title="બંધ કરો"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* General School Header */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-800">
              શાળાનું નામ (ઉપર લખાણ)
            </label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-semibold text-slate-800"
              placeholder="વાંઝિયાઆંબા પ્રાથમિક શાળા"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
            {/* ROSE CARD SETTINGS */}
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-rose-900 text-base flex items-center gap-1.5">
                  🌹 કાર્ડ ૧: આજનું ગુલાબ
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  મોટા અક્ષરે શીર્ષક
                </label>
                <input
                  type="text"
                  value={roseTitle}
                  onChange={(e) => setRoseTitle(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-rose-300 focus:outline-hidden focus:ring-2 focus:ring-rose-500 font-bold text-rose-900"
                />
              </div>

              {/* Rose Image Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  ગુલાબ નો રંગીન ફોટો શૈલી
                </label>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {ROSE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setRoseCustomUrl(undefined);
                        setRoseVariant(preset.svgName as any);
                      }}
                      className={`text-left px-3 py-2 rounded-lg border transition-all ${
                        !roseCustomUrl && roseVariant === preset.svgName
                          ? 'bg-rose-600 text-white font-bold border-rose-700 shadow-xs'
                          : 'bg-white hover:bg-rose-100 text-slate-800 border-rose-200'
                      }`}
                    >
                      {preset.title}
                    </button>
                  ))}
                </div>

                {/* Upload own photo */}
                <div className="mt-2.5">
                  <input
                    type="file"
                    ref={roseFileInputRef}
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, setRoseCustomUrl)}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => roseFileInputRef.current?.click()}
                    className="w-full py-1.5 px-3 rounded-lg border border-dashed border-rose-400 bg-rose-100/60 hover:bg-rose-100 text-rose-800 text-xs font-semibold flex items-center justify-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    {roseCustomUrl ? 'નવો ફોટો પસંદ કરો (કસ્ટમ)' : 'તમારી પાસેનો ફોટો અપલોડ કરો'}
                  </button>
                  {roseCustomUrl && (
                    <button
                      type="button"
                      onClick={() => setRoseCustomUrl(undefined)}
                      className="mt-1 text-[11px] text-rose-600 underline block text-center w-full"
                    >
                      ડિફોલ્ટ રંગીન ફોટો પર પાછા જાઓ
                    </button>
                  )}
                </div>
              </div>

              {/* Student info toggle */}
              <div className="pt-2 border-t border-rose-200/80">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-rose-900">
                  <input
                    type="checkbox"
                    checked={roseStudentData.showStudentInfo || false}
                    onChange={(e) =>
                      setRoseStudentData((prev) => ({
                        ...prev,
                        showStudentInfo: e.target.checked,
                      }))
                    }
                    className="rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
                  />
                  વિદ્યાર્થીની વિગત દર્શાવો (વૈકલ્પિક)
                </label>

                {roseStudentData.showStudentInfo && (
                  <div className="mt-2.5 space-y-2 text-xs">
                    <input
                      type="text"
                      placeholder="વિદ્યાર્થી / વિદ્યાર્થિનીનું નામ"
                      value={roseStudentData.studentName || ''}
                      onChange={(e) =>
                        setRoseStudentData((prev) => ({
                          ...prev,
                          studentName: e.target.value,
                        }))
                      }
                      className="w-full px-2.5 py-1.5 rounded-md border border-rose-300 bg-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="ધોરણ (દા.ત. ૫-અ)"
                        value={roseStudentData.studentStandard || ''}
                        onChange={(e) =>
                          setRoseStudentData((prev) => ({
                            ...prev,
                            studentStandard: e.target.value,
                          }))
                        }
                        className="w-full px-2.5 py-1.5 rounded-md border border-rose-300 bg-white"
                      />
                      <input
                        type="text"
                        placeholder="તારીખ"
                        value={roseStudentData.dateText || ''}
                        onChange={(e) =>
                          setRoseStudentData((prev) => ({
                            ...prev,
                            dateText: e.target.value,
                          }))
                        }
                        className="w-full px-2.5 py-1.5 rounded-md border border-rose-300 bg-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DEEPAK CARD SETTINGS */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-900 text-base flex items-center gap-1.5">
                  🪔 કાર્ડ ૨: આજનો દીપક
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  મોટા અક્ષરે શીર્ષક
                </label>
                <input
                  type="text"
                  value={deepakTitle}
                  onChange={(e) => setDeepakTitle(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-amber-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-bold text-amber-900"
                />
              </div>

              {/* Deepak Image Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  દીપક નો રંગીન ફોટો શૈલી
                </label>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {DEEPAK_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setDeepakCustomUrl(undefined);
                        setDeepakVariant(preset.svgName as any);
                      }}
                      className={`text-left px-3 py-2 rounded-lg border transition-all ${
                        !deepakCustomUrl && deepakVariant === preset.svgName
                          ? 'bg-amber-600 text-white font-bold border-amber-700 shadow-xs'
                          : 'bg-white hover:bg-amber-100 text-slate-800 border-amber-200'
                      }`}
                    >
                      {preset.title}
                    </button>
                  ))}
                </div>

                {/* Upload own photo */}
                <div className="mt-2.5">
                  <input
                    type="file"
                    ref={deepakFileInputRef}
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, setDeepakCustomUrl)}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => deepakFileInputRef.current?.click()}
                    className="w-full py-1.5 px-3 rounded-lg border border-dashed border-amber-400 bg-amber-100/60 hover:bg-amber-100 text-amber-800 text-xs font-semibold flex items-center justify-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    {deepakCustomUrl ? 'નવો ફોટો પસંદ કરો (કસ્ટમ)' : 'તમારી પાસેનો ફોટો અપલોડ કરો'}
                  </button>
                  {deepakCustomUrl && (
                    <button
                      type="button"
                      onClick={() => setDeepakCustomUrl(undefined)}
                      className="mt-1 text-[11px] text-amber-600 underline block text-center w-full"
                    >
                      ડિફોલ્ટ રંગીન ફોટો પર પાછા જાઓ
                    </button>
                  )}
                </div>
              </div>

              {/* Student info toggle */}
              <div className="pt-2 border-t border-amber-200/80">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-amber-900">
                  <input
                    type="checkbox"
                    checked={deepakStudentData.showStudentInfo || false}
                    onChange={(e) =>
                      setDeepakStudentData((prev) => ({
                        ...prev,
                        showStudentInfo: e.target.checked,
                      }))
                    }
                    className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
                  />
                  વિદ્યાર્થીની વિગત દર્શાવો (વૈકલ્પિક)
                </label>

                {deepakStudentData.showStudentInfo && (
                  <div className="mt-2.5 space-y-2 text-xs">
                    <input
                      type="text"
                      placeholder="વિદ્યાર્થી / વિદ્યાર્થિનીનું નામ"
                      value={deepakStudentData.studentName || ''}
                      onChange={(e) =>
                        setDeepakStudentData((prev) => ({
                          ...prev,
                          studentName: e.target.value,
                        }))
                      }
                      className="w-full px-2.5 py-1.5 rounded-md border border-amber-300 bg-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="ધોરણ (દા.ત. ૫-અ)"
                        value={deepakStudentData.studentStandard || ''}
                        onChange={(e) =>
                          setDeepakStudentData((prev) => ({
                            ...prev,
                            studentStandard: e.target.value,
                          }))
                        }
                        className="w-full px-2.5 py-1.5 rounded-md border border-amber-300 bg-white"
                      />
                      <input
                        type="text"
                        placeholder="તારીખ"
                        value={deepakStudentData.dateText || ''}
                        onChange={(e) =>
                          setDeepakStudentData((prev) => ({
                            ...prev,
                            dateText: e.target.value,
                          }))
                        }
                        className="w-full px-2.5 py-1.5 rounded-md border border-amber-300 bg-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200">
          <button
            type="button"
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            મૂળ લખાણ પર પાછા ફરો (Reset)
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all"
          >
            થઈ ગયું (સાચવો)
          </button>
        </div>
      </div>
    </div>
  );
};
