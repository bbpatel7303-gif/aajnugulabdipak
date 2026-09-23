import React from 'react';
import { RoseIllustration } from './RoseIllustration';
import { OrnamentalBorder } from './OrnamentalBorder';

export interface CardStudentData {
  showStudentInfo?: boolean;
  studentName?: string;
  studentStandard?: string;
  dateText?: string;
  appreciationNote?: string;
}

interface CardRoseProps {
  schoolName?: string;
  title?: string;
  imageVariant?: 'rose-classic' | 'rose-dewy' | 'rose-golden';
  customImageUrl?: string;
  studentData?: CardStudentData;
  cardId?: string;
}

export const CardRose: React.FC<CardRoseProps> = ({
  schoolName = 'વાંઝિયાઆંબા પ્રાથમિક શાળા',
  title = 'આજનું ગુલાબ',
  imageVariant = 'rose-classic',
  customImageUrl,
  studentData,
  cardId = 'card-rose-element',
}) => {
  return (
    <div
      id={cardId}
      className="print-card-wrapper relative w-full max-w-md mx-auto aspect-[3/4.2] sm:aspect-[3/4] flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-amber-50 via-rose-50/70 to-red-50 p-6 sm:p-8 shadow-2xl ring-1 ring-amber-300/60 transition-all duration-300"
    >
      {/* Royal Ornamental Border */}
      <OrnamentalBorder theme="rose" />

      {/* Background Watermark Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#b91c1c_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* TOP SECTION: SCHOOL NAME */}
      <div className="relative z-10 pt-2 text-center">
        {/* Auspicious Gujarati Toran / Kalash Flourish */}
        <div className="flex items-center justify-center gap-2 mb-1.5 opacity-80">
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-red-400" />
          <span className="text-xs sm:text-sm font-semibold text-rose-700 tracking-wider">
            卐 ૐ શુભમ્ 卐
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-red-400" />
        </div>

        {/* SCHOOL NAME - વાંઝિયાઆંબા પ્રાથમિક શાળા */}
        <h2 className="font-gujarati text-xl sm:text-2xl lg:text-[26px] font-bold text-rose-950 tracking-wide drop-shadow-sm">
          {schoolName}
        </h2>

        {/* Subtle Decorative Golden Ribbon Bar */}
        <div className="mx-auto mt-2 flex items-center justify-center gap-1.5">
          <span className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-transparent via-amber-500 to-rose-500 rounded-full" />
          <span className="w-2 h-2 rotate-45 bg-amber-500" />
          <span className="h-0.5 w-12 sm:w-16 bg-gradient-to-l from-transparent via-amber-500 to-rose-500 rounded-full" />
        </div>
      </div>

      {/* MIDDLE SECTION: BIG TITLE & COLORFUL ROSE PHOTO */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2 sm:py-3">
        {/* LARGE TITLE: આજનું ગુલાબ */}
        <div className="relative mb-2 sm:mb-3">
          <h1 className="font-gujarati-title text-4xl sm:text-5xl lg:text-[54px] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-red-800 drop-shadow-[0_2px_4px_rgba(225,29,72,0.25)] tracking-wide">
            {title}
          </h1>
          {/* Subtle underline flourish */}
          <div className="w-28 sm:w-36 h-1 mx-auto mt-1 rounded-full bg-gradient-to-r from-rose-300 via-red-500 to-rose-300 shadow-sm" />
        </div>

        {/* COLORFUL PHOTO CONTAINER OF ROSE */}
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-2.5 bg-gradient-to-tr from-amber-400 via-rose-300 to-red-400 shadow-xl ring-4 ring-rose-200/80">
          <div className="w-full h-full rounded-full overflow-hidden bg-rose-50/90 shadow-inner flex items-center justify-center">
            {customImageUrl ? (
              <img
                src={customImageUrl}
                alt="Rose"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <RoseIllustration variant={imageVariant} className="w-full h-full" />
            )}
          </div>

          {/* Golden Badge Accent */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-amber-950 font-bold text-xs shadow-md border border-yellow-200">
            સદ્ગુણ અને સુંદરતા
          </div>
        </div>
      </div>

      {/* OPTIONAL STUDENT DETAILS SECTION (Default is empty or minimal as requested) */}
      <div className="relative z-10 pb-2 text-center">
        {studentData?.showStudentInfo && studentData.studentName ? (
          <div className="mx-auto max-w-[85%] rounded-xl bg-white/80 backdrop-blur-xs p-2.5 sm:p-3 shadow-md border border-rose-200/70 text-rose-950">
            <div className="text-xs sm:text-sm font-semibold text-rose-600">
              વિદ્યાર્થી / વિદ્યાર્થિની
            </div>
            <div className="font-gujarati text-lg sm:text-xl font-extrabold text-red-900 leading-tight">
              {studentData.studentName}
            </div>
            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 mt-1 font-medium">
              {studentData.studentStandard && (
                <span>ધોરણ: {studentData.studentStandard}</span>
              )}
              {studentData.dateText && (
                <span>• તારીખ: {studentData.dateText}</span>
              )}
            </div>
            {studentData.appreciationNote && (
              <div className="mt-1 text-xs text-rose-800 italic line-clamp-1 font-gujarati-serif">
                "{studentData.appreciationNote}"
              </div>
            )}
          </div>
        ) : (
          /* Pure minimalistic aesthetic footer tagline */
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm text-rose-800/80 font-gujarati font-semibold tracking-wider">
              પ્રાથમિક શિક્ષણ વિભાગ • ગુલાબ સમાન મહેકતું જીવન
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
