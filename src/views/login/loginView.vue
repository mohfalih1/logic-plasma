<template>
  <Loader v-if="isLoading" />
  <div class="contenier">
    <div class="content">
      <v-card class="card" color="primary">
        <v-card-text>
          <div class="logo">
            <v-img width="150px" src="../../assets/plasmaLogo.png"></v-img>
            <br />
            <h2>تسجيل الدخول</h2>
          </div>
          <br />
          <br />
          <v-form class="form">
            <div>
              <v-text-field
                v-model="loginData.email"
                class="login-input"
                :variant="null"
                placeholder="البريد الالكتروني"
                type="email"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <br />
              <v-text-field
                v-model="loginData.password"
                class="login-input"
                :variant="null"
                placeholder="الرمز السري"
                type="password"
                prepend-inner-icon="mdi-key"
              ></v-text-field>
              <br />
              <v-alert v-if="error" dismissible type="error"
                >البريد الالكتروني او الرمز السري خطأ</v-alert
              >
              <v-btn
                @click="login()"
                class="mt-6 pa-1 rounded-lg"
                large
                rounded
                block
                style="height: 3rem  !important"
                elevation="0"
                color="secondary"
                fluid
                >تسجيل دخول</v-btn
              >
            </div>
          </v-form>
        </v-card-text>

        <div></div>
      </v-card>
      <br />
    </div>
  </div>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import axios from "@/server/axios";
import { ref,onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePermissionsStore } from "@/store/permissions.js";
const permissions = usePermissionsStore();

const router = useRouter();
const error = ref(false);
const isLoading = ref(false);
const loginData = ref({
  email: "",
  password: "",
});
function login() {
  isLoading.value = true;
  axios
    .post("Admin/Login", loginData.value)
    .then((res) => {
      localStorage.setItem("token", res.data.token);

      permissions.setPermissions(res.data.claims);

      console.log(permissions.routes.value);

      router.push("/");
    })
    .catch((err) => {
      error.value = true;
    })
    .finally(() => {
      isLoading.value = false;
    });
}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  direction: rtl;
}
iframe {
  background: none;
  border: none;
}
.contenier {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 50px 0 rgba(238, 76, 76, 0.5);
  z-index: 10;
}
.login-input{
  width: 100%;
  height: 3.5rem;
  background-color: #ffff;
  border-radius: 10px;
  color: black;
  font-size: 1.2rem;
}
</style>
