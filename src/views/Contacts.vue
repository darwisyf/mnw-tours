<template>
  <div class="min-h-screen mt-12">
    <SectionHeader title="Contact Us" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
      <form class="space-y-8" @submit.prevent="sendEmail">
        <div v-for="(item, index) in inputs" :key="index">
          <Inputs
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
            v-model="form[item.id]"
          />
        </div>
      </form>
    </div>
    <SectionHeader title="Our Social Media" />
    <div class="w-1/4 grid sm:flex justify-between mx-auto mt-6">
      <div
        class="grid hover:scale-110 transition text-tertiary hover:text-pink-500"
      >
        <a href="https://www.instagram.com/mnw_tours" class="my-4 mx-auto p-4">
          <Icon icon="simple-icons:instagram" class="text-5xl" />
        </a>
        <p>@mnw_tours</p>
      </div>
      <div
        class="grid hover:scale-110 transition text-tertiary hover:text-red-400"
      >
        <a href="https://www.tiktok.com/@mnw_tours" class="my-4 mx-auto p-4">
          <Icon icon="simple-icons:tiktok" class="text-5xl" />
        </a>
        <p>@mnw_tours</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import SectionHeader from "../layouts/SectionHeader.vue";
import Inputs from "../components/Inputs.vue";
import { ref, reactive } from "vue";
import { Icon } from "@iconify/vue";

const form = reactive({
  email: "",
  subject: "",
  message: "",
});

const inputs = ref([
  {
    id: "email",
    label: "Your Email",
    type: "email",
    placeholder: "email@example.com",
    rows: undefined,
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Let me know how can i help you",
    rows: undefined,
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Leave a message!",
    rows: 6,
  },
]);
</script>
