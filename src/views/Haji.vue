<template>
  <div class="relative w-full mx-auto min-h-screen mt-10">
    <SectionHeader title="Haji" />
    <Divider />
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
import Divider from "../components/Divider.vue";
import ProductCard from "../components/ProductCard.vue";
import SectionHeader from "../layouts/SectionHeader.vue";
import { ref } from "vue";

const services = ref([
  {
    title: "Haji 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 100000000,
  },
  {
    title: "Haji 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 200000000,
  },
  {
    title: "Haji 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 300000000,
  },
]);
</script>
