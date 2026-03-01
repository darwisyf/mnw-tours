<template>
  <div class="min-h-screen">
    <HeroSection />
    <About />
    <HomeProduct />
    <HomeGallery />
    <Testimony />
  </div>
</template>

<script setup>
import About from "../layouts/About.vue";
import HeroSection from "../layouts/HeroSection.vue";
import Testimony from "../layouts/Testimony.vue";
import HomeGallery from "../layouts/HomeGallery.vue";
import HomeProduct from "../layouts/HomeProduct.vue";
</script>
