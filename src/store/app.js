// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  const dialog = ref(false);

  return { dialog };
});
