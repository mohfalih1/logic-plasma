// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  const dialog = ref(false);
  const isSnackbar = ref(false);
  const usersRole = ref();
  const resAddDon = ref("");

  return { dialog, usersRole, isSnackbar };
});
