<template>
  <div class="card">
    <h3 class="mb-10">Ajouter un article</h3>
    <form @submit="trySubmit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Titre</label>
        <input v-model="title.value.value" type="text">
        <small v-if="title.errorMessage.value" class="form-error">{{ title.errorMessage.value }}</small>
      </div>

      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Image</label>
        <input v-model="image.value.value" type="text">
        <small v-if="image.errorMessage.value" class="form-error">{{ image.errorMessage.value }}</small>
      </div>

      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Prix</label>
        <input v-model="price.value.value" type="number">
        <small v-if="price.errorMessage.value" class="form-error">{{ price.errorMessage.value }}</small>
      </div>

      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Description</label>
        <!-- eslint-disable-next-line vue/valid-v-model -->
        <textarea v-model="(description.value.value as string)" type="text" />
        <small v-if="description.errorMessage.value" class="form-error">{{ description.errorMessage.value }}</small>
      </div>

      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Category</label>
        <select v-model="category.value.value">
          <option value="">Choisissez une catégorie</option>
          <option value="gamer">Jeux</option>
          <option value="desktop">Bureautique</option>
          <option value="streaming">Stream</option>
        </select>
        <small v-if="category.errorMessage.value" class="form-error">{{ category.errorMessage.value }}</small>
      </div>

      <button :disabled="isSubmitting" type="submit" class="btn btn-primary">Sauvegarder</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

const required = { required_error: 'Veuillez renseigner ce champ' };

const validationSchema = toTypedSchema(z.object({
  title: z.string(required).min(1, {
    message: 'Le titre doit faire au moins 1 caratère',
  }).max(10, {
    message: 'Le titre doit faire moins de 10 caratères',
  }),
  image: z.string(required),
  price: z.number(required).min(0, {
    message: 'Le prix doit être supérieur à 0',
  }).max(15000, {
    message: 'Le prix doit être inférieur à 15000'
  }),
  description: z.string(required).min(10, {
    message: 'La description doit faire au moins 10 caratères',
  }),
  category: z.string(required),
}));

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
});

const title = useField('title');
const image = useField('image');
const price = useField('price');
const description = useField('description');
const category = useField('category');

const trySubmit = handleSubmit(async (values) => {
  console.log(values);
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 500px;
}
</style>