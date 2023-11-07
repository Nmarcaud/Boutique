<template>
  <div
    class="boutique-container"
    :class="{'grid-empty':  cartEmpty }"
  >
    <TheShop
      :products="filteredProducts"
      :filters="state.filters" 
      class="shop"
      @add-product-to-cart="addProductToCart"
      @update-filter="updateFilter"
    />
    <TheCart
      v-if="!cartEmpty"
      :cart=state.cart
      class="cart"
      @remove-product-from-cart="removeProductFromCart"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import axios from 'axios';

import TheShop from '@/features/boutique/components/Shop/TheShop.vue'
import TheCart from '@/features/boutique/components/Cart/TheCart.vue'

import type { ProductInterface, ProductCartInterface, FiltersInterface, FilterUpdate } from '@/interfaces';
import { DEFAULT_FILTERS } from '@/features/boutique/data/filters';

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
  filters: FiltersInterface;
}>({
  products: [],
  cart: [],
  filters: { ...DEFAULT_FILTERS },
});

const products = await axios.get('https://restapi.fr/api/projetproducts').then(response => response.data);

state.products = Array.isArray(products) ? products : [products];

function addProductToCart(productId: string): void {
  const product = state.products.find(product => product._id === productId);
  const productInCart = state.cart.find(product => product._id === productId);
  if (product) {
    if (productInCart) {
      productInCart.quantity++;
    } else {
      state.cart.push({...product, quantity: 1});
    }
  }
}

function removeProductFromCartList(productId: string): void {
  state.cart = state.cart.filter(product => product._id !== productId);
}

function removeProductFromCart(productId: string): void {
  const productInCart = state.cart.find(product => product._id === productId);
  if (productInCart) {
    productInCart.quantity--;
    if (productInCart.quantity === 0) {
      removeProductFromCartList(productId);
    }
  }
}

function updateFilter(filterUpdate: FilterUpdate): void {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search;
  } else if (filterUpdate.category !== undefined) {
    state.filters.category = filterUpdate.category;
  } else if (filterUpdate.priceRange !== undefined) {
    state.filters.priceRange = filterUpdate.priceRange;
  } else {
    state.filters = { ...DEFAULT_FILTERS };
  }
}

const cartEmpty = computed(() => {
  return state.cart.length === 0;
});

const filteredProducts = computed(() => {
  return state.products.filter(product => {
    if (
      product.title.toLowerCase().startsWith(state.filters.search.toLowerCase())
      &&  product.price >= state.filters.priceRange[0]
      && product.price <= state.filters.priceRange[1]
      && (state.filters.category === 'all' || product.category === state.filters.category)
    ) {
      return true;
    }
    return false;
  });
});
</script>

<style lang="scss" scoped>
.boutique-container {
  display: grid;
  grid-template-columns: 75% 25%;
  height: 100%;
}

.grid-empty {
  display: grid;
  grid-template-columns: 100%;
}

.cart {
  border-left: var(--border);
  background-color: white;
}
</style>
