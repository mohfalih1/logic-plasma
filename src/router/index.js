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
    path: "/news/show",
    name: "show",
    component: () => import("@/views/news/show.vue"),
  },
  {
    path: "/news/add",
    name: "add",
    component: () => import("@/views/news/add.vue"),
  },
  {
    path: "/news/show/edit",
    name: "edit",
    component: () => import("@/views/news/edit.vue"),
  },
  // {
  //   path: "/provinces",
  //   name: "provinces",
  //   component: () => import("@/views/provinces/provincesView.vue"),
  // },
  {
    path: "/donations",
    name: "donations",
    component: () => import("@/views/donations/donationsView.vue"),
  },
  {
    path: "/donations/donations-show",
    name: "showDonation",
    component: () => import("@/views/donations/showDonation.vue"),
  },
  {
    path: "/donations/donations-add",
    name: "addDonations",
    component: () => import("@/views/donations/addDonations.vue"),
  },
  {
    path: "/chroni-diseases",
    name: "chroniDiseases",
    component: () => import("@/views/chronicDiseases/chronicDiseasesView.vue"),
  },
  {
    path: "/blood-group",
    name: "bloodGroup",
    component: () => import("@/views/bloodGroup/bloodGroupView.vue"),
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () => import("@/views/notifications/notificationsView.vue"),
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
