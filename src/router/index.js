// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   component: () => import("@/layouts/default/Default.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "Home",

  //       component: () => import("@/views/Home.vue"),
  //     },
  //     {
  //       path: "/login",
  //       name: "login",

  //       component: () => import("@/views/login/loginView.vue"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
