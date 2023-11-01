import { TranslateResult } from "vue-i18n";
import { MainRoutesNames } from "../enums/MainRoutesNames.enum";

export type MenuItem = {
  text: TranslateResult;
  routeName: MainRoutesNames;
};

export const MenuItems: MenuItem[] = [
  {
    text: MainRoutesNames.Links,
    routeName: MainRoutesNames.Links,
  },
  {
    text: MainRoutesNames.Categories,
    routeName: MainRoutesNames.Categories,
  },
  {
    text: MainRoutesNames.Favorites,
    routeName: MainRoutesNames.Favorites,
  },
  {
    text: MainRoutesNames.Settings,
    routeName: MainRoutesNames.Settings,
  },
];
