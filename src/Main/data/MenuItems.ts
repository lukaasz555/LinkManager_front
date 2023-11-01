import { TranslateResult } from "vue-i18n";
import { MainRoutesNames } from "../enums/MainRoutesNames.enum";
import i18n from "@/plugins/i18n";

export type MenuItem = {
  text: TranslateResult;
  routeName: MainRoutesNames;
};

export const MenuItems: MenuItem[] = [
  {
    text: i18n.global.t("Links"),
    routeName: MainRoutesNames.Links,
  },
  {
    text: i18n.global.t("Categories"),
    routeName: MainRoutesNames.Categories,
  },
  {
    text: i18n.global.t("Favorites"),
    routeName: MainRoutesNames.Favorites,
  },
  {
    text: i18n.global.t("Settings"),
    routeName: MainRoutesNames.Settings,
  },
];
