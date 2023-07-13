// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  const dialog = ref(false);
  const usersRole = ref();
  const isSnackbarAdd = ref(false);
  const isSnackbarEdit = ref(false);
  const isSnackbarDele = ref(false);
  const resAdd = ref("");
  const resEdit = ref("");
  const resDele = ref("");

  return {
    dialog,
    usersRole,
    resAdd,
    resEdit,
    resDele,
    isSnackbarAdd,
    isSnackbarEdit,
    isSnackbarDele,
  };
});
