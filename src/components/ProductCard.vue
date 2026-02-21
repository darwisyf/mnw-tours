<template>
  <div
    class="relative max-w-xs xl:max-w-sm bg-white/80 dark:bg-gray-700/80 mx-auto rounded-lg border-3 border-tertiary dark:border-secondary shadow-md shadow-gray-700 dark:shadow-gray-600 curs"
  >
    <!-- Image -->
    <div>
      <img
        :src="image"
        :alt="title"
        class="w-full object-cover rounded-lg p-1"
      />
    </div>

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
      v-if="props.price != null"
      class="bg-linear-to-br from-blue-500 to-tertiary rounded-xl max-w-2/3 mx-auto mb-8"
    >
      <p class="font-bold text-xl text-center py-4 px-6 text-primary">
        {{ formattedPrice }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  image: {
    type: String,
    default: "https://picsum.photos/id/196/1280/720",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
  },
});

// Format Number to IDR Currency
const formattedPrice = computed(() => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(props.price);
});
</script>
