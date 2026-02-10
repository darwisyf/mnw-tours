<template>
  <section class="h-min">
    <SectionHeader title="Testimoni" />
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
    image: "https://images.unsplash.com/photo-1627091908405-30bd51eec537",
    hoverIcon: "uil:thumbs-up",
    title: "Abdul",
    description: '"Harganya sangat cocok"',
  },
  {
    id: crypto.randomUUID(),
    type: "image",
    image: "https://images.unsplash.com/photo-1651646781428-18b47ae1e17b",
    hoverIcon: "uil:thumbs-up",
    title: "Budi",
    description: '"Pelayanan sangat baik"',
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    hoverIcon: "uil:thumbs-up",
    title: "Anto",
    description: '"Perjalanan aman dan nyaman"',
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1619545307432-9fc73f8135ff",
    hoverIcon: "uil:thumbs-up",
    title: "Fatimah",
    description: '"Travel yang sangat amanah!"',
  },
]);
</script>
