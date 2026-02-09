<template>
  <footer
    class="relative w-full bg-white dark:bg-[#0f172a] flex justify-between items-center px-8"
  >
    <div class="flex items-center gap-3">
      <div>
        <img :src="logoPic" alt="Logo" class="w-10" loading="lazy" />
      </div>
      <div class="text-tertiary dark:text-primary">
        <p>Izin Haji: KMA No. 41/2024</p>
        <p>Izin Umroh: 91203190614630002</p>
      </div>
    </div>
    <div class="">
      <h4 class="text-tertiary dark:text-primary text-center py-6">
        © {{ year }} PT. Madinah Nurul Wisata. All Rights Reserved
      </h4>
    </div>
  </footer>
</template>
<script setup>
import logoPic from "../assets/images/logo-kemenag-png-1png.png";

const year = new Date().getFullYear();
</script>
