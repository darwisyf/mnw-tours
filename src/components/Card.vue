<template>
  <div
    class="p-4 flex max-w-sm h-24 items-center rounded-2xl border border-gray-800 dark:border-gray-200 hover:scale-105 transition group bg-white dark:bg-secondary"
  >
    <!-- Icon -->
    <div
      class="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950 shrink-0"
    >
      <Icon :icon="icon" class="w-6 h-6 text-indigo-600 dark:text-secondary" />
    </div>

    <div class="ml-6">
      <!-- Title -->
      <h3 class="text-xl font-semibold">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-800 leading-relaxed text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
