import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const Haji = () => import("../views/Haji.vue");
const Umrah = () => import("../views/Umrah.vue");
const Gallery = () => import("../views/Gallery.vue");
const Contacts = () => import("../views/Contacts.vue");

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/Haji", name: "Haji", component: Haji },
    { path: "/Umrah", name: "Umrah", component: Umrah },
    { path: "/Gallery", name: "Gallery", component: Gallery },
    { path: "/Contacts", name: "Contacts", component: Contacts },
  ],
});
