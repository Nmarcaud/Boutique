<template>
  <div class="app-container" :class="{
    gridEmpty: cartEmpty
  }">
    <TheHeader class="header" />
    <TheShop
      :products="state.products" 
      class="shop"
      @add-product-to-cart="addProductToCart"
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
import type { ProductInterface, ProductCartInterface } from '@/interfaces';

const state = reactive<{
  products: ProductInterface[]
  cart: ProductCartInterface[]
}>({
  products: data,
  cart: []
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

const cartEmpty = computed(() => {
  return state.cart.length === 0;
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
