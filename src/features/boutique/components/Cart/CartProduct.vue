<template>
  <div class="mb-10 p-10 d-flex flex-row align-items-center product">
    <strong class="mr-10">{{ props.product.title }}</strong>
    <span class="flex-fill">x {{ props.product.quantity }}</span>
    <span class="mr-10">
      Prix : {{ props.product.price }}€
    </span>
    <button
      class="btn btn-danger"
      @click="emit('remove-product-from-cart', props.product.id)"
    >
      Supprimer
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces';

type Props = {
  product: ProductCartInterface;
};
const props = defineProps<Props>();

type Emits = {
  (e: 'remove-product-from-cart', productId: number): void;
};
const emit = defineEmits<Emits>();
</script>

<style lang="scss" scoped>
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--grey-1);
}
</style>