import React from 'react';
import { StoreItem } from '../types';
import { FoodIllustration } from './FoodIllustrations';
import { MapPin, Sparkles, ExternalLink, Heart, Tag } from 'lucide-react';

interface StoreCardProps {
  store: StoreItem;
  budgetApplied: boolean;
  userBudget: number | null;
}

export const StoreCard: React.FC<StoreCardProps> = ({
  store,
  budgetApplied,
}) => {
  // Construct official Google Maps Search link using store name and complete address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${store.name} ${store.address}`
  )}`;

  // Requirement: 價格區間的餐點，最低價不高於預算時顯示，並註明「部分品項符合預算，依選擇而定」。
  const showBudgetRangeNotice = budgetApplied && store.isPriceRange;

  return (
    <article className="group bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      {/* Top illustration container with hand-drawn aesthetic */}
      <div className="relative p-3 sm:p-4 bg-stone-50/50 border-b border-stone-100">
        <FoodIllustration type={store.illustrationType} className="w-full" />
        
        {/* Subtle area sticker tag in corner */}
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-white/95 text-emerald-800 border border-emerald-200 shadow-xs backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {store.area}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          {/* Header Row: Store Name & Category */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                {store.name}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-xs text-stone-500">
                <span className="font-medium text-orange-600">{store.category}</span>
                <span aria-hidden="true">·</span>
                <span>{store.area}</span>
              </div>
            </div>

            {/* Price Tag Badge */}
            <div className="text-right shrink-0">
              <span className="inline-block px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200/70 text-orange-700 font-bold text-sm sm:text-base tabular-nums">
                {store.priceDisplay}
              </span>
            </div>
          </div>

          {/* Budget Range Notice (Mandatory Requirement) */}
          {showBudgetRangeNotice && (
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-2 animate-fadeIn">
              <Tag className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-medium">部分品項符合預算，依選擇而定</span>
            </div>
          )}

          {/* Must Order (私心必點) Highlight Box */}
          <div className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-orange-200/60 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-800 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>私心必點</span>
            </div>
            <p className="text-base font-bold text-stone-800">
              {store.mustOrder}
            </p>
          </div>

          {/* Foodie Notes (私藏心得) */}
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 mb-1">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
              <span>私藏心得</span>
            </div>
            <p className="text-sm font-medium text-stone-700 leading-relaxed">
              「{store.notes}」
            </p>
          </div>

          {/* Full Address */}
          <div className="flex items-start gap-2 text-xs text-stone-600 pt-1">
            <MapPin className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
            <span className="leading-snug">{store.address}</span>
          </div>
        </div>

        {/* Action Button: 開啟 Google 地圖 (Mandatory requirement) */}
        <div className="pt-2 border-t border-stone-100">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-stone-800 bg-[#FAF7F2] hover:bg-orange-500 hover:text-white border border-stone-200 hover:border-orange-500 active:scale-[0.98] transition-all duration-200 min-h-[44px] shadow-2xs"
          >
            <span>開啟 Google 地圖</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>
        </div>
      </div>
    </article>
  );
};
