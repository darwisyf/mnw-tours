<template>
  <section
    class="max-w-6xl mx-auto px-2 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
  >
    <img
      src="https://images.unsplash.com/photo-1554976757-606d486f5d92"
      class="rounded-2xl shadow-lg"
      alt="About Travel"
      loading="lazy"
    />

    <div>
      <h2 class="text-3xl font-bold mb-4 text-tertiary dark:text-primary">
        About Us
      </h2>
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        doloribus maiores illum, alias dolorum architecto doloremque, et
        possimus placeat, ab in obcaecati! Quis, ex iste qui et iusto dolore
        explicabo!
      </p>

      <div class="grid  gap-3">
        <Card v-for="(item, index) in abouts" :key="index" v-bind="item" />
      </div>
    </div>
  </section>
</template>
<script setup>
import Card from "../components/Card.vue";
import { ref } from "vue";

const abouts = ref([
  {
    type: "icon",
    icon: "lucide:badge-check",
    title: "Amanah",
    description: "Dipercaya oleh jamaah",
  },
  {
    type: "icon",
    icon: "lucide:newspaper",
    title: "Legalitas",
    description: "Sudah memiliki izin resmi",
  },
  {
    type: "icon",
    icon: "lucide:shield",
    title: "Aman & Nyaman",
    description: "Memberikan keamanan & kenyamanan perjalanan anda",
  },
  {
    type: "icon",
    icon: "lucide:circle-dollar-sign",
    title: "Harga Terbaik",
    description: "Memberikan Harga Terbaik",
  },
]);
</script>
