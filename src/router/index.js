import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const Haji = () => import("../views/Haji.vue");
// const Contacts = () => import("../views/Contacts.vue");

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/Haji", name: "Haji", component: Haji },
    // { path: "/Contacts", name: "Contacts", component: Contacts },
  ],
});
