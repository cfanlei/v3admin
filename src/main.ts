import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router";
import App from "./App.vue";
import "./assets/tailwind.css";

const router = createRouter({
  history: createWebHistory(), //html模式
  routes,
});
const app = createApp(<any>App);
app.use(router);
app.mount("#app");
