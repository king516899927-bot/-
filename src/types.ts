export interface StoreItem {
  id: string;
  name: string;
  address: string;
  area: '大學城' | '水源街';
  category: '中式／捲餅' | '早餐／早午餐' | '飯類／歐姆飯';
  mustOrder: string;
  priceDisplay: string;
  minPrice: number;
  maxPrice: number;
  isPriceRange: boolean;
  notes: string;
  illustrationType: 'beef-roll' | 'brunch-plate' | 'omurice';
}

export type AreaFilter = '全部' | '大學城' | '水源街';
export type CategoryFilter = '全部' | '中式／捲餅' | '早餐／早午餐' | '飯類／歐姆飯';
