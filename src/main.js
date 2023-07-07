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
// import VueFormulate, { options } from "@braid/vue-formulate";
// import { FormulateInput } from "vue-formulate";

//assets
import "@/assets/css/main.css";
const app = createApp(App);
const pinia = createPinia();

registerPlugins(app);
app.use(pinia);
app.use(VueApexCharts);
app.component("VueDatePicker", VueDatePicker);
// app.use(VueFormulate, options);
// app.component("FormulateInput", FormulateInput);

app.mount("#app");
