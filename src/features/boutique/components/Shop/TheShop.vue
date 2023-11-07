<template>
  <div class="d-flex flex-row">
    <ShopFilters
      :filters="$props.filters"
      :number-of-products="products.length"
      class="shop-filter"
      @update-filter="emit('updateFilter', $event)"
    />
    <ShopProductList
      class="flex-fill"
      :products="products"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { FilterUpdate, FiltersInterface, ProductInterface } from '@/interfaces';
import ShopProductList from '@/features/boutique/components/Shop/ShopProductList.vue';
import ShopFilters from '@/features/boutique/components/Shop/ShopFilters.vue';

defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: 'addProductToCart', productId: string): void;
  (e: 'updateFilter', filterUpdate: FilterUpdate): void;
}>();
</script>

<style lang="scss" scoped>
.shop-filter{
  flex: 0 0 230px;
}
</style>
