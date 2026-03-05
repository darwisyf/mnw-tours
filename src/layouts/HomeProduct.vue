<template>
  <div class="min-h-screen mb-20">
    <SectionHeader title="Products" />
    <div
      class="grid grid-cols-1 lg:grid-cols-3 justify-center mt-10 max-w-3/4 mx-auto gap-1 lg:gap-2"
    >
      <div v-for="(product, index) in products" class="my-6 lg:my-8">
        <ProductCard :image="product.image" :title="product.title" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import SectionHeader from "./SectionHeader.vue";
import umrahReg from "../assets/images/umrah-reguler.webp";
import umrahPriv from "../assets/images/umrah-private.webp";
import umrahHoliday from "../assets/images/umrah-holiday.webp";
import hajiReg from "../assets/images/haji-reguler.webp";
import hajiPlus from "../assets/images/haji-plus.webp";

const products = ref([
  {
    image: umrahReg,
    title: "Umrah Reguler",
  },
  {
    image: umrahHoliday,
    title: "Umrah Plus Holiday",
  },
  {
    image: umrahPriv,
    title: "Umrah Private/Mandiri",
  },
  {
    image: hajiPlus,
    title: "Hajj ONH Plus",
  },
  {
    image: hajiReg,
    title: "Hajj Reguler",
  },
  {
    image: umrahReg,
    title: "Halal Trip",
  },
]);
</script>
