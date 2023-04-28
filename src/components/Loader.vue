<template>
  <div :model-value="overlay" class="align-center justify-center">
    <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
  </div>
</template>

<script setup>
import { ref } from "vue";
const overlay = ref(false);

</script>