<template>
  <Navbar />
  <main class="bg-primary dark:bg-primary-dark pt-17">
    <RouterView />
  </main>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
</script>
