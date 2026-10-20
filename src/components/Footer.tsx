import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-stone-200/80 bg-white/60 py-8 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-stone-600 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-orange-500" />
          <span>淡江吃什麼？｜美食私藏地圖</span>
        </div>

        {/* Mandatory exact footer text */}
        <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
          個人私藏推薦；價格為提供者記錄，實際價格與營業資訊以店家公告為準。
        </p>

        <p className="text-[11px] text-stone-400">
          專為淡江大學學生設計的步行美食探索手帳
        </p>
      </div>
    </footer>
  );
};
