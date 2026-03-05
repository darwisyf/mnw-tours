<template>
  <a
    :href="waLink"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 group"
  >
    <div
      class="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
    >
      <!-- Icon WhatsApp -->
      <div>
        <Icon icon="ic:outline-whatsapp" class="text-2xl" />
      </div>

      <span class="hidden sm:inline font-medium"> Chat via WhatsApp </span>
    </div>

    <!-- Ping animation -->
    <span class="absolute -top-1 -right-1 flex h-4 w-4">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
      ></span>
      <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
    </span>
  </a>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const phone = "6281113204397";
const message = encodeURIComponent(
  "Halo, Saya ingin bertanya tentang Paket Haji/Umroh/Trip di Madinah Nurul Wisata",
);
const waLink = `https://wa.me/${phone}?text=${message}`;
</script>
