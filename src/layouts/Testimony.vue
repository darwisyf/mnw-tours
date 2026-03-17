<template>
  <section>
    <SectionHeader title="Testimony" />
    <div class="max-w-6xl mx-auto grid gap-3 md:gap-6 md:grid-cols-2 mt-12">
      <div
        v-for="element in testimonies"
        :key="element.id"
        class="flex justify-center"
      >
        <Card v-bind="element" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import SectionHeader from "./SectionHeader.vue";

const testimonies = ref([
  {
    id: crypto.randomUUID(),
    type: "image",
    image:
      "https://images.unsplash.com/photo-1627091908405-30bd51eec537?w=500&q=60&fm=webp",
    title: "Abang Zakir",
    description:
      '"Masya Allah Travel MNW selalu memberikan yang terbaik🥰🫶🫶"',
  },
  {
    id: crypto.randomUUID(),
    type: "image",
    image:
      "https://images.unsplash.com/photo-1651646781428-18b47ae1e17b?w=500&q=60&fm=webp",
    title: "Doni Indra",
    description: '"Travel umroh terbaik.. owner nya pun ramah ☺️"',
  },
  {
    id: crypto.randomUUID(),
    type: "image",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&q=60&fm=webp",
    title: "Nicky Muhammad Iqbal",
    description: '"Sangat memuaskann, Muthawifnya sabar buanget 💓"',
  },
  {
    id: crypto.randomUUID(),
    type: "image",
    image:
      "https://images.unsplash.com/photo-1619545307432-9fc73f8135ff?w=500&q=60&fm=webp",
    title: "Aisha Aleandra Rashid",
    description:
      '"Terima kasih MNW Tours atas pengalaman tak terlupakan.. full service.. sangat helpful dan bermakna.. Amanah dan terpercaya ✊"',
  },
]);
</script>
