import React from 'react';

interface IllustrationProps {
  type: 'beef-roll' | 'brunch-plate' | 'omurice';
  className?: string;
}

export const FoodIllustration: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  if (type === 'beef-roll') {
    return (
      <div className={`relative flex flex-col items-center justify-center p-4 bg-amber-50/80 rounded-2xl border border-amber-200/70 overflow-hidden ${className}`}>
        {/* Notebook paper line texture accent */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <svg
          viewBox="0 0 200 130"
          className="w-full max-w-[200px] h-auto drop-shadow-sm transition-transform duration-300 hover:scale-105"
          aria-hidden="true"
        >
          {/* Steam wisps */}
          <path
            d="M 65 30 Q 72 20 66 10 M 100 25 Q 106 15 102 6 M 135 30 Q 142 20 138 10"
            fill="none"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="2 3"
            className="animate-pulse"
          />

          {/* Wooden board or plate base */}
          <ellipse cx="100" cy="100" rx="84" ry="22" fill="#E7D9C7" />
          <ellipse cx="100" cy="98" rx="80" ry="20" fill="#F4ECE1" stroke="#D1BEA8" strokeWidth="2" />

          {/* Beef Roll Slice 1 (Left slanted) */}
          <g transform="translate(38, 48) rotate(-6)">
            {/* Outer golden crispy pancake crust */}
            <rect x="0" y="0" width="38" height="42" rx="10" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
            <rect x="3" y="3" width="32" height="36" rx="8" fill="#FDE047" />
            {/* Char/crisp golden grill marks */}
            <line x1="8" y1="12" x2="30" y2="10" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="24" x2="28" y2="23" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
            {/* Cross-section showing beef & green scallions */}
            <circle cx="19" cy="34" r="5" fill="#78350F" />
            <circle cx="23" cy="28" r="3" fill="#15803D" />
            <circle cx="14" cy="27" r="3" fill="#16A34A" />
            {/* Sesame dots */}
            <circle cx="12" cy="7" r="1" fill="#78350F" />
            <circle cx="26" cy="16" r="1" fill="#78350F" />
            <circle cx="18" cy="20" r="1" fill="#78350F" />
          </g>

          {/* Beef Roll Center piece (Main star) */}
          <g transform="translate(80, 42)">
            <rect x="0" y="0" width="42" height="46" rx="12" fill="#EAB308" stroke="#CA8A04" strokeWidth="2.5" />
            <rect x="3.5" y="3.5" width="35" height="39" rx="9" fill="#FDE047" />
            {/* Crisp seared stripes */}
            <line x1="8" y1="14" x2="34" y2="12" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
            <line x1="9" y1="26" x2="33" y2="25" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
            {/* Tender braised beef filling */}
            <ellipse cx="21" cy="36" rx="9" ry="6" fill="#78350F" />
            <ellipse cx="21" cy="35" rx="7" ry="4" fill="#92400E" />
            {/* Sweet scallion slices inside */}
            <circle cx="16" cy="34" r="3.2" fill="#15803D" />
            <circle cx="16" cy="34" r="1.5" fill="#BBF7D0" />
            <circle cx="25" cy="34" r="3.2" fill="#16A34A" />
            <circle cx="25" cy="34" r="1.5" fill="#BBF7D0" />
            {/* Toasted sesame seeds */}
            <circle cx="12" cy="7" r="1.2" fill="#78350F" />
            <circle cx="30" cy="8" r="1.2" fill="#78350F" />
            <circle cx="22" cy="20" r="1.2" fill="#78350F" />
            <circle cx="32" cy="20" r="1.2" fill="#78350F" />
          </g>

          {/* Beef Roll Slice 3 (Right slanted) */}
          <g transform="translate(124, 50) rotate(8)">
            <rect x="0" y="0" width="36" height="40" rx="10" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
            <rect x="3" y="3" width="30" height="34" rx="8" fill="#FDE047" />
            <line x1="6" y1="12" x2="28" y2="11" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="8" y1="23" x2="26" y2="22" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="18" cy="32" r="5" fill="#78350F" />
            <circle cx="14" cy="26" r="3" fill="#15803D" />
            <circle cx="22" cy="26" r="3" fill="#16A34A" />
            <circle cx="14" cy="7" r="1" fill="#78350F" />
            <circle cx="22" cy="17" r="1" fill="#78350F" />
          </g>

          {/* Dipping sauce bowl with scallion */}
          <g transform="translate(148, 82)">
            <ellipse cx="14" cy="12" rx="14" ry="8" fill="#451A03" stroke="#D1BEA8" strokeWidth="1.5" />
            <ellipse cx="14" cy="11" rx="11" ry="5.5" fill="#292524" />
            <circle cx="14" cy="11" r="2" fill="#22C55E" />
          </g>
        </svg>

        <span className="mt-2 text-[11px] font-medium tracking-wide text-amber-800/80 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-200">
          手繪示意插畫・非店家實體照片
        </span>
      </div>
    );
  }

  if (type === 'brunch-plate') {
    return (
      <div className={`relative flex flex-col items-center justify-center p-4 bg-orange-50/70 rounded-2xl border border-orange-200/70 overflow-hidden ${className}`}>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:12px_12px]" />

        <svg
          viewBox="0 0 200 130"
          className="w-full max-w-[200px] h-auto drop-shadow-sm transition-transform duration-300 hover:scale-105"
          aria-hidden="true"
        >
          {/* Main ceramic brunch plate */}
          <ellipse cx="100" cy="75" rx="82" ry="46" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="100" cy="73" rx="74" ry="40" fill="#FFFFFF" />

          {/* Crispy Toasted Bread 1 (Triangle) */}
          <polygon
            points="46,75 74,42 86,76"
            fill="#FDE68A"
            stroke="#D97706"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <polygon points="52,73 73,48 81,73" fill="#FEF3C7" />
          <line x1="56" y1="62" x2="74" y2="58" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />

          {/* Crispy Toasted Bread 2 */}
          <polygon
            points="62,82 86,52 98,84"
            fill="#FDE68A"
            stroke="#D97706"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <polygon points="68,80 85,58 93,81" fill="#FEF3C7" />

          {/* Fresh Green Salad cluster */}
          <path
            d="M 120 48 Q 135 38 148 46 Q 160 52 152 64 Q 140 70 126 64 Z"
            fill="#22C55E"
            stroke="#16A34A"
            strokeWidth="1.5"
          />
          <circle cx="132" cy="52" r="5" fill="#4ADE80" />
          <circle cx="145" cy="56" r="4" fill="#86EFAC" />
          {/* Cherry tomato half */}
          <circle cx="148" cy="62" r="6" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
          <circle cx="146" cy="60" r="1.5" fill="#FCA5A5" />

          {/* Juicy Breakfast Sausages */}
          <g transform="translate(62, 82) rotate(-14)">
            <rect x="0" y="0" width="36" height="12" rx="6" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <line x1="9" y1="2" x2="11" y2="10" stroke="#7F1D1D" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="2" x2="20" y2="10" stroke="#7F1D1D" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="2" x2="28" y2="10" stroke="#7F1D1D" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Sunny-side-up Egg */}
          <g transform="translate(100, 72)">
            {/* Egg White fluffy cloud */}
            <path
              d="M -22 4 C -28 -8 -12 -20 4 -18 C 18 -16 26 -6 24 8 C 22 18 10 24 -4 22 C -18 20 -24 14 -22 4 Z"
              fill="#F8FAFC"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            {/* Glossy Golden Yolk */}
            <circle cx="2" cy="2" r="11" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
            <circle cx="2" cy="1" r="9" fill="#FBBF24" />
            {/* Yolk highlight */}
            <circle cx="-1" cy="-2" r="3" fill="#FEF08A" />
            {/* Pepper speckles */}
            <circle cx="12" cy="6" r="0.8" fill="#44403C" />
            <circle cx="-10" cy="8" r="0.8" fill="#44403C" />
            <circle cx="-14" cy="-4" r="0.8" fill="#44403C" />
          </g>

          {/* Fork & Knife silhouette accent */}
          <path d="M 18 64 L 26 88 M 20 64 L 20 74 M 23 64 L 23 74 M 26 64 L 26 74" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>

        <span className="mt-2 text-[11px] font-medium tracking-wide text-orange-800/80 bg-orange-100/90 px-2 py-0.5 rounded-full border border-orange-200">
          手繪示意插畫・非店家實體照片
        </span>
      </div>
    );
  }

  // omurice
  return (
    <div className={`relative flex flex-col items-center justify-center p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/70 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:12px_12px]" />

      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[200px] h-auto drop-shadow-sm transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        {/* Steam */}
        <path
          d="M 80 26 Q 86 16 82 8 M 105 22 Q 112 12 108 4 M 130 25 Q 136 15 132 8"
          fill="none"
          stroke="#15803d"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="2 3"
          className="animate-pulse"
        />

        {/* Warm deep oval dish */}
        <ellipse cx="100" cy="80" rx="84" ry="38" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="2" />
        <ellipse cx="100" cy="78" rx="78" ry="32" fill="#FFFBEB" />

        {/* Rice mound base */}
        <ellipse cx="100" cy="75" rx="60" ry="26" fill="#F59E0B" />

        {/* Golden silky fluffy omelette blanket (Tornado swirl/crescent) */}
        <path
          d="M 45 74 C 45 52 75 42 100 42 C 130 42 155 52 155 74 C 155 92 128 98 100 98 C 72 98 45 92 45 74 Z"
          fill="#FBBF24"
          stroke="#D97706"
          strokeWidth="2"
        />
        {/* Omelette folds/creamy ripples */}
        <path
          d="M 60 70 Q 100 58 140 70 Q 100 82 60 70 Z"
          fill="#FCD34D"
        />
        <path
          d="M 75 64 Q 100 56 125 64"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Savory creamy seafood sauce ribbon */}
        <path
          d="M 54 75 Q 85 86 100 70 Q 120 58 148 76 Q 125 90 98 84 Q 75 92 54 75 Z"
          fill="#FFF7ED"
          stroke="#FED7AA"
          strokeWidth="1.5"
        />

        {/* Seafood garnishes: Plump Pink Shrimp */}
        <g transform="translate(82, 54)">
          <path
            d="M 12 2 C 18 4 22 10 20 16 C 18 20 14 22 10 20 C 8 18 9 14 11 12 C 13 10 11 6 8 5"
            fill="#FB7185"
            stroke="#E11D48"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Shrimp tail */}
          <polygon points="6,3 1,0 3,6" fill="#F43F5E" />
          <circle cx="16" cy="8" r="1.2" fill="#FFE4E6" />
        </g>

        {/* Clams/squid & herb garnishes */}
        <ellipse cx="122" cy="72" rx="6" ry="4" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.2" />
        <ellipse cx="68" cy="76" rx="5" ry="3.5" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.2" />

        {/* Fresh green parsley flakes sprinkled on top */}
        <circle cx="98" cy="62" r="2.5" fill="#15803D" />
        <circle cx="106" cy="66" r="2" fill="#16A34A" />
        <circle cx="92" cy="68" r="1.8" fill="#15803D" />
        <circle cx="115" cy="60" r="1.8" fill="#16A34A" />
        <circle cx="128" cy="76" r="2" fill="#15803D" />
        <circle cx="78" cy="74" r="1.8" fill="#16A34A" />
      </svg>

      <span className="mt-2 text-[11px] font-medium tracking-wide text-emerald-800/80 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-200">
        手繪示意插畫・非店家實體照片
      </span>
    </div>
  );
};
