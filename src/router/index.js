import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage/index.vue"),
    },
    {
      path: "/song",
      name: "song",
      component: () => import("../views/songPage/index.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/songPage/songDetail.vue"),
    },
  ],
});

export default router;
