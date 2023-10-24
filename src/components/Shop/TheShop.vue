<template>
  <div class="d-flex flex-row">
    <ShopFilters
      :filters="$props.filters"
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
import ShopProductList from '@/components/Shop/ShopProductList.vue';
import ShopFilters from '@/components/Shop/ShopFilters.vue';

defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number): void;
  (e: 'updateFilter', filterUpdate: FilterUpdate): void;
}>();
</script>

<style lang="scss" scoped>
.shop-filter{
  flex: 0 0 200px;
}
</style>
