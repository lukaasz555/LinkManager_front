import vuetify from "./vuetify";
import pinia from "../Global/store";
import router from "@/Global/router";
import i18n from "./i18n";
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(i18n);
}
