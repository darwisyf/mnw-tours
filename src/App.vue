<template>
  <div class="h-max bg-primary dark:bg-primary-dark">
    <Navbar />
    <main class="pt-17">
      <RouterView />
    </main>
    <Divider />
    <Address />
    <Divider />
    <Footer />
  </div>
</template>
<script setup>
import Divider from "./components/Divider.vue";
import Navbar from "./components/Navbar.vue";
import Address from "./layouts/Address.vue";
import Footer from "./layouts/Footer.vue";
</script>
