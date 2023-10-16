<template>
  <div class="grid p-20">
    <ShopProduct 
      v-for="product in 8"
      :key="product"
    />
  </div>
</template>

<script setup lang="ts">
import ShopProduct from '@/components/Shop/ShopProduct.vue';
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 20px;
}
</style>