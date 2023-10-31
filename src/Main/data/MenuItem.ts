import { TranslateResult } from "vue-i18n";
import { MainRoutesNames } from "../enums/MainRoutesNames.enum";

export type MenuItem = {
  text: TranslateResult;
  routeName: MainRoutesNames;
};
