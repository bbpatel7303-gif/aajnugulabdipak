import React from 'react';

interface RoseIllustrationProps {
  variant?: 'rose-classic' | 'rose-dewy' | 'rose-golden';
  className?: string;
}

export const RoseIllustration: React.FC<RoseIllustrationProps> = ({
  variant = 'rose-classic',
  className = 'w-full h-full',
}) => {
  const isGolden = variant === 'rose-golden';
  const isDewy = variant === 'rose-dewy';

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}>
      {/* Background radial atmosphere glow */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isGolden
            ? 'bg-gradient-to-tr from-amber-200/50 via-rose-100/60 to-red-100/50'
            : isDewy
            ? 'bg-gradient-to-tr from-emerald-100/50 via-rose-100/60 to-red-100/70'
            : 'bg-gradient-to-tr from-rose-100/60 via-amber-50/50 to-red-200/40'
        }`}
      />

      {/* Decorative sunburst / soft aura behind the flower */}
      <div className="absolute w-72 h-72 rounded-full bg-rose-400/20 blur-2xl animate-pulse" />
      <div className="absolute w-44 h-44 rounded-full bg-amber-300/30 blur-xl" />

      {/* High-Fidelity Vector Art of Blooming Red Rose */}
      <svg
        viewBox="0 0 500 500"
        className="relative z-10 w-full h-full max-w-[420px] max-h-[420px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Petal gradients */}
          <radialGradient id="roseCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7f091c" />
            <stop offset="60%" stopColor="#b30927" />
            <stop offset="100%" stopColor="#e11d48" />
          </radialGradient>

          <linearGradient id="petalTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="40%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#9f1239" />
          </linearGradient>

          <linearGradient id="petalOuter1" x1="0%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#ff5a79" />
            <stop offset="50%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>

          <linearGradient id="petalOuter2" x1="100%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#ff758f" />
            <stop offset="45%" stopColor="#be123c" />
            <stop offset="100%" stopColor="#4c0519" />
          </linearGradient>

          <linearGradient id="petalFold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff85a1" />
            <stop offset="60%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#9f1239" />
          </linearGradient>

          {/* Leaf Gradients */}
          <linearGradient id="leafGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="40%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          <linearGradient id="leafGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#166534" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>

          {/* Dewdrop Gradient */}
          <radialGradient id="dewDrop" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#bae6fd" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </radialGradient>

          {/* Shadow Filter */}
          <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="6" stdDeviation="5" floodOpacity="0.35" floodColor="#4c0519" />
          </filter>
        </defs>

        {/* Stem */}
        <path
          d="M245,340 C240,400 255,440 260,480"
          stroke="#166534"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* Stem Highlight */}
        <path
          d="M248,340 C243,400 258,440 263,480"
          stroke="#4ade80"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Thorns */}
        <path d="M255,420 Q265,423 275,417 Q263,428 256,432 Z" fill="#14532d" />
        <path d="M245,380 Q235,383 225,378 Q237,388 244,392 Z" fill="#14532d" />

        {/* Left Lush Leaf */}
        <g id="leftLeaf" filter="url(#shadowFilter)">
          <path
            d="M240,360 C180,350 110,310 90,260 C125,250 190,285 240,360 Z"
            fill="url(#leafGradLeft)"
          />
          {/* Leaf Serrations & Veins */}
          <path
            d="M90,260 C150,295 210,335 240,360"
            stroke="#86efac"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path d="M130,285 Q145,275 160,270" stroke="#86efac" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M165,305 Q185,295 200,290" stroke="#86efac" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M195,325 Q215,315 228,310" stroke="#86efac" strokeWidth="2" fill="none" opacity="0.6" />
        </g>

        {/* Right Lush Leaf */}
        <g id="rightLeaf" filter="url(#shadowFilter)">
          <path
            d="M260,370 C320,380 395,340 420,290 C380,285 315,310 260,370 Z"
            fill="url(#leafGradRight)"
          />
          {/* Leaf Veins */}
          <path
            d="M420,290 C360,320 300,350 260,370"
            stroke="#86efac"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path d="M375,308 Q355,300 340,295" stroke="#86efac" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M335,330 Q315,320 300,315" stroke="#86efac" strokeWidth="2" fill="none" opacity="0.6" />
        </g>

        {/* Sepals below bloom */}
        <path d="M210,330 Q225,360 215,385 Q235,350 238,335 Z" fill="#15803d" />
        <path d="M280,330 Q270,365 285,385 Q265,350 262,335 Z" fill="#15803d" />

        {/* MAIN ROSE PETALS (Layered outwards to core) */}
        {/* Layer 1: Outermost Large Petals */}
        <path
          d="M130,220 C90,140 190,80 250,110 C310,80 410,140 370,220 C390,290 320,350 250,345 C180,350 110,290 130,220 Z"
          fill="url(#petalOuter2)"
          filter="url(#shadowFilter)"
        />

        {/* Layer 2: Side Wing Petals */}
        <path
          d="M110,195 C95,260 160,330 240,335 C175,310 130,260 120,205 Z"
          fill="url(#petalFold)"
          opacity="0.95"
        />
        <path
          d="M390,195 C405,260 340,330 260,335 C325,310 370,260 380,205 Z"
          fill="url(#petalFold)"
          opacity="0.95"
        />

        {/* Lower Full Petal */}
        <path
          d="M150,250 C180,345 320,345 350,250 C300,320 200,320 150,250 Z"
          fill="url(#petalTop)"
        />
        {/* Lower Lip Fold */}
        <path
          d="M170,270 C220,325 280,325 330,270 C290,305 210,305 170,270 Z"
          fill="#fda4af"
          opacity="0.85"
        />

        {/* Layer 3: Mid Petals Embracing the Center */}
        <path
          d="M150,165 C130,225 180,285 250,280 C320,285 370,225 350,165 C320,130 180,130 150,165 Z"
          fill="url(#petalOuter1)"
        />

        {/* Left overlapping curved petal */}
        <path
          d="M155,180 C180,120 270,120 290,175 C250,160 185,170 155,180 Z"
          fill="#fb7185"
        />
        {/* Right overlapping curved petal */}
        <path
          d="M345,180 C320,120 230,120 210,175 C250,160 315,170 345,180 Z"
          fill="#f43f5e"
        />

        {/* Layer 4: Deep Inner Rose Spiral / Heart */}
        <ellipse cx="250" cy="195" rx="75" ry="60" fill="url(#roseCore)" />

        {/* Rose Whirl / Petal folds inside core */}
        <path
          d="M210,185 C220,150 275,150 285,180 C270,165 230,165 210,185 Z"
          fill="#f43f5e"
        />
        <path
          d="M225,200 C230,170 270,170 275,195 C260,182 240,182 225,200 Z"
          fill="#fda4af"
        />
        <path
          d="M238,205 C242,185 258,185 262,202 C255,192 245,192 238,205 Z"
          fill="#ffe4e6"
        />
        {/* Tiny spiral center */}
        <path
          d="M246,198 C248,192 254,192 255,197 C253,200 248,200 246,198 Z"
          fill="#881337"
        />

        {/* Velvety highlights on petals */}
        <path
          d="M190,225 C230,250 270,250 310,225 C280,240 220,240 190,225 Z"
          fill="#ff85a1"
          opacity="0.7"
        />
        <path
          d="M140,210 C160,260 210,290 250,290 C200,280 160,250 140,210 Z"
          fill="#ff4d6d"
          opacity="0.5"
        />

        {/* Realistic Dewdrops with highlights */}
        {/* Drop 1 on left outer petal */}
        <g id="dewDrop1" transform="translate(140, 240)">
          <ellipse cx="10" cy="10" rx="8" ry="6" fill="url(#dewDrop)" />
          <ellipse cx="7" cy="8" rx="2.5" ry="1.5" fill="#ffffff" />
          <ellipse cx="12" cy="12" rx="1.5" ry="1" fill="#ffffff" opacity="0.6" />
        </g>

        {/* Drop 2 on right outer petal */}
        <g id="dewDrop2" transform="translate(340, 230)">
          <ellipse cx="12" cy="12" rx="10" ry="7" fill="url(#dewDrop)" />
          <ellipse cx="9" cy="10" rx="3" ry="2" fill="#ffffff" />
          <ellipse cx="15" cy="14" rx="2" ry="1.2" fill="#ffffff" opacity="0.6" />
        </g>

        {/* Drop 3 on main leaf */}
        <g id="dewDrop3" transform="translate(130, 280)">
          <ellipse cx="8" cy="8" rx="6" ry="4.5" fill="url(#dewDrop)" />
          <ellipse cx="6" cy="7" rx="2" ry="1" fill="#ffffff" />
        </g>

        {/* Drop 4 on bottom petal */}
        <g id="dewDrop4" transform="translate(245, 310)">
          <ellipse cx="8" cy="8" rx="7" ry="5" fill="url(#dewDrop)" />
          <ellipse cx="6" cy="6.5" rx="2.2" ry="1.2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};
