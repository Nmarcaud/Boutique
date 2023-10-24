export type Category = 'gamer' | 'desktop' | 'streaming' | 'all';

export interface FiltersInterface {
  search: string;
  priceRange: [number, number];
  category: string;
}

export interface FilterUpdate {
  search?: string;
  priceRange?: [number, number];
  category?: string;
}