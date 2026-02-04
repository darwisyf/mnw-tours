<template>
  <section class="grid md:flex justify-center">
    <div
      v-for="element in addresses"
      :key="element.id"
      class="max-w-sm mx-6 my-4"
    >
      <!-- City -->
      <h3 class="font-bold text-xl text-tertiary dark:text-primary text-center">
        {{ element.title }}
      </h3>
      <!-- Full Address -->
      <p class="text-center text-gray-800 dark:text-secondary">{{ element.description }}</p>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const addresses = ref([
  {
    id: crypto.randomUUID(),
    title: "MNW Sukabumi",
    description:
      "Graha Almadinah jl Raya Gandasoli, Gn. Goong, km 04 sukaraja, Cipurut, Kec. Cireunghas, Kabupaten Sukabumi, Jawa Barat 43193",
  },
  {
    id: crypto.randomUUID(),
    title: "MNW Jakarta",
    description: "Komp Kejagung Blok A/6, Pasar Minggu, Jakarta Selatan 12520",
  },
]);
</script>
