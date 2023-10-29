/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "../styles/buttons.scss";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#17255A", // navy
          secondary: "#EAE0FF", // pink
          text: "#272727", // black
          error: "#BD1E1E",
          gray: "#27272740",
        },
      },
    },
  },
});
