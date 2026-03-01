<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img"
      class="rounded-xl"
      loading="lazy"
    />
  </div>
</template>
<script setup>
import { loadImages } from "../utils/loadImages";

const images = loadImages();
</script>
