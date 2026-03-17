<template>
  <div
    class="w-min p-1 bg-linear-to-r hover:bg-linear-to-l from-blue-500 to-tertiary rounded-[20px] group transition hover:scale-105 mx-auto md:mx-0"
  >
    <div
      class="p-4 flex w-xs lg:w-md h-24 items-center rounded-2xl bg-white dark:bg-[#0f172a]/80"
    >
      <!-- Visual -->
      <div class="gap-4 shrink-0">
        <!-- Icon -->
        <div
          v-if="type === 'icon'"
          class="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950"
        >
          <Icon
            :icon="icon"
            class="w-6 h-6 text-indigo-600 dark:text-secondary"
          />
        </div>

        <!-- Image -->
        <img
          v-if="type === 'image'"
          :src="image"
          loading="lazy"
          @error="onError"
          alt="Card Image"
          class="w-12 h-12 rounded-full object-cover"
          width="800"
          height="500"
        />
      </div>

      <div class="ml-6">
        <!-- Title -->
        <h3 class="text-xl text-start font-semibold dark:text-primary">
          {{ title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-600 text-start dark:text-gray-300 leading-relaxed text-sm">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  id: String,
  type: {
    type: String,
    required: true,
  },
  icon: String,
  image: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const fallback = "https://via.placeholder.com/150?text=Image";

const onError = (e) => {
  e.target.src = fallback;
};
</script>
