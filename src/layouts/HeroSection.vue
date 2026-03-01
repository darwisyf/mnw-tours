<template>
  <!-- HERO -->
  <div class="relative h-[80vh] overflow-hidden">
    <img
      :src="carouselImages[current]"
      class="w-full h-full object-cover transition-opacity duration-700"
      alt="Travel Destination"
      loading="eager"
      width="1200"
      height="800"
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
</template>
<script setup>
import { ref, onMounted } from "vue";

const carouselImages = [
  "https://images.unsplash.com/photo-1589827577276-65d717348780?w=1200&q=70&fm=webp",
  "https://images.unsplash.com/photo-1590108589108-3600131de843?w=1200&q=70&fm=webp",
  "https://images.unsplash.com/photo-1511652019870-fbd8713560bf?w=1200&q=70&fm=webp",
];

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
