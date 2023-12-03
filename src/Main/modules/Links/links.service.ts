import { Link } from "@/Main/models/Link";
import { getData } from "@/Global/service/global.service";

export async function getLinks(): Promise<Link[]> {
  return await getData<Link[]>("/api/links");
}
