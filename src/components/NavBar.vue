<template>
  <v-card class="card">
    <v-navigation-drawer
      color="primary"
      location="right"
      permanent
      class="rounded-xl ma-5"
      width="264"
      height="100vh"
    >
      <v-img
        to="/home"
        class="mt-5 mr-5 ml-5"
        src="../assets/plasmaLogo.png"
        width="232"
      ></v-img>
      <v-list
        class="mt-5 mr-5"
        width="232"
        v-if="permissions.routes?.value.length > 0"
      >
        <v-list-item
          v-for="item in permissions.routes.value"
          :key="item.id"
          active-class="secondary--text"
          router
          :to="routesEnum[item.privliages].route"
          class="bg-white rounded-lg text-primary mt-2"
          :prepend-icon="routesEnum[item.privliages].icon"
          :title="routesEnum[item.privliages].name"
        ></v-list-item>
        <br />
        <!-- <v-list-item
          router
          to="/news"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-newspaper-variant-outline"
          title="الاخبار"
        ></v-list-item>
        <br />

        <v-list-item
          active-class="secondary--text"
          router
          to="/donations"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-hand-heart-outline"
          title="المتبرعين"
        ></v-list-item>

        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/chroni-diseases"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-virus-outline"
          title="الامراض المزمنة"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/role"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-shield-account-outline"
          title="ادارة المشرفين"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/activeites"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-calendar-month-outline"
          title="سجل النشاط"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/notifications"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-bell-ring-outline"
          title="الاشعارت"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/import-export"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-export-variant"
          title="رفع / تنزيل البيانات"
        ></v-list-item> -->
      </v-list>
      <br />
      <v-list-item class="rounded-lg text-black">
        <v-btn
          @click="isLogOutDialog = true"
          rounded="lg"
          block
          color="secondary"
        >
          تسجيل الخروج
        </v-btn>
      </v-list-item>
      <br />
      <br />
      <br />
    </v-navigation-drawer>
  </v-card>

  <!-- start log out   -->
  <v-row justify="center">
    <v-dialog v-model="isLogOutDialog" persistent width="262">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> تسجيل الخروج</span>
        </v-card-title>
        <v-card-text> هل انت متأكد من تسجيل الخروج ؟ </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="logout()"
              class="delete-button"
              color="white"
              variant="text"
            >
              تسجيل الخروج
            </v-btn>
            <v-btn
              @click="isLogOutDialog = false"
              class="back-button"
              color="white"
              variant="text"
            >
              الغاء
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- start log out  -->
</template>
<script setup>
import { ref } from "vue";
import router from "@/router";
import { usePermissionsStore } from "@/store/permissions.js";
const permissions = usePermissionsStore();
const isLogOutDialog = ref(false);

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  router.push("/login");
};

const routesEnum = ref([
  { name: "الصفحة الرئيسية", value: 0, route: "/", icon: "mdi-speedometer" },
  {
    name: "الاخبار",
    value: 1,
    route: "/news",
    icon: "mdi-newspaper-variant-outline",
  },
  {
    name: "المتبرعين",
    value: 2,
    route: "/donations",
    icon: "mdi-hand-heart-outline",
  },
  {
    name: "الامراض المزمنة",
    value: 3,
    route: "/chroni-diseases",
    icon: "mdi-virus-outline",
  },
  {
    name: "ادارة المشرفين",
    value: 4,
    route: "/role",
    icon: "mdi-shield-account-outline",
  },
  {
    name: "سجل النشاط",
    value: 5,
    route: "/activeites",
    icon: "mdi-calendar-month-outline",
  },
  {
    name: "الاشعارات",
    value: 6,
    route: "/notifications",
    icon: "mdi-bell-ring-outline",
  },
  {
    name: "رفع/تنزيل البيانات",
    value: 7,
    route: "/import-exports",
    icon: "mdi-export-variant",
  },
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");
* {
  font-family: "Cairo", sans-serif;
}
</style>
