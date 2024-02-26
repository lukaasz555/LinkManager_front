import { Category } from "@/Main/models/Category";
import { defineStore } from "pinia";
// import mockCategories from "./data/categories.json";
import { getCategories } from "./categories.service";

interface CategoryStore {
  categories: Category[];
}

const initState = (): CategoryStore => ({
  categories: [],
});

export const useCategoriesStore = defineStore("categoriesStore", {
  state: initState,
  actions: {
    async loadCategories(): Promise<void> {
      this.categories = await getCategories();
    },
    getCategoryById(categoryId: number): Category {
      return this.categories.find((c) => c.id === categoryId) as Category;
    },
  },
});
