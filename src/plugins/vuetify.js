/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VDataTable } from "vuetify/labs/VDataTable";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTable,
  },
  rtl: true,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#FF2C54",
          secondary: "#3A3A3A",
        },
      },
    },
  },
});
