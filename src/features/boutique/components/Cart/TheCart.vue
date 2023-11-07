<template>
  <div class="p-20 d-flex flex-column">
    <h2 class="mb-10">Panier</h2>
    <CartProductList
      class="flex-fill"
      :cart="props.cart"
      @remove-product-from-cart="emit('remove-product-from-cart', $event)"
    />
    <button
      class="btn btn-success"
      @click="emit('commander')"
    >
      Commander ({{ totalPrice }}€)
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CartProductList from '@/features/boutique/components/Cart/CartProductList.vue';
import type { ProductCartInterface } from '@/interfaces';

type Props = {
  cart: ProductCartInterface[];
};
const props = defineProps<Props>();

type Emits = {
  (e: 'remove-product-from-cart', productId: string): void;
  (e: 'commander'): void;
};
const emit = defineEmits<Emits>();

const totalPrice = computed(() => {
  return props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
});
</script>

<style lang="scss" scoped>
</style>
