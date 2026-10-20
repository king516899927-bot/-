/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useRef } from 'react';
import { AreaFilter, CategoryFilter } from './types';
import { STORES_DATA } from './data/stores';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { StoreCard } from './components/StoreCard';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedArea, setSelectedArea] = useState<AreaFilter>('全部');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('全部');
  const [budgetInput, setBudgetInput] = useState<string>('');

  const listRef = useRef<HTMLElement>(null);

  const parsedBudget = useMemo(() => {
    const trimmed = budgetInput.trim();
    if (trimmed === '') return null;
    const num = Number(trimmed);
    return isNaN(num) || num < 0 ? null : num;
  }, [budgetInput]);

  const filteredStores = useMemo(() => {
    return STORES_DATA.filter((store) => {
      // 1. Area filter
      if (selectedArea !== '全部' && store.area !== selectedArea) {
        return false;
      }

      // 2. Category filter
      if (selectedCategory !== '全部' && store.category !== selectedCategory) {
        return false;
      }

      // 3. Budget filter
      if (parsedBudget !== null) {
        if (!store.isPriceRange) {
          // 單一價格的餐點，價格不高於預算時顯示
          if (store.minPrice > parsedBudget) {
            return false;
          }
        } else {
          // 價格區間的餐點，最低價不高於預算時顯示
          if (store.minPrice > parsedBudget) {
            return false;
          }
        }
      }

      return true;
    });
  }, [selectedArea, selectedCategory, parsedBudget]);

  const isFiltered =
    selectedArea !== '全部' || selectedCategory !== '全部' || budgetInput.trim() !== '';

  const handleClearFilters = () => {
    setSelectedArea('全部');
    setSelectedCategory('全部');
    setBudgetInput('');
  };

  const handleScrollToList = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 flex flex-col font-sans">
      {/* Top Navigation */}
      <Header onScrollToList={handleScrollToList} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-4 pb-12">
        {/* Hero Banner */}
        <Hero onStartExplore={handleScrollToList} />

        {/* Store List Section */}
        <section ref={listRef} id="food-list" className="scroll-mt-20">
          {/* Interactive Filters Bar */}
          <FilterBar
            selectedArea={selectedArea}
            onSelectArea={setSelectedArea}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            budgetInput={budgetInput}
            onBudgetChange={setBudgetInput}
            onClearFilters={handleClearFilters}
            isFiltered={isFiltered}
            resultCount={filteredStores.length}
          />

          {/* Store Cards Grid or Empty State */}
          {filteredStores.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStores.map((store) => (
                <StoreCard
                  key={store.id}
                  store={store}
                  budgetApplied={parsedBudget !== null}
                  userBudget={parsedBudget}
                />
              ))}
            </div>
          ) : (
            <EmptyState onResetFilters={handleClearFilters} />
          )}
        </section>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
