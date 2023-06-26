<template>
  <v-app id="app" style="background: #f8f8f8">

    <v-main>
      <NavBar v-if="!isSidebar" style="direction: ltr" />
      <AppBar v-if="!isSidebar" />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import AppBar from "./components/AppBar.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const isSidebar = computed(() => {
  return router.currentRoute.value.meta.isSidebar;
});
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
