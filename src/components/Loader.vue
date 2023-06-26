<template>
  <div :model-value="isLodaing">
    <v-progress-circular
      color="primary"
      indeterminate
      size="64"
    ></v-progress-circular>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isLodaing = ref(false);
</script>
<style scoped>
div {
  display: flex;
  position: fixed;
  height: 100vh;
  width: 150vh;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  }
</style>
