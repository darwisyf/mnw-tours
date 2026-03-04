<template>
  <div class="relative w-full mx-auto min-h-screen mt-20">
    <SectionHeader title="Paket Umrah" />
    <Divider />
    <div class="grid grid-cols-1 lg:grid-cols-3 justify-center">
      <div class="mt-10" v-for="(service, index) in services" :key="index">
        <ProductCard
          :image="service.image"
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
import Divider from "../components/Divider.vue";
import package1 from "../assets/images/umrah-awal-1448h.webp";
import { ref } from "vue";

const services = ref([
  {
    image: package1,
    title: "Umroh Reguler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 26500000,
  },
  {
    image: package1,
    title: "Umroh + Mesir",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 36500000,
  },
  {
    image: package1,
    title: "Umroh + Turkey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor, assumenda explicabo quasi repellat obcaecati cupiditate excepturi sint vitae, unde neque corporis beatae pariatur similique quisquam? Iste repellat fuga provident!",
    price: 38000000,
  },
]);
</script>
