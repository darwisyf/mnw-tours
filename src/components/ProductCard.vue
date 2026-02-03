<template>
  <div
    class="relative max-w-xs md:max-w-sm xl:max-w-md bg-white/80 dark:bg-gray-700/80 mx-auto rounded-4xl border-3 border-tertiary dark:border-secondary shadow-xl shadow-gray-700 dark:shadow-gray-600"
  >
    <!-- Title -->
    <div class="py-4 mt-2 text-center">
      <h3 class="font-semibold text-3xl text-gray-800 dark:text-secondary">
        {{ title }}
      </h3>
    </div>
    <!-- Desc -->
    <div class="px-6 py-8">
      <p class="text-sm text-center text-gray-800 dark:text-secondary">
        {{ description }}
      </p>
    </div>
    <!-- Pricing -->
    <div
      class="bg-linear-to-br from-blue-500 to-tertiary rounded-xl max-w-2/3 mx-auto mb-8"
    >
      <p class="font-bold text-xl text-center py-4 px-6 text-primary">
        {{ formattedPrice }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Our Service",
  },
  description: {
    type: String,
    required: true,
    default: "Brief description of our service",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Format Number to Currency
const formattedPrice = computed(() => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(props.price);
});
</script>
