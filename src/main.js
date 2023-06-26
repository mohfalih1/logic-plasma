// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import VueApexCharts from "vue3-apexcharts";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
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
app.component("VueDatePicker", VueDatePicker);
app.mount("#app");
