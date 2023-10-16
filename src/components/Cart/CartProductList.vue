<template>
  <div class="d-flex flex-column">
    <CartProduct
      v-for="product in 4"
      :key="product"
    />
  </div>
</template>

<script setup lang="ts">
import CartProduct from '@/components/Cart/CartProduct.vue';
</script>

<style lang="scss">
</style>