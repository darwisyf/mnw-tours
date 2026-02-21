<template>
  <div class="min-h-screen">
    <HeroSection />
    <About />
    <HomeProduct />
    <Gallery />
    <Testimony />
  </div>
</template>

<script setup>
import About from "../layouts/About.vue";
import HeroSection from "../layouts/HeroSection.vue";
import Testimony from "../layouts/Testimony.vue";
import Gallery from "../layouts/Gallery.vue";
import HomeProduct from "../layouts/HomeProduct.vue";
</script>
