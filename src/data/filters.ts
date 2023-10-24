import type { FiltersInterface } from '@/interfaces/Filters.interface';

export const DEFAULT_FILTERS: FiltersInterface = {
    search: '',
    priceRange: [0, 1000],
    category: 'all'
};