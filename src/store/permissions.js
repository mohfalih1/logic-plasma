// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const usePermissionsStore = defineStore("permissions", () => {
  const routes = ref(null);

  function setPermissions(permissions) {
    routes.value = computed(() => permissions);
  }

  return { routes, setPermissions };
});
