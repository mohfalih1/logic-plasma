/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import VueApexCharts from "vue3-apexcharts";
// Plugins
import { registerPlugins } from "@/plugins";
import { createPinia } from "pinia";

//assets
import "@/assets/css/main.css";
const app = createApp(App);
const pinia = createPinia();

registerPlugins(app);

app.use(pinia);
app.use(VueApexCharts);
app.mount("#app");
