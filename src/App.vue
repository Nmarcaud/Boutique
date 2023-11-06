<template>
  <div class="app-container">
    <TheHeader
      class="header"
      :page="state.page"
      @navigate="navigate"
    />
    <div class="app-content">
      <Component :is="pages[state.page]" />
    </div>
    <TheFooter class="footer"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, type Component as C } from 'vue';

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheBoutique from '@/features/boutique/TheBoutique.vue'
import TheAdmin from '@/features/admin/TheAdmin.vue'
import type { Page } from '@/interfaces';

const state = reactive<{
  page: Page;
}>({
  page: 'TheAdmin',
});

const pages: { [s: string]: C } = {
  TheBoutique,
  TheAdmin
};

function navigate(page: Page): void {
  state.page = page;
}
</script>

<style lang="scss">
@use './assets/scss/base.scss' as *;
@use './assets/scss/debug.scss' as *;

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 
  'header'
  'app-content' 
  'footer';
  grid-template-rows: 48px auto 48px;
}

.header {
  grid-area: header;
}

.app-content {
  grid-area: app-content;
}

.footer {
  grid-area: footer;
}
</style>
