import React from 'react';

interface DeepakIllustrationProps {
  variant?: 'deepak-brass' | 'deepak-radiant' | 'deepak-clay';
  className?: string;
}

export const DeepakIllustration: React.FC<DeepakIllustrationProps> = ({
  variant = 'deepak-brass',
  className = 'w-full h-full',
}) => {
  const isClay = variant === 'deepak-clay';
  const isRadiant = variant === 'deepak-radiant';

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}>
      {/* Background warm radiant glow */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isClay
            ? 'bg-gradient-to-tr from-amber-200/60 via-orange-100/50 to-amber-100/60'
            : isRadiant
            ? 'bg-gradient-to-tr from-amber-200/70 via-yellow-100/60 to-orange-100/60'
            : 'bg-gradient-to-tr from-amber-100/70 via-orange-50/60 to-yellow-100/50'
        }`}
      />

      {/* Radiant Divine Aura / Light Halos */}
      <div className="absolute w-80 h-80 rounded-full bg-amber-400/25 blur-3xl animate-pulse" />
      <div className="absolute w-48 h-48 -translate-y-12 rounded-full bg-yellow-300/40 blur-2xl" />
      <div className="absolute w-24 h-24 -translate-y-16 rounded-full bg-orange-400/50 blur-xl animate-ping opacity-30" />

      {/* High-Fidelity Vector Art of Auspicious Deepak */}
      <svg
        viewBox="0 0 500 500"
        className="relative z-10 w-full h-full max-w-[420px] max-h-[420px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Flame Gradients */}
          <radialGradient id="flameInner" cx="50%" cy="80%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#dc2626" />
          </radialGradient>

          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#fb923c" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#ea580c" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#9a3412" stopOpacity="0" />
          </radialGradient>

          {/* Brass Metallic Gradients */}
          <linearGradient id="brassGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="18%" stopColor="#d97706" />
            <stop offset="45%" stopColor="#fef3c7" />
            <stop offset="55%" stopColor="#fbbf24" />
            <stop offset="82%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          <linearGradient id="brassBowl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="30%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="90%" stopColor="#92400e" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="40%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Marigold Petal Gradients */}
          <radialGradient id="marigoldYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </radialGradient>
          <radialGradient id="marigoldOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="60%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#c2410c" />
          </radialGradient>

          {/* Drop Shadow Filter */}
          <filter id="deepakShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.4" floodColor="#78350f" />
          </filter>
        </defs>

        {/* RADIANT LIGHT RAYS BEHIND FLAME */}
        <g opacity="0.65" transform="translate(250, 160)">
          <line x1="0" y1="-80" x2="0" y2="-120" stroke="#fde047" strokeWidth="4" strokeLinecap="round" />
          <line x1="60" y1="-60" x2="90" y2="-90" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="-60" y1="-60" x2="-90" y2="-90" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="80" y1="0" x2="115" y2="0" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <line x1="-80" y1="0" x2="-115" y2="0" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="40" x2="80" y2="60" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="-50" y1="40" x2="-80" y2="60" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* MARIGOLD FLOWERS AROUND BASE (ગલગોટા પુષ્પો) */}
        {/* Left Marigold Cluster */}
        <g id="marigoldLeft" transform="translate(130, 420)">
          <circle cx="0" cy="0" r="26" fill="url(#marigoldOrange)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="0"
              rx="9"
              ry="18"
              fill={i % 2 === 0 ? 'url(#marigoldYellow)' : 'url(#marigoldOrange)'}
              transform={`rotate(${i * 30}) translate(0, -14)`}
            />
          ))}
          <circle cx="0" cy="0" r="10" fill="#ea580c" />
        </g>

        {/* Right Marigold Cluster */}
        <g id="marigoldRight" transform="translate(370, 420)">
          <circle cx="0" cy="0" r="26" fill="url(#marigoldYellow)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="0"
              rx="9"
              ry="18"
              fill={i % 2 === 0 ? 'url(#marigoldOrange)' : 'url(#marigoldYellow)'}
              transform={`rotate(${i * 30}) translate(0, -14)`}
            />
          ))}
          <circle cx="0" cy="0" r="10" fill="#b45309" />
        </g>

        {/* Center-Front Small Flower Buds */}
        <circle cx="210" cy="455" r="12" fill="url(#marigoldOrange)" />
        <circle cx="290" cy="455" r="12" fill="url(#marigoldYellow)" />
        <circle cx="250" cy="465" r="14" fill="url(#marigoldOrange)" />

        {/* BRASS DEEPAK STAND AND LAMP */}
        <g filter="url(#deepakShadow)">
          {/* Base Tier 1: Wide Bottom Rim */}
          <ellipse cx="250" cy="440" rx="140" ry="24" fill="url(#brassGrad1)" />
          <ellipse cx="250" cy="436" rx="130" ry="20" fill="#fef08a" opacity="0.6" />
          <ellipse cx="250" cy="434" rx="126" ry="18" fill="url(#brassGrad1)" />

          {/* Base Tier 2: Ornate Carved Step */}
          <ellipse cx="250" cy="415" rx="100" ry="18" fill="url(#brassGrad1)" />
          <ellipse cx="250" cy="412" rx="94" ry="15" fill="#fef3c7" opacity="0.7" />

          {/* Base Petals / Lotus Engravings on Base */}
          <path
            d="M170,415 C190,395 210,410 230,415 C250,395 270,395 290,415 C310,410 330,395 330,415"
            stroke="#92400e"
            strokeWidth="3"
            fill="none"
          />

          {/* Pedestal Stem / Pillar */}
          <path
            d="M232,415 C232,360 215,330 228,290 L272,290 C285,330 268,360 268,415 Z"
            fill="url(#brassGrad1)"
          />

          {/* Stem Rings (Traditional Indian brass turning accents) */}
          <ellipse cx="250" cy="380" rx="30" ry="8" fill="url(#brassGrad1)" />
          <ellipse cx="250" cy="378" rx="27" ry="6" fill="#fef08a" opacity="0.8" />
          <ellipse cx="250" cy="335" rx="26" ry="7" fill="url(#brassGrad1)" />
          <ellipse cx="250" cy="333" rx="23" ry="5" fill="#fef08a" opacity="0.8" />

          {/* Upper Capital / Lotus Chalice holding the oil bowl */}
          <path
            d="M210,290 C210,265 290,265 290,290 Z"
            fill="url(#brassGrad1)"
          />
          {/* Lotus petal carvings under lamp bowl */}
          <path d="M220,290 Q250,270 280,290" stroke="#fef3c7" strokeWidth="2.5" fill="none" />
          <path d="M235,288 Q250,275 265,288" stroke="#78350f" strokeWidth="2" fill="none" />

          {/* MAIN LAMP OIL BOWL (દીવાની વાટી અને પાત્ર) */}
          <ellipse cx="250" cy="255" rx="125" ry="38" fill="url(#brassGrad1)" />

          {/* Inner Well of the Bowl */}
          <ellipse cx="250" cy="252" rx="112" ry="30" fill="url(#brassBowl)" />

          {/* Golden Pure Oil Pool */}
          <ellipse cx="250" cy="253" rx="98" ry="24" fill="url(#oilGrad)" opacity="0.9" />
          {/* Oil liquid surface shimmer */}
          <ellipse cx="250" cy="250" rx="88" ry="18" fill="#fef08a" opacity="0.5" />

          {/* Bowl Rim Beaded Pearls / Engraving */}
          <ellipse cx="250" cy="245" rx="122" ry="34" stroke="#fef3c7" strokeWidth="2" fill="none" opacity="0.8" />
        </g>

        {/* COTTON WICK (દિવેટ) */}
        <path
          d="M245,255 C247,235 248,215 250,195 C252,215 253,235 255,255 Z"
          fill="#451a03"
        />
        <ellipse cx="250" cy="195" rx="4" ry="7" fill="#78350f" />
        <ellipse cx="250" cy="192" rx="2.5" ry="4" fill="#18181b" />

        {/* GLORIOUS FLAME (તેજોમય જ્યોત) */}
        {/* Outer Halo */}
        <circle cx="250" cy="155" r="85" fill="url(#flameGlow)" />

        {/* Main Radiant Teardrop Flame */}
        <path
          d="M250,75 C275,130 285,160 280,185 C275,205 260,215 250,215 C240,215 225,205 220,185 C215,160 225,130 250,75 Z"
          fill="url(#flameInner)"
          filter="url(#deepakShadow)"
        />

        {/* Middle Bright Yellow Flame Core */}
        <path
          d="M250,105 C266,145 272,168 268,188 C265,202 255,208 250,208 C245,208 235,202 232,188 C228,168 234,145 250,105 Z"
          fill="#fef08a"
        />

        {/* Inner Brilliant White-Hot Spark Core */}
        <path
          d="M250,130 C258,158 262,174 260,188 C258,198 253,202 250,202 C247,202 242,198 240,188 C238,174 242,158 250,130 Z"
          fill="#ffffff"
        />

        {/* Auspicious Blue Root at base of flame */}
        <ellipse cx="250" cy="196" rx="9" ry="6" fill="#38bdf8" opacity="0.8" />
        <ellipse cx="250" cy="195" rx="5" ry="3" fill="#60a5fa" opacity="0.9" />

        {/* Floating golden sparkling embers */}
        <circle cx="230" cy="110" r="3.5" fill="#fef08a" opacity="0.9" />
        <circle cx="270" cy="95" r="2.5" fill="#fde047" opacity="0.85" />
        <circle cx="240" cy="65" r="2" fill="#ffffff" opacity="0.95" />
        <circle cx="262" cy="55" r="1.8" fill="#fde047" opacity="0.75" />
        <circle cx="225" cy="45" r="1.5" fill="#fef08a" opacity="0.8" />
      </svg>
    </div>
  );
};
