<template>
  <div
    class="w-min p-1 bg-linear-to-r hover:bg-linear-to-l from-blue-500 to-tertiary rounded-[20px] group transition hover:scale-105"
  >
    <div
      class="p-4 flex w-xs md:w-sm lg:w-md h-24 items-center rounded-2xl bg-white dark:bg-secondary"
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
          v-else-if="type === 'image'"
          :src="image"
          loading="lazy"
          @error="onError"
          alt="Card Image"
          class="w-12 h-12 rounded-full object-cover"
        />
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

      <!-- Hover Icon -->
      <div
        v-if="hoverIcon"
        class="absolute right-4 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
      >
        <Icon :icon="hoverIcon" class="text-3xl text-indigo-600" />
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
  hoverIcon: String,
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
