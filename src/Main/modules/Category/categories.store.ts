import { Category } from "@/Main/models/Category";
import { defineStore } from "pinia";
import mockCategories from "./data/categories.json";

interface CategoryStore {
  categories: Category[];
}

const initState = (): CategoryStore => ({
  categories: [],
});

export const useCategoriesStore = defineStore("categoriesStore", {
  state: initState,
  actions: {
    loadCategories(): void {
      this.categories = mockCategories;
    },
    getCategoryById(categoryId: number): Category {
      return this.categories.find((c) => c.id === categoryId) as Category;
    },
  },
});
