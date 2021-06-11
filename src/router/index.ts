import topBar from "@/components/TopBar.vue";
import main from "@/components/Main.vue";
import leftBar from "@/components/LeftBar.vue";
export const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    components: {
      top: topBar,
      main,
      left: leftBar,
    },
  },
];
