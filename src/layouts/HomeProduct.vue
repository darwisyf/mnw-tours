<template>
  <div class="min-h-screen mb-20">
    <SectionHeader title="Products" />
    <div
      class="grid grid-cols-1 lg:grid-cols-3 justify-center mt-10 max-w-7/8 mx-auto"
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

const products = ref([
  {
    image:
      "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=1200&q=70&fm=webp",
    title: "Umrah Reguler",
  },
  {
    image:
      "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=1200&q=70&fm=webp",
    title: "Umrah Plus Holiday",
  },
  {
    image:
      "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=1200&q=70&fm=webp",
    title: "Umrah Private",
  },
  {
    image:
      "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=1200&q=70&fm=webp",
    title: "Hajj ONH Plus",
  },
  {
    image:
      "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=1200&q=70&fm=webp",
    title: "Hajj Furodah",
  },
  {
    image:
      "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=1200&q=70&fm=webp",
    title: "Halal Trip",
  },
]);
</script>
