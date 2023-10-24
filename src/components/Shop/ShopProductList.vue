<template>
  <template v-if="products.length !== 0">
    <div class="grid p-20">
      <ShopProduct 
        v-for="product of products" 
        :key="product.id"
        :product="product"
        @add-product-to-cart="emit('add-product-to-cart', product.id)"
      />
  </div>
  </template>
  <template v-else>
    <div class="p-20">
      <div class="card p-20">
        <p class="noResult">Aucun produit ne correspond à votre recherche</p>
      </div>
    </div>
  </template>
  
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

.noResult {
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>