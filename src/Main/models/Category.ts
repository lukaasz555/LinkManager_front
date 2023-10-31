import { getRandomID } from "@/Global/helpers/getRandomID";

export class Category {
  id = -getRandomID();
  name = "";
  color = "#000000";
}
