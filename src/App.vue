<template>
  <v-app id="app" color="red">
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
* {
  direction: rtl;
}

@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");
body {
  font-family: "Cairo", sans-serif;
}
</style>
