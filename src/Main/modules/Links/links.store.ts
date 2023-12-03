import { defineStore } from "pinia";
import { Link } from "@/Main/models/Link";
import { getLinks } from "./links.service";

interface LinkStore {
  links: Link[];
  link?: Link;
}

const initState = (): LinkStore => ({
  links: [],
  link: undefined,
});

export const useLinkStore = defineStore("linkStore", {
  state: initState,
  actions: {
    async loadLinks(): Promise<void> {
      this.links = await getLinks();
    },
  },
});
