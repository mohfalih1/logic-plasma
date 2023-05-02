// Composables
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/loginView.vue"),
      meta: { isSidebar: true },
    },
    {
      path: "/",
      name: "homePageView",
      component: () => import("@/views/homePage/homePageView"),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/news",
      name: "news",
      component: () => import("@/views/news/newsView.vue"),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/news/:id",
      name: "show",
      component: () => import("@/views/news/show.vue"),
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/donations/:id",
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
      component: () =>
        import("@/views/chronicDiseases/chronicDiseasesView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/blood-group",
      name: "bloodGroup",
      component: () => import("@/views/bloodGroup/bloodGroupView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/notifications",
      name: "notifications",
      component: () => import("@/views/notifications/notificationsView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/import-export",
      name: "importExport",
      component: () => import("@/views/importExport/importExportView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/import-export/export",
      name: "export",
      component: () => import("@/views/importExport/exportView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");

  if (!token && to.path === "/") {
    next({ name: "login" });
  }
  return next();
});
export default router;
