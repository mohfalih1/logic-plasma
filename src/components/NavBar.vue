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
      <v-list class="mt-5 mr-5" width="232">
        <v-list-item
          active-class="secondary--text"
          router
          to="/"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-speedometer"
          title="الصفحة الرئيسية"
        ></v-list-item>
        <br />
        <v-list-item
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
        ></v-list-item>
      </v-list>
  <br />
        <v-list-item  
          class="rounded-lg text-black"        >
           <v-btn
            @click="isLogOutDialog = true"
            rounded="lg"
            block
            color="secondary"
          >
            تسجيل الخروج
          </v-btn>
      </v-list-item>
      <br>
      <br>
      <br>     <!-- <template v-slot:append>
        <div class="pa-2 mb-10">
          <v-btn
            @click="isLogOutDialog = true"
            rounded="lg"
            block
            color="secondary"
          >
            تسجيل الخروج
          </v-btn>
        </div>
      </template> -->
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

const isLogOutDialog = ref(false);
const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");
* {
  font-family: "Cairo", sans-serif;
}
</style>
