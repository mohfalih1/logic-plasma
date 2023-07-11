<template>
  <Loader v-if="isLoading" />
  <div class="contenier">
    <div class="content">
      <v-card class="card" color="white" elevation="1">
        <v-card-text>
          <div class="logo">
            <v-img width="150px" src="@/assets/logoPlasma.svg"></v-img>
          </div>
          <br />
          <br />
          <v-form class="form">
            <div>
              <div class="input-container">
                <v-text-field
                  v-model="loginData.email"
                  class="login-input"
                  :variant="null"
                  placeholder="البريد الالكتروني"
                  type="email"
                  prepend-inner-icon="mdi-email"
                />
              </div>
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
                rounded="xl"
                block
                style="height: 3rem !important"
                elevation="0"
                color="primary"
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
import { ref, onMounted } from "vue";
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
  height: 100vh;
  overflow: hidden;
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
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 25px;

  z-index: 10;
}

.login-input {
  width: 25rem;
  height: 3.6rem;
  background-color: #ffff;
  border-radius: 999999px;
  border: 2px solid var(--primary);
  color: black;
  font-size: 1.2rem;
}
</style>
