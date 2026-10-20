import React from 'react';
import { AreaFilter, CategoryFilter } from '../types';
import { RotateCcw, DollarSign, MapPin, Utensils, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  selectedArea: AreaFilter;
  onSelectArea: (area: AreaFilter) => void;
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  budgetInput: string;
  onBudgetChange: (val: string) => void;
  onClearFilters: () => void;
  isFiltered: boolean;
  resultCount: number;
}

const AREAS: AreaFilter[] = ['全部', '大學城', '水源街'];
const CATEGORIES: CategoryFilter[] = ['全部', '中式／捲餅', '早餐／早午餐', '飯類／歐姆飯'];
const BUDGET_PRESETS = [100, 120, 150, 200];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedArea,
  onSelectArea,
  selectedCategory,
  onSelectCategory,
  budgetInput,
  onBudgetChange,
  onClearFilters,
  isFiltered,
  resultCount,
}) => {
  const currentBudgetNum = budgetInput.trim() === '' ? null : Number(budgetInput);

  return (
    <section aria-label="美食篩選工具" className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 sm:p-7 border border-stone-200/90 shadow-sm mb-8">
      {/* Header of Filter with Filter icon & Clear button */}
      <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-stone-100">
        <div className="flex items-center gap-2 text-stone-800">
          <SlidersHorizontal className="w-4 h-4 text-orange-600" />
          <h2 className="text-base sm:text-lg font-bold">美食探索篩選器</h2>
          <span className="text-xs text-stone-500 font-medium ml-1">
            (找到 <span className="text-orange-600 font-bold tabular-nums">{resultCount}</span> 間店家)
          </span>
        </div>

        {/* Clear Filters Button */}
        {isFiltered && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-orange-700 bg-stone-100 hover:bg-orange-50 active:scale-95 rounded-xl border border-stone-200 hover:border-orange-200 transition-all cursor-pointer min-h-[36px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>清除篩選</span>
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* 1. Area Filter */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>探索區域</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((area) => {
              const isActive = selectedArea === area;
              return (
                <button
                  key={area}
                  onClick={() => onSelectArea(area)}
                  className={`min-h-[44px] px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all cursor-pointer touch-manipulation flex items-center justify-center ${
                    isActive
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:bg-stone-100/80 hover:border-stone-300'
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Category Filter */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 mb-2">
            <Utensils className="w-3.5 h-3.5 text-orange-600" />
            <span>餐點類型</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all cursor-pointer touch-manipulation flex items-center justify-center ${
                    isActive
                      ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                      : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:bg-stone-100/80 hover:border-stone-300'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Budget Input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="budget-input" className="flex items-center gap-1.5 text-xs font-bold text-stone-700">
              <DollarSign className="w-3.5 h-3.5 text-amber-600" />
              <span>我的預算 (NT$)</span>
              <span className="text-stone-400 font-normal">留空表示不限</span>
            </label>
            {budgetInput && (
              <button
                onClick={() => onBudgetChange('')}
                className="text-xs text-stone-400 hover:text-stone-700 underline cursor-pointer"
              >
                重設預算
              </button>
            )}
          </div>

          <div className="space-y-2.5">
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-medium text-sm">
                NT$
              </span>
              <input
                id="budget-input"
                type="number"
                min="0"
                step="10"
                value={budgetInput}
                onChange={(e) => onBudgetChange(e.target.value)}
                placeholder="例如：120（留空表示不限）"
                className="w-full pl-12 pr-4 py-3 bg-[#FAF7F2] border border-stone-200 rounded-xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all min-h-[44px]"
              />
            </div>

            {/* Quick budget chip shortcuts for easy thumb tapping */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="text-[11px] text-stone-500 mr-1">快捷預算：</span>
              {BUDGET_PRESETS.map((amount) => {
                const isSelected = currentBudgetNum === amount;
                return (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => onBudgetChange(amount.toString())}
                    className={`min-h-[36px] px-2.5 py-1 text-xs rounded-lg border transition-all cursor-pointer touch-manipulation ${
                      isSelected
                        ? 'bg-amber-500 text-white border-amber-600 font-semibold'
                        : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    ${amount}
                  </button>
                );
              })}
              {budgetInput !== '' && (
                <button
                  type="button"
                  onClick={() => onBudgetChange('')}
                  className="min-h-[36px] px-2.5 py-1 text-xs rounded-lg border border-dashed border-stone-300 text-stone-500 hover:text-stone-700 hover:border-stone-400 cursor-pointer"
                >
                  不限預算
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
