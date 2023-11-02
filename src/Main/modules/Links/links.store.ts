import { defineStore } from "pinia";
import { Link } from "@/Main/models/Link";
import mockLinks from "./data/links.json";

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
    loadLinks(): void {
      this.links = mockLinks;
    },
  },
});
