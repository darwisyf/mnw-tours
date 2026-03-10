<template>
  <section class="flex flex-row justify-evenly max-w-11/12 mx-auto mb-16">
    <div class="max-w-xl">
      <h3 class="text-3xl text-center text-tertiary">Visi</h3>
      <p class="font-light my-4">
        {{ visiMisi.vision }}
      </p>
    </div>
    <VertDivider class="px-4" />
    <div class="max-w-xl">
      <h3 class="text-3xl text-center text-tertiary">Misi</h3>
      <ol class="font-light list-decimal ml-5">
        <li class="my-4">{{ visiMisi.mission.first }}</li>
        <li class="my-4">{{ visiMisi.mission.second }}</li>
        <li class="my-4">{{ visiMisi.mission.third }}</li>
        <li class="my-4">{{ visiMisi.mission.forth }}</li>
        <li class="my-4">{{ visiMisi.mission.fifth }}</li>
      </ol>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";
import VertDivider from "../components/VertDivider.vue";

const visiMisi = reactive({
  vision:
    "Menjadi perusahaan penyelenggara perjalanan Umrah dan Haji yang profesional, terpercaya, dan berdaya saing global, dengan pelayanan prima berbasis nilai syariah, kepatuhan regulasi, serta inovasi berkelanjutan demi menghadirkan pengalaman ibadah yang aman, nyaman, dan bermakna dengan fasilitas yang terbaik untuk para jamaah.",
  mission: {
    first:
      "Menyelenggarakan layanan Umrah dan Haji secara profesional dan sesuai regulasi, dengan menjunjung tinggi integritas, transparansi, dan akuntabilitas dalam setiap proses pelayanan.",
    second:
      "Memberikan pembinaan dan pendampingan ibadah yang komprehensif, melalui manasik terstruktur dan edukatif guna meningkatkan kualitas pemahaman serta kekhusyukan jamaah.",
    third:
      "Membangun sistem manajemen pelayanan berbasis mutu dan teknologi, untuk memastikan efisiensi operasional, kemudahan akses, serta responsivitas layanan.",
    forth:
      "Menjalin kemitraan strategis yang berkelanjutan, maskapai, penyedia akomodasi, dan layanan di Tanah Suci guna menjamin kualitas, keamanan, dan kenyamanan perjalanan.",
    fifth:
      "Mengembangkan sumber daya manusia yang kompeten, berintegritas, dan berorientasi pada pelayanan Islami, guna menciptakan pengalaman ibadah yang optimal dan bernilai spiritual tinggi.",
  },
});
</script>
