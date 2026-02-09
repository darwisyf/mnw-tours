<template>
  <div id="services" class="relative w-full mx-auto min-h-screen mt-20">
    <SectionHeader title="Services" />
    <div class="grid grid-cols-1 lg:grid-cols-3 justify-center">
      <div class="mt-16" v-for="(service, index) in services" :key="index">
        <ProductCard
          :title="service.title"
          :description="service.description"
          :price="service.price"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import ProductCard from "../components/ProductCard.vue";
import SectionHeader from "../layouts/SectionHeader.vue";
import { ref } from "vue";

const services = ref([
  {
    title: "Service 1",
    description: "Desc of Service 1",
    price: 1000000,
  },
  {
    title: "Service 2",
    description: "Desc of Service 2",
    price: 2000000,
  },
  {
    title: "Service 3",
    description: "Desc of Service 3",
    price: 3000000,
  },
]);
</script>
