<template>
  <button
    @click="onClick"
    :type="type"
    class="rounded-md bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 w-40 h-10 text-lg font-semibold"
  >
    {{ label }}
  </button>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: "Button",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  type: {
    type: String,
    default: "button",
  },
});
</script>
