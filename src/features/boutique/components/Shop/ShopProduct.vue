<template>
  <div class="product d-flex flex-column">
    <div
      class="product-image"
      :style="{ backgroundImage: `url(${product.image})` }"
    />
    <div class="p-10 d-flex flex-column">
      <h4>{{ product.title }}</h4>
      <p>{{ product.description }}</p>
      <div class="d-flex flex-row align-items-center">
        <strong class="flex-fill">Prix : {{ product.price }}€</strong>
        <button
          class="btn btn-primary"
          @click="emit('add-product-to-cart', product._id)"
        > 
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/interfaces';

defineProps<{
  product: ProductInterface;
}>();

const emit = defineEmits<{
  (e: 'add-product-to-cart', productId: string): void;
}>();
</script>

<style lang="scss" scoped>
.product {
  background-color: white;
  border: var(--border);
  border-radius: var(--border-radius);

  &-image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    background-image: url('https://picsum.photos/id/6/600/300');
    background-size: cover;
    background-position: center;
    height: 300px;
  }
}
</style>