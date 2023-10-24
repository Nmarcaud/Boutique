<template>
  <div class="p-20">
    <section class="mb-20">
      <h3 class="mb-10">Rechecher</h3>
      <input 
        type="text" 
        :value="filters.search" 
        placeholder="Rechercher"
        @input="emit('updateFilter', {
          search: ($event.target as HTMLInputElement).value
        })"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { FilterUpdate, FiltersInterface } from '@/interfaces';

defineProps<{
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: 'updateFilter', filterUpdate: FilterUpdate): void;
}>();



</script>

<style lang="scss" scoped>
</style>
