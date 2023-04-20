// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/loginView.vue"),
  },
  {
    path: "/",
    name: "homePageView",
    component: () => import("@/views/homePage/homePageView"),
  },

  {
    path: "/news",
    name: "news",
    component: () => import("@/views/news/newsView.vue"),
  },
  {
    path: "/provinces",
    name: "provinces",
    component: () => import("@/views/provinces/provincesView.vue"),
  },
  {
    path: "/donations",
    name: "donations",
    component: () => import("@/views/donations/donationsView.vue"),
  },
  {
    path: "/chroni-diseases",
    name: "chroniDiseases",
    component: () => import("@/views/chronicDiseases/chronicDiseasesView.vue"),
  },
  {
    path: "/import-export",
    name: "importExport",
    component: () => import("@/views/importExport/importExportView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
