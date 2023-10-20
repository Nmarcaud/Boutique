<template>
  <header class="d-flex flex-row align-items-center px-20">
    <a href="/" class="d-flex flex-row align-items-center mr-20">
      <img src="../assets/logo.svg" alt="">
      <span class="logo">El boutiquos</span>
    </a>
    <ul class="d-flex flex-row flex-fill">
      <li class="mr-10">
        <a href="/">Boutique</a>
      </li>
      <li class="mr-10">
        <a href="/">Admin</a>
      </li>
    </ul>
    <ul class="d-flex flex-row">
      <li class="mr-10">
        <a href="/">Inscritpion</a>
      </li>
      <li>
        <a href="/">Connection</a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
header {
  background-color: var(--primary-1);
  
  a {
    color: var(--text-primary-color);

    img {
      width: 20px;
      margin-right: 5px;
    }
    .logo {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
