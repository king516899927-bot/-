import React from 'react';
import { ArrowDown, Sparkles, BookOpen, MapPin } from 'lucide-react';

interface HeroProps {
  onStartExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartExplore }) => {
  return (
    <section className="relative pt-6 pb-10 sm:pt-10 sm:pb-14 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Notebook sticker tape accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200/80 text-orange-800 text-xs sm:text-sm font-medium mb-5 shadow-xs">
          <BookOpen className="w-3.5 h-3.5 text-orange-600" />
          <span>淡江大學生美食探索手帳 · 新生友善</span>
          <span className="hidden sm:inline text-orange-400">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-emerald-700">
            <MapPin className="w-3 h-3 text-emerald-600" /> 步行可達私房清單
          </span>
        </div>

        {/* Mandatory Main Title: 淡江吃什麼？ */}
        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-4">
          淡江吃什麼？
          <span className="block text-xl sm:text-2xl font-bold text-orange-600 mt-2 font-sans">
            美食私藏地圖
          </span>
        </h1>

        {/* Mandatory Subtitle: 下課肚子餓？跟著私藏清單，找到下一餐！ */}
        <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          下課肚子餓？跟著私藏清單，找到下一餐！
        </p>

        {/* Key student friendly highlights in hand-journal style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-md mx-auto mb-8 text-xs sm:text-sm text-stone-700">
          <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/70 shadow-xs flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>大學城・水源街</span>
          </div>
          <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/70 shadow-xs flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>手繪插畫手帳</span>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-white/80 p-2.5 rounded-xl border border-stone-200/70 shadow-xs flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>平價飽足私藏</span>
          </div>
        </div>

        {/* Mandatory Button: 開始找美食 (Scrolls to food list) */}
        <div>
          <button
            onClick={onStartExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer touch-manipulation min-h-[48px]"
          >
            <span>開始找美食</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
