/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CardRose, CardStudentData } from './components/CardRose';
import { CardDeepak } from './components/CardDeepak';
import { CardToolbar, ViewTab } from './components/CardToolbar';
import { EditModal } from './components/EditModal';
import { FullscreenPresentation } from './components/FullscreenPresentation';
import { downloadCardAsPng } from './utils/exportImage';
import { getTodayGujaratiDate } from './utils/gujaratiDate';
import { Sparkles, Calendar, School, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Primary default values matching the exact user specification:
  // - Top: "વાંઝિયાઆંબા પ્રાથમિક શાળા"
  // - Big text: "આજનું ગુલાબ" and "આજનો દીપક"
  // - Colorful photos of Rose and Deepak
  const [schoolName, setSchoolName] = useState('વાંઝિયાઆંબા પ્રાથમિક શાળા');
  const [roseTitle, setRoseTitle] = useState('આજનું ગુલાબ');
  const [deepakTitle, setDeepakTitle] = useState('આજનો દીપક');

  // Photo variants
  const [roseVariant, setRoseVariant] = useState<'rose-classic' | 'rose-dewy' | 'rose-golden'>('rose-classic');
  const [deepakVariant, setDeepakVariant] = useState<'deepak-brass' | 'deepak-radiant' | 'deepak-clay'>('deepak-brass');

  // Custom user uploads
  const [roseCustomUrl, setRoseCustomUrl] = useState<string | undefined>(undefined);
  const [deepakCustomUrl, setDeepakCustomUrl] = useState<string | undefined>(undefined);

  // Optional student data (initially false/off so it strictly displays only school name, title, and photo as requested)
  const [roseStudentData, setRoseStudentData] = useState<CardStudentData>({
    showStudentInfo: false,
    studentName: '',
    studentStandard: '',
    dateText: '',
    appreciationNote: '',
  });

  const [deepakStudentData, setDeepakStudentData] = useState<CardStudentData>({
    showStudentInfo: false,
    studentName: '',
    studentStandard: '',
    dateText: '',
    appreciationNote: '',
  });

  // UI State
  const [activeTab, setActiveTab] = useState<ViewTab>('both');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const todayDateString = getTodayGujaratiDate();

  // Reset to original specification
  const handleResetDefaults = () => {
    setSchoolName('વાંઝિયાઆંબા પ્રાથમિક શાળા');
    setRoseTitle('આજનું ગુલાબ');
    setDeepakTitle('આજનો દીપક');
    setRoseVariant('rose-classic');
    setDeepakVariant('deepak-brass');
    setRoseCustomUrl(undefined);
    setDeepakCustomUrl(undefined);
    setRoseStudentData({ showStudentInfo: false });
    setDeepakStudentData({ showStudentInfo: false });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    let success = false;
    if (activeTab === 'rose') {
      success = await downloadCardAsPng('card-rose-element', 'Aajnu-Gulab-Vanziyamba-Shala');
    } else if (activeTab === 'deepak') {
      success = await downloadCardAsPng('card-deepak-element', 'Aajno-Deepak-Vanziyamba-Shala');
    } else {
      // Download both
      await downloadCardAsPng('card-rose-element', 'Aajnu-Gulab-Vanziyamba-Shala');
      setTimeout(async () => {
        await downloadCardAsPng('card-deepak-element', 'Aajno-Deepak-Vanziyamba-Shala');
      }, 500);
      success = true;
    }

    if (success) {
      setDownloadSuccessMessage('કાર્ડ સફળતાપૂર્વક ડાઉનલોડ થઈ ગયું છે!');
      setTimeout(() => setDownloadSuccessMessage(null), 3500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 via-orange-50/40 to-rose-50/60 text-slate-800 font-gujarati flex flex-col selection:bg-rose-200">
      {/* TOP NOTIFICATION / HEADER */}
      <header className="no-print w-full border-b border-amber-200/80 bg-white/80 backdrop-blur-md shadow-xs py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-md">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-amber-950 flex items-center gap-2">
                <span>{schoolName}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 font-bold hidden md:inline-block">
                  દૈનિક પ્રાર્થના કાર્ડ
                </span>
              </h1>
              <p className="text-xs text-slate-600 font-medium">
                આજનું ગુલાબ અને આજનો દીપક પ્રદર્શન ફલક
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>{todayDateString}</span>
          </div>
        </div>
      </header>

      {/* SUCCESS TOAST MESSAGE */}
      {downloadSuccessMessage && (
        <div className="no-print fixed top-16 right-4 z-50 flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-2xl shadow-xl animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{downloadSuccessMessage}</span>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
        {/* ACTION TOOLBAR (Print, Download, Tabs, Fullscreen) */}
        <CardToolbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onPrint={handlePrint}
          onDownload={handleDownload}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onToggleFullscreen={() => setIsFullscreenOpen(true)}
          isFullscreen={isFullscreenOpen}
        />

        {/* CARDS DISPLAY CONTAINER */}
        <div className="w-full flex-1 flex items-center justify-center py-2">
          {activeTab === 'both' ? (
            /* BOTH CARDS SIDE BY SIDE */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 w-full max-w-5xl items-stretch justify-center">
              {/* CARD 1: આજનું ગુલાબ */}
              <div className="flex flex-col items-center">
                <CardRose
                  schoolName={schoolName}
                  title={roseTitle}
                  imageVariant={roseVariant}
                  customImageUrl={roseCustomUrl}
                  studentData={roseStudentData}
                  cardId="card-rose-element"
                />
                <div className="no-print mt-3 flex items-center gap-2">
                  <button
                    onClick={() => downloadCardAsPng('card-rose-element', 'Aajnu-Gulab-Vanziyamba')}
                    className="text-xs px-3 py-1 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold border border-rose-300 transition-colors shadow-2xs"
                  >
                    📥 આજનું ગુલાબ ડાઉનલોડ
                  </button>
                </div>
              </div>

              {/* CARD 2: આજનો દીપક */}
              <div className="flex flex-col items-center">
                <CardDeepak
                  schoolName={schoolName}
                  title={deepakTitle}
                  imageVariant={deepakVariant}
                  customImageUrl={deepakCustomUrl}
                  studentData={deepakStudentData}
                  cardId="card-deepak-element"
                />
                <div className="no-print mt-3 flex items-center gap-2">
                  <button
                    onClick={() => downloadCardAsPng('card-deepak-element', 'Aajno-Deepak-Vanziyamba')}
                    className="text-xs px-3 py-1 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold border border-amber-300 transition-colors shadow-2xs"
                  >
                    📥 આજનો દીપક ડાઉનલોડ
                  </button>
                </div>
              </div>
            </div>
          ) : activeTab === 'rose' ? (
            /* ONLY CARD 1: આજનું ગુલાબ */
            <div className="w-full max-w-md flex flex-col items-center">
              <CardRose
                schoolName={schoolName}
                title={roseTitle}
                imageVariant={roseVariant}
                customImageUrl={roseCustomUrl}
                studentData={roseStudentData}
                cardId="card-rose-element"
              />
              <div className="no-print mt-4 flex items-center gap-3">
                <button
                  onClick={() => downloadCardAsPng('card-rose-element', 'Aajnu-Gulab-Vanziyamba')}
                  className="text-sm px-4 py-1.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold transition-all shadow-md"
                >
                  આજનું ગુલાબ ફોટો ડાઉનલોડ કરો
                </button>
              </div>
            </div>
          ) : (
            /* ONLY CARD 2: આજનો દીપક */
            <div className="w-full max-w-md flex flex-col items-center">
              <CardDeepak
                schoolName={schoolName}
                title={deepakTitle}
                imageVariant={deepakVariant}
                customImageUrl={deepakCustomUrl}
                studentData={deepakStudentData}
                cardId="card-deepak-element"
              />
              <div className="no-print mt-4 flex items-center gap-3">
                <button
                  onClick={() => downloadCardAsPng('card-deepak-element', 'Aajno-Deepak-Vanziyamba')}
                  className="text-sm px-4 py-1.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold transition-all shadow-md"
                >
                  આજનો દીપક ફોટો ડાઉનલોડ કરો
                </button>
              </div>
            </div>
          )}
        </div>

        {/* HELPFUL TIPS FOR TEACHERS */}
        <div className="no-print mt-10 w-full max-w-3xl rounded-2xl bg-white/80 border border-amber-200/80 p-4 sm:p-5 text-xs sm:text-sm text-slate-700 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-amber-900 mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>શાળા શિક્ષકો માટે ઉપયોગી માર્ગદર્શન:</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 list-disc list-inside">
            <li>
              <strong>પ્રાર્થના સભા પ્રદર્શન:</strong> "સ્માર્ટબોર્ડ મોડ" બટન દબાવીને ટીવી કે પ્રોજેક્ટર પર પૂર્ણ સ્ક્રીનમાં દર્શાવો.
            </li>
            <li>
              <strong>પ્રિન્ટિંગ:</strong> "પ્રિન્ટ" બટન દબાવવાથી સીધા જ કાગળ કે લેમિનેશન માટે A4 સાઇઝમાં કાર્ડ પ્રિન્ટ થશે.
            </li>
            <li>
              <strong>વ્હોટ્સએપ શેર:</strong> "ડાઉનલોડ" બટન વડે HD ફોટો સેવ કરીને શાળાના ગ્રૂપમાં વાલીઓ સાથે શેર કરો.
            </li>
            <li>
              <strong>વિદ્યાર્થીની વિગત:</strong> "એડિટ / વિકલ્પો" માં જઈને વિદ્યાર્થીનું નામ કે ફોટો ઉમેરી શકો છો.
            </li>
          </ul>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="no-print w-full py-4 border-t border-amber-200/60 bg-amber-50/50 text-center text-xs text-slate-600 font-gujarati">
        <p>
          {schoolName} • આજનું ગુલાબ અને આજનો દીપક • શિક્ષણ અને સંસ્કારનું પવિત્ર ધામ
        </p>
      </footer>

      {/* SETTINGS / EDIT MODAL */}
      <EditModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        roseTitle={roseTitle}
        setRoseTitle={setRoseTitle}
        deepakTitle={deepakTitle}
        setDeepakTitle={setDeepakTitle}
        roseVariant={roseVariant}
        setRoseVariant={setRoseVariant}
        deepakVariant={deepakVariant}
        setDeepakVariant={setDeepakVariant}
        roseCustomUrl={roseCustomUrl}
        setRoseCustomUrl={setRoseCustomUrl}
        deepakCustomUrl={deepakCustomUrl}
        setDeepakCustomUrl={setDeepakCustomUrl}
        roseStudentData={roseStudentData}
        setRoseStudentData={setRoseStudentData}
        deepakStudentData={deepakStudentData}
        setDeepakStudentData={setDeepakStudentData}
        onResetDefaults={handleResetDefaults}
      />

      {/* FULLSCREEN SMARTBOARD / ASSEMBLY PRESENTATION */}
      <FullscreenPresentation
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        schoolName={schoolName}
        roseTitle={roseTitle}
        deepakTitle={deepakTitle}
        roseVariant={roseVariant}
        deepakVariant={deepakVariant}
        roseCustomUrl={roseCustomUrl}
        deepakCustomUrl={deepakCustomUrl}
        roseStudentData={roseStudentData}
        deepakStudentData={deepakStudentData}
      />
    </div>
  );
}
