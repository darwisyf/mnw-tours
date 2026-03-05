<template>
  <div class="min-h-screen bg-primary dark:bg-primary-dark flex flex-col">
    <header>
      <Navbar />
    </header>
    <main class="pt-17 flex-1">
      <RouterView />
      <FloatingWhatsapp />
    </main>
    <Address />
    <Footer />
  </div>
</template>
<script setup>
import FloatingWhatsapp from "./components/FloatingWhatsapp.vue";
import Navbar from "./components/Navbar.vue";
import Address from "./layouts/Address.vue";
import Footer from "./layouts/Footer.vue";
</script>

<style>
.description {
  white-space: pre-line;
}
</style>
