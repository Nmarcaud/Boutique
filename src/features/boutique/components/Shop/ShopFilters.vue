<template>
  <div class="p-20 d-flex flex-column">
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
    <section class="mb-20">
      <h3 class="mb-10">Trier par prix</h3>
      <div class="mb-5" v-for="priceRange of ([
        [0, 10000],
        [800, 1000],
        [1000, 1500],
        [1500, 2000],
        [2000, 10000],
      ] as [number, number][])"
      :key="priceRange[0]">
        <input
          :checked="priceRange[0] === filters.priceRange[0] && priceRange[1] === filters.priceRange[1]"
          type="radio" 
          name="priceRange" 
          :id="priceRange.join('-')"
          @input="emit('updateFilter', {
            priceRange: priceRange
          })"
        />
        <label :for="priceRange.join('-')">{{ 
          priceRange[0] === 0 ? 'Tous les prix' : priceRange[0] === 2000 ? "plus de 2000€" : priceRange[0] + '€ - ' + priceRange[1] + '€'
         }}
        </label>
      </div>
    </section>
    <section class="mb-20 flex-fill">
      <h3 class="mb-10">Trier par catégories</h3>
      <p
        class="category"
        :class="{
          'selected': category === filters.category
        }"
        v-for="category of (['all', 'desktop', 'gamer', 'streaming'] as Category[])"
        :key="category"
        @click="emit('updateFilter', {
          category: category
        })"
      >
        {{ category === 'all' ? 'Toutes les catégories' : category }}
      </p>
    </section>
    <small class="mb-5">Nombre de résultats: <strong>{{ numberOfProducts }}</strong></small>
    <button
      class="btn btn-danger"
      @click="emit('updateFilter', {})"
    >Réinitialiser les filtres</button>
  </div>
</template>

<script setup lang="ts">
import type { Category, FilterUpdate, FiltersInterface } from '@/interfaces';

defineProps<{
  filters: FiltersInterface;
  numberOfProducts: number;
}>();

const emit = defineEmits<{
  (e: 'updateFilter', filterUpdate: FilterUpdate): void;
}>();

</script>

<style lang="scss" scoped>
.category {
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  &:hover {
    text-decoration: underline;
  }
}
.selected {
  font-weight: bold;
  text-decoration: underline;
}
</style>
