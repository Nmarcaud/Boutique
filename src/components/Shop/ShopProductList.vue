<template>
  <div class="grid p-20">
    <ShopProduct 
      v-for="product of products" 
      :key="product.id"
      :product="product"
      @add-product-to-cart="emit('add-product-to-cart', product.id)"
    />
  </div>
</template>

<script setup lang="ts">
import ShopProduct from '@/components/Shop/ShopProduct.vue';
import type { ProductInterface } from '@/interfaces';

defineProps<{
  products: ProductInterface[];
}>();
const emit = defineEmits<{
  (e: 'add-product-to-cart', productId: number): void;
}>();
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 20px;
}
</style>