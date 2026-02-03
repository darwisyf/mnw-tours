<template>
  <section class="min-h-screen">
    <!-- HERO -->
    <div class="relative h-[80vh] overflow-hidden">
      <img
        :src="carouselImages[current]"
        class="w-full h-full object-cover transition-opacity duration-700"
        alt="Travel Destination"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 flex items-center">
        <div class="max-w-6xl mx-auto px-6 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Perjalanan Spiritual yang Menginspirasi
          </h1>
          <p class="max-w-xl text-lg opacity-90">
            Satu Langkah Lebih Dekat ke Tanah Suci dan Destinasi Impian Anda.
            Madinah Nurul Wisata menghadirkan paket Haji, Umroh, dan Liburan
            terbaik dengan layanan berkualitas dan harga bersahabat.
          </p>
        </div>
      </div>

      <!-- Carousel Controls -->
      <button
        @click="prev"
        class="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        ‹
      </button>
      <button
        @click="next"
        class="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        ›
      </button>
    </div>

    <!-- ABOUT -->
    <section
      class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
    >
      <img
        src="https://images.unsplash.com/photo-1554976757-606d486f5d92"
        class="rounded-2xl shadow-lg"
        alt="About Travel"
      />

      <div>
        <h2 class="text-3xl font-bold mb-4 text-tertiary dark:text-primary">
          About Us
        </h2>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          doloribus maiores illum, alias dolorum architecto doloremque, et
          possimus placeat, ab in obcaecati! Quis, ex iste qui et iusto dolore
          explicabo!
        </p>

        <div class="grid gap-3">
          <Card v-for="(item, index) in abouts" :key="index" v-bind="item" />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";

const carouselImages = [
  "https://images.unsplash.com/photo-1589827577276-65d717348780",
  "https://images.unsplash.com/photo-1590108589108-3600131de843",
  "https://images.unsplash.com/photo-1511652019870-fbd8713560bf",
];

const abouts = ref([
  {
    icon: "lucide:badge-check",
    title: "Amanah",
    description: "Dipercaya oleh jamaah",
  },
  {
    icon: "lucide:newspaper",
    title: "Legalitas",
    description: "Sudah memiliki izin resmi",
  },
  {
    icon: "lucide:shield",
    title: "Aman & Nyaman",
    description: "Memberikan keamanan & kenyamanan perjalanan anda",
  },
  {
    icon: "lucide:circle-dollar-sign",
    title: "Harga Terbaik",
    description: "Memberikan Harga Terbaik",
  },
]);

const current = ref(0);

const next = () => {
  current.value = (current.value + 1) % carouselImages.length;
};

const prev = () => {
  current.value =
    (current.value - 1 + carouselImages.length) % carouselImages.length;
};

// Auto slide
onMounted(() => {
  setInterval(next, 5000);
});
</script>
