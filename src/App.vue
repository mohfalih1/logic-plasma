<template>
  <v-app id="app" style="background: #f8f8f8">
    <!-- <loginView/> -->

    <v-main>
      <NavBar style="direction: rtl; width: auto" />
      <AppBar />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// import loginView from './views/login/loginView.vue';
import NavBar from "./components/NavBar.vue";
import AppBar from "./components/AppBar.vue";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");

* {
  direction: rtl;
}

body {
  font-family: "Cairo", sans-serif;
}
</style>
