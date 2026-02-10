<template>
  <div class="flex justify-center">
    <!-- Title -->
    <h2
      class="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-linear-to-br from-blue-500 to-tertiary bg-clip-text text-transparent"
    >
      {{ title }}
    </h2>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
