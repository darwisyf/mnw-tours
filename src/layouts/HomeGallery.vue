<template>
  <section class="bg-white w-19/20 mx-auto rounded-xl shadow-xl pt-6">
    <SectionHeader title="Gallery" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center my-20 pb-10"
    >
      <div
        v-for="url in posts"
        :key="url"
        v-html="createEmbed(url)"
        class="flex justify-center"
      ></div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from "vue";
import SectionHeader from "./SectionHeader.vue";

const posts = [
  "https://www.instagram.com/p/DSlZannE63i/",
  "https://www.instagram.com/p/DSdpx_IEz1r/",
];

const createEmbed = (url) => `
  <blockquote
    class="instagram-media"
    data-instgrm-permalink="${url}"
    data-instgrm-version="14"
    style="max-width:540px; width:100%;"
  ></blockquote>
`;

onMounted(() => {
  if (!window.instgrm) {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm.Embeds.process();
    document.body.appendChild(script);
  } else {
    window.instgrm.Embeds.process();
  }
});
</script>
