import topBar from "@/components/TopBar.vue";
import main from "@/components/Main.vue";
export const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: {
      topBar,
      main,
    },
  },
];
