import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  onResetFilters: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onResetFilters }) => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 text-center max-w-lg mx-auto my-8 shadow-xs">
      <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4 text-orange-500">
        <SearchX className="w-8 h-8" />
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2">
        找不到符合的店家
      </h3>

      {/* Mandatory exact text: 目前沒有符合條件的推薦，試試調整預算或類型吧！ */}
      <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
        目前沒有符合條件的推薦，試試調整預算或類型吧！
      </p>

      <button
        onClick={onResetFilters}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer min-h-[44px]"
      >
        <RotateCcw className="w-4 h-4" />
        <span>清除篩選重試</span>
      </button>
    </div>
  );
};
