import { MainRoutesNames } from "@/Main/enums/MainRoutesNames.enum";
import { AppRouteMeta } from "./AppRouteMeta";

export interface AppRoute {
  name: MainRoutesNames;
  meta?: AppRouteMeta;
}
