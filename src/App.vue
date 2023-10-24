<template>
  <div class="app-container" :class="{
    gridEmpty: cartEmpty
  }">
    <TheHeader class="header" />
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
    <TheFooter class="footer"/>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheShop from '@/components/Shop/TheShop.vue'
import TheCart from '@/components/Cart/TheCart.vue'
import data from '@/data/product';
import type { ProductInterface, ProductCartInterface, FiltersInterface, FilterUpdate } from '@/interfaces';
import { DEFAULT_FILTERS } from '@/data/filters';

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
  filters: FiltersInterface;
}>({
  products: data,
  cart: [],
  filters: { ...DEFAULT_FILTERS },
});

function addProductToCart(productId: number): void {
  const product = state.products.find(product => product.id === productId);
  const productInCart = state.cart.find(product => product.id === productId);
  if (product) {
    if (productInCart) {
      productInCart.quantity++;
    } else {
      state.cart.push({...product, quantity: 1});
    }
  }
}

function removeProductFromCartList(productId: number): void {
  state.cart = state.cart.filter(product => product.id !== productId);
}

function removeProductFromCart(productId: number): void {
  const productInCart = state.cart.find(product => product.id === productId);
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
      || product.description.toLowerCase().includes(state.filters.search.toLowerCase())
      && product.price >= state.filters.priceRange[0]
      && product.price <= state.filters.priceRange[1]
      && (state.filters.category === 'all' || product.category === state.filters.category)
    ) {
      return true;
    }
    return false;
  });
});
</script>

<style lang="scss">
@use './assets/scss/base.scss' as *;
@use './assets/scss/debug.scss' as *;

.app-container {
  display: grid;
  grid-template-areas: 
  'header header'
  'shop cart' 
  'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
}

.gridEmpty {
  grid-template-areas: 
  'header'
  'shop' 
  'footer';
  grid-template-columns: 100%;
}

.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: white;
}
.footer {
  grid-area: footer;
}

</style>
