import React from 'react';

interface OrnamentalBorderProps {
  theme?: 'rose' | 'amber' | 'gold';
}

export const OrnamentalBorder: React.FC<OrnamentalBorderProps> = ({ theme = 'gold' }) => {
  const primaryColor =
    theme === 'rose' ? '#e11d48' : theme === 'amber' ? '#d97706' : '#b45309';
  const secondaryColor =
    theme === 'rose' ? '#f43f5e' : theme === 'amber' ? '#f59e0b' : '#f59e0b';
  const accentColor =
    theme === 'rose' ? '#fda4af' : theme === 'amber' ? '#fde68a' : '#fde68a';

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Outer Golden/Themed Border Line */}
      <div
        className="absolute inset-3 rounded-2xl border-2 sm:inset-4 sm:rounded-3xl"
        style={{ borderColor: primaryColor, opacity: 0.65 }}
      />
      {/* Inner Thin Border Line */}
      <div
        className="absolute inset-4.5 rounded-xl border sm:inset-6 sm:rounded-2xl"
        style={{ borderColor: secondaryColor, opacity: 0.85 }}
      />

      {/* Top Left Corner Flourish */}
      <svg
        className="absolute left-4 top-4 h-10 w-10 sm:left-5 sm:top-5 sm:h-14 sm:w-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,90 Q10,10 90,10"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M20,90 Q20,20 90,20"
          stroke={secondaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="6" fill={primaryColor} />
        <circle cx="20" cy="20" r="3" fill={accentColor} />
        <circle cx="50" cy="14" r="3.5" fill={primaryColor} />
        <circle cx="14" cy="50" r="3.5" fill={primaryColor} />
        <path
          d="M28,28 Q45,35 60,30 Q35,45 28,28 Z"
          fill={secondaryColor}
          opacity="0.8"
        />
      </svg>

      {/* Top Right Corner Flourish */}
      <svg
        className="absolute right-4 top-4 h-10 w-10 sm:right-5 sm:top-5 sm:h-14 sm:w-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90,90 Q90,10 10,10"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M80,90 Q80,20 10,20"
          stroke={secondaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="80" cy="20" r="6" fill={primaryColor} />
        <circle cx="80" cy="20" r="3" fill={accentColor} />
        <circle cx="50" cy="14" r="3.5" fill={primaryColor} />
        <circle cx="86" cy="50" r="3.5" fill={primaryColor} />
        <path
          d="M72,28 Q55,35 40,30 Q65,45 72,28 Z"
          fill={secondaryColor}
          opacity="0.8"
        />
      </svg>

      {/* Bottom Left Corner Flourish */}
      <svg
        className="absolute bottom-4 left-4 h-10 w-10 sm:bottom-5 sm:left-5 sm:h-14 sm:w-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,10 Q10,90 90,90"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M20,10 Q20,80 90,80"
          stroke={secondaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="80" r="6" fill={primaryColor} />
        <circle cx="20" cy="80" r="3" fill={accentColor} />
        <circle cx="50" cy="86" r="3.5" fill={primaryColor} />
        <circle cx="14" cy="50" r="3.5" fill={primaryColor} />
        <path
          d="M28,72 Q45,65 60,70 Q35,55 28,72 Z"
          fill={secondaryColor}
          opacity="0.8"
        />
      </svg>

      {/* Bottom Right Corner Flourish */}
      <svg
        className="absolute bottom-4 right-4 h-10 w-10 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90,10 Q90,90 10,90"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M80,10 Q80,80 10,80"
          stroke={secondaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="80" cy="80" r="6" fill={primaryColor} />
        <circle cx="80" cy="80" r="3" fill={accentColor} />
        <circle cx="50" cy="86" r="3.5" fill={primaryColor} />
        <circle cx="86" cy="50" r="3.5" fill={primaryColor} />
        <path
          d="M72,72 Q55,65 40,70 Q65,55 72,72 Z"
          fill={secondaryColor}
          opacity="0.8"
        />
      </svg>
    </div>
  );
};
