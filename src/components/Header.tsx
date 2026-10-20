import React from 'react';
import { Compass, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  onScrollToList: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToList }) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a
          href="#"
          className="flex items-center gap-2 group text-stone-900 font-bold text-base sm:text-lg tracking-tight whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-sm group-hover:bg-orange-600 transition-colors">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <span>
            淡江吃什麼？
            <span className="hidden sm:inline font-normal text-stone-500 text-sm ml-1.5">
              ｜美食私藏地圖
            </span>
          </span>
        </a>

        {/* Action Button */}
        <button
          onClick={onScrollToList}
          className="min-h-[40px] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-orange-700 bg-orange-100/80 hover:bg-orange-200/80 active:scale-95 rounded-xl border border-orange-200 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Compass className="w-3.5 h-3.5 text-orange-600" />
          <span>查看店家清單</span>
        </button>
      </div>
    </header>
  );
};
