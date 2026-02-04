<template>
  <div class="h-max bg-primary dark:bg-primary-dark">
    <header>
      <Navbar />
    </header>
    <main class="pt-17">
      <RouterView />
    </main>
    <footer class="px-4">
      <Divider />
      <Address />
      <Divider />
    </footer>
  </div>
</template>
<script setup>
import Divider from "./components/Divider.vue";
import Navbar from "./components/Navbar.vue";
import Address from "./layouts/Address.vue";
</script>
