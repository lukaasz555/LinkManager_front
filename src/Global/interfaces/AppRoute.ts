import { MainRoutesNames } from "@/Main/enums/MainRoutesNames.enum";
import { AppRouteMeta } from "./AppRouteMeta";
import { AccountRoutesNames } from "@/Account/enums/AccountRoutesNames.enum";

export interface AppRoute {
  name: MainRoutesNames | AccountRoutesNames;
  meta?: AppRouteMeta;
}
