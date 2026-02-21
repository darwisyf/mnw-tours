import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const Haji = () => import("../views/Haji.vue");
const Contacts = () => import("../views/Contacts.vue");
const Umrah = () => import("../views/Umrah.vue");

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/Haji", name: "Haji", component: Haji },
    { path: "/Umrah", name: "Umrah", component: Umrah },
    { path: "/Contacts", name: "Contacts", component: Contacts },
  ],
});
