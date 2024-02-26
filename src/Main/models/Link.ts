import { getRandomID } from "@/Global/helpers/getRandomID";
import { DateTime } from "luxon";

export class Link {
  id = -getRandomID();
  title = "";
  url = "";
  categoryId = 0;
  createdAt: string = new Date().toISOString();
  isFavorite = false;
  notes: string | null = null;
  readAt: DateTime | null = null;
}
