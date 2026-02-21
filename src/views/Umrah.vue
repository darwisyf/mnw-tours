<template>
  <div id="services" class="relative w-full mx-auto min-h-screen mt-20">
    <SectionHeader title="Umrah" />
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
    title: "Umrah 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 50000000,
  },
  {
    title: "Umrah 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 75000000,
  },
  {
    title: "Umrah 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 100000000,
  },
]);
</script>
