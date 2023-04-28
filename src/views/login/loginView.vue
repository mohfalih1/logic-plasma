<template>
  <div class="contenier">
    <div class="boold-1">
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
    </div>
    <div class="content">
      <v-card class="card" color="primary">
        <v-card-text>
          <div class="logo">
            <v-img width="120px" src="../../assets/plasmaLogo.png"></v-img>
            <br />
            <h2>تسجيل الدخول</h2>
          </div>
          <br />
          <br />
          <v-form class="form">
            <div>
              <v-text-field
                v-model="loginData.email"
                class="bg-white rounded-lg pa-0"
                variant="plain"
                placeholder="البريد الالكتروني"
                type="email"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <br />
              <v-text-field
                v-model="loginData.password"
                class="bg-white rounded-lg pa-0"
                variant="plain"
                placeholder="الرمز السري"
                type="password"
                prepend-inner-icon="mdi-key"
              ></v-text-field>
              <br />
              <v-alert v-if="error" dismissible type="error"
                >اسم المستخدم او كلمة المرور خطأ</v-alert
              >
              <v-btn
                @click="login()"
                class="mt-6 pa-1"
                large
                rounded
                block
                style="height: 50px !important"
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
    <div class="boold-2">
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
    </div>
  </div>
</template>
<script setup>
import axios from "@/server/axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const error = ref(false);
const loginData = ref({
  email: "",
  password: "",
});
function login() {
  axios
    .post("Admin/Login", loginData.value)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log(res);
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
      error.value = true;
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
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.boold-1 {
  display: flex;
  justify-content: space-between;
}
.boold-2 {
  display: flex;
  justify-content: space-between;
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
</style>
