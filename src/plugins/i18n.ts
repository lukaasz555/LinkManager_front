import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import pl from "../locales/pl.json";

export const i18n = createI18n({
  locale: "en",
  inheritLocale: true,
  sync: true,
  messages: {
    en,
    pl,
  },
});
