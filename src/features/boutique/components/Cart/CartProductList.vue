<template>
  <div class="d-flex flex-column">
    <CartProduct
      v-for="product in props.cart"
      :key="product._id"
      :product="product"
      @remove-product-from-cart="emit('remove-product-from-cart', product._id)"
    />
  </div>
</template>

<script setup lang="ts">
import CartProduct from '@/features/boutique/components/Cart/CartProduct.vue';
import type { ProductCartInterface } from '@/interfaces';

type Props = {
  cart: ProductCartInterface[];
};
const props = defineProps<Props>();

type Emits = {
  (e: 'remove-product-from-cart', productId: string): void;
};
const emit = defineEmits<Emits>();
</script>

<style lang="scss" scoped>
</style>