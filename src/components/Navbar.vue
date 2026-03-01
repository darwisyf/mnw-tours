<template>
  <nav
    class="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur border-b border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-8xl mx-auto pl-2 pr-6">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-xl w-1/2 font-bold bg-linear-to-br from-blue-500 to-tertiary bg-clip-text text-transparent flex justify-start items-center"
        >
          <img src="/public/images/mnw-logo.png" alt="Logo MNW" class="w-16" />
          Madinah Nurul Wisata
        </RouterLink>

        <div class="flex items-center gap-6">
          <!-- Desktop Menu -->
          <div class="hidden md:flex gap-8">
            <RouterLink
              v-for="item in menus"
              :key="item.path"
              :to="item.path"
              class="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
              active-class="text-indigo-600 font-semibold"
            >
              {{ item.name }}
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 transition-transform duration-300"
                :class="$route.path === item.path ? 'scale-x-100' : ''"
              />
            </RouterLink>
          </div>

          <button @click="toggleDarkMode" class="text-white ml-20 z-10">
            <!-- Show moon icon if dark mode is off, otherwise show sun icon -->
            <Icon
              v-if="!isDarkMode"
              icon="line-md:moon-filled"
              class="text-2xl text-tertiary"
            />
            <Icon
              v-else
              icon="line-md:sunny-outline"
              class="text-2xl text-secondary"
            />
          </button>
        </div>

        <!-- Mobile Button -->
        <button class="md:hidden text-3xl" @click="open = !open">
          <Icon
            icon="line-md:close-to-menu-transition"
            class="text-tertiary dark:text-primary"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="open"
      class="md:hidden bg-white dark:bg-[#0f172a] border-t dark:border-gray-800"
    >
      <RouterLink
        v-for="item in menus"
        :key="item.path"
        :to="item.path"
        @click="open = false"
        class="block px-6 py-4 border-b dark:border-gray-800 text-gray-700 dark:text-gray-300"
        active-class="bg-indigo-50 dark:bg-indigo-950 text-indigo-600 font-semibold"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const open = ref(false);

const menus = [
  { name: "Home", path: "/" },
  { name: "Haji", path: "/haji" },
  { name: "Umrah", path: "/umrah" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contacts" },
];

// Reactive property to track dark mode state
const isDarkMode = ref(localStorage.getItem("theme") === "dark");

const toggleDarkMode = () => {
  const html = document.documentElement;
  if (isDarkMode.value) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  // Update dark mode state
  isDarkMode.value = !isDarkMode.value;
};
</script>
