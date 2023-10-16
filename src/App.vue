<template>
  <div class="app-container">
    <TheHeader class="header" />
    <TheShop class="shop" />
    <TheCart class="cart" />
    <TheFooter class="footer"/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheShop from './components/Shop/TheShop.vue'
import TheCart from './components/Cart/TheCart.vue'
</script>

<style lang="scss">
@use './assets/base.scss' as *;
@use './assets/debug.scss' as *;

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

.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
}
.footer {
  grid-area: footer;
}

</style>
