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
      <Button label="Send" type="submit" class="mt-6" />
    </div>

    <div>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1NtM-7EmTdt6qr5h6t0z5PvxEGUwW3go&ehbc=2E312F&noprof=1"
        class="mx-auto mb-18 min-w-xs sm:min-w-md md:min-w-2xl lg:min-w-4xl h-100"
      ></iframe>
    </div>

    <!-- Social Media -->
    <SectionHeader title="Our Social Media" />
    <div class="max-w-1/2 grid sm:flex justify-evenly mx-auto mt-4 mb-16">
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
      <div
        class="grid hover:scale-110 transition text-tertiary hover:text-red-600"
      >
        <a
          href="https://www.youtube.com/@MadinahNurulWisata"
          class="my-4 mx-auto p-4"
        >
          <Icon icon="simple-icons:youtube" class="text-5xl" />
        </a>
        <p>@mnw_tours</p>
      </div>
    </div>

    <!-- More Contact -->
    <SectionHeader title="More Contacts" />
    <div
      class="flex flex-col md:flex-row gap-3 justify-evenly max-w-2/3 mx-auto text-lg text-white font-medium mt-4 mb-6"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/6281113204397"
        class="flex items-center gap-1 bg-green-400 px-6 py-1 rounded-full hover:bg-green-600 transition hover:scale-105"
      >
        <Icon icon="ic:outline-whatsapp" />
        <span>Admin 1</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/6285720003968"
        class="flex items-center gap-1 bg-green-400 px-6 py-1 rounded-full hover:bg-green-600 transition hover:scale-105"
      >
        <Icon icon="ic:outline-whatsapp" />
        <span>Admin 2</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/6285872810891"
        class="flex items-center gap-1 bg-green-400 px-6 py-1 rounded-full hover:bg-green-600 transition hover:scale-105"
      >
        <Icon icon="ic:outline-whatsapp" />
        <span>Admin 3</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/6281398114964"
        class="flex items-center gap-1 bg-green-400 px-6 py-1 rounded-full hover:bg-green-600 transition hover:scale-105"
      >
        <Icon icon="ic:outline-whatsapp" />
        <span>Admin 4</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/6281211490984"
        class="flex items-center gap-1 bg-green-400 px-6 py-1 rounded-full hover:bg-green-600 transition hover:scale-105"
      >
        <Icon icon="ic:outline-whatsapp" />
        <span>Admin 5</span>
      </a>
    </div>
  </div>
</template>
<script setup>
import SectionHeader from "../layouts/SectionHeader.vue";
import Inputs from "../components/Inputs.vue";
import { ref, reactive } from "vue";
import { Icon } from "@iconify/vue";
import Button from "../components/Button.vue";

const form = reactive({
  name: "",
  subject: "",
  message: "",
});

const inputs = ref([
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "John Doe",
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

const sendEmail = () => {
  emailjs
    .send(
      "", // Service ID
      "", // Template
      {
        form_name: form.name,
        subject: form.subject,
        message: form.message,
      },
      "", // Public key
    )
    .then(() => {
      alert("Message sent successfully");
      form.name = "";
      form.subject = "";
      form.message = "";
    })
    .catch(() => {
      alert("Failed to send message");
    });
};
</script>
